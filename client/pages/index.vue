<template>
  <PageEditor :meta="pageMeta"/>
</template>

<script>
import PageEditor from '~/components/page-editor/PageEditor.vue'
import getPageMeta from '~/mixins/getPageMeta.js'

export default {
  components: { PageEditor },
  mixins: [getPageMeta]
}
</script>
