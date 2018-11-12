<template>
  <FieldEditor>
    <BannerFieldDisplay
      slot="display"
      :heading="data.heading"
      :subheading="data.subheading"
    />
    <BannerFieldEditor slot="editor" :data="data"/>
  </FieldEditor>
</template>

<script>
import FieldEditor from '~/components/field-editor/FieldEditor.vue'
import BannerFieldDisplay from './BannerFieldDisplay.vue'
import BannerFieldEditor from './BannerFieldEditor.vue'
import { BANNER_FIELD_PROPS } from './bannerFieldConfig.js'
import mapPropsToData from '~/mixins/mapPropsToData.js'

export default {
  name: 'BannerField',
  components: { FieldEditor, BannerFieldDisplay, BannerFieldEditor },
  mixins: [mapPropsToData],
  props: BANNER_FIELD_PROPS
}
</script>
