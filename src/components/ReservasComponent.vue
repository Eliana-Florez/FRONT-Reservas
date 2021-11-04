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
                max-height="44"
                max-width="auto"
                align-end
                contain
                src="../assets/img/reserve-b.png"
                ></v-img> 
            </v-row>

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
                            v-model="reserva.nombresClient"
                            class="form-control"
                            label="Nombres"
                            required
                            solo
                        ></v-text-field>
                        </v-col>
                        <v-col>
                        <v-text-field
                            v-model="reserva.apellidosClient"
                            class="form-control"
                            label="Apellidos"
                            required
                            solo
                        ></v-text-field>
                        </v-col>
                    </v-row>

                    <v-row class=" d-flex">
                        <v-col class="mr-12">
                        <v-text-field
                            v-model="reserva.cedulaClient"
                            class="form-control"
                            label="Documento de identidad"
                            required
                            solo
                        ></v-text-field>
                        </v-col>
                        <v-col>
                        <v-text-field
                            v-model="reserva.ciudadOrigenClient"
                            class="form-control"
                            label="Ciudad de Origen"
                            required
                            solo
                        ></v-text-field>
                        </v-col>
                    </v-row>

                    <v-row class=" d-flex">
                        <v-col class="mr-12">
                        <v-text-field
                            v-model="reserva.telefonoClient"
                            class="form-control"
                            label="Teléfono"
                            required
                            solo
                        ></v-text-field>
                        </v-col>
                        <v-col>
                        <v-text-field
                            v-model="reserva.emailClient"
                            class="form-control"
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
                            v-model="reserva.numPersonas"
                            class="form-control"
                            label="Número de personas"
                            required
                            solo
                        ></v-text-field>
                        </v-col>
                        <v-col>
                        <v-autocomplete
                            v-model="reserva.infoHabitacion"
                            class="form-control"
                            :items="items"
                            small-chips
                            label="Habitaciones"
                            multiple
                            required
                            solo
                        ></v-autocomplete>
                        </v-col>
                    </v-row>

                    <v-row class=" d-flex">
                        <v-col class="mr-6" >
                        <v-menu
                            ref="dateIngres"
                            v-model="reserva.dateIngres"
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
                                required
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
                            v-model="reserva.dateSalida"
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
                                required
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
            reserva: {
                nombresClient: '',
                apellidosClient: '',
                cedulaClient: '',
                ciudadOrigenClient: '',
                telefonoClient: '',
                emailClient: '',
                numPersonas: '',
                infoHabitacion: null,
                fechaIngreso: new Date().toISOString().substr(0,10),
                fechaSalida: new Date().toISOString().substr(0,10)
            },
            items: ['Habitación Individual Deluxe', 'Habitación Doble estándar', 'Habitación Doble con vista a las montañas', 'Habitación Triple estándar', 'Habitación Cuadruple con vista al jardín']
        }
    },

        methods: {
        submit() {
            let apiURL = "https://api-reservas-ef.herokuapp.com/api/bookings";

        axios
            .post(apiURL, this.reserva)
            .then(response => {
                alert("La reserva se realizo satisfactoriamente");
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
            this.nombresClient = ''
            this.apellidosClient = ''
            this.cedulaClient = ''
            this.ciudadOrigenClient = ''
            this.telefonoClient = ''
            this.emailClient = ''
            this.numPersonas= ''
            this.infoHabitacion = ''
            this.fechaIngreso = ''
            this.fechaSalida = ''
            this.$refs.observer.reset()
        },
        },
};
</script>

