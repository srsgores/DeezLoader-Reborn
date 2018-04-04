module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  plugins: [
    'ember'
  ],
  extends: [
    'eslint:recommended',
    'plugin:ember/recommended'
  ],
  env: {
    browser: true
  },
  rules: {
    "indent": [
      "error",
      "tab",
      {"SwitchCase": 1}
    ],
    "quotes": [
      "error",
      "double",
      "avoid-escape"
    ],
    "jsx-quotes": [
      "error",
      "prefer-double"
    ],
    "newline-before-return": "error",
    "object-curly-spacing": [
      "error",
      "never"
    ],
    "no-unused-vars": "error"
  },
  overrides: [
    // node files
    {
      files: [
        'testem.js',
        'ember-cli-build.js',
        'config/**/*.js',
        'lib/*/index.js'
      ],
      parserOptions: {
        sourceType: 'script',
        ecmaVersion: 2015
      },
      env: {
        browser: false,
        node: true
      }
    }
  ]
};
