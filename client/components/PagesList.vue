<template>
  <ul v-if="pages">
    <li v-for="(page, index) in pages" :index="index" :key="page._id">
      <h5>{{ page.title }}</h5>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'PagesList',
  data() {
    return {
      error: ''
    }
  },
  computed: {
    pages() {
      return this.$store.getters['pages/pages']
    }
  }
}
</script>

<style>
ul {
  margin: 1rem 0;
  padding: 1rem;
  border: 1px solid gray;
}

li {
  list-style-type: none;
  margin: 5px 0;
}
</style>
