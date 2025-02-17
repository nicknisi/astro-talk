/** @type {import('prettier').Config} */
export default {
  useTabs: false,
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  arrowParens: 'avoid',
  printWidth: 120,
  plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
};
