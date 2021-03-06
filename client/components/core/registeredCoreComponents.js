import BannerField from './banner/BannerField.vue'

const registeredComponents = {
  BannerField
}

const componentLookup = name => {
  const component = registeredComponents[name]

  if (component === null || component === undefined) {
    var e = new Error(`${name} is not a registered field.`)
    e.name = 'Component Lookup Error'
    throw e
  }

  return component
}

export { componentLookup, registeredComponents }
export default registeredComponents
