# eslint-config-szh-react
eslint configuration

1. Extends: `eslint-config-airbnb` `plugin:fp/recommended` `eslint-config-szh`
2. Plugins: `eslint-plugin-fp`

Some rules are being overridden.

Install with `peerDependencies`:

```sh
yarn add eslint eslint-config-szh-react -DE
```

Add to package.json:

```json
"eslintConfig": {
  "extends": "szh-react"
}
```
