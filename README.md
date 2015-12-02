# ESLint Configuration [![Circle CI](https://circleci.com/gh/oleous/eslint-config.svg?style=svg)](https://circleci.com/gh/oleous/eslint-config)

## Install

If there's a suitable version of eslint-config, include the eslint-config in your package.json.
Recommended to pin a specific version.

```json
"devDependencies": {
  "eslint-config": "git://github.com/oleous/eslint-config.git#1.0.0",
}
```

You'll also need to include eslint & any other plugins that are needed in your package.json.
You can find out suitable versions from eslint-config's package.json.

```json
"devDependencies": {
  "eslint": "=1.5.1",
  "eslint-plugin-react": "=3.5.0"
}
```

## Running eslint

Add a script like the following to your package.json (-c defines the config location).

```json
"scripts": {
  "eslint": "eslint -c node_modules/eslint-config/.eslintrc 'src/js/'",
}
```

It's recommended to then run this in your test script e.g.

```json
"scripts": {
  "test": "npm run eslint && npm run jest",
}
```

## Releases

If changes have been made to eslint-config, please increment the relevant version number.

You'll also need to create a new release on GitHub with a matching version number.

1. Incrementing the major version number should never be necessary.

1. Increment the minor version number if new rules are added, or rules are changed that will break repositories using the existing configuration.

1. Increment the patch number if a small change is made to a rule (e.g. because it was not configured correctly).
