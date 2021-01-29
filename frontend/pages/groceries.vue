<template>
  <v-card>
    <v-toolbar color="cyan" dark>
      <v-text-field class="ma-4" v-model="newtask" @keyup.enter="add()" label="Adicione um novo item" :loading="adding"/>
    </v-toolbar>
    <v-progress-linear :indeterminate="true" v-if="loading"></v-progress-linear>
    <v-list single-line>
      <template v-for="item in items">
        <v-list-tile :key="item.title">
          <v-list-tile-action>
            <v-checkbox v-model="item.done"/>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title :class="{done: item.done}" >
              {{item.name}} ({{ item.quantity }} {{ item.type }})
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </template>
    </v-list>
  </v-card>
</template>

<script>
import AppApi from '~apijs'
export default {
  asyncData (ctx) {
      return {
          gitems: ctx.params.list
      }
  },
  data () {
    return {
      newtask: '',
      adding: false,
      loading: false,
      items: []
    }
  },
  mounted (context) {
    this.loading = true
    AppApi.list_groceries().then(response => {
      const groceries = response.data.groceries
      this.items = groceries
      this.loading = false
    })
  },
  methods: {
    add () {
      this.adding = true
      AppApi.add_grocery(this.newtask).then(response => {
        const grocery = response.data
        this.items.push(grocery)
        this.newtask = ''
        this.adding = false
      })
    }
  }
}
</script>

<style scoped>
  .done {
    text-decoration: line-through;
  }
</style>
