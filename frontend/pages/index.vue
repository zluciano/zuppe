<template>
  <home :card_info="card_info" :date="date" :recipe_list="recipe_list"></home>
</template>

<script>

import home from '~/components/home.vue'
import AppApi from '~apijs'

export default {
  components: {
    home: home,
  },
  asyncData () {
      var date = new Date()
      return Promise.all([
          AppApi.list_recipes()
      ]).then(results => {
        return {
            card_info: [[],[],[],[],[],[],[]],
            date: date,
            recipe_list: results[0].data.recipes
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
