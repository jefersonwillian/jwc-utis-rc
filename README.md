# Useful functions for Brazilian formatting

## Installation

```shell
npm i jwc-utis-rc
```
or
```shell
yarn add jwc-utis-rc
```

## Usage
### Function to format zip code

- formatCep(valeu): This function will format a zip code
```js
const { formatCep } = require("jwc-utis-rc");

formatCep(18125333) // 18125-333
```

### Function to format CPF
- formatCPF(valeu): This function will format a CPF
```js
const { formatCPF } = require("jwc-utis-rc");

formatCPF(73513527209) // 735.135.272-09
```