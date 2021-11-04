<template>
    <v-app>
        <h1 class=" mt-8 text-center">Listado de Mensajes</h1>
        <v-row justify="center" class=" mx-8 my-8  d-flex  pb-4 ">
        <v-simple-table>
        <template v-slot:default>
        <thead >
            <tr class="cyan darken-4 ">
            <th class="text-left font-weight-black white--text text-md-body-1"> Nombres y Apellidos </th>
            <th class="text-left font-weight-black white--text text-md-body-1"> Email </th>
            <th class="text-left font-weight-black white--text text-md-body-1"> Teléfono </th>
            <th class="text-left font-weight-black white--text text-md-body-1"> Mensaje </th>
            </tr>
        </thead>
        <tbody>
            <tr
            v-for="mensaje in Mensajes"
            :key="mensaje._id"
            >
            <td class="text-left">{{ mensaje.nombreUser }}</td>
            <td class="text-left">{{ mensaje.emailUser }}</td>
            <td class="text-left">{{ mensaje.telefonoUser }}</td>
            <td class="text-left">{{ mensaje.mensajeUser }}</td>
            <td>
                <v-btn
                    @click.prevent="deleteMensaje(mensaje._id)"
                    class="red darken-4  mb-4"
                    x-small
                >
                    <span class="white--text">Delete</span>
                </v-btn>
                </td>
            </tr>
        </tbody>
        </template>
    </v-simple-table>
        </v-row>
    </v-app>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
        Mensajes: [],
        }
    },

        created() {
        let apiURL = "https://api-reservas-ef.herokuapp.com/api/mensajes/";
        axios
        .get(apiURL)
        .then((res) => {
            this.Mensajes = res.data;
        })
        .catch((error) => {
            console.log(error);
        });
    },

    methods: {
        deleteMensaje(id) {
        let apiURL = `https://api-reservas-ef.herokuapp.com/api/mensajes/${id}`;
        let indexOfArrayItem = this.Mensajes.findIndex((i) => i._id === id);

        if (window.confirm("¿Realmente desea eliminar el mensaje?")) {
            axios
            .delete(apiURL)
            .then(() => {
                this.Mensajes.splice(indexOfArrayItem, 1);
            })
            .catch((error) => {
                console.log(error);
            });
        }
        },
    },
    };
</script>

