# Prevent the usage of sessionStorage and localStorage (forbid-browser-storage)

Please describe the origin of the rule here.


## Rule Details

This rule aims to...

The following patterns are considered warnings:

```js
/* eslint no-storage/no-browser-storage: 1 */
sessionStorage.setItem('foo', 'bar');
window.sessionStorage.setItem('foo', 'bar');

```

The following patterns are considered errors:

```js
/* eslint no-storage/no-browser-storage: 2 */
sessionStorage.setItem('foo', 'bar');
window.sessionStorage.setItem('foo', 'bar');

```

The following patterns are not warnings:

```js
/* eslint no-storage/no-browser-storage: 0 */
sessionStorage.setItem('foo', 'bar');
window.sessionStorage.setItem('foo', 'bar');
sessionStorage.getItem('foo');

```

### Options

If there are any options, describe them here. Otherwise, delete this section.

## When Not To Use It

If the project uses localStorage/sessionStorage extensively then disable the rule completely.
```js
"no-storage/no-browser-storage": 0
```

## Further Reading

If there are other links that describe the issue this rule addresses, please include them here in a bulleted list.
