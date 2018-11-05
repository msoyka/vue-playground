<template>
  <section class="container">
    {{ pageData }}
    {{ fieldData }}
    <!-- <DynamicFields :fields="fields"/> -->
    <PagesList/>
    <CreatePage/>
  </section>
</template>

<script>
import PagesList from '~/components/PagesList.vue'
import CreatePage from '~/components/CreatePage.vue'
import DynamicFields from '~/components/DynamicFields.vue'

export default {
  components: {
    PagesList,
    CreatePage,
    DynamicFields
  },
  data() {
    return { pageData: {}, fieldData: [] }
  },
  async fetch({ route }) {
    // const fetchBySlug
    console.log(route)
    // const fieldData = store.getters['fields/getFieldsByPageId'](0)
  }
  // created() {
  //   this.$store.dispatch('pages/getPages')
  //   this.$store.dispatch('fields/setFieldsByPageId', 0)
  // }
}
</script>

<style>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
}
</style>
