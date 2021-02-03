<template>
  <dayCards :card_info="card_info" :date="date" :recipe_list="recipe_list"></dayCards>
</template>

<script>

import dayCards from '~/components/dayCards.vue'

export default {
  components: {
    dayCards: dayCards,
  },
  props: ["card_info", "date", "recipe_list"],
  data () {
    return {}
  }
}
</script>

<style>
</style>
