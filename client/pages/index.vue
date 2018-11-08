<template>
  <PageEditor :meta="pageMeta">
    <div slot="editor">
      <h5>Page Editor</h5>
      <br>
      <div v-if="pageFields">
        <div v-for="(field, index) in pageFields" :index="index" :key="index">
          <FieldInputRouter :field="field"/>
          <br>
        </div>
      </div>
    </div>
    <div slot="display">
      <h1>{{ pageMeta.title }} Page</h1>
      <br>
      <hr>
      <br>
      <DynamicFields :fields="pageFields"/>
    </div>
  </PageEditor>
</template>

<script>
import DynamicFields from '~/components/DynamicFields.vue'
import FieldInputRouter from '~/components/FieldInputRouter.vue'
import PageEditor from '~/components/PageEditor.vue'
import getPageMeta from '~/mixins/getPageMeta.js'

export default {
  components: { DynamicFields, PageEditor, FieldInputRouter },
  mixins: [getPageMeta]
}
</script>

<style>
.full {
  width: 100%;
  min-height: 100px;
}
</style>
