<template>
  <div class="page-editor">
    <button @click="edit = !edit">Edit</button>
    <div class="page-editor__editor">
      <form @submit.prevent="onSubmit">
        <slot name="editor">Editor Slot</slot>
        <button type="submit">Update</button>
        <button type="button" @click="edit = !edit">Cancel</button>
      </form>
    </div>
    <div class="page-editor__display">
      <slot name="display">Display Slot</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageEditor'
}
</script>

<style scoped>
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
</style>
