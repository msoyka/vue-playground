<template>
  <div class="form-wrapper">
    <h1>Create a new page</h1>
    <form>
      <label for="pageTitle">Page Title</label>
      <br>
      <input
        id="pageTitle"
        v-model="data.title"
        type="text"
        name="pageTitle"
        placeholder="What is the title of this page?"
      >
      <br>
      <button @click.prevent="createPage">Create Page</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'CreatePage',
  data() {
    return {
      data: {
        title: ''
      },
      error: ''
    }
  },
  methods: {
    async createPage() {
      const createdPage = await this.$store.dispatch(
        'pages/createPage',
        this.data
      )
      console.log(createdPage)
    }
  }
}
</script>

<style>
.form-wrapper {
  padding: 1rem;
  margin: 1rem 0;
  background-color: #dddddd;
}
form {
  text-align: left;
  padding: 1rem;
  margin: 1rem 0;
  border: 1px solid gray;
}
</style>
