<template>
  <div
    class="
      grid grid-cols-3 place-content-center gap-x-2
      md:grid-cols-[repeat(5,minmax(100px,auto))]
    "
  >
    <NuxtLink
      class="my-link flex flex-col items-center px-4 py-2"
      to="https://nuxt.com/"
      target="_blank"
    >
      <img
        src="/icon-nuxt.svg"
        alt="nuxt icon"
        class="inline-block size-16"
      >
      <span
        class="text-green-500"
      >Nuxt 4</span>
    </NuxtLink>
    <NuxtLink
      class="my-link flex flex-col items-center px-4 py-2"
      href="https://vitejs.dev/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="/icon-vite.svg"
        alt="vite icon"
        class="size-16 p-2"
      >
      <span
        class="text-purple-500"
      >Vite</span>
    </NuxtLink>
    <NuxtLink
      class="my-link flex flex-col items-center px-4 py-2"
      href="https://tailwindcss.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="/icon-tailwindcss.svg"
        alt="tailwind icon"
        class="size-16 p-1"
      >
      <span
        class="text-cyan-500"
      >TailwindCSS</span>
    </NuxtLink>
    <NuxtLink
      class="my-link flex flex-col items-center px-4 py-2"
      href="https://pinia.vuejs.org/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="/icon-pinia.svg"
        alt="pinia icon"
        class="size-16 p-1"
      >
      <span
        class="text-yellow-500 dark:text-yellow-200"
      >Pinia</span>
    </NuxtLink>
    <NuxtLink
      class="my-link flex flex-col items-center px-4 py-2"
      href="https://vueuse.org/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="/icon-vueuse.svg"
        alt="vueuse icon"
        class="size-16 p-1"
      >
      <span
        class="text-emerald-500"
      >VueUse</span>
    </NuxtLink>
  </div>
</template>
