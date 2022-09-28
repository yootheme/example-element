<?php

// Display
foreach (['title', 'content', 'image', 'link'] as $key) {
    if (!$element["show_{$key}"]) { $props[$key] = ''; }
}

// Item
$el = $this->el('div', [
    'class' => [
        'el-item uk-panel'
    ]
]);

// Title
$title = $this->el($element['title_element'], [
    'class' => [
        'el-title',
    ],
]);

// Content
$content = $this->el('div', [
    'class' => [
        'el-content uk-panel',
    ],
]);

$image = $this->el('image', [
    'class' => [
        'el-image',
    ],
    'src' => $props['image'],
    'alt' => $props['image_alt'],
    'loading' => $element['image_loading'] ? false : null,
    'width' => $element['image_width'],
    'height' => $element['image_height'],
    'focal_point' => $element['image_focal_point'],
    'thumbnail' => true,
]);

// Link
$link = $this->el('a', [
    'class' => [
        'el-link uk-button uk-button-default',
    ],
    'href' => $props['link'],
    'uk-scroll' => strpos($props['link'], '#') === 0,
]);

?>

<?= $el($element, $attrs) ?>

        <?php if ($props['image']) : ?>
        <?= $image($element, $props['image']) ?>
        <?php endif ?>

        <?php if ($props['title']) : ?>
        <?= $title($element, $props['title']) ?>
        <?php endif ?>

        <?php if ($props['content']) : ?>
        <?= $content($element, $props['content']) ?>
        <?php endif ?>

        <?php if ($props['link'] && $element['link_text']) : ?>
        <?= $link($element, $element['link_text']) ?>
        <?php endif ?>

<?= $el->end() ?>
