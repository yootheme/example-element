# Example Element

This is an example element for the YOOtheme Pro page builder. Add it to your child theme and use it as a starter for your own custom elements.

## Install

### Joomla

1. Create and activate a [child theme](https://yootheme.com/support/yootheme-pro/joomla/child-themes) for YOOtheme Pro.
2. Create a folder `example` inside the child theme, so that it is located at `yootheme_child/builder/example`
3. Go to Joomla and open the YOOtheme Pro page builder. Add a new element and select the `Example` element.

### Joomla

1. Create and activate a [child theme](https://yootheme.com/support/yootheme-pro/wordpress/child-themes) for YOOtheme Pro.
2. Create a folder `example` inside the child theme, so that it is located at `yootheme-child/builder/example`
3. Go to Joomla and open the YOOtheme Pro page builder. Add a new element and select the `Example` element.

## Files

- `index.php`: Define the element and register it in the page builder
- `element.json`, `element_item.json`: Define all settings of the element
- `element.js`: Add custom JavaScript (optional)
- `template.php`: Render the element on your page
- `icon.svg`, `icon-small.svg`: Add the icons, which are shown in the page builder

## Migration

To migrate a legacy component definition you can use our migration tool. First install dependencies with `yarn`, then run `yarn migrate my-custom-element.js`

Used on the old example element [example-element.js](https://github.com/yootheme/example-element/blob/0a96a14fa01f7f2839866d401a89d60351b88212/example-element.js) (`yarn migrate example-element.js`), the script would emit two json files named after the used element names [element.json](https://github.com/yootheme/example-element/blob/14facb382cefdddf69d6bfa57715a604f7aff305/element.json) and [element_item.json](https://github.com/yootheme/example-element/blob/14facb382cefdddf69d6bfa57715a604f7aff305/element_item.json) in your current working directory
