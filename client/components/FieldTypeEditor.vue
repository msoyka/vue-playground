<template>
  <div>
    <button @click="edit = !edit">Edit</button>
    <div v-if="edit" class="panel">
      <form @submit.prevent="onSubmit">
        <slot name="editField">Editor Slot</slot>
        <button type="submit">Update</button>
        <button type="button" @click="edit = !edit">Cancel</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Editor',
  data() {
    return {
      edit: false
    }
  }
}
</script>

<style scoped>
.panel {
  position: fixed;
  z-index: 10000;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
