<template>
    <v-app>
        <v-sheet  class=" mx-16 my-12"
            color="white"
            elevation="6"
            rounded
            height= auto
        >
        <v-row justify="center" class="mx-16 my-5  d-flex px-10  py-6">
            <v-img contain src="../assets/hotel/titulo1.png" max-width="300" class="pt-8"></v-img>
        </v-row>
        <v-row justify="center" class="mx-16 my-0  d-flex px-10">
            <p class="text-justify">Lorem ipsum dolor sit amet consectetur adipiscing elit phasellus congue at, condimentum augue nostra etiam mi facilisi dis venenatis lobortis. Consequat feugiat praesent iaculis sed sodales odio sapien non, tempor dictum cum platea est diam nullam, a tempus eget posuere montes curabitur mattis. Nostra iaculis varius dis taciti in sollicitudin pretium cras molestie ornare, lobortis fusce tristique turpis scelerisque est senectus eu venenatis purus augue, commodo semper leo mauris vel libero accumsan tincidunt mus.</p>
            <p class="text-justify">Lorem ipsum dolor sit amet consectetur adipiscing elit phasellus congue at, condimentum augue nostra etiam mi facilisi dis venenatis lobortis. Consequat feugiat praesent iaculis sed sodales odio sapien non, tempor dictum cum platea est diam nullam, a tempus eget posuere montes curabitur mattis. Nostra iaculis varius dis taciti in sollicitudin pretium cras molestie ornare, lobortis fusce tristique turpis scelerisque est senectus eu venenatis purus augue, commodo semper leo mauris vel libero accumsan tincidunt mus.</p>
        </v-row>
        <v-row justify="center" class="mx-16 my-5  d-flex px-10  py-6">
            <v-carousel
            cycle
            height="500"
            hide-delimiter-background
            show-arrows-on-hover
            >
            <v-carousel-item
            v-for="(item, i) in items"
            :key="i"
            :src="item.src"
            >
            </v-carousel-item>
            </v-carousel>
        </v-row>
        </v-sheet>
    </v-app>
</template>

<script>
export default {
        data () {
            return {
                items: [
                    {
                        src: require('../assets/hotel/hotel1.jpg'),
                    },
                    {
                        src: require('../assets/hotel/hotel2.jpg'),
                    },
                    {
                        src: require('../assets/hotel/hotel3.jpg'),
                    },
                    {
                        src: require('../assets/habitaciones/hab1.jpg'),
                    },
                    {
                        src: require('../assets/hotel/hotel4.jpg'),
                    },
                    {
                        src: require('../assets/habitaciones/hab2.jpg'),
                    },
                ],
            }
        },
    }
</script>

