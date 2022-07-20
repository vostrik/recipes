const path = require('path')

module.exports = {
  root: true,
  extends: 'standard-with-typescript',
  parserOptions: {
    project: path.join(__dirname, 'tsconfig.json')
  }
}
