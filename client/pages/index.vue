<template>
  <section class="container">
    <PagesList/>
    <CreatePage/>
  </section>
</template>

<script>
import PagesList from '~/components/PagesList.vue'
import CreatePage from '~/components/CreatePage.vue'

export default {
  components: {
    PagesList,
    CreatePage
  },
  created() {
    this.$store.dispatch('pages/getPages')
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
