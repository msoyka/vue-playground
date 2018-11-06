<template>
  <section class="container">
    <p>{{ pageMeta.title }} Page</p>
    <p>{{ pageMeta }}</p>
  </section>
</template>

<script>
export default {
  asyncData({ pageMeta }) {
    return { pageMeta }
  }
}
</script>

<style>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
}
</style>
