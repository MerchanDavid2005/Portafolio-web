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
  
        <v-main style="height: 100vh; overflow: auto; background: url(https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80); background-size: 100%;"> 
  
         <h1 class="text-center mt-10 text-h1 text-white font-italic">Creditos</h1>
         <div style="width: 100%" class="d-flex justify-space-evenly flex-wrap my-10">
 
          <references></references>
             
         </div>
          
        </v-main>
  
      </v-layout>
    </v-card>
 
</template>
    
<script setup>

  import references from '@/components/Credits/Credits.vue'
 
</script>
 
 