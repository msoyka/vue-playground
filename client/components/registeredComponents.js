import TextField from '~/components/text/TextField.vue'
import BannerField from '~/components/banner/BannerField.vue'

const registeredComponents = {
  TextField,
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
