<script setup lang="ts">
  import Header from './layouts/Header.vue'
  import Footer from './layouts/Footer.vue'
</script>

<template>
  <Header />
  <main><RouterView /></main>
  <Footer />
</template>

<style scoped></style>
