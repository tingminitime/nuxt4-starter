<script lang="ts" setup>
const color = useColorMode()

useHead({
  meta: [{
    id: 'theme-color',
    name: 'theme-color',
    content: computed(() => color.value === 'dark' ? '#282c34' : '#ffffff'),
  }],
})

function toggleColorMode() {
  color.preference = color.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <button
    type="button"
    class="inline-block p-1"
    @click="toggleColorMode"
  >
    <Icon
      name="i-carbon-sun"
      size="28"
      class="block dark:hidden"
    />
    <Icon
      name="i-carbon-moon"
      size="28"
      class="hidden dark:block"
    />
  </button>
</template>

<style scoped>
</style>
