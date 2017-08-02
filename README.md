# pro-element

Example to demonstrate a custom element for the YOOtheme builder. Add this to your child theme and use it as a starter for your own custom elements.

## Install

1. Create and activate a [child theme](http://yootheme.com/pro/docs/#/child-themes) for YOOtheme Pro.
2. Inside the child theme, place this folder, so that it is located at `yootheme-child/builder/pro-element`
3. In the Builder, add a new element and select the "Custom Element"

## Files

- `index.php`: Defines the element and registers it so that the Builder knows about it
- `pro-element.js`: Defines all fields for the custom element
- `template.php`: Template that renders the element on your page
- `icon.svg`, `icon-small.svg`: Icons to display in the Builder