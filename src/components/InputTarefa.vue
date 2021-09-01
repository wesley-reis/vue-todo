<template>
  <div>
    <v-col
    cols="12"
    >
      <v-text-field
        v-model="campoInput"
        label="Qual sua tarefa?"
        placeholder="Digite sua tarefa"
        clearable
        @keyup.enter="handleAddTarefa"
      ></v-text-field>
    </v-col>
  </div>
</template>

<script>
export default {
    data(){
      return{
        campoInput: null,
      }
    },
    methods:{
      handleAddTarefa(){
        this.$store.dispatch('adicionaTarefa', this.campoInput)
        this.campoInput = null;
      }
    }
}
</script>

<style>

</style>