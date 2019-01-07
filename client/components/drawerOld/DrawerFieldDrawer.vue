<template>
  <div class="drawer">
    <button class="link" @click="toggleActive">{{ slug }}</button>
    <transition name="slide-fade">
      <div v-show="active" class="panel">
        <slot/>
        <button class="back" @click="toggleActive">Go Back</button>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'DrawerFieldDrawer',
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      active: false
    }
  },
  methods: {
    toggleActive() {
      this.active = !this.active
      console.log('clicked toggle')
      this.$emit('toggle', this)
    }
  }
}
</script>

<style lang="scss" scoped>
.panel {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: lightblue;
}

.link {
  display: flex;
  width: 100%;
  background: lightpink;
}

.back {
  background: lightpink;
  position: absolute;
  top: 0;
  right: 0;
  width: 25px;
  bottom: 0;
  overflow: hidden;
}

.slide-fade-enter-active {
  transition: all 0.25s ease;
}
.slide-fade-leave-active {
  transition: all 0.15s ease;
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(-100%);
}
</style>
