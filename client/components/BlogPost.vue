<template>
  <h3>{{ title }}</h3>
</template>

<script>
export default {
  name: 'BlogPost',
  props: {
    title: {
      type: String,
      required: true,
      default: 'Blog Title Here'
    }
  }
}
</script>
