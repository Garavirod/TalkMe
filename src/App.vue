<template>
<v-app>
    <Navbar />
    <v-main>
        <v-container fluid class="ma-0 pa-0">
            <router-view></router-view>
        </v-container>
    </v-main>
    <!-- <v-footer app v-if="false">
  </v-footer> -->
</v-app>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
    components: {
        Navbar,
    },
    computed: {}
}
</script>
