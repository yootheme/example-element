<?php

// Element
$el = $this->el('div', [
    'class' => [
        'example-element'
    ]
]);

// Grid
$grid = $this->el('ul', [
    'class' => [
        'uk-child-width-1-{grid_columns}',
    ],
    'uk-grid' => true,
]);

?>

<?= $el($props, $attrs) ?>

    <?= $grid($props) ?>
        <?php foreach ($children as $child) : ?>
        <li><?= $builder->render($child, ['element' => $props]) ?></li>
        <?php endforeach ?>
    <?= $grid->end() ?>

</div>
