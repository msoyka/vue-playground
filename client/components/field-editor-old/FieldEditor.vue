<template>
  <div class="field-editor">
    <div class="field-editor__display">Field:
      <slot name="display"/>
    </div>
    <div class="field-editor__editor">Editor:
      <slot name="editor"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FieldEditor',
  data() {
    return {
      edit: true
    }
  }
}
</script>

<style>
</style>
