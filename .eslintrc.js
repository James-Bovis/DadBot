module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  plugins: ['eslint-plugin-react', 'flowtype'],
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
    /**
     * When typing arrays in JavaScript using Flow enforce the use of the
     * `Array<TYPE>` syntax instead of the `(TYPE)[]` syntax for complex types
     *
     * github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-array-style-complex-type
     */
    'flowtype/array-style-complex-type': ['error', 'verbose'],
    /**
     * When typing arrays in JavaScript using Flow enforce the use of the
     * `Array<TYPE>` syntax instead of the `(TYPE)[]` syntax for simple types
     *
     * github.com/gajus/eslint-plugin-flowtype#array-style-simple-type
     */
    'flowtype/array-style-simple-type': ['error', 'verbose'],
    /**
     * When adding a Boolean type with Flow type declarations use `boolean`
     * instead of `bool`
     *
     * github.com/gajus/eslint-plugin-flowtype#boolean-style
     */
    'flowtype/boolean-style': ['error', 'boolean'],
    /**
     * We have made a stylistic decision to go with the JavaScript standard of
     * not requiring a comma-dangle provided we don't require alphabetical
     * ordering
     *
     * github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-delimiter-dangle
     */
    'flowtype/delimeter-dangle': 'off',
    /**
     * Ensure that spaces are not used around generics. For example, ensure that
     * the following examples raise errors:
     *   - Promise< T>
     *   - Promise<T >
     *   - Promise< T >
     *
     * But the following does not error:
     *   - Promise<T>
     * github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-generic-spacing
     */
    'flowtype/generic-spacing': ['error', 'never'],
    /**
     * Ensure that there is a blank line after the `@flow` declaration
     *
     * github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-generic-spacing
     */
    'flowtype/newline-after-flow-annotation': ['error', 'always'],
    /**
     * Ensure that there are no duplicate keys in Flow object type declarations
     *
     * github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-generic-spacing
     */
    'flowtype/no-dupe-keys': 'error',
    /**
     * Disallows the usage of existential types
     *
     * github.com/gajus/eslint-plugin-flowtype#no-existential-type
     */
    'flowtype/no-existential-type': 'error',
    /**
     * Disallows use of primitive constructors as types, such as `Boolean`,
     * `Number` and `String`.
     *
     * github.com/gajus/eslint-plugin-flowtype#no-primitive-constructor-types
     */
    'flowtype/no-primitive-constructor-types': 'error',
    /**
     * Disallows Flow type imports, aliases, and annotations in files missing a
     * valid Flow file declaration (or a @noflow annotation).
     *
     * github.com/gajus/eslint-plugin-flowtype#no-types-missing-file-annotation
     */
    'flowtype/no-types-missing-file-annotation': 'error',
    /**
     * An extension of ESLint's no-unused-expressions. This rule ignores type
     * cast expressions, but otherwise behaves the same as ESLint's
     * no-unused-expressions.
     *
     * Bare type casts are useful, for example to assert the exhaustiveness of a
     * switch
     *
     * github.com/gajus/eslint-plugin-flowtype#no-unused-expressions
     */
    'flowtype/no-unused-expressions': 'error',
    /**
     * Warns against weak type annotations any, Object and Function. These types
     * can cause flow to silently skip over portions of your code, which would
     * have otherwise caused type errors.
     *
     * github.com/gajus/eslint-plugin-flowtype#no-weak-types
     */
    'flowtype/no-weak-types': 'error',
    /**
     * Enforces consistent separators between properties in Flow object types
     *
     * In our case, the delimiter is a comma (`,`)
     *
     * github.com/gajus/eslint-plugin-flowtype#object-type-delimiter
     */
    'flowtype/object-type-delimiter': ['error', 'comma'],
    /**
     * Enforce exact object types
     *
     * github.com/gajus/eslint-plugin-flowtype#require-exact-type
     */
    'flowtype/require-exact-type': ['error', 'always'],
    /**
     * Requires that all function parameters have type annotations
     *
     * github.com/gajus/eslint-plugin-flowtype#require-parameter-type
     */
    'flowtype/require-parameter-type': 'error',
    /**
     * Requires that functions have return type annotation
     *
     * github.com/gajus/eslint-plugin-flowtype#require-return-type
     */
    'flowtype/require-return-type': [
      'error',
      'always',
      {
        annotateUndefined: 'always',
      },
    ],
    /**
     * Requires all type declarations to be at the top of the file, after any
     * import declarations
     *
     * github.com/gajus/eslint-plugin-flowtype#require-types-at-top
     */
    'flowtype/require-types-at-top': 'error',
    /**
     * Require that files have the // @flow declaration at the top
     */
    'flowtype/require-valid-file-annotation': 'error',
    /**
     * We do not require that keys in a Flow object are sorted alphabetically
     *
     * github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-sort-keys
     */
    'flowtype/sort-keys': 'off',
    /**
     * Enforce consistent use of semi-colons after types. This definition will
     * flag an error if there is a semi-colon in type declarations
     *
     * github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-sort-keys
     */
    'flowtype/semi': ['error', 'never'],
    /**
     * Enforces consistent spacing after the type annotation colon. This
     * definition will require that there is a space after the : character when
     * denoting Flow type annotations
     *
     * github.com/gajus/eslint-plugin-flowtype#space-after-type-colon
     */
    'flowtype/space-after-type-colon': ['error', 'always'],
    /**
     * Enforces consistent spacing before the opening < of generic type
     * annotation parameters
     * github.com/gajus/eslint-plugin-flowtype#space-before-generic-bracket
     */
    'flowtype/space-before-generic-bracket': ['error', 'never'],
    /**
     * Enforces consistent spacing before the type annotation colon
     *
     * github.com/gajus/eslint-plugin-flowtype#space-before-type-colon
     */
    'flowtype/space-before-type-colon': ['error', 'never'],
    /**
     * Enforces a particular style for type imports. We use the declaration form
     * which matches the pattern import type { A, B, ... } from '...' instead of
     * import { type A, type B, type ... } from '...'
     *
     * github.com/gajus/eslint-plugin-flowtype#type-import-style
     */
    'flowtype/type-import-style': ['error', 'declaration'],
    /**
     * Enforces consistent spacing around union and intersection type separators
     * (| and &)
     *
     * github.com/gajus/eslint-plugin-flowtype#union-intersection-spacing
     */
    'flowtype/union-intersection-spacing': ['error', 'always'],
    /**
     * Marks Flow type alias declarations as used
     *
     * github.com/gajus/eslint-plugin-flowtype#use-flow-type
     */
    'flowtype/use-flow-type': 'error',
  },
  parserOptions: {
    sourceType: 'module',
  },
}
