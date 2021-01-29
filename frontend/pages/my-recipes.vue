<template>
  <recipes :recipe_list="recipe_list"></recipes>
</template>

<script>

import recipes from '~/components/recipes.vue'
import AppApi from '~apijs'

export default {
  components: {
    recipes: recipes,
  },
  asyncData () {
      return AppApi.list_my_recipes().then(result => {
        return {
            recipe_list: result.data.my_recipes
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
