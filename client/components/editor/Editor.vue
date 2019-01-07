
<template>
  <DrawerField slot-scope="props">
    <DrawerFieldDrawer
      v-for="n in 3"
      :key="n"
      :slug="`drawer-${n}`"
      :id="`level-1-${n}`"
    >
      Drawer {{ n }}
      Field Content
      <DrawerFieldDrawer
        v-for="n in 3"
        :key="n"
        :slug="`subdrawer${n}-${n}`"
        slot-scope="props"
      >
        This is the {{ n }}st
        greatest drawer of
        all time.
        <DrawerFieldDrawer
          v-for="n in 3"
          :key="n"
          :slug="`sub-subdrawer${n}-${n}`"
          slot-scope="props"
        >
          This is the {{ n }}st
          greatest drawer of
          all time.
        </DrawerFieldDrawer>
      </DrawerFieldDrawer>
    </DrawerFieldDrawer>
  </DrawerField>
  <!-- <v-subheader>Page Editor:</v-subheader>

    <v-card color="grey lighten-2">
      <v-card-title>Fields</v-card-title>
      <v-card-text>
        <v-expansion-panel
          v-for="(field, index) in fields"
          :index="index"
          :key="field.id"
          focusable
        >
          <v-expansion-panel-content lazy>
            <div slot="header">{{ field.type }}</div>
            <v-card color="blue-grey darken-2" class="white--text">
              <v-card-text>
                <FieldEditor :field="field"/>
              </v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-card-text>
  </v-card>-->
</template>

<script>
import FieldEditor from './FieldEditor.vue'
import DrawerField from '~/components/drawer/DrawerField.vue'
import DrawerFieldDrawer from '~/components/drawer/DrawerFieldDrawer.vue'

export default {
  name: 'Editor',
  components: { FieldEditor, DrawerField, DrawerFieldDrawer },
  props: {
    fields: {
      type: Array,
      required: true,
      default: () => []
    }
  }
}
</script>
