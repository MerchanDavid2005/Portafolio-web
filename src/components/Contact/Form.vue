<template>
    <v-sheet width="600" class="mx-auto pa-10 rounded-xl rounded-be-0">
      <v-form fast-fail @submit.prevent ref="form">
        <v-text-field
          v-model="firstName"
          label="Nombre"
          :rules="firstNameRules"
          required
        ></v-text-field>
  
        <v-text-field
          v-model="email"
          label="Email"
          :rules="emailRules"
          required
        ></v-text-field>

        <v-text-field
          v-model="phone"
          label="Telefono"
          :rules="phoneRules"
          required
        ></v-text-field>

        <v-textarea v-model="message" label="Mensaje" :rules="messageRules" required variant="solo-filled"></v-textarea>
  
        <v-btn block class="my-5" color="success" append-icon="mdi-checkbox-marked-circle" @click="enviar">Enviar</v-btn>
        
        <v-dialog v-model="dialogOne" width="auto">

          <v-alert type="success" title="Gracias" text="El mensaje fue enviado exitosamente, gracias por tu apoyo">

            <v-btn class="my-3" color="transparent" block @click="dialogOne = false">Aceptar</v-btn>

          </v-alert>

        </v-dialog>

        <v-dialog v-model="dialogTwo" width="auto">

          <v-alert type="error" title="Error" text="El mensaje no fue enviado exitosamente, por favor rellena bien el formulario">

            <v-btn class="my-3" color="transparent" block @click="dialogTwo = false">Cerrar</v-btn>

          </v-alert>

        </v-dialog>

        <v-btn block class="my-3" color="red" append-icon="mdi-cancel" @click="reset">Limpiar</v-btn>
      </v-form>
    </v-sheet>
</template>

<script>
  export default {
    data: () => ({
      dialogOne: false,
      dialogTwo: false,
      firstName: '',
      firstNameRules: [
        value => {
          if (value?.length > 3 && /[^0-9]/.test(value)) return true

          return 'El nombre debe tener almenos 3 caracteres.'
        },
      ],
      email: '',
      emailRules: [
        value => {
          if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true

          return 'Introduce un email valido y sin numeros'
        }
      ],
      phone: '',
      phoneRules: [
        value => {
            if (value?.length > 9 && /[0-9-]+/.test(value)) return true

            return 'El telefono debe tener mas de 9 digitos.'
        }
      ],
      message: '',
      messageRules: [
        value => {
          if (value?.length > 10 && value?.length < 300) return true

          return 'El mensaje debe ser de mas de 10 caracteres y menor a 300 caracteres'
        }
      ]
    }),

    methods: {
      async enviar() {
        const { valid } = await this.$refs.form.validate()

        if (valid) this.dialogOne = true

        else this.dialogTwo = true
      },
      reset(){
        this.$refs.form.reset()
      }
    }
  }
</script>

