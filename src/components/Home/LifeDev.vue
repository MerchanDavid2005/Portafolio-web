<template>
    
    <h1 class="font-italic text-h2 text-center mt-15"> Yo como desarrollador </h1>
    <p class="font-italic text-h6 text-center my-10"> ¿Como soy en el ambito profesional? </p>

    <div class="d-flex justify-space-evenly my-10" width="100%">
        <v-sheet class="text-center bg-transparent" :height="300" :width="500"> 
        <h1>Virtudes</h1> 
        <v-card
            width="500"
            title="Perseverancia"
            text="Soy una persona que no le gusta rendirse antes los retos que se le impongan"
            class="bg-blue-lighten-2 text-center mt-5"
        ></v-card>
        <v-card
            width="500"
            title="Competente"
            text="Soy alguien que siempre esta avanzando como persona y le gusta superarse todos los dias"
            class="bg-green-lighten-2 text-center mt-5"
        ></v-card>
        <v-card
            width="500"
            title="Amistoso"
            text="Soy alguien que apesar de su alta competitividad no deja que esta le gane en el compañerismo"
            class="bg-orange-lighten-2 text-center mt-5"
        ></v-card>
        </v-sheet>

        <v-sheet class="text-center bg-transparent" :height="300" :width="500"> 
        <h1>Debilidades</h1> 
        <v-card
            width="500"
            title="Pereza"
            text="Soy una persona que muchas veces es esclavo de la pereza y esta me gana cuando se trata de situaciones no tan obligatorias"
            class="bg-brown-lighten-2 text-center mt-5"
        ></v-card>
        <v-card
            width="500"
            title="Torpeza"
            text="Soy alguien que apesar de su disciplina y seguridad comete errores muy seguido de forma muy inconciente y torpemente"
            class="bg-red-lighten-2 text-center mt-5"
        ></v-card>
        <v-card
            width="500"
            title="Estres"
            text="Soy alguien que apesar de su consistencia en el momento de resolver las cosas aveces estos pueden llegar a estresar a puntos mas altos de lo normal"
            class="bg-blue-grey-lighten-2 text-center mt-5"
        ></v-card>
        </v-sheet>
    </div>

</template>

