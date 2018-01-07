// Define a content item used in your element
Builder.types.example_element_item = {

    title: 'Item',

    mixins: [Builder.entity, Builder.element, Builder.item],

    params: function (params) {

        return {

            // Sidebar width
            width: 600,

            fields: {

                // Text (default, if type is not set)
                content: {
                    label: 'Content'
                },

                // Link (Using a field predefined in `yootheme/vendor/yootheme/theme/modules/builder/app/elements/params.js`)
                link: params.element.link,

                // Image (Using a field predefined in `yootheme/vendor/yootheme/theme/modules/builder/app/elements/params.js`)
                image: params.element.image,

                // Image
                image2: {
                    label: 'Image 2',
                    type: 'image'
                }
            }
        }
    },

    data: function () {
        // Return default values
        return {
            props: {
                // ...
            }
        };
    }
};


// Register the following element definition with the builder
Builder.types.pro_element = {

    // Label in the interface
    title: 'Example Element',

    // Icon in `New element` dialog
    icon: '{+$theme}_child/builder/example-element/icon.svg',

    // Icon in builder overview
    iconSmall: '{+$theme}_child/builder/example-element/icon-small.svg',

    // Show in `New element` dialog
    element: true,

    // Includes required functionality from the Builder
    mixins: [Builder.entity, Builder.element, Builder.container],

    // Set default values for fields
    data: function () {
        return {
            props: {
                field_select: 1
            }
        };
    },

    // A function that returns a JS object which is then used to render the interface
    // Params are the currently stored parameters for this element
    params: function (params) {

        // Just for easier access later on
        var element = params.element;

        return {

            width: 500,

            tabs: [

                // The 1st tab usually contains all fields to fill in the actual content
                {
                    'title': 'Content',
                    'fields': {

                        // Content items
                        field_content: {
                            label: 'Content Items',
                            type: 'content-items',
                            item: 'example_element_item',
                            title: 'content'
                        }

                    }
                },

                // The 2nd tab usually includes fields with settings HOW to display the content
                {
                    title: 'Settings',
                    fields: {

                        // Text (default, if type is not set), defines an input field
                        field_text: {
                            label: 'Text',
                            type: 'text'
                        },

                        // Select, defines an select box
                        field_select: {
                            label: 'Select',
                            description: 'Explanation that appears below the field',
                            type: 'select',
                            text: 'Field Text',
                            options: {
                                'Option 1': 0,
                                'Option 2': 1,
                                'Option 3': 2
                            }
                        },

                        // Number, numerical input field
                        field_number: {
                            label: 'Number',
                            type: 'number'
                        },

                        // Checkbox, defines a checkbox
                        field_checkbox: {
                            label: 'Checkbox',
                            description: 'Explanation that appears below the field',
                            type: 'checkbox',
                            text: 'Field Text'
                        },

                        // Radio, defines a group of radio buttons
                        field_radio: {
                            label: 'Radio',
                            type: 'radio',
                            name: 'radio_group',
                            options: {
                                'Option 1': 0,
                                'Option 2': 1,
                                'Option 3': 2
                            }
                        },

                        // Range, defines an input field for a numeric range
                        field_range: {
                            label: 'Range',
                            type: 'range',
                            attrs: {
                                min: 1,
                                max: 10,
                                step: 0.5
                            }
                        },

                        // Textarea, defines a plain textarea for multiple lines of text
                        field_textarea: {
                            label: 'Textarea',
                            type: 'textarea',
                            attrs: {
                                rows: 10,
                                placeholder: 'Enter text...'
                            }
                        },

                        // Editor, defines a visual AND code editor (depends on the settings in the CMS)
                        field_editor: {
                            label: 'Editor',
                            type: 'editor'
                        },

                        // Defines a code editor only
                        field_editor2: {
                            label: 'Code editor',
                            type: 'editor',
                            editor: 'code',
                            mode: 'css',
                            attrs: {
                                debounce: 500
                            }
                        },

                        // Image, defines an image picker using the media library
                        field_image: {
                            label: 'Image',
                            type: 'image'
                        },

                        // Video, defines a video picker using the media library
                        field_video: {
                            label: 'Video',
                            type: 'video'
                        },

                        // Link, defines a link picker
                        field_link: {
                            label: 'Link',
                            type: 'link'
                        },

                        // Color, defines a color picker
                        field_color: {
                            label: 'Color',
                            type: 'color'
                        },

                        // Font, defines a font picker
                        field_font: {
                            label: 'Font',
                            type: 'font'
                        },

                        // Icon, defines an icon picker for the UIkit icon library
                        field_icon: {
                            label: 'Icon',
                            type: 'icon'
                        },

                        // Location, defines an interactive map to pick a location
                        field_location: {
                            label: 'Location',
                            type: 'location'
                        },

                        // Menu, defines a menu picker using the CMS dialog
                        field_menu: {
                            label: 'Menu',
                            type: 'menu'
                        },

                        // Select-img, defines an image picker for a predefined set of images
                        field_select_img: {
                            label: 'Select-img',
                            title: 'Select an image',
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

                        // Select-icon, defines an icon picker for a predefined set of icons
                        field_select_icon: {
                            label: 'Select-icon',
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

                        // Grid, arrange any field types in a grid next to each other
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
                        }

                    }
                },

                // The 3rd tab usually contains the same fields that are rendered on the element container
                {
                    title: 'Advanced',
                    fields: {

                        // Using fields predefined in `yootheme/vendor/yootheme/theme/modules/builder/app/elements/params.js`
                        name: element.name,
                        id: element.id,
                        class: element.cls

                    }
                }
            ]
        }
    }

};