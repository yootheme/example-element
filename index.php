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

        'theme.admin' => function () {
            // Load the JavaScript that creates the elements settings in the builder
            $this->app->scripts->add('builder-example-element', "{$this->path}/example-element.js", 'customizer-builder');
        }

    ],

    'config' => [

        'element' => true

    ]

];
