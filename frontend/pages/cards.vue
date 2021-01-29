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
      return AppApi.list_meals(context.query.day).then(result => {
        return {
            card_info: result.data.data,
            date: Date.parse(context.query.day)
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
