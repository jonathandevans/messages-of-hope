import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ["next/core-web-vitals", "next/typescript"],
    rules: {
      "no-var": "off",
      "jsx-a11y/alt-text": "off",
      "@next/next/no-img-element": "off",
    }
  }),
];

export default eslintConfig;