<template>
<v-app>
    <Navbar />
    <v-main id="bg-app">
        <v-container fluid class="ma-0 pa-0">
            <router-view></router-view>
        </v-container>
    </v-main>
    <!-- <v-footer app v-if="false">
  </v-footer> -->
</v-app>
</template>

<style>
#bg-app {
    background: rgb(34, 56, 195);
    background: linear-gradient(0deg, rgba(34, 56, 195, 1) 0%, rgba(45, 192, 253, 1) 100%);
}
</style>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
    components: {
        Navbar,
    },
    computed: {}
}
</script>
