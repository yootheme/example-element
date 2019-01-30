<?php

return [

    // Define transforms for the element node
    'transforms' => [

        // The function is executed before the template is rendered
        'render' => function ($node, array $params) {

            // Element object (stdClass)
            $node->type; // Type name (string)
            $node->props; // Field properties (array)
            $node->children; // All children (array)

            // Parameter array
            $params['path']; // All parent elements (array)
            $params['parent']; // Parent element (stdClass)
            $params['builder']; // Builder instance (YOOtheme\Builder)
            $params['type']; // Element definition (YOOtheme\Builder\ElementType)
            $params['app']; // Application instance (YOOtheme\Application)

        },

    ],

    // Define updates for the element node
    'updates' => [

        '1.18.0' => function ($node, array $params) {

            // Remove or modify deprecated properties
            unset($node->props['deprecated_prop']);

        },

    ],

];
