<template>
  <section class="container">
    <p>{{ pageMeta.title }} Page</p>
    <DynamicFields :fields="pageMeta.fields"/>
    <div class="meta">
      <b>metadata:</b>
      {{ pageMeta }}
    </div>
  </section>
</template>

<script>
import DynamicFields from '~/components/DynamicFields.vue'
import getPageMeta from '~/mixins/getPageMeta.js'

export default {
  components: { DynamicFields },
  mixins: [getPageMeta]
}
</script>

<style>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
}

.meta {
  background-color: rgb(240, 240, 240);
  color: gray;
  padding: 1rem;
  margin: 1rem 0;
}
</style>
