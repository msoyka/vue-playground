<template>
  <div class="errorField">
    <p>There was an error loading the {{ fieldName }} field.</p>
    <p>Error: {{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'ErrorField',
  props: {
    fieldName: { type: String, default: '' },
    message: { type: String, default: '' }
  }
}
</script>

<style>
.errorField {
  display: none;
}
</style>
