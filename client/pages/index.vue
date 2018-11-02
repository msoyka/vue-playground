<template>
  <section class="container">
    <!-- <ul v-if="fields">
      <li v-for="(field, index) in fields" :index="index" :key="field.id">
        <FieldTypeRouter :type="field.type" :args="field.props"/>
      </li>
    </ul>-->

    <PagesList/>
    <CreatePage/>
  </section>
</template>

<script>
import PagesList from '~/components/PagesList.vue'
import CreatePage from '~/components/CreatePage.vue'
import FieldTypeRouter from '~/components/routers/FieldTypeRouter.vue'

export default {
  components: {
    PagesList,
    CreatePage,
    FieldTypeRouter
  },
  // computed: {
  //   fields() {
  //     return this.$store.getters['pages/pages']
  //   }
  // },
  // NOTE: LOOK AT HOW DATA IS BEING SAVED IN STORE
  created() {
    this.$store.dispatch('pages/getPages')
    this.$store.dispatch('fields/getFieldsByPageId', 0)
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
