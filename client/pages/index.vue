<template>
  <PageEditor>
    <div slot="editor">
      <h5>Page Editor</h5>
      <br>
      <div v-if="pageFields" class="dynamic-fields-container">
        <div v-for="(field, index) in pageFields" :index="index" :key="index">
          <FieldInputRouter :field="field"/>
          <br>
        </div>
      </div>
    </div>
    <div slot="display">
      <p>{{ pageMeta.title }} Page</p>
      <DynamicFields :fields="pageMeta.fields"/>
      <div class="meta">
        <b>metadata:</b>
        {{ pageMeta }}
      </div>
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
.meta {
  background-color: rgb(240, 240, 240);
  color: gray;
  padding: 1rem;
  margin: 1rem 0;
}

.full {
  width: 100%;
  min-height: 100px;
}
</style>
