<template>
  <v-dialog v-model="visible" max-width="500px">
    <v-card v-if="meal.recipe">
        <v-toolbar>
            <h1>Detalhes de {{ meal.recipe.name }}</h1>
        </v-toolbar>
        <div>
            <h2>Ingredientes</h2>
            <p v-bind:key="meal.id" v-for="ingredient in meal.recipe.ingredients"> - {{ ingredient.name }}</p>
        </div>
    </v-card>
  </v-dialog>
</template>

<script>

import AppApi from '~apijs'

export default {
  data () {
    var meal = {}
    console.log('data');
    return {
      visible: false,
      meal: meal
    };
  },
  methods: {
    open(meal){
      this.visible = true;
      this.meal = meal;
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

.flat-card{
    height: 20;
}

</style>