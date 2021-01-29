<template>
  <v-container>
    <v-layout row class="d-flex justify-space-around mb-6">
      <v-flex v-for="weekday in days">
        <meals :meal_list="weekday.meal_list" :weekday="weekday.name" :day="weekday.day" style="background:#26c6da"></meals>
      </v-flex>
    </v-layout>
    <div class="text-xs-center">
        <v-btn class="rounded-btn" primary @click="generateList()">
            Gerar Lista de Compras
        </v-btn>
    </div>
    <div class="spaced-btn">
        <v-btn class="rounded-btn" primary :href="previousUrl">
            Semana Anterior
        </v-btn>
        <v-btn class="rounded-btn" primary :href="nextUrl">
            Próxima Semana
        </v-btn>
    </div>
  </v-container>
</template>

<script>

import meals from '~/components/meals.vue'

export default {
  components: {
    meals: meals,
  },
  props: ["card_info", "date"],
  methods: {
      generateList(){
        var list = {}
        for(var card in this.card_info){
            for(var meal in this.card_info[card].meal_list){
                for(var ingredient in this.card_info[card].meal_list[meal].recipe.ingredients){
                    console.log(this.card_info[card].meal_list[meal].recipe.ingredients[ingredient].name)
                    list[this.card_info[card].meal_list[meal].recipe.ingredients[ingredient].name] = list[this.card_info[card].meal_list[meal].recipe.ingredients[ingredient].name] ? list[this.card_info[card].meal_list[meal].recipe.ingredients[ingredient].name] + this.card_info[card].meal_list[meal].recipe.ingredients[ingredient].quantity : this.card_info[card].meal_list[meal].recipe.ingredients[ingredient].quantity
                }
            }
        }
        var clean_list = []
        for (var i in list){
            var obj = {}
            obj.name = i
            obj.quantity = list[i]
            obj.done = false
            clean_list.push(obj)
        }
        console.log(list)
        console.log(clean_list)
    }
  },
  data () {
    var hoje = new Date(this.date);
    console.log(this.date)
    hoje.setDate(hoje.getDate() + 1 - (hoje.getDay()==0 ? 7 : hoje.getDay()))
    console.log(hoje)
    var days = [hoje.toLocaleDateString()]
    for (var i=1; i<7; i++){
        hoje = new Date(hoje)
        hoje.setDate(hoje.getDate() + 1)
        days.push(hoje.toLocaleDateString())
    }
    var nextWeek = (new Date(hoje.setDate(hoje.getDate() + 1))).toLocaleString()
    var previousWeek = (new Date(hoje.setDate(hoje.getDate() - 14))).toLocaleString()

    return {
        days: [
            {name: "Segunda-Feira", day: this.card_info[0].date, meal_list: this.card_info[0].meal_list},
            {name: "Terça-Feira", day: this.card_info[1].date, meal_list: this.card_info[1].meal_list},
            {name: "Quarta-Feira", day: this.card_info[2].date, meal_list: this.card_info[2].meal_list},
            {name: "Quinta-Feira", day: this.card_info[3].date, meal_list: this.card_info[3].meal_list},
            {name: "Sexta-Feira", day: this.card_info[4].date, meal_list: this.card_info[4].meal_list},
            {name: "Sábado", day: this.card_info[5].date, meal_list: this.card_info[5].meal_list},
            {name: "Domingo", day: this.card_info[6].date, meal_list: this.card_info[6].meal_list}
        ],
        nextWeek: nextWeek,
        previousWeek: previousWeek
    }
  },
  computed: {
      nextUrl(){
          return 'cards?day='+this.nextWeek;
      },
      previousUrl(){
          return 'cards?day='+this.previousWeek;
      },
  }
}
</script>

<style>
</style>
