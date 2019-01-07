<script>
import DrawerBreadcrumbs from './DrawerBreadcrumbs.vue'
import DrawerFieldDrawer from '~/components/drawer/DrawerFieldDrawer.vue'

export default {
  name: 'DrawerField',
  data() {
    return { history: [] }
  },
  methods: {
    addHistory(drawer) {
      this.history.push(drawer)
      console.log('addHistory')
    }
  },
  render(h) {
    console.log(this.history)
    const filteredChildren = this.$slots.default.filter(
      child => child.componentOptions.tag === 'DrawerFieldDrawer'
    )

    const _renderChildren = filteredChildren.map(child => {
      const { propsData, children } = child.componentOptions
      return h(
        DrawerFieldDrawer,
        {
          props: { ...propsData },
          on: {
            toggle: this.addHistory
          }
        },
        children
      )
    })

    return h('div', { class: 'menu' }, [
      h(DrawerBreadcrumbs, {
        props: { breadcrumbs: this.history },
        on: {
          toggle: this.addHistory
        }
      }),
      _renderChildren
    ])
  }
}
</script>

<style lang="scss" scoped>
.menu {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>
