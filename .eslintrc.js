module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  plugins: ['eslint-plugin-react'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    indent: ['error', 2],
    semi: ['error', 'never'],
    /**
     * Prevent missing displayName in a React component definition. We do not
     * require a display name
     */
    'react/display-name': 'off',
    /**
     * Enforce or disallow spaces inside of curly braces in JSX attributes and
     * expressions
     *
     * github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md
     */
    'react/jsx-curly-spacing': [
      'error',
      {
        attributes: false,
        children: true,
        when: 'never',
      },
    ],
    /**
     * Require specific file extensions for files containing JSX
     *
     * github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
     */
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    /**
     * Enforce style for declaring JSX fragments. We do not allow the <>
     * shorthand, instead we require the <React.Fragment> long form style
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-fragments.md
     */
    'react/jsx-fragments': 'off',
    /**
     * Enforce event handler naming conventions in JSX. We do not have a naming
     * convention for handler names so this rule is turned off
     *
     * github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md
     */
    'react/jsx-handler-names': 'off',
    /**
     * Validate JSX indentation. We require an indentation of 2 spaces
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md
     */
    'react/jsx-indent': ['error', 2],
    /**
     * Validate JSX prop indentation. We require an indentation of 2 spaces
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md
     */
    'react/jsx-indent-props': ['error', 2],
    /**
     * Validate JSX maximum depth. We do not have a depth limit
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-depth.md
     */
    'react/jsx-max-depth': 'off',
    /**
     * Validate whitespace in and around the JSX opening and closing brackets
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md
     */
    'react/jsx-tag-spacing': [
      'error',
      {
        afterOpening: 'never',
        beforeClosing: 'never',
        beforeSelfClosing: 'always',
        closingSlash: 'never',
      },
    ],
    /**
     * Prevent multiple component definition per file. We don't prevent multiple
     * component definitions in a file
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md
     */
    'react/no-multi-comp': 'off',
    /**
     * Prevent the use of setState in a file. As we still have some legacy code
     * we do not have this rule turned on
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-set-state.md
     */
    'react/no-set-state': 'off',
    /**
     * Make all props read only
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-read-only-props.md
     */
    'react/prefer-read-only-props': 'off',
    /**
     * Enforce a defaultProps definition for every prop that is not a required
     * prop
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-default-props.md
     */
    'react/require-default-props': 'off',
    /**
     * Validate ordering of JSX properties. We do not have a ordering rule.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
     */
    'react/jsx-sort-props': 'off',
    /**
     * Enforce curly braces or disallow unnecessary curly braces in JSX props
     * and/or children.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md
     */
    'react/jsx-curly-brace-presence': [
      'error',
      {
        props: 'never',
        children: 'always',
      },
    ],
  },
  parserOptions: {
    sourceType: 'module',
  },
}
