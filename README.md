# Example Element

Example to demonstrate a custom element for the YOOtheme Pro builder. Add this to your child theme and use it as a starter for your own custom elements.

## Install

1. Create and activate a [child theme](http://yootheme.com/pro/docs/#/child-themes) for YOOtheme Pro.
2. Inside the child theme, place this folder, so that it is located at `yootheme-child/builder/pro-element`
3. In the Builder, add a new element and select the `Example Element`

## Files

- `index.php`: Defines the element and registers it so that the Builder knows about it
- `example_element_item.json`, `example_element.json`: Defines your custom element
- `example-element.js`: Defines your custom code (optional)
- `template.php`: Template that renders the element on your page
- `icon.svg`, `icon-small.svg`: Icons to display in the Builder

### Migration

- to migrate a legacy components definition (yootheme-pro <= 1.14.8) you can use `yarn migrate my-custom-element.js`

Used on the old example element [example-element.js](https://github.com/yootheme/example-element/blob/0a96a14fa01f7f2839866d401a89d60351b88212/example-element.js), the script would yield two json files named after the used element names [example_element.json](https://github.com/yootheme/example-element/blob/14facb382cefdddf69d6bfa57715a604f7aff305/example_element.json) and [example_element_item.json](https://github.com/yootheme/example-element/blob/14facb382cefdddf69d6bfa57715a604f7aff305/example_element_item.json) in your current working directory