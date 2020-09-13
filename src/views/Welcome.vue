<template>
<v-container fluid class="ma-0 pa-0" id="welcomeBackground">
    <v-card class="ma-3">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum laudantium id assumenda porro culpa, pariatur atque odio accusantium, nostrum voluptas soluta aspernatur? Tempore expedita obcaecati praesentium dolorum veritatis placeat accusantium?</p>
    </v-card>
    <UserInfromationVue />
</v-container>
</template>

<style>
#welcomeBackground {
    background: rgb(34, 193, 195);
    background: linear-gradient(0deg, rgba(34, 193, 195, 1) 0%, rgba(253, 223, 45, 1) 100%);
}
</style>

<script>
import UserInfromationVue from "../components/UserInformation";
export default {
    name: "Welcome",
    components: {
        UserInfromationVue
    }
}
</script>
