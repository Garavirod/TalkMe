<template>
<v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
        <v-btn small depressed outlined class="ml-4" color="#ffff" dark v-bind="attrs" v-on="on">
            Register
        </v-btn>
    </template>
    <v-card>
        <v-card-title>
            <span class="headline">Create your account</span>
        </v-card-title>
        <v-card-text>
            <v-container>
                <v-form ref="form" v-model="valid">
                    <v-text-field label="Username" required></v-text-field>

                    <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>

                    <v-text-field v-model="password" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :rules="[rules.required, rules.min]" :type="show1 ? 'text' : 'password'" name="input-10-1" label="Normal with hint text" hint="At least 8 characters" counter @click:append="show1 = !show1"></v-text-field>

                    <v-text-field v-model="password2" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :rules="[rules.required, rules.min]" :type="show1 ? 'text' : 'password'" name="input-10-1" label="Normal with hint text" hint="At least 8 characters" counter @click:append="show1 = !show1"></v-text-field>

                    <v-checkbox v-model="checkbox" :rules="[v => !!v || 'You must agree to continue!']" label="Do you agree?" required></v-checkbox>
                </v-form>
            </v-container>
            <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="#febf63" @click="dialog = false">Close</v-btn>
            <v-btn color="#ade498" @click="validate" :disabled="!valid">Register</v-btn>
        </v-card-actions>
    </v-card>
</v-dialog>
</template>

<script>
export default {
    name: "Register",
    data: () => ({
        dialog: false,
        languages: ["Méxio", "Turky", "UK", "Colombia", "Brazil", "China", "Japan"],
        valid: true,
        name: "",
        nameRules: [
            v => !!v || "Name is required",
            v => (v && v.length <= 10) || "Name must be less than 10 characters"
        ],
        email: "",
        emailRules: [
            v => !!v || "E-mail is required",
            v => /.+@.+\..+/.test(v) || "E-mail must be valid"
        ],
        checkbox: false,
        show1: false,
        password: "Password1",
        password2: "Password2",
        loginUser: "",
        loginPass: "",
        rules: {
            required: value => !!value || "Required.",
            min: v => v.length >= 8 || "Min 8 characters",
            emailMatch: () => "The email and password you entered don't match"
        }
    }),
    methods: {
        validate() {
            this.dialog = false;
            this.$refs.form.validate();
        }
    },
}
</script>
