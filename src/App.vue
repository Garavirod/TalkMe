<template>
<v-app>
    <Navbar />
    <v-main id="bg-app">
        <v-container fluid class="ma-0 pa-0">
            <router-view></router-view>                   
        </v-container>
    </v-main>

</v-app>
</template>

<style>
#bg-app {
    background: #204051;
    background: linear-gradient(0deg, rgb(32, 64, 81) 0, rgb(202, 232, 213) 100%);
}
</style>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
    components: {
        Navbar,     
    },
}
</script>
