<template>
  <div>
    <DynamicField :fields="meta.fields"/>
    <!-- <div class="editor">
      <button @click="showEditor = !showEditor">Edit</button>
      <div v-if="showEditor" class="editor__editor">
        <form @submit.prevent="onSubmit">
          <input v-model="meta.title">
          <input v-model="meta.description">
          <DynamicFieldEditor :fields="meta.fields"/>
          <button type="submit">Update</button>
          <button type="button" @click="showEditor = !showEditor">Cancel</button>
        </form>
      </div>
      <div class="editor__display">
        <DynamicField :fields="meta.fields"/>
      </div>
    </div>-->
    <!-- <div class="metabox">
      <button class="metabox__toggle" @click="showMeta = !showMeta">Meta Toggle</button>
      <div v-if="showMeta" class="metabox__container">
        <header class="metabox__header">Page Meta:</header>
        <div class="metabox__body">{{ meta }}</div>
      </div>
    </div>-->
  </div>
</template>

<script>
import DynamicField from '~/components/dynamic-field/DynamicField.vue'
import pageSEO from '~/mixins/pageSEO.js'

export default {
  name: 'PageEditor',
  components: { DynamicField },
  mixins: [pageSEO],
  props: {
    meta: {
      type: Object,
      required: true,
      default: () => {}
    }
  },
  data() {
    return {
      showMeta: false
    }
  }
}
</script>

<style lang="scss" scoped>
.metabox {
  position: fixed;
  z-index: 100;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgb(240, 240, 240);
  color: gray;

  &__container {
    max-width: 800px;
    padding: 1rem;
    margin: 0 auto;
  }

  &__header {
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    font-weight: bold;
  }
}

.full {
  width: 100%;
  min-height: 100px;
}
</style>
