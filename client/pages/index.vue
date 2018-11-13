<template>
  <PageEditor :meta="pageMeta"/>
</template>

<script>
import PageEditor from '~/components/page-editor/PageEditor.vue'
import pageMeta from '~/mixins/pageMeta.js'

export default {
  layout: 'admin',
  components: { PageEditor },
  mixins: [pageMeta]
}
</script>
