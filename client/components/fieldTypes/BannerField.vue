<template>
  <div :style="backgroundImageStyles" class="banner">
    <h1>{{ heading }}</h1>
    <p>{{ subheading }}</p>
  </div>
</template>

<script>
export default {
  name: 'BannerField',
  props: {
    heading: { type: String, required: true, default: 'Banner heading' },
    subheading: { type: String, required: true, default: 'Banner subheading' },
    image: {
      type: Object,
      required: true,
      default: function() {
        return { url: 'https://placeholder.com/300' }
      }
    }
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
