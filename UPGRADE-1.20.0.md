# Upgrade to 1.20.x

## Config

- Resolving the url to the element folder with `$config->get('url:')` is no longer available. Use `$file['dirname']` instead to get the path to the element folder.
- Loading field configuration now uses the dot notation. For example loading the position field from the Builder configuration changed from `${builder:position}` to `${builder.position}`
