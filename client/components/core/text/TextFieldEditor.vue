<template>
  <div>
    <h6>Text Field Editor</h6>
    <input v-model="data.text">
  </div>
</template>

<script>
export default {
  name: 'TextFieldEditor',
  props: {
    data: {
      type: Object,
      required: true,
      default: () => {}
    }
  }
}
</script>
