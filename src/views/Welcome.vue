<template>
<v-container fluid class="ma-0 pa-0">
    <v-row class="ma-3">
        <!--WELCOME-->
        <v-col cols="12" lg="12" class="animate__animated animate__fadeInDown">
            <v-alert border="left" colored-border color="#204051" elevation="2">
                <v-row class="text-center">
                    <v-col>
                        <h1>Welcome to Blumin!</h1>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col class="text-center">
                       <p>Welcome to Blumin the application in which you can test your speaking skills about the language you are learning.</p>
                       <p>
                        Blumin offers you 4 sections within which you can practice your knowledge about the language you are learning, mainly speaking.</p>

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
import { mapActions } from 'vuex';
import UserInfromationVue from "../components/UserInformation";
export default {
    name: "Welcome",
    components: {
        UserInfromationVue
    },
    methods:{
        ...mapActions(['getUserInformation'])
    },
    created(){
        this.getUserInformation();        
    }
}
</script>
