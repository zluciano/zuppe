<template>
  <recipes :recipe_list="recipe_list" :day="day"></recipes>
</template>

<script>

import recipes from '~/components/add-recipes.vue'
import AppApi from '~apijs'

export default {
  components: {
    recipes: recipes,
  },
  asyncData (context) {
      return AppApi.list_recipes().then(result => {
        return {
            recipe_list: result.data.recipes,
            day: context.query.day
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
