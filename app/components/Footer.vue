<template>
  <ul
    class="mt-6 flex justify-center gap-x-2 text-gray-600 dark:text-gray-400"
  >
    <li
      class="
        flex rounded-sm transition-all
        hover:bg-gray-300/50
        dark:hover:bg-gray-700/50
      "
    >
      <NuxtLink
        class="p-1"
        to="/"
      >
        <Icon
          name="i-carbon-home"
          size="28"
          class="block"
        />
      </NuxtLink>
    </li>
    <li
      class="
        flex rounded-sm transition-all
        hover:bg-gray-300/50
        dark:hover:bg-gray-700/50
      "
    >
      <NuxtLink
        href="https://github.com/tingminitime/nuxt4-starter"
        target="_blank"
        class="p-1"
      >
        <Icon
          name="i-carbon-logo-github"
          size="28"
          class="block"
        />
      </NuxtLink>
    </li>
    <li
      class="
        flex rounded-sm transition-all
        hover:bg-gray-300/50
        dark:hover:bg-gray-700/50
      "
    >
      <ThemeSwitcher class="p-1" />
    </li>
  </ul>

  <p
    class="mt-3 text-sm text-gray-700 dark:text-gray-300"
  >
    <em>
      This Nuxt 4 starter is inspired by
      <NuxtLink
        href="https://github.com/antfu/vitesse-nuxt"
        target="_blank"
        class="
          text-sky-600
          hover:text-sky-500
          dark:text-sky-500
          dark:hover:text-sky-400
        "
      >
        antfu/vitesse-nuxt
      </NuxtLink>
    </em>
  </p>
</template>
