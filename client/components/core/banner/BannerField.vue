<template>
  <div :style="backgroundImageStyles" class="banner">
    <h1>{{ heading }}</h1>
    <p>{{ subheading }}</p>
  </div>
</template>

<script>
import BannerFieldEditor from './BannerFieldEditor.vue'

export default {
  name: 'BannerField',
  editor: BannerFieldEditor,
  props: {
    heading: { type: String, required: false, default: 'Banner heading' },
    subheading: { type: String, required: false, default: 'Banner subheading' }
  },
  computed: {
    backgroundImageStyles() {
      return 'background-color: rgb(240, 240, 240)'
    }
  }
}
</script>

<style>
.banner {
  min-height: 300px;
  width: 100%;
  color: gray;
  padding: 1rem;
  margin: 1rem 0;
}
</style>
