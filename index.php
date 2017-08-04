<?php

return [

    // module name
    'name' => 'yootheme/pro-element',

    // how this element is referenced inside the builder
    'builder' => 'pro_element',

    // render this element on the website
    'render' => function ($element) {
        return $this->app->view->render(__DIR__.'/template.php', ['element' => $element]);
    },

    'events' => [

        'theme.admin' => function () {
            // load the JavaScript that creates the form elements in the builder
            $this->app->scripts->add('builder-pro-element', __DIR__.'/pro-element.js', 'customizer-builder');
        }

    ],

    'config' => [

        'element' => true

    ]

];
