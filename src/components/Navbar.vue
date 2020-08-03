<template>
  <div>
    <v-app-bar
      app
      absolute
      color="#7fdbda"
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
    >
      <v-toolbar-title>
        <h1 class="fontTitle">TalkMe</h1>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn depressed color="#febf63" class="ma-2" @click.prevent="dialog=!dialog">Register</v-btn>
      <v-btn depressed color="#ade498" @click.prevent="dialogLogin=!dialogLogin">Login</v-btn>
    </v-app-bar>
    <!-- MODAL -->
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="600px">
        <v-card>
          <v-card-title>
            <span class="headline">Create your account</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-form ref="form" v-model="valid" :lazy-validation="lazy">
                <v-text-field                 
                  label="Username"
                  required
                ></v-text-field>

                <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>

                <v-text-field
                  v-model="password"
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="[rules.required, rules.min]"
                  :type="show1 ? 'text' : 'password'"
                  name="input-10-1"
                  label="Normal with hint text"
                  hint="At least 8 characters"
                  counter
                  @click:append="show1 = !show1"
                ></v-text-field>

                 <v-text-field
                  v-model="password2"
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="[rules.required, rules.min]"
                  :type="show1 ? 'text' : 'password'"
                  name="input-10-1"
                  label="Normal with hint text"
                  hint="At least 8 characters"
                  counter
                  @click:append="show1 = !show1"
                ></v-text-field>                

                <v-checkbox
                  v-model="checkbox"
                  :rules="[v => !!v || 'You must agree to continue!']"
                  label="Do you agree?"
                  required
                ></v-checkbox>                
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
    </v-row>
    <!-- END MODAL -->

    <!-- LOGIN -->
    <v-row justify="center">
      <v-dialog v-model="dialogLogin" persistent max-width="600px">
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
    </v-row>
    <!-- END LOGIN -->
  </div>
</template>

<style>
.fontTitle {
  font-family: "Anton", sans-serif;
  color: #424242;
}

#iconTalkme {
  width: 50px;
}
</style>

<script>
export default {
  name: "Navbar",
  data: () => ({
    dialog: false,
    dialogLogin: false,
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
    password2:"Password2",
    loginUser:"",
    loginPass:"",
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
    },
    
  },
  computed:{
    isEmptyForm(){
      if(this.loginUser != "" && this.loginPass != "")
        return false;
      else
        return true;
    }
  }
};
</script>