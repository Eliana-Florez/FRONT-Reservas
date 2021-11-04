<template>
    <v-app>
        <h1 class="text-center mt-2">Editar Reserva</h1>
            <v-row justify="center" class="mx-15 my-6  d-flex px-10  py-6">
            <v-row  class=" mx-auto my-3  d-flex  pt-6 ">
                <h2>Datos personales</h2>
                <v-divider inset class=" mx-auto my-5  "></v-divider>
            </v-row>
                <form >
                    <v-container bg fill-height>
                    <v-row class=" d-flex">
                        <v-col class="mr-12">
                        <v-text-field
                            v-model="reservaUpdate.nombresClient"
                            label="Nombres"
                            required
                            solo
                        ></v-text-field>
                        </v-col>
                        <v-col>
                        <v-text-field
                            v-model="reservaUpdate.apellidosClient"
                            label="Apellidos"
                            required
                            solo
                        ></v-text-field>
                        </v-col>
                    </v-row>

                    <v-row class=" d-flex">
                        <v-col class="mr-12">
                        <v-text-field
                            v-model="reservaUpdate.cedulaClient"
                            label="Documento de identidad"
                            required
                            solo
                        ></v-text-field>
                        </v-col>
                        <v-col>
                        <v-text-field
                            v-model="reservaUpdate.ciudadOrigenClient"
                            label="Ciudad de Origen"
                            required
                            solo
                        ></v-text-field>
                        </v-col>
                    </v-row>

                    <v-row class=" d-flex">
                        <v-col class="mr-12">
                        <v-text-field
                            v-model="reservaUpdate.telefonoClient"
                            label="Teléfono"
                            required
                            solo
                        ></v-text-field>
                        </v-col>
                        <v-col>
                        <v-text-field
                            v-model="reservaUpdate.emailClient"
                            label="E-mail"
                            required
                            solo
                        ></v-text-field>
                        </v-col>
                    </v-row>

                    <v-row  class=" mx-auto my-4  d-flex  pt-6 ">
                        <h2>Información sobre la reserva</h2>
                        <v-divider inset class=" mx-auto my-5  "></v-divider>
                    </v-row>

                    <v-row class=" d-flex">
                        <v-col class="mr-12">
                        <v-text-field
                            v-model="reservaUpdate.numPersonas"
                            label="Número de personas"
                            required
                            solo
                        ></v-text-field>
                        </v-col>
                        <v-col>
                        <v-autocomplete
                            v-model="reservaUpdate.infoHabitacion"
                            :items="items"
                            small-chips
                            label="Habitaciones"
                            required
                            multiple
                            solo
                        ></v-autocomplete>
                        </v-col>
                    </v-row>

                    <v-row class=" d-flex">
                        <v-col class="mr-6" >
                        <v-menu
                            ref="dateIngres"
                            v-model="reservaUpdate.dateIngres"
                            :close-on-content-click="false"
                            :return-value.sync="fechaIngreso"
                            transition="scale-transition"
                            offset-y
                            min-width="auto"
                        >
                            <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                                v-model="fechaIngreso"
                                label="Fecha de ingreso"
                                readonly
                                v-bind="attrs"
                                v-on="on"
                                solo
                            ></v-text-field>
                            </template>
                            <v-date-picker
                            v-model="fechaIngreso"
                            no-title
                            scrollable
                            >
                            <v-spacer></v-spacer>
                            <v-btn
                                text
                                color="primary"
                                @click="dateIngres = false"
                            >
                                Cancel
                            </v-btn>
                            <v-btn
                                text
                                color="primary"
                                @click="$refs.dateIngres.save(fechaIngreso)"
                            >
                                OK
                            </v-btn>
                            </v-date-picker>
                        </v-menu>
                        </v-col>
                        <v-col class="ml-6" >
                        <v-menu
                            ref="dateSalida"
                            v-model="reservaUpdate.dateSalida"
                            :close-on-content-click="false"
                            :return-value.sync="fechaSalida"
                            transition="scale-transition"
                            offset-y
                            min-width="auto"
                        >
                            <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                                v-model="fechaSalida"
                                label="Fecha de salida"
                                readonly
                                v-bind="attrs"
                                v-on="on"
                                solo

                            ></v-text-field>
                            </template>
                            <v-date-picker
                            v-model="fechaSalida"
                            no-title
                            scrollable
                            >
                            <v-spacer></v-spacer>
                            <v-btn
                                text
                                color="primary"
                                @click="dateSalida = false"
                            >
                                Cancel
                            </v-btn>
                            <v-btn
                                text
                                color="primary"
                                @click="$refs.dateSalida.save(fechaSalida)"
                            >
                                OK
                            </v-btn>
                            </v-date-picker>
                        </v-menu>
                        </v-col>
                    </v-row>

                    <v-row justify="center" class="mt-15">
                        <v-btn @click="clear" class="mr-10 red darken-4 px-10 ">
                            <span class="white--text">Limpiar</span>
                        </v-btn>
                        <v-btn @click="updateReserva"
                        class="mr-10  red darken-4 px-10 mb-4"
                        type="submit"
                        >
                            <span class="white--text">Editar</span>
                        </v-btn>
                    </v-row>
                    </v-container>
                </form>
            </v-row>
    </v-app>
</template>




<script>
import axios from "axios";
export default {
    data() {
        return {
            reservaUpdate: {},
            items: ['Habitación Individual Deluxe', 'Habitación Doble estándar', 'Habitación Doble con vista a las montañas', 'Habitación Triple estándar', 'Habitación Cuadruple con vista al jardín']
        }
    },
        created() {
        let apiURL = `https://api-reservas-ef.herokuapp.com/api/bookings/${this.$route.params.id}`;
        axios.get(apiURL).then((res) => {
        this.reservaUpdate = res.data;
    });
    },

    methods: {
        updateReserva() {
        let apiURL = `https://api-reservas-ef.herokuapp.com/api/bookings/${this.$route.params.id}`;
        if (window.confirm("¿Realmente desea modificar la reserva?")) {
            axios
            .put(apiURL, this.reservaUpdate)
            .then((res) => {
            console.log(res);
            this.$router.push("/adminview");
            })
            .catch((error) => {
            console.log(error);
            });
            }
            },
    },
    };
</script>