<template>
  <section class="container">
    <p>Index Slug Page</p>
    <p>{{ pageMeta }}</p>
  </section>
</template>

<script>
import { GET_CURRENT_PAGE } from '~/store/pages/getterTypes'
import { SET_CURRENT_PAGE } from '~/store/pages/actionTypes'

export default {
  async fetch({ store, params }) {
    store.dispatch(SET_CURRENT_PAGE, params.slug)
  },
  computed: {
    pageMeta: function() {
      return this.$store.getters[GET_CURRENT_PAGE]
    }
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
