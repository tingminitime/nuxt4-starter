// @ts-check
import antfu from '@antfu/eslint-config'
import eslintPluginBetterTailwindcss from 'eslint-plugin-better-tailwindcss'
import nuxt from './.nuxt/eslint.config.mjs'

export default antfu(
  /* configures for antfu's config */
  {
    ignores: [
      'node_modules/',
      'dist/',
      '.output/',
      '.nuxt/',
      '.storybook/',
      'storybook-static',
      '.github/',
      'coverage',
      '*.log',
      'nuxt.d.ts',
      '.DS_Store',
      '.vscode/',
      '**/*.md',
      'netlify.toml',
      'README.md',
      'package.json',
      'package-lock.json',
      'babel.config.js',
      '*.toml',
      'graphql',
      'types.ts',
      'generated',
      'components.d.ts',
      'icons.d.ts',
      'auto.d.ts',
      'src-tauri',
      'auto-imports.d.ts',
      'components.d.ts',
    ],
  },
  /* From the second arguments they are ESLint Flat Configs */
  {
    // @see: https://github.com/schoero/eslint-plugin-better-tailwindcss?tab=readme-ov-file#rules
    plugins: {
      'better-tailwindcss': eslintPluginBetterTailwindcss,
    },
    rules: {
      ...eslintPluginBetterTailwindcss.configs['recommended-warn'].rules,
      'better-tailwindcss/enforce-consistent-line-wrapping': [
        'warn',
        {
          group: 'newLine',
          preferSingleLine: true,
          printWidth: 80,
        },
      ],
      'better-tailwindcss/no-unknown-classes': [
        'warn',
        {
          detectComponentClasses: true,
        },
      ],
    },
    settings: {
      'better-tailwindcss': {
        entryPoint: './app/assets/css/main.css',
      },
    },
  },
  {
    rules: {
      'vue/no-multiple-template-root': 'off',
      'vue/no-unused-vars': 'warn',
      'vue/max-attributes-per-line': 'error',
      'vue/html-self-closing': ['error', {
        html: {
          void: 'never',
          normal: 'never',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      }],
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
      'unused-imports/no-unused-imports': 'warn',
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'node/prefer-global/process': 'off',
      'ts/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
    },
  },
).append(nuxt())
