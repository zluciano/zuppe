<template>
  <home :card_info="card_info" :date="date"></home>
</template>

<script>

import home from '~/components/home.vue'
import AppApi from '~apijs'

export default {
  components: {
    home: home,
  },
  asyncData (context) {
      var date = new Date(context.query.day)
      return Promise.all([
          AppApi.list_meals(date.toISOString()),
          AppApi.list_recipes()
      ]).then(results => {
        return {
            card_info: results[0].data.meals,
            date: date,
            recipe_list: results[1].data.recipes
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
