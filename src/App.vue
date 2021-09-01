<template>
  <v-app id="inspire">

    <v-navigation-drawer
    v-model="drawer"
    app
    >
    <v-img
    src="./assets/bg.jpg"
    gradient="to top right, rgba(19,84,122,.5), rgba(28,108,199,.8)"
    dark
    class="pt-5 text-center"
    >
      <v-avatar
      size="100"
      >
        <img
          src="https://avatars.githubusercontent.com/u/69157081?s=400&u=9d3fc91beba00c6aa9dc9ee06852a08d8a7e44ea&v=4"
          alt="Wesley"
        >
      </v-avatar>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Minhas Tarefas
          </v-list-item-title>
          <v-list-item-subtitle>
            Lista de tarefas
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-img>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          link
        >
          <v-list-item-icon>
            <v-icon :class="item.class">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      prominent
      height="185"
      color="#fcb69f"
      dark
      src="./assets/bg.jpg"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(28,108,199,.8)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <center>
        <v-app-bar-title
        class="mt-16"
        >
          <InputTarefa />
        </v-app-bar-title>
      </center>

    </v-app-bar>
    

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import InputTarefa from './components/InputTarefa.vue'
  export default {
  components: { InputTarefa },
    data: () => ({ 
      drawer: null,
      items: [
          { title: 'Tarefas', icon: 'mdi-view-dashboard', class:'dash', to:'/' },
          { title: 'Sobre', icon: 'mdi-help-box', class:'about', to:'/sobre'  },
        ],
    }),
  }
</script>
<style scoped>
.dash.v-icon {
    color: #d49fe9;
    background: rgb(36,36,0);
    background: linear-gradient(90deg, rgba(36,36,0,0.8183648459383753) 0%, rgba(109,121,9,1) 35%, rgba(214,0,255,1) 100%);
}

.about.v-icon {
    color: rgba(86, 6, 102, 0.54);
}
</style>