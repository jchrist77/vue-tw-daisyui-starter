# TypeScript + Vite + Vue + Vue-Router + Pinia + TailwindCSS + DaisyUI Starter Template

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).

## Creation

```sh
npm create vite . -- --template vue-ts
# UI tools
npm install -y tailwindcss daisyui @iconify/vue @vueuse/core
npm install -D -y @tailwindcss/vite 
# Pinia and Vue-Router
npm install -y pinia vue-router
# Testing tools
npm install -D -y vitest vitest-browser-vue @vue/test-utils jsdom @types/jsdom @types/node tsx
# Linting tools
npm install -D -y eslint eslint-plugin-vue prettier @vue/eslint-config-prettier @vue/eslint-config-typescript
```

## Usage

From within an empty project folder run:

```sh
git init .
npx degit jchrist77/vue-starter
```