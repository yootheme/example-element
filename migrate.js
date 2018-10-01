const fs = require('fs');
const path = require('path');
const {size, concat, assign, pick, get, map, isObject, some, cloneDeep, mapValues, isUndefined, pickBy, forEach, omit, difference, isFunction} = require('lodash');

const params = {
    _image_dimension: {
        type: 'grid',
        description: 'Setting just one value preserves the original proportions. The image will be resized and cropped automatically, and where possible, high resolution images will be auto-generated.',
        fields: {

            image_width: {
                label: 'Width',
                width: '1-2',
                attrs: {
                    placeholder: 'auto',
                    lazy: true
                },
                enable: ({image}) => image
            },

            image_height: {
                label: 'Height',
                width: '1-2',
                attrs: {
                    placeholder: 'auto',
                    lazy: true
                },
                enable: ({image}) => image
            }

        }
    }
};

function reOrderObject(obj, order, graceful = true) {

    const orderedObj = {};
    const origKeys = Object.keys(obj);

    if (graceful) {
        order = concat(order, difference(origKeys, order));
    } else if (origKeys.length !== order.keys) {
        throw "order array must conatin equal amount of keys"
    }

    forEach(order, key => orderedObj[key] = obj[key]);

    return orderedObj;
}

const rawTransformations = {
    '{+$theme}': '${THEME}',
    '{+$builder}/row/assets/images/': '$ASSETS/images/row/',
    '$app.config.google_maps': 'this.$root.Config.values.google_maps'

};

const mixinMap = {
    entity: '',
    element: '',
    item: '',
    container: 'container',
};

const panelOrder = [
    'name',
    'title',
    'icon',
    'iconSmall',
    'element',
    'container',
    'mixins',
    'width',
    'defaults',
    'tabs',
    'groups',
    'fields',
    'fieldset',
    'panels',
];

const fieldPropOrder = [
    'label',
    'description',

    'name',
    'type',

    'default',

    'alpha',
    'root',
    'panel',
    'title',
    'button',
    'text',
    'editor',
    'mode',
    'attrs',
    'divider',
    'item',
    'options',
    'style',
    'width',
    'filePicker',
    'provider',

    'enable',
    'show',

    'fields'
];

const fieldsToInline = {'_IMAGE_DIMENSION': params._image_dimension};

const elemenetParamProxy = new Proxy({}, {
    get(data, key) {
        const newName = key.toUpperCase();
        if (fieldsToInline[newName]) {
            return cloneDeep(fieldsToInline[newName]);
        } else {
            return '${' + newName + '}'; //'element.' + key;
        }
    }
});

const paramsProxy = new Proxy({}, {
    get(data, key) {
        if (key !== 'element') {
            throw 'params accesing unexpected key: ' + key;
        }
        return elemenetParamProxy;
    }
});

const debugLog = x => x;

function inlineFunction(option) {

    const rawString = option.toString();
    const es6 = rawString.includes('=>');
    if (es6) {
        return rawString.split(' => ')[1].trim();
    } else {

        const tokens = rawString.split('\n');
        const returnLine = tokens[tokens.length - 2];
        tokens.forEach((line, no) => {
            if (no > 0 && no < tokens.length - 2 && line.indexOf(' = _ref') < 0) {
                throw 'what is this line doing?';
            }
        });
        return returnLine.replace('return', '').replace(';', '').trim();
    }
}

function cleanupField(field, fieldName, element) {

    ['enable', 'show'].forEach(funKey => {
        const fun = field[funKey];
        if (fun) {
            if (!isFunction(fun)) throw `enabled/show should be function in : ${element.name} : ${fieldName}`;

            field[funKey] = inlineFunction(fun);
        }
    });

    if (field.attrs && field.attrs.lazy) {
        delete field.attrs.lazy;
    }

    if (field.type === 'select') {

        const def = get(element, 'defaults.' + fieldName);
        const defaultInline = field.default;

        if (isUndefined(def) && isUndefined(defaultInline)) {
            const test = 'select boxes need default values:' + fieldName + ':' + element.name;
            console.warn(test);
        }
    }

    return reOrderObject(field, fieldPropOrder);
}

