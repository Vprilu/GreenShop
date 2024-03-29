<script setup lang="ts">
  import { useHead } from '@unhead/vue'

  useHead({
    title: 'О нас',
    meta: [
      {
        name: 'description',
        content: 'Описание о нас',
      },
      {
        name: 'keywords',
        content: 'keywords1, keywords2',
      },
    ],
  })
</script>

<template><h1>О нас</h1></template>

<style scoped></style>
