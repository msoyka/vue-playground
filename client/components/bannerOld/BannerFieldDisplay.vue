<template>
  <div :style="backgroundImageStyles" class="banner">
    <h1>{{ heading }}</h1>
    <p>{{ subheading }}</p>
  </div>
</template>

<script>
import { BANNER_FIELD_PROPS } from './bannerFieldConfig.js'
export default {
  name: 'BannerFieldDisplay',
  props: BANNER_FIELD_PROPS,
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
