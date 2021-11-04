<template>
    <v-app>
        <v-sheet  class=" mx-16 my-12"
            color="white"
            elevation="6"
            rounded
            height= auto
        >
            <v-row class=" cyan darken-2 mx-auto my-auto rounded-t-lg d-flex px-10 py-6 ">
                <v-img
                max-height="43"
                max-width="auto"
                align-end
                contain
                src="../assets/img/contactenos-b.png"
                ></v-img>
            </v-row>

            <v-row justify="center" class="mx-12 my-auto  d-flex px-10  py-6">
                <form class="mx-16 px-15">
                    <v-container bg fill-height>
                    <v-row class=" d-flex">
                        <v-text-field
                            v-model="mensajes.nombreUser"
                            label="Nombres y Apellidos"
                            required
                        ></v-text-field>
                    </v-row>

                    <v-row>
                        <v-text-field
                            v-model="mensajes.emailUser"
                            label="E-mail"
                            required
                        ></v-text-field>
                    </v-row>

                    <v-row>
                        <v-text-field
                            v-model="mensajes.telefonoUser"
                            label="Teléfono"
                            required
                        ></v-text-field>
                    </v-row>

                    <v-row>
                        <v-textarea
                            v-model="mensajes.mensajeUser"
                            label="Mensaje"
                            required
                        ></v-textarea>
                    </v-row>

                    <v-row justify="center" class="mt-10">
                        <v-btn @click="clear" class="mr-10 cyan darken-1 px-10 ">
                            <span class="white--text">Limpiar</span>
                        </v-btn>
                        <v-btn @click="submit"
                        class="mr-10  cyan darken-1 px-10 mb-4"
                        type="submit"
                        >
                            <span class="white--text">Enviar</span>
                        </v-btn>
                    </v-row>
                    </v-container>
                </form>
            </v-row>
        </v-sheet>
    </v-app>
</template>




<script>
import axios from "axios";
export default {
    data() {
        return {
            mensajes: {
                nombreUser: '',
                emailUser: '',
                telefonoUser: '',
                mensajeUser: ''
            }
        }
    },

        methods: {
        submit() {
            let apiURL = "https://api-reservas-ef.herokuapp.com/api/mensajes";

        axios
            .post(apiURL, this.mensajes)
            .then(response => {
                alert("El mensaje se ha enviado!");
                this.$router.push({
                    name: "home"
                });
            })
            .catch(e => {
            console.log(e);
            this.errors.push(e);
            });
        },
        clear () {
            this.nombreUser = ''
            this.emailUser = ''
            this.telefonoUser = ''
            this.mensajeUser = ''
            this.$refs.observer.reset()
        },
        },
};
</script>

