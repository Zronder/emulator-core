// eslint-disable-next-line no-unused-vars
const [OFF, WARNING, ERROR] = [0, 1, 2]
module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        'plugin:prettier/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 13,
        sourceType: 'module',
    },
    ignorePatterns: ['.eslintrc.js'],
    plugins: ['@typescript-eslint', 'prettier'],
    rules: {
        semi: OFF,
        'prettier/prettier': ERROR,
        'import/no-extraneous-dependencies': OFF,
        'import/no-unresolved': OFF,
        'import/extensions': OFF,
        'no-unused-expressions': OFF,
        'no-unused-vars': [ERROR, { args: 'none' }],
        'no-use-before-define': OFF,
        'no-underscore-dangle': OFF,
    },
}
