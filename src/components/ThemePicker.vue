<script setup lang="ts">
import { ref } from 'vue';

const themes = ['default', 'light', 'dark', 'cupcake', 'bumblebee', 'emerald', 'corporate', 'synthwave', 'retro', 'cyberpunk', 'valentine', 'halloween', 'garden', 'forest', 'aqua', 'lofi', 'pastel', 'fantasy', 'wireframe', 'black', 'luxury', 'dracula', 'cmyk', 'autumn', 'business', 'acid', 'lemonade', 'night', 'coffee', 'winter', 'dim', 'nord', 'sunset', 'caramellatte', 'abyss', 'sylk']
const currentTheme = ref('default')
</script>

<template>
  <div class="dropdown" v-if="0">
    <div tabindex="0" class="flex items-center gap-2 text-sm">
      <svg class="size-5 opacity-50" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        <g stroke="currentColor" fill="none" stroke-linejoin="miter" stroke-linecap="butt">
          <line x1="3" y1="11" x2="29" y2="11" fill="none" stroke-miterlimit="10" stroke-width="2.5"></line>
          <line x1="12" y1="11" x2="12" y2="29" fill="none" stroke-miterlimit="10" stroke-width="2.5"></line>
          <path d="m26,29H6c-1.657,0-3-1.343-3-3V6c0-1.657,1.343-3,3-3h20c1.657,0,3,1.343,3,3v20c0,1.657-1.343,3-3,3Z"
            fill="none" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2.5"></path>
        </g>
      </svg>
      <span class="uppercase text-sm">{{ currentTheme }}</span>
      <svg class="size-2 inline-block fill-current opacity-50" xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 2048 2048">
        <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
      </svg>
    </div>
    <ul tabindex="0" class="dropdown-content bg-base-300 rounded-box z-1 p-2 shadow-2xl w-36 h-48 overflow-x-auto">
      <li v-for="theme of themes">
        <input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-ghost justify-start uppercase"
          :aria-label="theme" :value="theme" @click="currentTheme = theme" />
      </li>
    </ul>
  </div>

  <div class="dropdown">
    <div tabindex="0" class="flex items-center gap-2 text-sm">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path fill="currentColor"
          d="M17.5 12a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 17.5 9a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5m-3-4A1.5 1.5 0 0 1 13 6.5A1.5 1.5 0 0 1 14.5 5A1.5 1.5 0 0 1 16 6.5A1.5 1.5 0 0 1 14.5 8m-5 0A1.5 1.5 0 0 1 8 6.5A1.5 1.5 0 0 1 9.5 5A1.5 1.5 0 0 1 11 6.5A1.5 1.5 0 0 1 9.5 8m-3 4A1.5 1.5 0 0 1 5 10.5A1.5 1.5 0 0 1 6.5 9A1.5 1.5 0 0 1 8 10.5A1.5 1.5 0 0 1 6.5 12M12 3a9 9 0 0 0-9 9a9 9 0 0 0 9 9a1.5 1.5 0 0 0 1.5-1.5c0-.39-.15-.74-.39-1c-.23-.27-.38-.62-.38-1a1.5 1.5 0 0 1 1.5-1.5H16a5 5 0 0 0 5-5c0-4.42-4.03-8-9-8" />
      </svg>
    </div>
    <ul tabindex="0" class="dropdown-content bg-base-300 rounded-box z-1 shadow-2xl h-48 w-36 overflow-x-auto right-0">
      <li v-for="theme of themes">
        <input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-ghost justify-start uppercase"
          :class="currentTheme === theme ? 'active' : ''" :aria-label="theme" :value="theme"
          @click="currentTheme = theme" />
      </li>
    </ul>
  </div>
</template>