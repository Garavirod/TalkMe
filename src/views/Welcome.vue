<template>
<v-container fluid class="ma-0 pa-0">
    <v-row class="ma-3">
        <!--WELCOME-->
        <v-col cols="12" lg="12" class="animate__animated animate__fadeInDown">
            <v-alert border="left" colored-border color="#204051" elevation="2">
                <v-row class="text-center">
                    <v-col>
                        <h1>Welcome to nameApp</h1>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos illum, dignissimos accusantium, quasi alias expedita nulla repellat iure eligendi corrupti aut natus nemo! Quia, modi excepturi! Labore dicta a corporis.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi obcaecati animi eos accusamus alias ut, mollitia in ullam nobis sit porro nulla voluptates doloremque dignissimos, molestiae voluptatibus est exercitationem itaque!</p>
                    </v-col>
                </v-row>
                <v-row class="text-center">
                    <v-col cols="12">
                        <v-btn large outlined color="#204051" to="/sections">Get started</v-btn>
                    </v-col>
                </v-row>
            </v-alert>
        </v-col>
        <!--PERSONAL INFROMATION-->
        <v-col cols="12" lg="12" class="animate__animated animate__fadeInUp">
            <UserInfromationVue />
        </v-col>
    </v-row>
</v-container>
</template>

<script>
import { mapMutations } from 'vuex';
import UserInfromationVue from "../components/UserInformation";
export default {
    name: "Welcome",
    components: {
        UserInfromationVue
    },
    methods:{
        ...mapMutations(['getUserInformation'])
    },
    created(){
        this.getUserInformation();
    }
}
</script>
