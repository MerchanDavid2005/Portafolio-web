<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer
        image="https://fondosmil.com/fondo/32009.jpg"
        expand-on-hover
        rail
        class="xs12 sm6 md4 lg3"
        permanent
      >
        <v-list class="my-2 text-white">
          <v-list-item prepend-icon="mdi-star" title="Portafolio"></v-list-item>

          <v-divider class="text-white my-5"></v-divider>

          <v-list-item
            prepend-avatar="../assets/kirby.jpg"
            title="LAMWL"
            subtitle="LAMWL@gmail.com"
          ></v-list-item>
        </v-list>

        <v-divider class="text-white"></v-divider>
        
        <v-list class="text-white my-2" density="compact" nav>

          <router-link style="text-decoration: none; color: #fff;" to="/"> <v-list-item class="my-2" prepend-icon="mdi-home" title="Inicio" value="myfiles"></v-list-item> </router-link> 
          <router-link style="text-decoration: none; color: #fff;" to="/Projects"> <v-list-item class="my-2" prepend-icon="mdi-folder" title="Mis proyectos" value="myfiles"></v-list-item> </router-link>
          <router-link style="text-decoration: none; color: #fff;" to="/PrivLife"> <v-list-item class="my-2" prepend-icon="mdi-account-circle" title="Vida personal" value="shared"></v-list-item> </router-link>
          <router-link style="text-decoration: none; color: #fff;" to="/Contact"> <v-list-item class="my-2" prepend-icon="mdi-email" title="Contactame" value="starred"></v-list-item> </router-link>
          <router-link style="text-decoration: none; color: #fff;" to="/Credits"> <v-list-item class="my-2" prepend-icon="mdi-alert-circle-outline" title="Creditos" value="starred"></v-list-item> </router-link>

        </v-list>
      </v-navigation-drawer>

      <v-main style="height: 100vh; overflow: auto; background: url(https://c.wallhere.com/photos/53/4a/planet-148154.jpg!d); background-size: cover;"> 

        <h1 class="text-center mt-10 text-h1 font-italic" style="color: #fff;">Mis proyectos</h1>
        <div style="width: 100%" class="d-flex justify-space-evenly flex-wrap my-10">
          <ProjectsUno></ProjectsUno>
          <ProjectsDos></ProjectsDos>
        </div>
        

      </v-main>

    </v-layout>
  </v-card>
</template>
  
<script setup>
  import ProjectsUno from '@/components/Projects/Projects1.vue'
  import ProjectsDos from '@/components/Projects/Projects2.vue'
</script>


