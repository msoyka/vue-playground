<template>
  <p class="text">{{ text }}</p>
</template>

<script>
// import FieldEditor from '~/components/field-editor/FieldEditor.vue'
// import TextFieldDisplay from './TextFieldDisplay.vue'
// import TextFieldEditor from './TextFieldEditor.vue'

export default {
  name: 'TextField',
  props: {
    text: { type: String, required: true, default: 'Text property needs data.' }
  }
}
</script>
