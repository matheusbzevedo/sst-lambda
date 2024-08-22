import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [{
    languageOptions: {
        globals: {
            ...globals.node,
        },
    },
}, ...compat.extends("eslint:recommended", "plugin:@typescript-eslint/recommended", "prettier").map(config => ({
    ...config,
    files: ["**/*.ts"],
})), {
    files: ["**/*.ts"],

    plugins: {
        "@typescript-eslint": typescriptEslint,
    },

    languageOptions: {
        parser: tsParser,
        ecmaVersion: "latest",
        sourceType: "script",
    },

    rules: {
        "no-constant-condition": ["error", {
            checkLoops: false,
        }],

        "no-empty-function": "off",

        "no-multiple-empty-lines": ["error", {
            max: 1,
        }],
				"@typescript-eslint/triple-slash-reference": "off",
        "no-param-reassign": ["error"],
        "no-shadow": "off",
        "no-unused-vars": "off",
        "no-unsafe-optional-chaining": "off",

        "padding-line-between-statements": ["error", {
            blankLine: "always",
            prev: "*",
            next: ["return", "throw"],
        }, {
            blankLine: "always",
            prev: ["const", "let", "var"],
            next: "*",
        }, {
            blankLine: "any",
            prev: ["const", "let", "var"],
            next: ["const", "let", "var"],
        }],

        "@typescript-eslint/no-empty-function": ["error", {
            allow: ["constructors"],
        }],

        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-shadow": "error",

        "@typescript-eslint/no-unused-vars": ["warn", {
            vars: "all",
            varsIgnorePattern: "^_",
            args: "after-used",
            argsIgnorePattern: "^_",
        }],
    },
}];
