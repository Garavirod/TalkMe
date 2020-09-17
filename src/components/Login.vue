<template>
<v-dialog v-model="dialogLogin" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
        <v-btn small depressed class="ml-3" outlined color="#ffff" dark v-bind="attrs" v-on="on">
            Login
        </v-btn>
    </template>
    <v-card>
        <v-card-title>
            <span class="headline">Log in</span>
        </v-card-title>
        <v-card-text>
            <v-container>
                <v-row>
                    <v-col cols="12">
                        <v-text-field label="Username or Email" required v-model="loginUser"></v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <v-text-field label="Password*" type="password" v-model="loginPass" required></v-text-field>
                    </v-col>
                </v-row>
            </v-container>
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="#febf63" @click="dialogLogin = false">Close</v-btn>
            <v-btn color="#ade498" @click="dialogLogin = false" :disabled="isEmptyForm">Log in</v-btn>
        </v-card-actions>
    </v-card>
</v-dialog>
</template>

<script>
export default {
    name: "Login",
    data: () => ({
        dialogLogin: false,
        loginUser: "",
        loginPass: "",
    }),
    computed: {
        isEmptyForm() {
            if (this.loginUser != "" && this.loginPass != "") return false;
            else return true;
        }
    }
}
</script>
