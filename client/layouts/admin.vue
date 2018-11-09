<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" fixed app>
      <v-list>
        <v-list-tile v-for="item in drawerMenu" :key="item.id" :to="item.to">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"/>
      <v-toolbar-title>Admin</v-toolbar-title>
      <v-spacer/>
      <v-toolbar-items>
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-bell</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-account</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-exit-to-app</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <nuxt/>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    drawerMenu: [
      {
        id: 0,
        icon: 'mdi-view-dashboard',
        title: 'Dashboard',
        to: '/dashboard'
      },
      {
        id: 1,
        icon: 'mdi-account-circle',
        title: 'Profile',
        to: '/profile'
      },
      {
        id: 2,
        icon: 'mdi-file-document-box',
        title: 'Pages',
        to: '/pages'
      },
      {
        id: 3,
        icon: 'mdi-bell',
        title: 'Alerts',
        to: '/alerts'
      }
    ]
  })
}
</script>
