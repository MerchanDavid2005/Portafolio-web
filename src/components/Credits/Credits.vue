<template>

    <v-card width="80%">

        <v-card-title> Creditos </v-card-title>
        <v-card-subtitle> Referencias </v-card-subtitle>
        <v-card-text> Los fondos de pantalla no son de mi propiedad, si deseas mas informacion acerca de estas imagenes puedes acceder a las fuentes de sus propietarios </v-card-text>
        <v-carousel hide-delimiters>

            <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src" cover>
            
                <p class="ma-2 text-white">Esta imagen fue sacada de la siguiente fuente</p>
                <v-btn class="ma-2" @click="verEnlace(i)">Ver enlace</v-btn>

            </v-carousel-item>

            <v-dialog v-model="referencia" width="60%">

                <v-card class="pa-5">

                    <v-card-title> Enlace </v-card-title>
                    <v-card-text> {{ enlace }} </v-card-text>
                    <v-btn class="ma-5" @click="referencia = false"> Cerrar </v-btn>

                </v-card>

            </v-dialog>

        </v-carousel>

    </v-card>
        

</template>

<script>

    export default{

        data: () => ({

            enlace: '',
            referencia: false,

            items: [

                {
                    nombre: 'referencia',
                    src: 'https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2017/03/Fondos-de-pantalla-espaciales-44.jpg?fit=1920%2C1080&quality=50&strip=all&ssl=1',
                    fuente: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fhipertextual.com%2F2017%2F03%2F53-fondos-pantalla-amantes-del-espacio-la-astronomia&psig=AOvVaw1coDWLFFjjtLZafDfSclPO&ust=1687541163542000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMjwiO-y1_8CFQAAAAAdAAAAABAs'
                },
                {
                    src: 'https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_1280.jpg',
                    fuente: 'https://pixabay.com/es/photos/astronom%C3%ADa-brillante-constelaci%C3%B3n-1867616/'
                },
                {
                    src: 'https://images.pexels.com/photos/110854/pexels-photo-110854.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    fuente: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fes-es%2Ffoto%2Fcielo-noche-espacio-purpura-110854%2F&psig=AOvVaw1coDWLFFjjtLZafDfSclPO&ust=1687541163542000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMjwiO-y1_8CFQAAAAAdAAAAABA-'
                },
                {
                    src: 'https://c.wallhere.com/photos/53/4a/planet-148154.jpg!d',
                    fuente: 'https://earthspacecircle.blogspot.com/p/space-hd-wallpapers.html'
                },
                {
                    src: 'https://www.astro.uantof.cl/wp-content/uploads/2014/12/20130615-milkyway-1200-2.jpg',
                    fuente: 'https://www.astro.uantof.cl/blog/2014/12/03/fondos-quimal-para-desarrollo-de-nueva-tecnologia/'
                },
                {
                    src: 'https://w.forfun.com/fetch/28/287e50df33083d6db0ef98a31f3e34c7.jpeg',
                    fuente: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.wallpaper.mob.org%2Fgallery%2Ftag%3Dastronom%25C3%25ADa%2F&psig=AOvVaw05lbCR0tHNgn2JHtdT936y&ust=1687542412850000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPC7jsK31_8CFQAAAAAdAAAAABAP'
                },
                {
                    src: 'https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80',
                    fuente: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fes%2Fwallpapers%2Fnature%2Fnight-sky&psig=AOvVaw1coDWLFFjjtLZafDfSclPO&ust=1687541163542000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMjwiO-y1_8CFQAAAAAdAAAAABAj'
                }

            ]

        }),

        methods: {

            verEnlace(id){

                if (id == 0) this.enlace = this.items[0].fuente
                else if (id == 1) this.enlace = this.items[1].fuente
                else if (id == 2) this.enlace = this.items[2].fuente
                else if (id == 3) this.enlace = this.items[3].fuente
                else if (id == 4) this.enlace = this.items[4].fuente
                else if (id == 5) this.enlace = this.items[5].fuente
                else if (id == 6) this.enlace = this.items[6].fuente

                this.referencia = true

            },

        }
    }

</script>