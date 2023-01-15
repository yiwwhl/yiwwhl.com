const path = require("path");

module.exports = {
  root: true,
  extends: [
    'eslint:recommended',  
    "plugin:@typescript-eslint/recommended",
    "eslint-config-prettier",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
  env: {
    "browser": true,
    "node": true,
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "@typescript-eslint/triple-slash-reference": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/no-floating-promises": "off",
    "comma-dangle": ["error", "always-multiline"],
    "@typescript-eslint/restrict-template-expressions": "off",
    "@typescript-eslint/promise-function-async": "off",
    "prefer-regex-literals": "off",
    "@typescript-eslint/consistent-type-assertions": "off",
    "@typescript-eslint/restrict-plus-operands": "error",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
      },
    ],
  },
  ignorePatterns: ["dist/**/*", "src/assets/icons/iconfont.js", ".eslintrc.js", "node_modules/**", "config/**", "src/utils/is.ts"],
};
