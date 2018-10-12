<?php

return [

    // Module name
    'name' => 'yootheme/example',

    // How this element is referenced inside the builder
    'builder' => 'example',

    // Render this element on the website
    'render' => function ($element) {
        return $this->app->view->render("{$this->path}/template.php", ['element' => $element]);
    },

    'events' => [

        'builder.init' => function ($elements, $builder) {
            $elements->set('example', json_decode(file_get_contents("{$this->path}/element.json"), true));
            $elements->set('example_item', json_decode(file_get_contents("{$this->path}/element_item.json"), true));
        }

    ],

    'config' => [

        'element' => true

    ]

];
