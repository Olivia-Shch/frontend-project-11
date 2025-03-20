export default [
  {
    ignores: [
      "node_modules/",
      "dist/",
      ".git/",
      ".github/",
      ".vercel/",
      "package-lock.json",
      "Makefile",
      "README.md"
    ],
  },
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: {
      "no-unused-vars": "warn",
      "no-console": "off",
    },
  },
];

