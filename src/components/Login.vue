<template>
<v-dialog v-model="dialogLogin" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
        <v-btn small depressed class="ml-3" outlined color="#ffff" dark v-bind="attrs" v-on="on">
            Login
        </v-btn>
    </template>
    <v-card>
        <v-card-title>
            <span class="headline text-center">Login</span>
        </v-card-title>
        <v-card-text>
            <v-container>
                <v-row>
                    <v-col cols="12">
                        <v-text-field label="Email" required v-model="loginEmail"></v-text-field>
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
            <v-btn color="#ade498" @click="Login" :disabled="isEmptyForm">Log in</v-btn>
        </v-card-actions>
    </v-card>
</v-dialog>
</template>

<script>
import Axios from 'axios';
import Swal from 'sweetalert';
import { mapMutations } from 'vuex';
export default {
    name: "Login",
    data: () => ({
        dialogLogin: false,
        loginEmail: "gara12@gamail.com",
        loginPass: "qwerty12",
    }),
    computed: {
        isEmptyForm() {
            if (this.loginEmail != "" && this.loginPass != "") return false;
            else return true;
        }
    },
    methods:{
        ...mapMutations(['setUserActive']),
        async Login(){            
            const url = process.env.VUE_APP_API; //endpoint
            // User data login
            const user = {
                email:this.loginEmail,
                password: this.loginPass
            }
            // Http request POST AXIOS
            await Axios.post(url,user)
            .then(res => {
                localStorage.setItem("blumin-tkn",res.data.token);
                this.setUserActive(true);          
                Swal("Login", "Welcome to Blumin!", "success");
                this.dialogLogin = false;
                this.$router.push('Welcome');
            })
            .catch(error =>{
                console.log(error);    
                this.setUserActive(false);          
                Swal(
                    "Incorrect credentials",
                    "It is probably you don't have an account or your credentails were incorrect, try again",
                    "error"
                );
            });

        }
    }

}
</script>
