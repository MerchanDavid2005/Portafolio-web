<template>
  
  <h1 class="text-center text-h1 mt-10 font-italic"> Hola mundo </h1>
  <p class="text-center my-15 font-italic text-h6"> Bienvenido a mi portafolio web Development </p>

  <v-card style="width: 1100px; margin: auto" class="bg-deep-purple-darken-4 pa-5 my-15">
    <v-card-title class="text-h4 pa-2"> Bienvenido </v-card-title>
    <v-card-subtitle class="text-h5 pa-2"> ¡Hola Development! </v-card-subtitle>
    <v-card-text class="text-h6 pa-2 my-5"> Bienvenido a mi portafolio web Development, en este portafolio web podras conocerme un poco, soy un joven con amor a la programacion hace 8 meses y que dia a dia aprende mas sobre este mundo del desarrollo web, te agredeceria si pudieras apoyarme dandome tu opinion sobre mi portafolio web y sin mas que decir. ¡bienvenido! </v-card-text>

    <v-dialog v-model="dialogoDos" width="auto">

      <template v-slot:activator="{ props }">
        <v-btn v-bind="props" prepend-icon="mdi-thumb-up" variant="tonal" > Apoyar </v-btn>
      </template>
  
      <v-alert style="width: 400px;" type="success" title="Gracias" text="Gracias por tu apoyo development :D">

        <v-card-actions>
            <v-btn class="mt-2 px-5" variant="tonal" @click="dialogoDos = false"> Cerrar </v-btn>
        </v-card-actions>

      </v-alert>

    </v-dialog>
 
  </v-card>

</template>

<script>

export default {
    data () {
      return {
        dialogoDos: false,
      }
    },
  }

</script>

