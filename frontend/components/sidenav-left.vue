<template>
  <v-navigation-drawer fixed v-model="state.drawer" app>
    <v-list dense>
      <img src="~/assets/zuppe.png" size="100">
      <v-list-tile :to="{ name: 'index'}">
        <v-list-tile-action>
          <v-icon>mdi-home</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Página inicial</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile><v-list-tile :to="{ name: 'profile-user', params: {user: 'Jose Luciano'} }">
        <v-list-tile-action>
          <v-icon>mdi-account</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Conta</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile :to="{ name: 'groceries' }">
        <v-list-tile-action>
          <v-icon>mdi-cart</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Lista de compras</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile href="/my-recipes">
        <v-list-tile-action>
          <v-icon>mdi-blender</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Suas receitas</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile href="/all-recipes">
        <v-list-tile-action>
          <v-icon>mdi-map-search</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Todas as receitas</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>

  import '@mdi/font/css/materialdesignicons.css'
  export default {
    props: ['state']
  }
</script>