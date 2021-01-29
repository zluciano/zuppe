<template>
  <v-list single-line active>
      <div>
        <v-card class="ma-2 elevation-2 rounded-card" min-width="130px">
        <v-toolbar class="elevation-2 d-flex no-wrap text-xs-center">
            {{ weekday }}<br>
            {{ day }}
        </v-toolbar>
            <template v-for="meal in meal_list">
                <v-list-tile class="hovering rounded-card">
                    <v-list-tile-action v-bind:key="meal.id" @click="open_recipe_details($event, meal)">
                        <v-list-tile-content>
                            <v-list-tile-sub-title>{{ meal.recipe.name }}</v-list-tile-sub-title>
                        </v-list-tile-content>
                    </v-list-tile-action>
                </v-list-tile>
                <v-divider></v-divider>
            </template>
        </v-card>
      </div>
      <recipe-details ref="recipe_details"/>
  </v-list>
</template>

<script>

import recipeDetails from '~/components/recipe-details.vue'

  export default {
    components: {
      recipeDetails
    },
    props: ["meal_list", "weekday", "day"],
    data: () => ({}),
    methods: {
      open_recipe_details (evt, meal) {
        this.$refs.recipe_details.open(meal);
        evt.stopPropagation();
      },
    }
  }
</script>

<style>
</style>
