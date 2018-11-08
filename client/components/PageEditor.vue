<template>
  <div>
    <div class="page-editor">
      <button @click="showEditor = !showEditor">Edit</button>
      <div v-if="showEditor" class="page-editor__editor">
        <form @submit.prevent="onSubmit">
          <slot name="editor">Editor Slot</slot>
          <button type="submit">Update</button>
          <button type="button" @click="showEditor = !showEditor">Cancel</button>
        </form>
      </div>
      <div class="page-editor__display">
        <slot name="display">Display Slot</slot>
      </div>
    </div>
    <div class="metabox">
      <button class="metabox__toggle" @click="showMeta = !showMeta">Meta Toggle</button>
      <div v-if="showMeta" class="metabox__container">
        <header class="metabox__header">Page Meta:</header>
        <div class="metabox__body">{{ meta }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageEditor',
  props: {
    meta: {
      type: Object,
      required: true,
      default: () => {}
    }
  },
  data() {
    return {
      showMeta: true,
      showEditor: true
    }
  }
}
</script>

<style lang="scss" scoped>
.page-editor {
  overflow: hidden;
}

.page-editor__editor {
  width: 300px;
  position: fixed;
  z-index: 100;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 1rem;
}

.page-editor__display {
  margin-left: 300px;
}

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
</style>
