<template>
  <v-app>
      <v-parallax height="250" src="./assets/fondos/fondo1.jpg">
      <v-row class="my-auto  d-flex px-5">

        <v-col>
          <router-link to="/">
          <v-img contain src="./assets/logo.png" max-width="200" class="pt-8"></v-img>
          </router-link>
        </v-col>

        <v-col  class="px-6">
        </v-col>

        <v-col  class="mx-1 my-auto ">
          <v-btn color="cyan lighten-1 white--text" elevation="5"
          block large
          href="/"
          >
          Home
          </v-btn>
        </v-col>

        <v-col class="mx-1 my-auto ">
          <v-btn color="cyan lighten-1  white--text" elevation="5"
          block large
          href="/habitacionesview"
          >
          Habitaciones
          </v-btn>
        </v-col>

        <v-col class="mx-1 my-auto ">
          <v-btn color="cyan lighten-1 white--text" elevation="5"
          href="/reservasview"
          block large
          >
          Reservar
          </v-btn>
        </v-col>

        <v-col class="mx-auto my-auto ">
          <v-btn color="cyan lighten-1 white--text" elevation="5"
          href="/contactoview"
          block large
          >
          Contactenos
          </v-btn>
        </v-col>
      </v-row>
      </v-parallax>
      <router-view/>
      

    <v-footer dark padless>
      <v-card class="flex" flat tile>
        <v-card-title class="teal cyan lighten-1">
          <strong class="subheading"
            >Footer</strong
          >
                    <v-spacer></v-spacer>
          <v-col class="mx-1 my-auto ">
          <v-btn color="cyan lighten-1 white--text" elevation="5"
          href="/adminview"
          block large
          >
          Admin Reservas
          </v-btn>
        </v-col>
         <v-col class="mx-1 my-auto ">
          <v-btn color="cyan lighten-1 white--text" elevation="5"
          href="/adminMensaje"
          block large
          >
          Admin Mensajes
          </v-btn>
        </v-col>
        </v-card-title>

        <v-card-text class="py-2 white--text text-center">
          {{ new Date().getFullYear() }} — <strong>Hotel</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({
  }),
};
</script>


