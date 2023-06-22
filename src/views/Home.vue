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

      <v-main style="height: 100vh"> 

        <v-carousel hide-delimiters style="height: 100vh; color: #fff;">
            <v-carousel-item
              src="https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2017/03/Fondos-de-pantalla-espaciales-44.jpg?fit=1920%2C1080&quality=50&strip=all&ssl=1"
              cover
              >
                
              <Life></Life>

            </v-carousel-item>

            <v-carousel-item
              src="https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_1280.jpg"
              cover
              >

              <LifeDev></LifeDev>

            </v-carousel-item>

            <v-carousel-item
              src="https://images.pexels.com/photos/110854/pexels-photo-110854.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              cover
              >

              <LifeQuestion></LifeQuestion>
                
            </v-carousel-item>
        </v-carousel>

      </v-main>

    </v-layout>
  </v-card>

</template>

<script setup>
  import LifeDev from '@/components/Home/LifeDev.vue'
  import LifeQuestion from '@/components/Home/LifeQuestion.vue'
  import Life from '@/components/Home/Life.vue'
</script>


