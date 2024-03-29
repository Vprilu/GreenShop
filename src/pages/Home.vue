<script setup lang="ts">
  import { useHead } from '@unhead/vue'

  useHead({
    title: 'Главная',
    meta: [
      {
        name: 'description',
        content: 'Описание главной',
      },
      {
        name: 'keywords',
        content: 'keywords1, keywords2',
      },
    ],
  })
</script>

<template>
  <h1 class="text-xl text-black">Главная</h1>
</template>

<style scoped></style>
