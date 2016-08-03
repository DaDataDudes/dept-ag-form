module.exports = {
  'extends': 'airbnb',
  'ecmaFeatures': {
    'sourceType': 'module',
    'jsx': true,
    'modules': true,
    'experimentalObjectRestSpread': true
  },
  'env': {
    'browser': true,
    'mocha': true,
    'es6': true,
    'node': true
  },
  'parser': 'babel-eslint',
  'parserOptions': {
    'sourceType': 'module'
  },
  'plugins': [
  ],
  'globals': {
    'CONFIG': true,
    'NODE_ENV': true,
  },
  'rules': {
    'strict': 0,
    'arrow-body-style': [ 0 ],
    'comma-dangle': [ 2, 'never' ],
    'computed-property-spacing': [ 2, 'always' ],
    'eqeqeq': [ 2, 'smart' ],
    'indent': [ 2, 2, { 'VariableDeclarator': 2 } ],
    'import/no-unresolved': [ 2, { "ignore": ["^meteor/", "imports/", "client/", "server/"] } ],
    'linebreak-style': [ 2, 'unix' ],
    'no-console': [ 0 ],
    'no-underscore-dangle': [ 0 ],
    'no-unneeded-ternary': [ 2 ],
    'no-underscore-dangle': [ 0 ],
    'object-curly-spacing': [ 2, 'always' ],
    'quotes': [ 2, 'single' ],
    'semi': [ 2, 'always' ],
    'space-infix-ops': [ 2 ]
  }
};
