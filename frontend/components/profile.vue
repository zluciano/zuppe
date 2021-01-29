<template>
  <usercard :user="user"></usercard>
</template>

<script>

import usercard from '~/components/usercard.vue'

export default {
  components: {
    usercard
  },
  props: ["user"],
  data () {
    return {}
  }
}
</script>

<style>
</style>
