<template>
  <v-container>
    <v-layout row class="d-flex justify-space-around mb-6">
      <v-flex v-for="weekday in days">
        <meals :recipe_list="recipe_list" :meal_list="weekday.meal_list" :weekday="weekday.name" :day="weekday.day" style="background:#26c6da"></meals>
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
  props: ["card_info", "date", "recipe_list"],
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
    var pattern = [
        {
            'time': "Café da manhã",
            'owner': {},
            'recipe': {}
        },
        {
            'time': "Almoço",
            'owner': {},
            'recipe': {}
        },
        {
            'time': "Lanche",
            'owner': {},
            'recipe': {}
        },
        {
            'time': "Jantar",
            'owner': {},
            'recipe': {}
        }
    ]
    var meal_lists = [this.card_info ? this.card_info[0] : []]
    var hoje = new Date(this.date);
    console.log('Date: ', this.date)
    console.log(meal_lists)
    hoje.setDate(hoje.getDate() + 1 - (hoje.getDay()==0 ? 7 : hoje.getDay()))
    console.log(hoje)
    var days = [hoje.toLocaleDateString()]
    for (var i=1; i<7; i++){
        var meal_list = this.card_info ? this.card_info[i] : []
        meal_lists.push(meal_list)
        hoje = new Date(hoje)
        hoje.setDate(hoje.getDate() + 1)
        days.push(hoje.toLocaleDateString())
    }
    var nextWeek = (new Date(hoje.setDate(hoje.getDate() + 1))).toISOString()
    console.log('next week: ', nextWeek)
    var previousWeek = (new Date(hoje.setDate(hoje.getDate() - 14))).toISOString()

    for (var idx in meal_lists){
        var list = []
        Object.assign(list, meal_lists[idx])
        if (list.length == 0){
            Object.assign(list, pattern)
        }
        else{
            if (list[list.length-1]['time'] != pattern[pattern.length-1]['time']){
                var item = {}
                Object.assign(item, pattern[pattern.length-1])
                list.push(item)
            }
            for (var index in pattern){
                if (list[index]['time'] != pattern[index]['time']){
                    var item = {}
                    Object.assign(item, pattern[index])
                    list.splice(index, 0, item)
                }
            }
        }
        Object.assign(meal_lists[idx], list)
    }
    for (var idx in meal_lists){
        if (!meal_lists[idx][0]['day']){
            meal_lists[idx][0]['day']=new Date(days[idx])
            meal_lists[idx][0]['day'].setHours(9, 0, 0)
        }
        else if (!meal_lists[idx][1]['day']){
            meal_lists[idx][1]['day']=new Date(days[idx])
            meal_lists[idx][1]['day'].setHours(12, 0, 0)
        }
        else if (!meal_lists[idx][2]['day']){
            meal_lists[idx][2]['day']=new Date(days[idx])
            meal_lists[idx][2]['day'].setHours(15, 0, 0)
        }
        else if (!meal_lists[idx][3]['day']){
            meal_lists[idx][3]['day']=new Date(days[idx])
            meal_lists[idx][3]['day'].setHours(18, 0, 0)
        }
    }
    console.log(meal_lists)

    return {
        days: [
            {name: "Segunda-Feira", day: days[0], meal_list: meal_lists[0]},
            {name: "Terça-Feira", day: days[1], meal_list: meal_lists[1]},
            {name: "Quarta-Feira", day: days[2], meal_list: meal_lists[2]},
            {name: "Quinta-Feira", day: days[3], meal_list: meal_lists[3]},
            {name: "Sexta-Feira", day: days[4], meal_list: meal_lists[4]},
            {name: "Sábado", day: days[5], meal_list: meal_lists[5]},
            {name: "Domingo", day: days[6], meal_list: meal_lists[6]}
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
