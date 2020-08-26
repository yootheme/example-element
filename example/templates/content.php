<?php if (count($children) > 1) : ?>
<ul>
    <?php foreach ($children as $child) : ?>
    <li>

        <?= $builder->render($child, ['element' => $props]) ?>

    </li>
    <?php endforeach ?>
</ul>
<?php elseif (count($children) == 1) : ?>
<div>

    <?= $builder->render($children[0], ['element' => $props]) ?>

</div>
<?php endif ?>
