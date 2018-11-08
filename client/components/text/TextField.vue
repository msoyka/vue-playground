<template>
  <p class="text">{{ text }}</p>
</template>

<script>
export default {
  name: 'TextField',
  props: {
    text: { type: String, required: true, default: 'Text property needs data.' }
  }
}
</script>
