import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";
import { defineConfig } from "eslint/config";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import parser from "vue-eslint-parser";


export default defineConfig([
  
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  eslintPluginPrettierRecommended,
  ...pluginVue.configs["flat/essential"],
  {
    files: ["**/*.vue"],
    languageOptions: { parserOptions: { parser: tseslint.parser } },
  },
  {
    languageOptions: {
      parser: parser,
      ecmaVersion: 2022,
      sourceType: "module",

      parserOptions: {
        parser: "@typescript-eslint/parser",
      },
    },

    rules: {
      "no-console": "off", // TODO: warn
      "no-debugger": "warn",
      "vue/require-default-prop": "off",

      "vue/component-api-style": ["error", ["script-setup", "composition"]], // TODO: только script-setup, одна из причин vue vapor

      // точка с запятой обязательна
      semi: ["error", "always"],
      'vue/multi-word-component-names': 'off',

      // строгое равенство
      eqeqeq: [
        "error",
        "always",
        {
          null: "ignore",
        },
      ],

      // фигурные скобки if else
      "brace-style": [
        "error",
        "1tbs",
        {
          allowSingleLine: false,
        },
      ],

      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: ["variable", "function"],
          format: ["camelCase"],
        },
        {
          selector: "variable",
          modifiers: ["const"],
          format: ["camelCase", "UPPER_CASE"],
        },
      ],

      "no-undef": "off",
      "@typescript-eslint/no-unused-vars": "off",

      "prettier/prettier": ["error"],
    },
  },
]);
