<template>
  <div class="text">{{ text }}</div>
</template>

<script>
export default {
  name: 'TextField',
  props: {
    text: { type: String, required: true, default: 'Text property needs data.' }
  }
}
</script>

<style>
.text {
  color: green;
}
</style>
