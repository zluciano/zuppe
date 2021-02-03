<template>
    <div>
        <v-btn color="blue" block @click="gorecipe()">Nova receita</v-btn>
        <textarea-dialog ref="newrecipedialog"></textarea-dialog>
    </div>
</template>

<script>

import textareaDialog from '~/components/TextareaDialog.vue'
import AppApi from '~apijs'

export default {
    props: ["material_list"],
    components: {
        textareaDialog
    },
    data () {
        return {}
    },
    methods: {
        gorecipe () {
            return this.$refs.newrecipedialog.open({
                title: 'Nova receita',
                label_name: 'Nome',
                label_description: 'Descrição',
                label_tutorial: 'Modo de preparo',
                label_ingredient: 'Ingrediente',
                label_quantity: 'Quantidade',
                value_name: '',
                value_description: '',
                value_tutorial: '',
                value_ingredients: this.material_list,
                action: 'Salvar',
                actionFunc: (recipe, ingredients) => {
                    return AppApi.new_recipe(JSON.stringify(recipe), JSON.stringify(ingredients)).then(result => {
                        console.log(result)
                    })
                }
            })
        }
    }
}
</script>

<style>
</style>
