<template>
  <div>
    <v-row justify="center">
      <v-row class="text-center">
        <v-col cols="12">
          <v-btn
            small
            outlined
            color="#204051"
            class="ma-2"
            dark
            @click="dialogUsername = true"
          >
            Edit username
          </v-btn>
        </v-col>
        <v-col cols="12">
          <v-btn
            small
            outlined
            color="#204051"
            class="ma-2"
            dark
            @click="dialogPassword = true"
          >
            Edit password
          </v-btn>
        </v-col>
        <v-col cols="12">
          <v-btn
            small
            outlined
            color="#204051"
            class="ma-2"
            dark
            @click="dialogLanguages = true"
          >
            Country & languages
          </v-btn>
        </v-col>
      </v-row>

      <!--FORM USERNAME-->
      <v-dialog v-model="dialogUsername" max-width="500px">
        <v-card>
          <v-card-title>
            Upadate username
          </v-card-title>
          <v-card-text>
            <v-row class="text-center">
              <!--Edit username-->
              <v-col cols="12">
                <v-text-field
                  v-model="username"
                  :rules="usernameRules"
                  label="Username"
                  required
                >
                </v-text-field>
              </v-col>
              <!--Verify password-->
              <v-col cols="12">
                <v-text-field
                  v-model="passauth"
                  label="Password authorization"
                  type="password"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" text @click="dialogUsername = false">
              Close
            </v-btn>
            <v-btn
              color="primary"
              text
              :disabled="!isValidFormUsername"
              @click="dialogUsername = false"
            >
              Update
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <!--FORM PASSWORD-->
      <v-dialog v-model="dialogPassword" max-width="500px">
        <v-card>
          <v-card-title>
            Upadate password
          </v-card-title>
          <v-card-text>
            <v-row class="text-center">
              <!--Edit username-->
              <v-col cols="12">
                <v-text-field
                  v-model="password1"
                  :rules="passRules"
                  label="New password"
                  type="password"
                  required
                >
                </v-text-field>
              </v-col>

              <v-col cols="12">
                <v-text-field
                  v-model="password2"
                  :rules="passRules2"
                  type="password"
                  label="Verify password"
                  required
                >
                </v-text-field>
              </v-col>
              <!--Verify password-->
              <v-col cols="12">
                <v-text-field
                  v-model="passauth"
                  label="Password authorization"
                  type="password"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" text @click="dialogPassword = false">
              Close
            </v-btn>
            <v-btn
              color="primary"
              :disabled="!isValidFormPass"
              text
              @click="dialogPassword = false"
            >
              Update
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <!--FORM LANGUAGES-->
      <v-dialog v-model="dialogLanguages" max-width="500px">
        <v-card>
          <v-card-title>
            Upadate country and languages
          </v-card-title>
          <v-card-text>
            <v-row class="text-center">
              <!--Edit country-->
              <v-col cols="12">
                <v-select
                  v-model="country"
                  :items="countriesList"
                  menu-props="auto"
                  label="Nacionality"
                  hide-details
                  prepend-icon="mdi-map"
                  single-line
                ></v-select>
              </v-col>
              <!--Edit languages list-->
              <v-col cols="12" lg="6" md="6" sm="12">
                <v-select
                  v-model="chosenLang"
                  :items="languagesList"                  
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
              <v-col cols="12">
                <v-alert
                  dense
                  text
                  type="success"
                  v-if="alertVisible"
                >
                 <strong>{{chosenLang}}</strong> was added into your list successfuly!
                </v-alert>
              </v-col>
              <!--List Level Languages-->
              <v-col cols="12" class="customScroll">
                   <v-alert   v-for="lan in chosen_lang" :key="lan.language"                                                          
                    color="#204051"
                    border="left"
                    elevation="2"
                    colored-border                                       
                  >
                    <strong>{{lan.language}}</strong>  with level <strong>{{lan.level}}</strong>.
                    
                    <v-btn
                      class="mx-1"
                      fab
                      dark
                      x-small
                      color="#204051"
                      elevation="1"
                      :disabled="chosen_lang.length<2"
                      @click="removeFromLangList(lan.language)"
                    >
                      <v-icon dark>
                        mdi-close
                      </v-icon>
                    </v-btn>
                  </v-alert>                                       
              </v-col>
              <!--Verify password-->
              <v-col cols="12">
                <v-text-field
                  v-model="passauth"
                  label="Password authorization"
                  type="password"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" text @click="dialogLanguages = false">
              Close
            </v-btn>
            <v-btn
              color="primary"
              text
              :disabled="!isValidFromLanguages"              
              @click="dialogLanguages = false"
            >
              Update
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<style>
.customScroll {
  width: 100%;
  max-height: 200px;
  overflow-x: scroll;
}
</style>