function cleanupFields(panel, element) {
    forEach(panel.fields, (field, fieldName) => {
        if (isObject(field)) {
            panel.fields[fieldName] = cleanupField(field, fieldName, element);
        }
    });
}

function mergeFieldsRecursively(fieldsToMerge, targetFields, element) {

    const fields = [];
    forEach(fieldsToMerge, (field, key) => {

        if (isObject(field) && some(field, (prop, name) => !fieldPropOrder.includes(name))) {
            debugLog(omit(field, fieldPropOrder));
        }

        if (['group', 'grid'].includes(field.type)) {

            const widths = {};
            forEach(field.fields, field =>
                forEach(field, (val, key) => {
                    if (key === 'width') {
                        widths[val] = true;
                        delete field.width;
                    }
                })
            );

            if (!field.name && !field.label) {
                field.name = key;
            }

            if (field.type === 'grid' && field.style) {

                if (field.style !== 'group') {
                    throw 'unexpected style';
                }

                debugLog('style delete');
                delete field.style;
            }

            const finalWidths = Object.keys(widths);
            if (finalWidths.length === 1) {
                field.width = finalWidths[0];
                debugLog({width: field.width});
            } else if (finalWidths.length > 1) {
                throw 'unexpected width';
            }

            field = cleanupField(field, key, element);

            field.fields = mergeFieldsRecursively(field.fields, targetFields, element);
            fields.push(field);

        } else if (targetFields[key]) {

            throw 'double field:' + key;

        } else {

            fields.push(key);
            targetFields[key] = field;
        }

    });

    return fields;

}

function collectMixins(panel) {
    const res = {};
    forEach(panel.mixins, key => {

        if (isObject(key)) {
            const name = key.__file.split('.')[0].toLowerCase();
            key = mixinMap[name];
        }
        if (key) {
            res[key] = true;
        }
    });

    res.element = panel.element;

    return res;
}

function processPanel(panel, element) {

    if (!panel) {
        return
    }

    const newPanel = {
        title: panel.title || element.title,
        width: panel.width,
        fields: {},
        fieldset: {}
    };

    if (panel.tabs) {

        newPanel.fieldset.default = {

            type: 'tabs',
            fields: map(panel.tabs, tab => ({
                ...tab,
                fields: mergeFieldsRecursively(tab.fields, newPanel.fields, element)
            }))
        };
    } else if (panel.fields) {
        newPanel.fieldset.default = {
            fields: mergeFieldsRecursively(panel.fields, newPanel.fields, element)
        }
    }

    if (panel.panels) {
        newPanel.panels = mapValues(panel.panels, panel => processPanel(panel, element));
    }

    cleanupFields(newPanel, element);

    return newPanel;
}

function evaluateComponent(component, name = null) {

    const data = component.data && component.data(); // get defaults

    const element = {
        name,
        ...pick(component, ['title', 'name', 'icon', 'iconSmall']),
        ...collectMixins(component),
        defaults: data && data.props
    };

    if (!size(element.defaults)) {
        delete element.defaults;
    }

    const params = component.params;
    const panel = isFunction(params) && params(paramsProxy) || isObject(params) && params;

    if (panel.width) {
        element.width = panel.width;
    }

    element.name = element.name.replace(new RegExp('-', 'g'), '_');

    const finalPanel = processPanel(panel, element);

    assign(element, finalPanel);

    const finalObject = reOrderObject(pickBy(element, value => !isUndefined(value)), panelOrder);

    let rawString = JSON.stringify(finalObject);
    forEach(rawTransformations, (to, from) => {
        rawString = rawString.split(from).join(to);
    });
    return JSON.parse(rawString);
}

function convertElement(compnentDefinitionString) {

    const context = {
        Builder: {
            ...mixinMap,
            types: {}
        }
    };

    (new Function('context', `with (context) { ${compnentDefinitionString} }`))(context);

    return mapValues(context.Builder.types, evaluateComponent);

}


let file = process.argv[2];

if (!path.isAbsolute(file)) {
    file = path.join(process.cwd(), file);
}

const source = fs.readFileSync(file, 'utf8');

const elements = convertElement(source);

forEach(elements, (el, name) => {
    fs.writeFileSync(path.join(process.cwd(), `${name}.json`), JSON.stringify(el, null, 2));
});
