# ESLint in Monorepo
Lint Typescript / JavaScript code in Monorepo

1. Create initial folder structure
    1. sample libraries (npm packages)
        - `packages/ui-kit`
        - `packages/constants`
    2. sample application 
        - `apps/app`
    ```
    .
    ├── apps
    │   └── app
    └── packages
        ├── ui-kit
        └── constants
    ```
    
1. Init NPM packages in the `ROOT` of our Monorepo and in the each of our sample folders
    ```
    npm init
    ```
1. Add sample `.ts` files to the `ROOT` and nested `packages/ui-kit`, `packages/constants` and `apps/app` folders with the same content
    ```typescript
    export const foo = 'bar'
    ```
1. On this step you should get the next file structure
    ``` 
    .
    ├── apps
    │   └── app
    │       ├── index.ts
    │       └── package.json
    └── packages
        ├── ui-kit
        │   ├── index.ts
        │   └── package.json
        └── constants
            ├── index.ts
            └── package.json
    ```
1. Add to the `ROOT` folder required dependencies and config files
    1. Add `TypeScript` and it`s recommended config to dependencies
        ```
        npm install --save-dev \
          typescript \
          @tsconfig/recommended
        ```
    1. Add `tsconfig.json` file
        ```json
        {
          "extends": "@tsconfig/recommended/tsconfig.json"
        }
        ```
    1. Add `ESLint` and it`s [Standard](https://standardjs.com/) config with Typescript support
        ```
        npm install --save-dev \
          eslint \
          eslint-plugin-promise \
          eslint-plugin-import \
          eslint-plugin-n \
          @typescript-eslint/eslint-plugin \
          eslint-config-standard-with-typescript
        ```
    1. Add `.eslintrc.js` file
        ```javascript
        const path = require('path')

        module.exports = {
          root: true,
          extends: 'standard-with-typescript',
          parserOptions: {
            project: path.join(__dirname, 'tsconfig.json')
          }
        }
        ```
    1. Add `lint` script to the `package.json` file
        ```json
        "scripts": {
          "lint": "eslint ."
        }
        ```
1. Extend config in nested folders
    1. Add `apps/app/.eslintrc.js` file to extend common rules
        ```javascript
        module.exports = {
          extends: '../../.eslintrc.js',
          rules: {
            'no-console': 2
          }
        }
        ```
1. How to lint?
    1. To lint the whole monorepo
        ```
        npm run lint
        ```
    2. To lint specific directory
        ```
        npm eslint .
        ```
    3. [TBD] staged changes on commit
    4. [TBD] staged changes on CI
1. That`s it!