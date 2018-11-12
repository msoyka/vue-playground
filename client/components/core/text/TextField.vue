<template>
  <p class="text">{{ text }}</p>
</template>

<script>
import TextFieldEditor from './TextFieldEditor.vue'

export default {
  name: 'TextField',
  editor: TextFieldEditor,
  props: {
    text: { type: String, required: true, default: 'Text property needs data.' }
  }
}
</script>
