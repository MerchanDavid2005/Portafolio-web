<template>

  <div class="my-10 d-flex flex-wrap" style="margin: auto; width: 90%; color: white;">

    <h1 style="width: 100%; color: #0af;" class="text-center my-5 text-h2 font-italic">The world gamer</h1>

    <p style="width: 100%;" class="text-center my-5 text-h6">The world gamer fue mi primer proyecto y mas grande proyecto hasta el momento, fue creado con tecnologias de django, javascript, css y html, fue mi primer gran avance en este mundo del desarrollo web</p>
    <p style="width: 100%;" class="text-center my-5 text-h6">Es una pagina web para gamers donde puedes registrarte y alquilar juegos por X tiempo disponible por juego, ademas de esto podras realizar pedidos de videojuegos para que el juego que quieras este en esta plataforma, puedes visitar mi pagina por medio del siguiente link <a href="https://github.com/MerchanDavid2005/TheWorldGamer.git" target="blank" style="color: #00f;"> TheWorldGamer </a> </p>

    <v-carousel hide-delimiters style="width: 90%; height: 700px; margin: auto;">
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>

  </div>

</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: './src/assets/project1/img1.jpg',
          },
          {
            src: './src/assets/project1/img2.jpg',
          },
          {
            src: './src/assets/project1/img3.jpg',
          },
          {
            src: './src/assets/project1/img4.jpg',
          },
          {
            src: './src/assets/project1/img5.jpg',
          },
          {
            src: './src/assets/project1/img6.jpg',
          },
          {
            src: './src/assets/project1/img7.jpg',
          },
        ],
      }
    },
  }
</script>


  


