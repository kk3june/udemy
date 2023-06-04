module.exports = {
    root: true,
    env: {
      browser: true,
      node: true,
      es2020: true,
    },
    parserOptions: {
      sourceType: "module",
      ecmaFeatures: {
        jsx: true,
      },
    },
    settings: {
      react: {
        version: "detect",
      },
      "import/resolver": {
        node: {},
        alias: {
          map: [["@", "./src"]],
        },
        typescript: {},
      },
    },
    rules: {
      "no-console": "off",
      "import/no-unresolved": ["error", { commonjs: true, amd: true }],
      "import/extensions": ["error", "never", { packages: "always" }],
      "import/no-extraneous-dependencies": ["error"],
      "jsx-a11y/label-has-for": [
        "error",
        {
          // components: ["Label"],
          required: {
            some: ["nesting", "id"],
          },
          allowChildren: true,
        },
      ],
      "jsx-a11y/label-has-associated-control": [
        "error",
        {
          required: {
            some: ["nesting", "id"],
          },
        },
      ],
      "jsx-a11y/click-events-have-key-events": ["off"],
      "jsx-a11y/mouse-events-have-key-events": ["off"],
      "jsx-a11y/anchor-is-valid": [
        "error",
        {
          components: ["Link"],
          specialLink: ["to", "hrefLeft", "hrefRight"],
          aspects: ["invalidHref"],
        },
      ],
      "react/jsx-filename-extension": ["error", { extensions: [".tsx"] }],
    },
    overrides: [
      {
        files: ["*.tsx", "*.ts"],
        parser: "@typescript-eslint/parser",
        extends: [
          "eslint:recommended",
          "plugin:@typescript-eslint/eslint-recommended",
          "plugin:@typescript-eslint/recommended",
          "plugin:@typescript-eslint/recommended-requiring-type-checking",
          "plugin:react/recommended",
          "plugin:react-hooks/recommended",
          "plugin:prettier/recommended",
          "plugin:import/typescript",
        ],
        plugins: [
          "@typescript-eslint",
          "import",
          "react",
          "react-hooks",
          "jsx-a11y",
          "prettier",
        ],
        parserOptions: {
          project: "./tsconfig.json",
          createDefaultProgram: true,
        },
        settings: {
          "import/resolver": {
            typescript: {},
          },
        },
        rules: {
          "react/react-in-jsx-scope": "off",
          "react-hooks/rules-of-hooks": "error",
          "react-hooks/exhaustive-deps": "warn",
          "react/prop-types": "off",
        },
      },
      {
        files: ["(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$"],
        plugins: ["jest"],
        extends: ["plugin:jest/recommended"],
        rules: { "jest/prefer-expect-assertions": "off" },
      },
    ],
  };