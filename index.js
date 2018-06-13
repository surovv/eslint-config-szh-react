module.exports = {
  'plugins': ['react'],
  'extends': ['eslint-config-airbnb', 'standard-react', 'szh'],
  'parser': 'babel-eslint',
  'env': {
    'es6': true,
    'browser': true,
    'node': true,
  },
  'parserOptions': {
    'ecmaVersion': 7,
    'sourceType': 'module',
  },
  'parserOptions': {
    'ecmaFeatures': {
      'spread': true,
      'experimentalObjectRestSpread': true,
      'jsx': true,
    }
  },
  'rules': {
    'fp/no-class': 0,
    'fp/no-this': 0,
    'fp/no-mutation': ['error', {
      'allowThis': true,
      'exceptions': [
        {'property': 'propTypes'},
        {'property': 'defaultProps'},
      ],
    }],

    'react/prop-types': 1,
    'react/no-unused-prop-types': 1,
    'react/sort-comp': 0,
    'react/jsx-filename-extension': [1, {'extensions': ['.js']}],
    'react/jsx-max-props-per-line': 0,
    'react/jsx-first-prop-new-line': 0,
    'react/jsx-closing-bracket-location': 0,
    'react/jsx-closing-tag-location': 0,
    'react/no-string-refs': 0,
    'react/no-unescaped-entities': 0,
    'react/forbid-prop-types': 0,
    'react/require-default-props': 0,

    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
  },
};
