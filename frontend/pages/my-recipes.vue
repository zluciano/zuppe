<template>
  <div>
    <new-recipe :material_list="material_list"></new-recipe>
    <recipes :recipe_list="recipe_list"></recipes>
  </div>
</template>

<script>

import recipes from '~/components/recipes.vue'
import AppApi from '~apijs'
import NewRecipe from '~/components/new-recipe.vue'

export default {
  components: {
    recipes: recipes,
    NewRecipe
  },
  asyncData () {
      return Promise.all([
          AppApi.list_recipes(),
          AppApi.list_materials()
      ]).then(results => {
        return {
            recipe_list: results[0].data.recipes,
            material_list: results[1].data.materials
        }
    })
  },
  data () {
    return {}
  },
}
</script>

<style>
</style>
