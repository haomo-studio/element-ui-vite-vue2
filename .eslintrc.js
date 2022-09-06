module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    'plugin:prettier/recommended',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    sourceType: 'module',
  },

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-unused-vars': 'off',
    'vue/no-unused-components': 'off',
    'prettier/prettier': 0
    // 'prettier/prettier': [
    //   'error',
    //   {
    //     tabWidth: 2,
    //     singleQuote: true,
    //     semi: false,
    //     endOfLine: 'auto',
    //   },
    // ],
  },
}
