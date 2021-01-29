<template>
  <profile :user="user"></profile>
</template>

<script>

import profile from '~/components/profile.vue'

export default {
  components: {
      profile
  },
  asyncData (context) {
      return  {
        user: {
            username: context.params.user,
        },
    }
  },
  data () {
    return {}
  }
}
</script>

<style>
</style>
