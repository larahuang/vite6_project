# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).

# Vite 6安裝
語法
```
//npm
npm create vite@latest
//yarn
yarn create vite
//pnpm
pnpm create vite
//bun
bun create vite
```

```
? Project name: › vite-project //專案名稱
? Select a framework: › - Use arrow-keys. Return to submit.
    Vanilla
❯   Vue
    React
    Preact
    Lit
    Svelte
    Others
? Select a variant: › - Use arrow-keys. Return to submit.
    JavaScript
❯   TypeScript
    Customize with create-vue ↗
    Nuxt ↗
```

```
cd vite-project
npm install
npm run dev
```

# 錯誤訊息 Vite PWA Plugin does not register the service worker and gives me a 404 error status.
Vite PWA Plugin does not register the service worker and gives me a 404 error status. I'm trying to make a PWA application with the vite plugin and...
Vite PWA 外掛程式不會註冊服務工作者並給我一個 404 錯誤狀態。

執行以下指令 => 安裝vite-plugin-pwa
```
npm i -D vite-plugin-pwa
```
vite.config.js增加
<ul>
    <li>引入vite-plugin-pwa解構VitePWA</li>
    <li>plugins內新增VitePWA({ ... })</li>
</ul>
```
import { VitePWA } from "vite-plugin-pwa"
export default defineConfig({
    plugins: [
        VitePWA({ registerType: 'autoUpdate' })
    ],
    server: {
        hmr: {
        overlay: false
        }
    },
})
```