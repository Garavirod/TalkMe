<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        small
        depressed
        outlined
        class="ml-4"
        color="#ffff"
        dark
        v-bind="attrs"
        v-on="on"
      >
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
            <v-row class="text-center">
                <!-- Username -->
              <v-col cols="12" lg="6">
                <v-text-field 
                    v-model="username"
                    label="Username" 
                    :rules="nameRules"
                    required>
                </v-text-field>
              </v-col>
              <!-- Email -->
              <v-col cols="12" lg="6">
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="E-mail"
                  required
                ></v-text-field>
              </v-col>
              <!-- Passoword -->
              <v-col cols="12" lg="6">
                <v-text-field
                  v-model="password"
                  :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="passwordRules"
                  :type="showPass ? 'text' : 'password'"
                  name="input-10-1"
                  label="Password"
                  hint="At least 8 characters"
                  counter
                  @click:append="showPass = !showPass"
                ></v-text-field>
              </v-col>             
              <!-- Nacionality -->
              <v-col cols="12" lg="6" md="12" sm="12">
                <v-select
                  v-model="nationality"
                  :items="states"
                  :rules="nacionalityRules"
                  menu-props="auto"
                  label="Nacionality"
                  hide-details
                  prepend-icon="mdi-map"
                  single-line
                ></v-select>
              </v-col>
              <!--Languages list-->
              <v-col cols="12" lg="6" md="6" sm="12">
                <v-select
                  v-model="chosenLang"
                  :items="langList"
                  label="Languages list"
                ></v-select>
              </v-col>
              <v-col cols="12" lg="6" md="6" sm="12">
                <v-select
                  v-model="chosenLevel"
                  :items="levelsList"
                  label="Level"
                ></v-select>
              </v-col>
              <v-col>
                <v-btn
                  small
                  color="#204051"
                  outlined
                  text
                  :disabled="!isValidLangList"
                  @click="addLanguageToList"
                >
                  Add to my list
                </v-btn>
              </v-col>
              <!-- Alert -->
              <v-col cols="12">
                <v-alert dense text type="success" v-if="alertVisible">
                  <strong>{{ chosenLang }}</strong> was added into your list
                  successfuly!
                </v-alert>
              </v-col>
              <!--List Level Languages-->
              <v-col cols="12" class="customScroll">
                <v-alert
                  v-for="l in chosenLanguages"
                  :key="l.language"
                  color="#204051"
                  border="left"
                  elevation="2"
                  colored-border
                >
                  <strong>{{l.language}}</strong> with level
                  <strong>{{ l.level }}</strong
                  >.

                  <v-btn
                    class="mx-1"
                    fab
                    dark
                    x-small
                    color="#204051"
                    elevation="1"
                    @click="removeFromLangList(l.language)"
                  >
                    <v-icon dark>
                      mdi-close
                    </v-icon>
                  </v-btn>
                </v-alert>
              </v-col>
            </v-row>
          </v-form>
        </v-container>
        <small>*indicates required field</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="#febf63" @click="dialog = false">Close</v-btn>
        <v-btn color="#ade498" @click="register" :disabled="!valid"
          >Register</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert';
import { mapMutations, mapState } from 'vuex';
export default {
  name: "Register",
  data: () => ({       
    // Rules form
    nameRules: [
      (v) => !!v || "Name is required",      
    ],
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    passwordRules: [
      (value) => !!value || "Required.",
      (v) => v.length >= 8 || "Min 8 characters",            
    ],
    nacionalityRules:[(v)=> !!v || "You must add your nationality"],
    // Model form
    username: "",
    password: "",
    nationality: "",
    email: "",
    chosenLanguages: [],    
    // data template
    dialog: false,
    alertVisible:false,
    valid: true,
    showPass: false,    
    chosenLang: "",
    chosenLevel: "",
    levelsList: ["A1", "A2", "B1", "B2", "C1", "C2"],
    langList: ["English", "French", "German", "Spanish","Italian"],
    states: [
      "Alabama",
      "Alaska",
      "American Samoa",
      "Arizona",
      "Arkansas",
      "California",
      "Colorado",
      "Connecticut",
      "Delaware",
      "District of Columbia",
      "Federated States of Micronesia",
      "Florida",
      "Georgia",
      "Guam",
      "Hawaii",
      "Idaho",
      "Illinois",
      "Indiana",
      "Iowa",
      "Kansas",
      "Kentucky",
      "Louisiana",
      "Maine",
      "Marshall Islands",
      "Maryland",
      "Massachusetts",
      "Michigan",
      "Minnesota",
      "Mississippi",
      "Missouri",
      "Montana",
      "Nebraska",
      "Nevada",
      "New Hampshire",
      "New Jersey",
      "New Mexico",
      "New York",
      "North Carolina",
      "North Dakota",
      "Northern Mariana Islands",
      "Ohio",
      "Oklahoma",
      "Oregon",
      "Palau",
      "Pennsylvania",
      "Puerto Rico",
      "Rhode Island",
      "South Carolina",
      "South Dakota",
      "Tennessee",
      "Texas",
      "Utah",
      "Vermont",
      "Virgin Island",
      "Virginia",
      "Washington",
      "West Virginia",
      "Wisconsin",
      "Wyoming",
    ],
  }),
  methods: {    
     ...mapMutations(['setUserInformation']),

    addLanguageToList() {      
      let idx = this.chosenLanguages.findIndex( obj => obj["language"] === this.chosenLang );
      if(idx === -1){
        this.chosenLanguages.push({
          "language": this.chosenLang,
          "level":this.chosenLevel
        });
      }else{        
        this.chosenLanguages[idx]["level"] = this.chosenLevel;
      }               
      this.alertVisible = true;
      setTimeout(() => {
        this.alertVisible = false;
      }, 3000);
    },

    removeFromLangList(lan) { 
      let idx = this.chosenLanguages.findIndex( obj => obj["language"] === lan );
      this.chosenLanguages.splice(idx,1);
    
    },

    async register() {        
        const url = `${process.env.VUE_APP_API}login/new-user`;
        const newUser = {
          "username":this.username,
          "email": this.email,
          "password": this.password,
          "country": this.nationality,
          "languages": this.chosenLanguages
        };
        // Post petition
        axios.post(url, newUser)
        .then(res=>{
          Swal('Register','Account was created successfuly!','success')
          /* Set global User infroation vuex */
          this.setUserInformation(
            {
              email: res.data.user.email,
              username: res.data.user.username,
              country: res.data.user.country,
              languages: res.data.user.languages,
              victories: res.data.user.victories,
              fails: res.data.user.fails,
              medals: res.data.user.medals,
              uid: res.data.user.uid,
              token: res.data.token
            }
          );
          this.dialog = false;          
          this.$router.push('Welcome');     
          console.log(this.userInfo);          
                    
        })
        .catch(err=>{
          Swal('Account was not created','It is probably that email alerady exist, try again with another','error')
          console.log(err);
        });
        
    },

   
  },
  computed: {
    ...mapState(['userInfo']),
    isValidLangList() {
      if (this.chosenLang !== "" && this.chosenLevel !== "") {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>
