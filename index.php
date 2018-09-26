<?php

return [

    // Module name
    'name' => 'yootheme/example-element',

    // How this element is referenced inside the builder
    'builder' => 'example_element',

    // Render this element on the website
    'render' => function ($element) {
        return $this->app->view->render("{$this->path}/template.php", ['element' => $element]);
    },

    'events' => [

        'builder.init' => function ($elements, $builder) {
            $elements->set('example_element', json_decode(file_get_contents("{$this->path}/example_element.json"), true));
            $elements->set('example_element_item', json_decode(file_get_contents("{$this->path}/example_element_item.json"), true));
        }

    ],

    'config' => [

        'element' => true

    ]

];
