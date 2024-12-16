import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
  // Ignore specific files or folders
  {
    ignores: ["dist"],
  },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node, // Add node.js globals if required
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    settings: {
      react: { version: "detect" },
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      // Base JavaScript rules
      ...js.configs.recommended.rules,
      // React rules
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      // React Hooks rules
      ...reactHooks.configs.recommended.rules,
      // Additional React-specific rules
      "react/jsx-no-target-blank": "warn",
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },
];
