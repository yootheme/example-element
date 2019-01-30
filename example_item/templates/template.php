<?php

$el = $this->el('div', [

    'class' => [
        'example-item'
    ]

]);

// use props from the parent element node
$element;

?>

<?= $el($props, $attrs) ?>

    <h1>Example Item</h1>
    <p><?= $props['content'] ?></p>
    <img src="<?= $props['image'] ?>">

</div>
