module.exports = {
  trailingComma: 'es5',
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  importOrder: [
    '<THIRD_PARTY_MODULES>',
    '^@/components/(.*)$',
    '^@/ui/(.*)$',
    '^@/hooks/(.*)$',
    '^@/services/(.*)$',
    '^@/assets/(.*)$',
    '^@/styles/(.*)$',
    '^@/utils/(.*)$',
    '^../(.*)',
    '^./(.*)',
    '(.scss)$',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
}
