<template>
  <v-card color="blue" class="white--text">
      <v-container fluid grid-list-lg>
          <v-layout row>
              <v-flex xs7>
                  <div class="headline">
                      <div>Usuario</div>
                  </div>
              </v-flex>
              <v-flex xs5>
                  <v-avatar size="100">
                      <img src="https://i.pinimg.com/originals/2a/df/fb/2adffbee6e939b2bd1e32ffa8c763308.jpg">
                  </v-avatar>
              </v-flex>
          </v-layout>
      </v-container>
  </v-card>
</template>

<script>

export default {
  components: {
    
  },
  props: ["user"],
  data () {
    return {}
  }
}
</script>

<style>
</style>
