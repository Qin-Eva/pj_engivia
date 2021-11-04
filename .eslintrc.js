module.exports = {
  rules: {
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'comma-dangle': ['error', 'never'],
    'no-trailing-spaces': 'error',
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    'tailwindcss/classnames-order': 'warn',
    'tailwindcss/no-custom-classname': 'warn',
    'tailwindcss/no-contradicting-classname': 'error'
  },
  extends: [
    'eslint:recommended',
    'standard-with-typescript',
    'next/core-web-vitals',
    'plugin:tailwindcss/recommended',
    'prettier'
  ],
  parserOptions: {
    project: './tsconfig.json'
  }
}
