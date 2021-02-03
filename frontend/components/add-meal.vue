<template>
  <v-list single-line>
      <template v-for="recipe in recipe_list">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img :src="recipe.image">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title v-html="recipe.name"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider></v-divider>
      </template>
    </v-list>
</template>

<script>
  export default {
    data: () => ({}),
    methods: {
        open(meal, recipe_list){
        this.visible = true;
        this.meal = meal;
        this.recipe_list = recipe_list;
        console.log('Open');
        },
        close(){
        this.visible = false;
        console.log('Close');
        },
    },
  }
</script>

<style>
</style>
