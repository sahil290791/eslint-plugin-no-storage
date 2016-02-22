# eslint-plugin-no-storage

A plugin to forbid the usage of sessionStorage and localStorage

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-no-storage`:

```
$ npm install eslint-plugin-no-storage --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-no-storage` globally.

## Usage

Add `no-storage` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "no-storage"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "no-storage/no-browser-storage": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





