<template>
  <div>
    <v-dialog v-model="visible" width="640">
      <v-card>
          <v-card-title>{{title}}</v-card-title>
          <v-card-text>
            <v-container fluid>
              <v-text-field :label="label_name" v-model="value_name" auto-grow @keyup.esc="close()"/>
            </v-container>
          </v-card-text>
          <v-card-text>
            <v-container fluid>
              <v-textarea :label="label_description" v-model="value_description" rows="1" auto-grow @keyup.esc="close()"/>
            </v-container>
          </v-card-text>
          <v-container fluid>
            <v-layout>
                <v-flex class="pa-2">
                    <v-autocomplete :label="label_ingredient" v-model="value_ingredient" :options="value_ingredients" :item-text="'name'"></v-autocomplete>
                </v-flex>
                <v-flex class="pa-2">
                    <v-text-field :label="label_quantity" v-model="value_quantity" auto-grow @keyup.esc="close()"/>
                </v-flex>
                <v-flex>
                    <v-btn class="rounded-btn" color="blue" @click="addIngredient(value_ingredient, value_quantity)">Adicionar</v-btn>
                </v-flex>
            </v-layout>
            <ul v-for="added_ingredient in added_ingredients" :key="added_ingredient.id">
                <li>{{added_ingredient.material}} ({{added_ingredient.quantity}} {{added_ingredient.type}})</li>
            </ul>
          </v-container>
          <v-card-text>
            <v-container fluid>
              <v-textarea :label="label_tutorial" v-model="value_tutorial" auto-grow rows="1" @keyup.esc="close()"/>
            </v-container>
          </v-card-text>
          <v-btn class="rounded-btn" color="red" @click="close()">Cancelar</v-btn>
          <v-btn class="rounded-btn" color="blue" @click="ok()" :loading="loading" :disabled="loading">{{action}}</v-btn>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>

export default {
  data () {
    return {
      visible: false,
      title: '',
      label_name: '',
      label_description: '',
      label_ingredient: '',
      label_quantity: '',
      label_tutorial: '',
      value_name: '',
      value_description: '',
      value_ingredient: '',
      value_ingredients: [],
      value_quantity: '',
      value_quantities: [],
      value_tutorial: '',
      added_ingredients: [],
      action: 'OK',
      actionFunc: null,
      loading: false,
      searchInput: '',
    };
  },
  methods: {
    open(opts){
      opts = opts || {}
      this.visible = true
      this.loading = false
      this.title = opts.title || ''
      this.label_name = opts.label_name || ''
      this.label_description = opts.label_description || ''
      this.label_ingredient = opts.label_ingredient || ''
      this.label_quantity = opts.label_quantity || ''
      this.label_tutorial = opts.label_tutorial || ''
      this.value_name = opts.value_name || ''
      this.value_description = opts.value_description || ''
      this.value_ingredients = opts.value_ingredients || []
      this.value_tutorial = opts.value_tutorial || ''
      this.action = opts.action || 'OK'
      this.actionFunc = opts.actionFunc
    },
    close () {
      this.visible = false
      this.loading = false
    },
    ok () {
      var recipe = {
          name: this.value_name,
          description: this.value_description,
          tutorial: this.value_tutorial,
          image: 'https://vejario.abril.com.br/wp-content/uploads/2016/12/ovo-cozido.jpg?quality=70&strip=all'
      }
      this.loading = true
      this.actionFunc(recipe, this.added_ingredients).finally(() => {
        this.close()
      })
    },
    addIngredient (ingredient, quantity) {
      var ingredientObj = {
          material: ingredient,
          quantity: quantity,
          type: 'unidade(s)'
      }
      this.added_ingredients.push(ingredientObj)
      this.value_ingredient = ''
      this.value_quantity = ''
    }
  },
}
</script>