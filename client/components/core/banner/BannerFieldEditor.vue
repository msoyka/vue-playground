<template>
  <div>
    <h6>Banner Field Editor</h6>
    <input v-model="data.heading">
    <input v-model="data.subheading">
  </div>
</template>

<script>
export default {
  name: 'BannerFieldEditor',
  props: {
    data: {
      type: Object,
      required: true,
      default: () => {}
    }
  }
}
</script>
