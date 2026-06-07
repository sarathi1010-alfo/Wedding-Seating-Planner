import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = [
  ...nextVitals,
  ...nextTs,
  {
      rules: {
          "react/no-unescaped-entities": "off",
          "@typescript-eslint/no-explicit-any": "off",
          "react-hooks/rules-of-hooks": "off",
          "react-hooks/exhaustive-deps": "off",
          "react-hooks/set-state-in-effect": "off",
          "@typescript-eslint/no-unused-vars": "off"
      },
      ignores: [
          ".next/**",
          "out/**",
          "build/**",
          "next-env.d.ts",
          "scripts/**",
          "next-sitemap.config.js"
      ]
  }
];

export default eslintConfig;
