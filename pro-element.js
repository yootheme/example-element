// Define a content item used in your element
Builder.types.custom_content_item = {

    title: 'Custom content element',

    mixins: [Builder.entity, Builder.element, Builder.item],

    params: function (params) {

        return {

            // sidebar width
            width: 600,

            fields: {

                // text element / default type: "text"
                content: {
                    label: 'Content'
                },

                // link picker, using predefined field
                link: params.element.link,

                // image picker, using predefined field
                image: params.element.image,

                // image picker, using self-defined field
                image2: {
                    label: 'Image 2',
                    type: 'image'
                }
            }
        }
    },

    data: function () {
        // return default values
        return {
            props: {
                // ...
            }
        };
    }
};


// register the following element definition with the builder
Builder.types.pro_element = {

    // label in the interface
    title: 'Custom Element',

    // icon in "new element" dialog
    icon: '{+$theme}-child/builder/pro-element/icon.svg',

    // icon in builder overview
    iconSmall: '{+$theme}-child/builder/pro-element/icon-small.svg',

    // Show in "new element" dialog
    element: true,

    // includes required functionality from the Builder
    mixins: [Builder.entity, Builder.element, Builder.container],

    // Set default values for fields
    data: function () {
        return {
            props: {
                field_select: 1
            }
        };
    },

    // a function that returns a JS object which is then used to render the interface
    // params are the currently stored parameters for this element
    params: function (params) {

        var element = params.element; // just for easier access later on

        return {

            width: 500,

            tabs: [

                // the 1st tab usually contains all fields to fill in the actual content
                {
                    'title': 'Content',
                    'fields': {

                        // custom content items.
                        field_content: {
                            label: 'Custom content items',
                            type: 'content-items',
                            item: 'custom_content_item',
                            title: 'content',
                            button: 'Add Custom content item'
                        },

                        // checkbox, defines a boolean field
                        field_checkbox: {
                            type: 'checkbox',
                            label: 'Field two label',
                            description: 'Explanation that appears below the field',
                            text: 'Field Text'
                        },

                        // select, defines an int or string field
                        field_select: {
                            type: 'select',
                            label: 'Field three label',
                            description: 'Explanation that appears below the field',
                            text: 'Field Text',
                            options: {
                                'Option 1': 0,
                                'Option 2': 1,
                                'Option 3': 2
                            }
                        },

                        // text (default, if type is not set), defines a text field
                        field_text: {
                            type: 'text',
                            label: 'Field text'
                        },

                        // number, numerical input field
                        field_number: {
                            type: 'number',
                            label: 'Field number'
                        },

                        // a group of radio buttons
                        field_radio: {
                            label: 'Field radio',
                            type: 'radio',
                            name: 'radio_group',
                            options: {
                                'Option 1': 0,
                                'Option 2': 1,
                                'Option 3': 2
                            }
                        },

                        // A plain textarea for multiple lines of text
                        field_textarea: {
                            label: 'Field textarea',
                            type: 'textarea',
                            attrs: {
                                rows: 10,
                                placeholder: 'Enter text...'
                            }
                        },

                        // To input a numeric range
                        field_range: {
                            type: 'range',
                            label: 'Field range',
                            attrs: {
                                min: 1,
                                max: 10,
                                step: 0.5
                            }
                        },

                        // Visual AND code editor (if tinymce is loaded by the CMS)
                        field_editor: {
                            label: 'Field editor',
                            type: 'editor'
                        },

                        // Code editor only
                        field_editor2: {
                            type: 'editor',
                            label: 'CSS editor',
                            editor: 'code',
                            mode: 'css',
                            attrs: {
                                debounce: 500
                            }
                        },

                        // pick image from media library
                        field_image: {
                            label: 'Field image',
                            type: 'image'
                        },

                        // pick video from media library
                        field_video: {
                            label: 'Field video',
                            type: 'video'
                        },

                        // a visual color picker
                        field_color: {
                            label: 'Field color',
                            type: 'color'
                        },

                        // pick system and google webfonts
                        field_font: {
                            label: 'Field font',
                            type: 'font'
                        },

                        // pick an icon from the UIkit icon library
                        field_icon: {
                            label: 'Field icon',
                            type: 'icon'
                        },

                        // pick a location from an interactive map
                        field_location: {
                            label: 'Field location',
                            type: 'location'
                        },

                        // pick a menu from a CMS dialog
                        field_menu: {
                            label: 'Field menu',
                            type: 'menu'
                        },

                        // enter link manually or pick a link from a CMS dialog
                        field_link: {
                            label: 'Field link',
                            type: 'link'
                        },

                        // pick one out of multiple images
                        field_select_img: {
                            label: 'Field select-img',
                            title: 'Select a grid layout',
                            type: 'select-img',
                            default: '1-1',
                            options: {
                                '1-1': {
                                    label: 'Whole',
                                    src: '{+$builder}/row/assets/images/whole.svg'
                                },
                                '1-2': {
                                    label: 'Halves',
                                    src: '{+$builder}/row/assets/images/halves.svg'
                                },
                                '1-3': {
                                    label: 'Thirds',
                                    src: '{+$builder}/row/assets/images/thirds.svg'
                                }
                            }
                        },

                        // select one out of multiple icons
                        field_select_icon: {
                            label: 'Field select-icon',
                            type: 'select-icon',
                            options: {
                                '': {
                                    'label': 'Always',
                                    'icon': 'phone',
                                },
                                's': {
                                    'label': 'Small (Phone Landscape)',
                                    'icon': 'phone-landscape',
                                },
                                'm': {
                                    'label': 'Medium (Tablet Landscape)',
                                    'icon': 'tablet-landscape',
                                },
                                'l': {
                                    'label': 'Large (Desktop)',
                                    'icon': 'laptop',
                                },
                                'xl': {
                                    'label': 'X-Large (Large Screens)',
                                    'icon': 'desktop',
                                },

                            }
                        },

                        // arrange any field types in a grid next to each other
                        field_grid: {
                            type: 'grid',
                            fields: {
                                field_grid_one: {
                                    label: 'Text 1',
                                    width: '1-2'
                                },
                                field_grid_two: {
                                    label: 'Text 2',
                                    width: '1-2'
                                }
                            }
                        },

                    }
                },

                // the 2nd tab usually includes fields with settings HOW to display the content
                {
                    title: 'Settings',
                    fields: {
                        // ...
                    }
                },

                // the 3rd tab usually contains the same fields that are rendered on the element container
                {
                    title: 'Advanced',
                    fields: {

                        name: element.name,
                        id: element.id,
                        class: element.cls

                    }
                }
            ]
        }
    }

};