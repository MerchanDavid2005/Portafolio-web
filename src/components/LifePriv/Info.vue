<template>

    <v-card style="width: 40%; height: max-content;" class="text-center pa-5 bg-transparent" >
        <v-card-title class="text-h2 my-10 text-white font-weight-black font-italic"> Yo </v-card-title>
        <v-card-text class="text-h6 text-white"> Hola, mi nombre es David y soy un estudiante de un instituto de Colombia llamado Sena, empece a programar hace 8 meses de forma autonoma por internet, empezando por python he ido aprendiendo y adentrandome cada vez mas en este mundo de la programacion asi llegando a aprender diferentes tecnologias como CSS, Javascript, Python, Ruby etc. Tambien he aprendido sobre los diferentes frameworks de estos como son Django, Boostrap, Vue y Ruby on rails y dia a dia seguire aprendiendo mas y mas sobre este gran mundo de la programacion </v-card-text>
        <v-btn class="my-5" @click="textoDos = true"> Mas informacion</v-btn>
        <v-dialog v-model="textoDos" width="50%" class="pa-5">

            <v-alert type="info" title="Informacion"> Tambien tengo una cuenta Github el siguiente enlace te llevara a mi perfil, <a href="https://github.com/MerchanDavid2005" target="_blank"> click aqui </a> 
                <br>
                <v-btn class="my-3" @click="textoDos = false">Cerrar</v-btn>
            </v-alert>

        </v-dialog>
    </v-card>

    <v-card style="width: 40%; height: max-content;" class="text-center pa-5 bg-transparent" >
        <v-card-title class="text-h2 my-10 text-white font-weight-black font-italic"> Como soy </v-card-title>
        <v-card-text class="text-h6 text-white"> Soy una persona muy atraida por los retos mentales, me gusta el ajedrez, sudoku, tetris etc. juegos en los que me ponen a prueba mentalmente ya sea para crear estrategias o de agilidad mental, por esta razon soy una persona que le gusta programar, me gusta el reto mental que esta puede traer dia a dia y las muchas formas de resolver los problemas sean de formas mas simples unas que otras no cabe dudad que siempre tendra un toque en el que nos ponga a pensar el como resolver el problema </v-card-text>
        <v-btn class="my-5" @click="textoUno = true"> Mas informacion</v-btn>
        <v-dialog v-model="textoUno" width="50%" class="pa-5">

            <v-alert type="info" title="Informacion"> Si te interesa el ajedrez puedes buscarme en la plataforma <a href="https://chess.com" target="_blank">Chess.com</a> Como LAMWL
                <br>
                <v-btn class="my-3" @click="textoUno = false">Cerrar</v-btn>
            </v-alert>

        </v-dialog>
    </v-card>

    

</template>

<script>

    export default{

        data: () => ({

            textoUno: false,
            textoDos: false,

        })

    }

</script>