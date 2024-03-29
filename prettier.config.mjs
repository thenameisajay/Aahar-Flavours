// prettier.config.js, .prettierrc.js, prettier.config.mjs, or .prettierrc.mjs

/** @type {import("prettier").Config} */
const config = {
    trailingComma: 'all',
    tabWidth: 4,
    printWidth: 80,
    semi: true,
    singleQuote: true,
    importOrder: [
        '^(^react$|@react|react)',
        '^(next/(.*)$)|^(next$)',
        '^@?\\w',
        '^[./]',
        '^@/components',
    ],
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
    plugins: ['@trivago/prettier-plugin-sort-imports'],
};

export default config;
