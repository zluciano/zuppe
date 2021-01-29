<template>
  <h1>Edite seu {{ meal }}</h1>
</template>

<script>

export default {
  asyncData (context) {
      return  {
          meal: context.params.meal
    }
  },
  data () {
    return {}
  }
}
</script>

<style>
</style>
