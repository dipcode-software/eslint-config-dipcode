# Dipcode ESLint config

> Shareable ESLint config for Dipcode.

- [Usage](#usage)
- [Links](#links)

## Usage

The package provides Dipcode's `.eslintrc` as an extensible shared config.

Install the config

```sh
npm install --save-dev @dipcode/eslint-config
```

Then configure eslint to use the configuration.

### For JavaScript projects

`.eslintrc.json`

```json
{
  "root": true,
  "extends": "@dipcode/eslint-config"
}
```

### For TypeScript projects

`.eslintrc.json`

```json
{
  "root": true,
  "extends": "@dipcode/eslint-config/typescript"
}
```

## Links

- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [typescript-eslint](https://typescript-eslint.io/getting-started/)
- [eslint-plugin-jsdoc](https://www.npmjs.com/package/eslint-plugin-jsdoc)
- [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)
- [eslint-plugin-promise](https://www.npmjs.com/package/eslint-plugin-promise)
