import stylistic from '@stylistic/eslint-plugin';

export default {
    name: 'eri412/stylistic',
    plugins: {
        '@stylistic': stylistic,
    },
    rules: {
        '@stylistic/array-bracket-spacing': 'error',
        '@stylistic/array-element-newline': ['error', 'consistent'],
        '@stylistic/arrow-parens': ['error', 'as-needed'],
        '@stylistic/arrow-spacing': 'error',
        '@stylistic/brace-style': 'error',
        '@stylistic/comma-dangle': ['error', 'always-multiline'],
        '@stylistic/comma-spacing': 'error',
        '@stylistic/comma-style': 'error',
        '@stylistic/computed-property-spacing': 'error',
        '@stylistic/curly-newline': 'error',
        '@stylistic/dot-location': ['error', 'property'],
        '@stylistic/eol-last': 'error',
        '@stylistic/function-call-spacing': 'error',
        '@stylistic/function-paren-newline': 'error',
        '@stylistic/generator-star-spacing': 'error',
        '@stylistic/indent': 'error',
        '@stylistic/indent-binary-ops': 'error',
        '@stylistic/jsx-child-element-spacing': 'error',
        '@stylistic/jsx-closing-bracket-location': 'error',
        '@stylistic/jsx-closing-tag-location': 'error',
        '@stylistic/jsx-curly-brace-presence': ['error', {propElementValues: 'always', children: 'never', props: 'never'}],
        '@stylistic/jsx-curly-newline': 'error',
        '@stylistic/jsx-curly-spacing': 'error',
        '@stylistic/jsx-equals-spacing': 'error',
        '@stylistic/jsx-first-prop-new-line': 'error',
        '@stylistic/jsx-function-call-newline': 'error',
        '@stylistic/jsx-indent-props': 'error',
        '@stylistic/jsx-pascal-case': 'error',
        '@stylistic/jsx-props-no-multi-spaces': 'error',
        '@stylistic/jsx-quotes': 'error',
        '@stylistic/jsx-self-closing-comp': 'error',
        '@stylistic/jsx-sort-props': ['error', {callbacksLast: true, shorthandFirst: true, reservedFirst: true}],
        '@stylistic/jsx-tag-spacing': 'error',
        '@stylistic/jsx-wrap-multilines': 'error',
        '@stylistic/key-spacing': 'error',
        '@stylistic/keyword-spacing': 'error',
        '@stylistic/linebreak-style': 'error',
        '@stylistic/max-len': ['error', {code: 135}],
        '@stylistic/member-delimiter-style': ['error', {
            multiline: {
                delimiter: 'comma',
                requireLast: true,
            },
            singleline: {
                delimiter: 'comma',
                requireLast: false,
            },
            overrides: {
                interface: {
                    multiline: {
                        delimiter: 'semi',
                        requireLast: true,
                    },
                    singleline: {
                        delimiter: 'semi',
                        requireLast: false,
                    },
                },
            },
        }],
        '@stylistic/new-parens': 'error',
        '@stylistic/no-extra-parens': 'error',
        '@stylistic/no-extra-semi': 'error',
        '@stylistic/no-mixed-spaces-and-tabs': 'error',
        '@stylistic/no-multi-spaces': 'error',
        '@stylistic/no-multiple-empty-lines': 'error',
        '@stylistic/no-tabs': 'error',
        '@stylistic/no-trailing-spaces': 'error',
        '@stylistic/no-whitespace-before-property': 'error',
        '@stylistic/object-curly-newline': 'error',
        '@stylistic/object-curly-spacing': 'error',
        '@stylistic/one-var-declaration-per-line': 'error',
        '@stylistic/operator-linebreak': ['error', 'after', {}],
        '@stylistic/quotes': ['error', 'single', {avoidEscape: true}],
        '@stylistic/rest-spread-spacing': 'error',
        '@stylistic/semi': 'error',
        '@stylistic/semi-spacing': 'error',
        '@stylistic/semi-style': 'error',
        '@stylistic/space-before-blocks': 'error',
        '@stylistic/space-before-function-paren': ['error', {named: 'never'}],
        '@stylistic/space-in-parens': 'error',
        '@stylistic/spaced-comment': 'error',
        '@stylistic/switch-colon-spacing': 'error',
        '@stylistic/template-curly-spacing': 'error',
        '@stylistic/template-tag-spacing': 'error',
        '@stylistic/type-annotation-spacing': 'error',
        '@stylistic/type-generic-spacing': 'error',
        '@stylistic/type-named-tuple-spacing': 'error',
        '@stylistic/wrap-iife': 'error',
        '@stylistic/yield-star-spacing': 'error',
    },
};
