// define your own custom code

const Vue = require('vue');
const example_element = require('./example_element.json');
const example_element_item = require('./example_element_item.json');

// add element on initBuilder event
Vue.events.on('initBuilder', (e, elements) => {
    elements.example_element = example_element;
    elements.example_element_item = example_element_item;
});
