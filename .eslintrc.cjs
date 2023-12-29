module.exports = {
  env: {
    browser: true,
    es2023: true,
    node: true
  },
  extends: ['eslint:recommended', 'standard'],
  parserOptions: {
    ecmaVersion: 2023,
    sourceType: 'module'
  },
  plugins: ['import', 'node', 'promise'],
  rules: {
    'no-undef': 'off'
  }
}
