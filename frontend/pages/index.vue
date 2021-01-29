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
  asyncData () {
      return AppApi.list_meals().then(result => {
        return {
            card_info: result.data.data,
            date: new Date()
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
