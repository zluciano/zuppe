<template>
  <h1>Edite sua {{ day }}</h1>
</template>

<script>

export default {
  asyncData (context) {
      return  {
          day: context.params.day
    }
  },
  data () {
    return {}
  }
}
</script>

<style>
</style>
