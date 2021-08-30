module.exports = {
	env: {
		node: true,
	},
	parser: 'vue-eslint-parser',
	parserOptions: {
		parser: '@typescript-eslint/parser',
		ecmaVersion: 2020,
		sourceType: 'module',
	},
	rules: {
		quotes: [
			'error',
			'single',
			{
				avoidEscape: true,
				allowTemplateLiterals: true,
			},
		],
		'block-spacing': ['warn', 'always'],
		indent: ['error', 'tab'],
		'sort-vars': 'warn',
		'prefer-const': 'error',
		'no-var': 'error',
		'no-duplicate-imports': 'error',
		'vue/valid-v-slot': 'off',
		'vue/html-self-closing': [
			'warn',
			{
				html: {
					void: 'never',
					normal: 'never',
					component: 'never',
				},
			},
		],
		'vue/html-indent': ['error', 'tab'],
		'vue/max-len': [
			'warn',
			{
				code: 80,
				template: 80,
				tabWidth: 0,
				comments: 120,
				ignorePattern: '',
				ignoreComments: false,
				ignoreTrailingComments: false,
				ignoreUrls: false,
				ignoreStrings: false,
				ignoreTemplateLiterals: false,
				ignoreRegExpLiterals: false,
				ignoreHTMLAttributeValues: false,
				ignoreHTMLTextContents: false,
			},
		],
		'modules-newline/import-declaration-newline': 'warn',
		'modules-newline/export-declaration-newline': 'warn',
		'sort-imports-es6-autofix/sort-imports-es6': [
			2,
			{
				ignoreCase: false,
				ignoreMemberSort: false,
				memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
			},
		],
	},
	extends: [
		'plugin:@typescript-eslint/recommended',
		'eslint:recommended',
		'plugin:vue/vue3-recommended',
	],
	plugins: ['@typescript-eslint', 'modules-newline', 'sort-imports-es6-autofix'],
};
