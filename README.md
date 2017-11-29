# ESLint Configuration

**Oleous ESLint Configuration**

[![CircleCI](https://circleci.com/gh/oleous/eslint-config/tree/master.svg?style=svg)](https://circleci.com/gh/oleous/eslint-config/tree/master)

## Install

Recommended to pin a specific version. Full list available [here](https://github.com/oleous/eslint-config-oleous/releases).

```shell
npm install oleous/eslint-config-oleous#x.x.x -DE
```

This will automatically add the following to your package.json.

```json
"devDependencies": {
  "eslint-config-oleous": "oleous/eslint-config-oleous.git#x.x.x",
}
```

Make sure you have eslint installed in your project as this is a peer dependency of eslint-config-oleous.

```json
"devDependencies": {
  "eslint": "x.x.x"
}
```

## Configure eslint

Create a file called `.eslintrc.json` and put the following in it:

```json
{
  "extends": [
    "oleous"
  ]
}
```

## Running eslint

Add a script like the following to your package.json.

```json
"scripts": {
  "lint": "eslint 'src/js/'",
}
```

It's recommended to then run this in your test script e.g.

```json
{
  "scripts": {
    "test": "npm run lint && npm run tests",
  }
}
```

## Releases

If changes have been made to eslint-config, please increment the relevant version number.

You'll also need to create a new release on GitHub with a matching version number.

1. Incrementing the major version number should never be necessary.

1. Increment the minor version number if new rules are added, or rules are changed that will break repositories using the existing configuration.

1. Increment the patch number if a small change is made to a rule (e.g. because it was not configured correctly).
