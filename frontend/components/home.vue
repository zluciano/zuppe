<template>
  <dayCards :card_info="card_info" :date="date"></dayCards>
</template>

<script>

import dayCards from '~/components/dayCards.vue'

export default {
  components: {
    dayCards: dayCards,
  },
  props: ["card_info", "date"],
  data () {
    return {}
  }
}
</script>

<style>
</style>