<script>
import { mapMutations, mapState } from 'vuex';
export default {
  data() {
    return {
      // Buttons modals
      dialogPassword: false,
      dialogLanguages: false,
      dialogUsername: false,
      notifications: false,
      // Alerts
      alertVisible:false,
      messageAlert:"",
      typeAlert:"",
      iconAlert:"",                        
      // Data Password
      password1: "",
      password2: "",
      // Data Username
      username: "",
      country: "",
      chosen_lang: [],
      chosenLang:"",
      chosenLevel:"",
      // Form rules
      usernameRules: [
        (v) => !!v || "Username is required",
        (v) =>
          (v && v.length >= 8) || "Username must be more than 8 characters",
      ],
      passauth: "",
      passRules: [
        (v) => !!v || "Password is required",
        (v) =>
          (v && v.length >= 8) || "Password must be more than 8 characters",
      ],
      passRules2: [
        (v) => !!v || "Password is required",
        (v) => (v && v === this.password1) || "Password must be the same",
      ],
      select: [
        () =>
          this.langList.length > 0 || "You must choose at least one",
      ],
      sound: true,
      widgets: false,          
     
    };
  },
  computed: {
    /* VUEX */
    ...mapState(['countriesList','levelsList','languagesList','userInformation']),
    /* TEMPLATE */
    isValidFormUsername() {
      if (this.username.length > 7 && this.passauth !== "") return true;
      else return false;
    },
    isValidFormPass() {
      if (
        this.password1.length > 7 &&
        this.password2 === this.password1 &&
        this.passauth !== ""
      )
        return true;
      else return false;
    },
    isValidFromLanguages() {
      return this.passauth !== "" ? true : false;
    },

    isValidLangList(){
      if(this.chosenLang!=="" && this.chosenLevel!==""){
        return true;        
      }else{
        return false;
      }
    }
  },
  methods: {
    // updateUserName=()=>{
    // },
    // updatePassword=()=>{
    // },
    // updateLanguagesList=()=>{
    // }
    /* VUEX */
    ...mapMutations(['getCountriesAPI']),
    /* TEMPLATE METHODOS */
    removeFromLangList(lan){
      const idx = this.chosen_lang.indexOf(
        this.chosen_lang.filter(la=>la.lang===lan)[0]
      );
      this.chosen_lang.splice(idx,1);
    },
    addLanguageToList(){
      const idx = this.chosen_lang.indexOf(
        this.chosen_lang.filter(la=>la.lang===this.chosenLang)[0]
      );
      if(idx===-1){
        this.chosen_lang.push({
          lang:this.chosenLang,
          level:this.chosenLevel
        });
      }
      this.alertVisible=true;
      setTimeout(()=>{
        this.chosenLevel="";
        this.chosenLang="";
        this.alertVisible=false;
      },3000);
    }
  },
  created() {
    this.getCountriesAPI();
    /* set user information */
    this.username = this.userInformation.username;
    this.country = this.userInformation.country;
    this.chosen_lang = this.userInformation.chosen_lan;
    console.log(this.userInformation);
  },
};
</script>
