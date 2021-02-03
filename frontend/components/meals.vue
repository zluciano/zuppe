<template>
  <v-list single-line active>
      <div>
        <v-card class="ma-2 elevation-2 rounded-card" min-width="130px">
        <v-toolbar class="elevation-2 d-flex no-wrap text-xs-center">
            {{ weekday }}<br>
            {{ day }}
        </v-toolbar>
            <template v-for="meal in meal_list">
                <v-list-tile v-if="meal.recipe.name" class="hovering rounded-card">
                    <v-list-tile-action v-bind:key="meal.id" @click="open_recipe_details($event, meal)">
                        <v-list-tile-content>
                            <v-list-tile-sub-title>{{ meal.recipe.name }}</v-list-tile-sub-title>
                        </v-list-tile-content>
                    </v-list-tile-action>
                </v-list-tile>
                <v-list-tile v-else class="hovering rounded-card">
                    <v-list-tile-action v-bind:key="meal.id" @click="open_add_recipes($event)">
                        <v-list-tile-content>
                            <v-list-tile-sub-title>Adicionar</v-list-tile-sub-title>
                        </v-list-tile-content>
                    </v-list-tile-action>
                </v-list-tile>
                <v-divider></v-divider>
            </template>
        </v-card>
      </div>
      <recipe-details ref="recipe_details"/>
      <add-recipes ref="add_recipes"/>
  </v-list>
</template>

<script>

import recipeDetails from '~/components/recipe-details.vue'
import recipes from '~/components/recipes.vue';
import addRecipes from '~/components/add-recipes.vue';
import AppApi from '~apijs'

  export default {
    components: {
      recipeDetails,
      recipes,
      addRecipes,
        
    },
    props: ["meal_list", "weekday", "day", "recipe_list"],
    data: () => ({
    }),
    methods: {
      open_recipe_details (evt, meal) {
        this.$refs.recipe_details.open(meal);
        evt.stopPropagation();
      },
      open_add_recipes (evt) {
        this.$refs.add_recipes.open(new Date(this.day), this.recipe_list);
        evt.stopPropagation();
      },
    },
    computed: {
      assign_meal () {
          return 'assign-meal/?day='+(new Date(this.day)).toISOString()
      }
    }
  }
</script>

<style>
</style>
