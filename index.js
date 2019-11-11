module.exports = {
  env: {
    es2020: true,
    node: true,
  },
  parserOptions: {
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      'babel-module': {}
    }
  },
  extends: [
    'eslint:recommended',
    'plugin:eslint-comments/recommended',
    'plugin:import/recommended'
  ],
  plugins: [
    'eslint-comments',
    'import'
  ],
  overrides: [
    {
      files: ['*.js'],
      parser: 'babel-eslint',
    },
  ],
  rules: {
    // Possible Errors
    // These rules relate to possible syntax or logic errors in JavaScript code.
    'no-await-in-loop': 2, // disallow await inside of loops
    'no-console': 2, // disallow the use of console
    'no-extra-parens': [2, 'all', { 'nestedBinaryExpressions': false }], // disallow unnecessary parentheses
    'no-import-assign': 2, // disallow assigning to imported bindings
    'no-template-curly-in-string': 2, // disallow template literal placeholder syntax in regular strings

    // Best Practices
    // These rules relate to better ways of doing things to help you avoid problems
    'block-scoped-var': 2,
    'curly': 2, // enforce consistent brace style for all control statements
    'default-case': 2, // require default cases in switch statements
    'dot-notation': 2, // enforce dot notation whenever possible
    'eqeqeq': 2, // require the use of === and !==
    'max-classes-per-file': 2, // enforce a maximum number of classes per file
    'no-alert': 2, // disallow the use of alert, confirm, and prompt
    'no-caller': 2, // disallow the use of arguments.caller or arguments.callee
    'no-div-regex': 2, // disallow division operators explicitly at the beginning of regular expressions
    'no-else-return': 2, // disallow else blocks after return statements in if statements
    'no-eval': 2, // disallow the use of eval()
    'no-extend-native': 2, // disallow extending native types
    'no-extra-bind': 2, // disallow unnecessary calls to .bind()
    'no-floating-decimal': 2, // disallow leading or trailing decimal points in numeric literals
    'no-implicit-globals': 2, // disallow variable and function declarations in the global scope
    'no-implied-eval': 2, // disallow the use of eval()-like methods
    'no-invalid-this': 2, // disallow this keywords outside of classes or class-like objects
    'no-iterator': 2, // disallow the use of the __iterator__ property
    'no-labels': 2, // disallow labeled statements
    'no-lone-blocks': 2, // disallow unnecessary nested blocks
    'no-new': 2, // disallow new operators outside of assignments or comparisons
    'no-new-func': 2, // disallow new operators with the Function object
    'no-new-wrappers': 2, // disallow new operators with the String, Number, and Boolean objects
    'no-octal-escape': 2, // disallow octal escape sequences in string literals
    'no-proto': 2, // disallow the use of the __proto__ property
    'no-return-assign': 2, // disallow assignment operators in return statements
    'no-return-await': 2, // disallow unnecessary return await
    'no-script-url': 2, // disallow javascript: urls
    'no-self-compare': 2, // disallow comparisons where both sides are exactly the same
    'no-sequences': 2, // disallow comma operators
    'no-throw-literal': 2, // disallow throwing literals as exceptions
    'no-unmodified-loop-condition': 2, // disallow unmodified loop conditions
    'no-unused-expressions': 2, // disallow unused expressions
    'no-useless-call': 2, // disallow unnecessary calls to .call() and .apply()
    'no-useless-concat': 2, // disallow unnecessary concatenation of literals or template literals
    'no-useless-return': 2, // disallow redundant return statements
    'no-void': 2, // disallow void operators
    'prefer-promise-reject-errors': 2, // require using Error objects as Promise rejection reasons
    'radix': 2, // enforce the consistent use of the radix argument when using parseInt()
    'require-await': 2, // disallow async functions which have no await expression
    'yoda': 2, // require or disallow “Yoda” conditions

    // Variables
    // These rules relate to variable declarations
    'no-label-var': 2, // disallow labels that share a name with a variable
    'no-shadow': 2, // disallow variable declarations from shadowing variables declared in the outer scope

    // Node.js and CommonJS
    // These rules relate to code running in Node.js, or in browsers with CommonJS
    'global-require': 2, // require error handling in callbacks
    'no-buffer-constructor': 2, // disallow use of the Buffer() constructor
    'no-mixed-requires': 2, // disallow require calls to be mixed with regular variable declarations
    'no-new-require': 2, // disallow new operators with calls to require

    // Stylistic Issues
    // These rules relate to style guidelines, and are therefore quite subjective
    // TODO: Review and refactor to prettier/prettier
    'array-bracket-spacing': [2, "never", { "objectsInArrays": false }], // enforce consistent spacing inside array brackets
    'block-spacing': 2, // disallow or enforce spaces inside of blocks after opening block and before closing block
    'brace-style': 2, // enforce consistent brace style for blocks
    'camelcase': 2, // enforce camelcase naming convention
    'comma-dangle': [2, 'always-multiline'], // require or disallow trailing commas
    'comma-spacing': 2, // enforce consistent spacing before and after commas
    'comma-style': 2, // enforce consistent comma style
    'computed-property-spacing': 2, // enforce consistent spacing inside computed property brackets
    'eol-last': 2, // require or disallow newline at the end of files
    'func-call-spacing': 2, // require or disallow spacing between function identifiers and their invocations
    'func-style': [2, 'declaration', { 'allowArrowFunctions': true }], // enforce the consistent use of either function declarations or expressions
    'indent': [2, 2, { 'SwitchCase': 1 }], // enforce consistent indentation
    'key-spacing': 2, // enforce consistent spacing between keys and values in object literal properties
    'keyword-spacing': 2, // enforce consistent spacing before and after keywords
    'line-comment-position': 2, // enforce position of line comments
    'linebreak-style': 2, // enforce consistent linebreak style
    'lines-around-comment': 2, // require empty lines around comments
    'lines-between-class-members': 2, // require or disallow an empty line between class members
    'max-len': [2, { 'code': 120, 'ignoreComments': false, 'ignoreTrailingComments': false, 'ignoreUrls': false, 'ignoreStrings': false, 'ignoreTemplateLiterals': false, ignoreRegExpLiterals: false }], // enforce a maximum line length
    'multiline-comment-style': [2, 'separate-lines'],  // enforce a particular style for multiline comments
    'new-cap': 2, // require constructor names to begin with a capital letter
    'new-parens': 2, // enforce or disallow parentheses when invoking a constructor with no arguments
    'no-array-constructor': 2, // disallow Array constructors
    'no-inline-comments': 2, // disallow inline comments after code
    'no-lonely-if': 2, // disallow if statements as the only statement in else blocks
    'no-mixed-operators': 2, // disallow mixed binary operators
    'no-multi-assign': 2, // disallow use of chained assignment expressions
    'no-new-object': 2, // disallow Object constructors
    'no-tabs': 2, // disallow all tabs
    'no-trailing-spaces': 2, // disallow trailing whitespace at the end of lines
    'no-underscore-dangle': 2, // disallow dangling underscores in identifiers
    'no-unneeded-ternary': 2, // disallow ternary operators when simpler alternatives exist
    'no-whitespace-before-property': 2, // disallow whitespace before properties
    'object-curly-newline': [2, { 'consistent': true }], // enforce consistent line breaks inside braces
    'object-curly-spacing': [2, 'always'], // enforce consistent spacing inside braces
    'one-var': [2, 'never'], // enforce variables to be declared either together or separately in functions
    'padded-blocks': [2, 'never'], // require or disallow padding within blocks
    'prefer-object-spread': 2, // disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead.
    'quotes': [2, 'single'], // enforce the consistent use of either backticks, double, or single quotes
    'semi': [2, 'never'], // require or disallow semicolons instead of ASI
    'space-before-blocks': [2, 'always'], // enforce consistent spacing before blocks
    'space-before-function-paren': [2, 'never'], // enforce consistent spacing before function definition opening parenthesis
    'space-in-parens': 2, // enforce consistent spacing inside parentheses
    'space-infix-ops': 2, // require spacing around infix operators
    'space-unary-ops': 2, // enforce consistent spacing before or after unary operators
    'spaced-comment': 2, // enforce consistent spacing after the // or /* in a comment
    'switch-colon-spacing': 2, // enforce spacing around colons of switch statements
    'template-tag-spacing': 2, // require or disallow spacing between template tags and their literals

    // ECMAScript 6
    // These rules relate to ES6, also known as ES2015
    'arrow-body-style': [2, 'as-needed'], // require braces around arrow function bodies
    'arrow-spacing': 2, // enforce consistent spacing before and after the arrow in arrow functions
    'generator-star-spacing': 2, // enforce consistent spacing around * operators in generator functions
    'no-confusing-arrow': 2, // disallow arrow functions where they could be confused with comparisons
    'no-duplicate-imports': 2, // disallow duplicate module imports
    'no-useless-computed-key': 2, // disallow unnecessary computed property keys in object literals
    'no-useless-constructor': 2, // disallow unnecessary constructors
    'no-useless-rename': 2, // disallow renaming import, export, and destructured assignments to the same name
    'no-var': 2, // require let or const instead of var
    'object-shorthand': 2, // require or disallow method and property shorthand syntax for object literals
    'prefer-arrow-callback': 2, // require using arrow functions for callbacks
    'prefer-const': 2, // require const declarations for variables that are never reassigned after declared
    'prefer-destructuring': 2, // require destructuring from arrays and/or objects
    'prefer-numeric-literals': 2, // disallow parseInt() and Number.parseInt() in favor of binary, octal, and hexadecimal literals
    'prefer-rest-params': 2, // require rest parameters instead of arguments
    'prefer-spread': 2, // require spread operators instead of .apply()
    'prefer-template': 2, // require template literals instead of string concatenation
    'rest-spread-spacing': 2, // enforce spacing between rest and spread operators and their expressions
    'template-curly-spacing': 2, // require or disallow spacing around embedded expressions of template strings
    'yield-star-spacing': 2, // require or disallow spacing around the * in yield* expressions

    // ESLint Comments Plugin
    // The following rules are made available via eslint-plugin-eslint-comments
    'eslint-comments/no-unused-disable': 2, // disallow unused eslint-disable comments

    // ESLint Import Plugin
    // The following rules are made available via eslint-plugin-import
    'import/first': 2, // Ensure all imports appear before other statements
    'import/exports-last': 2, // Ensure all exports appear after other statements
    'import/no-duplicates': 2, // Report repeated import of the same module in multiple places
    "import/order": [2, {'groups': ['builtin', ['external', 'internal'], ['unknown'], ['parent', 'sibling', 'index']], 'newlines-between': 'always'}], // Enforce a convention in module import order
    'import/newline-after-import': 2, // Enforce a newline after import statements
    'import/prefer-default-export': 2, // Prefer a default export if module exports a single name
  },
}
