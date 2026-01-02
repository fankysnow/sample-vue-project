import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'
import vueTsEslintConfig from '@vue/eslint-config-typescript'

export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },

  {
    name: 'app/ignores',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },

  // Базовые настройки JS
  js.configs.recommended,

  // Настройки Vue (рекомендуемые)
  ...pluginVue.configs['flat/recommended'],

  // Настройки TypeScript для Vue
  ...vueTsEslintConfig(),

  // Отключаем правила форматирования, которые конфликтуют с Prettier
  skipFormatting,

  // Твои кастомные правила
  {
    rules: {
      'vue/multi-word-component-names': 'off',
      'no-console': 'warn',
    }
  }
]
