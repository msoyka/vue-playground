<template>
  <div class="drawer-breadcrumbs">
    Drawer Breadcrumbs
    <button @click="$emit('toggle')">Test</button>
    <ul v-if="breadcrumbs">
      <li
        v-for="(breadcrumb, index) in breadcrumbs"
        :key="index"
      >{{ breadcrumb }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'DrawerBreadcrumbs',
  props: {
    breadcrumbs: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
.drawer-breadcrumbs {
  position: fixed;
  width: 200px;
  height: 200px;
  top: 70px;
  right: 0;
  background: lightgray;
}
</style>
