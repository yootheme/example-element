# Example Element

This is an example element for the YOOtheme Pro page builder. Add it to your child theme and use it as a starter for your own custom elements. There is an comprehensive documentation available on how to [create a custom element](https://yootheme.com/support/yootheme-pro/joomla/custom-elements).

## Install

### Joomla

1. Create and activate a [child theme](https://yootheme.com/support/yootheme-pro/joomla/child-themes) for YOOtheme Pro.
2. Create a folder `/builder` in the child theme and copy the two element folders to `/builder/example` and `/builder/example_item`.
3. Go to Joomla and open the YOOtheme Pro page builder. Add a new element and select the *Example Element*.

### WordPress

1. Create and activate a [child theme](https://yootheme.com/support/yootheme-pro/wordpress/child-themes) for YOOtheme Pro.
2. Create a folder `/builder` in the child theme and copy the two element folders to `/builder/example` and `/builder/example_item`.
3. Go to Theme/Customize and open the YOOtheme Pro page builder. Add a new element and select the *Example Element*.

## Files

| File                     | Description                                    |
| ------------------------ | ---------------------------------------------- |
| `element.json`           | Defines the element configuration and settings |
| `element.php`            | Extends the element functionality (optional)   |
| `templates/content.php`  | Renders the markup which is saved in the page. It's used by the system search and the markup which is left behind when uninstalling YOOtheme Pro.|
| `templates/template.php` | Renders the markup which is served to the client |

| `images/icon.svg`        | The icon shown in the element picker           |
| `images/iconSmall.svg`   | The icon shown in the builder layout overview  |

## Templating

Here is a overview of the variables which are available when rendering an element node in your templates.

| Variable    | Description                                                               |
| ----------- | ------------------------------------------------------------------------- |
| `$node`     | The element node *(stdClass)*                                             |
| `$props`    | The element properties ($node->props)  set using the fields *(array)*     |
| `$children` | The element children ($node->children) like content items *(array)*       |
| `$builder`  | The current builder instance used to render children *(YOOtheme\Builder)* |

## Migration

The first step to upgrade a custom element is to update the file structure of your element. This shows the old and new file structure of our example element. Note: each element has now its own folder, so for our example element we have `/example` and `/example_item`.

| Old File                    | New File                              |
| --------------------------- | ------------------------------------- |
| `example/index.php`         | *Delete index.php file*               |
| `example/element.json`      | `example/element.json`                |
| *Create content.php file*   | `example/templates/content.php`       |
| `example/template.php`      | `example/templates/template.php`      |
| `example/icon.svg`          | `example/images/icon.svg`             |
| `example/icon-small.svg`    | `example/images/iconSmall.svg`        |
| `example/element_item.json` | `example_item/element.json`           |
| *Create content.php file*   | `example_item/templates/content.php`  |
| *Create template.php file*  | `example_item/templates/template.php` |

### Configuration

Update your `element.json` configuration file and define your icons and templates. The icon urls and template files will be resolved relative to the element folder. Optionally import a `element.php` file for transforms and update callbacks. The file is allows you to define custom code so you can extend or modify your element node before its is rendered. It is used to separate any custom logic from your templates.

```js
{
    // Define icons
    "icon": "${url:images/icon.svg}",
    "iconSmall": "${url:images/iconSmall.svg}",

    // Define templates for "render" and "content" context
    "templates": {
        "render": "./templates/template.php",
        "content": "./templates/content.php"
    },

    // Import "element.php" for element transforms or updates (optional)
    "@import": "./element.php"

    ...
}
```

### Templates

The templates need to be updated in order to use the different variables to render a element. Until now the variable `$element` was used to access field properties or to iterate the children. Instead of using `$element['field_name']` to access a property you will now use `$props['field_name']`. Please refer to the [templating section](#templating) for all available variables.
