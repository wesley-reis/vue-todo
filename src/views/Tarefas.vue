<template>
  <div>
    <ListaDeTarefas />
    <div
    v-if="!$store.state.tarefas.length"
    class="mt-16 animate__animated animate__bounceInUp"
    >
      <center>
        <v-icon
        size="100"
        color="rgb(53, 207, 135)"
        >
          mdi-check-all
        </v-icon>

        <div
        class="tarefa_null"
        >
          Nenhuma tarefa
        </div>

      </center>
    </div>
  </div>
</template>

<script>
import ListaDeTarefas from '../components/tarefas/ListaDeTarefas.vue';

  export default {
    name: 'Home',
    components: {
      ListaDeTarefas
    },
    created(){
      this.$store.commit('buscaTarefas');
    },
  }
</script>
<style>
.tarefa_null{
  font-size: 3rem;
  font-weight: 600;
  background: rgb(36,36,0);
  background-image: linear-gradient(90deg, rgba(36,36,0,0.8183648459383753) 0%, rgb(7, 116, 16) 15%, rgb(248, 244, 7) 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color:transparent;
}
</style>
