<template>

    <div class="my-10 d-flex flex-wrap" style="margin: auto; width: 90%; color: white;">

        <h1 style="width: 100%; color: #0af;" class="text-center my-5 text-h2 font-italic">Fruteria LAMWL</h1>

        <p style="width: 100%;" class="text-center my-5 text-h6"> Fruteria LAMWL fue mi primer proyecto usando las tecnologias de Vue, fue un proyecto sencillo y rapido para ir aprendiendo poco a poco sobre Vue, realizado con Vue, html y css </p>
        <p style="width: 100%;" class="text-center my-5 text-h6">Es una pagina web en la que puedes comprar frutas, la cantidad que desees, estas se guardaran en el local storage, tendras un apartado donde podras ver las compras realizadas y tambien podras realizar pedidos de las frutas que desees que esten en la pagina, tambien tendras un apartado donde podras ver los pedidos que has realizado, puedes visitar mi pagina por medio del siguiente link <a href="https://github.com/MerchanDavid2005/Fruteria_LAMWL.git" target="blank" style="color: #00f;"> Fruteria LAMWL </a> </p>

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
                src: './src/assets/project2/img1.jpg',
            },
            {
                src: './src/assets/project2/img2.jpg',
            },
            {
                src: './src/assets/project2/img3.jpg',
            },
            {
                src: './src/assets/project2/img4.jpg',
            },
            {
                src: './src/assets/project2/img5.jpg',
            },

        ],
    }
    },
}
</script>