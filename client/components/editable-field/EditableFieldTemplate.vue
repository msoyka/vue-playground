<template>
  <div class="editable-field">
    <div>
      <h4>Field:</h4>
      <slot name="field"/>
    </div>
    <div>
      <h4>Editor:</h4>
      <slot name="editor"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EditableFieldTemplate'
}
</script>

<style lang="scss" scoped>
.editable-field {
  border: 1px solid gray;
  padding: 1rem;
}
</style>
