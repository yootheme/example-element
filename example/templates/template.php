<?php

$el = $this->el('div', [

    'class' => [
        'example-element'
    ]

]);

?>

<?= $el($props, $attrs) ?>

    <?php // render node title field by using $props['title'] ?>
    <h1><?= $props['title'] ?></h1>

    <?php // render node select field by using $props['select'] ?>
    <p>Option: <?= $props['select'] ?></p>

    <ul>
        <?php // render children and pass $props as $element to every child node ?>
        <?php foreach ($children as $child) : ?>
        <li><?= $builder->render($child, ['element' => $props]) ?></li>
        <?php endforeach ?>
    </ul>

</div>
