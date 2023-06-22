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
  
        <v-main style="height: 100vh; overflow: auto; background: url(https://w.forfun.com/fetch/28/287e50df33083d6db0ef98a31f3e34c7.jpeg); background-size: 100%;"> 
  
          <h1 class="text-center mt-10 text-h1 font-italic" style="color: #fff;">Contactame</h1>
          <div style="width: 100%;" class="d-flex justify-space-evenly flex-wrap my-10">

            <formulario></formulario>
             
          </div>
          <p class="text-right ma-3" style="color: #fff;"> El formulario solo es un simulacro. </p>
          
        </v-main>
  
      </v-layout>
    </v-card>
</template>
    
<script setup>
   
  import formulario from '@/components/Contact/Form.vue'
 
</script>