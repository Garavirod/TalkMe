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
              @click="dialogUsername = false">
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
              text @click="dialogPassword = false">
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
                  :items="states"
                  menu-props="auto"
                  label="Select"
                  hide-details
                  prepend-icon="mdi-map"
                  single-line
                ></v-select>
              </v-col>
              <!--Edit languages list-->
              <v-col cols="12">
                <v-select
                  v-model="lnagList"
                  :items="lang"
                  :rules="langRules"
                  chips
                  label="Languages list"
                  multiple
                  outlined
                ></v-select>
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
              @click="dialogLanguages = false">
              Update
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {      
      dialogPassword: false,
      dialogLanguages:false,
      dialogUsername: false,
      notifications: false,
      country:"Florida",
      username: "Garavirod",
      usernameRules: [
        (v) => !!v || "Username is required",
        (v) =>
          (v && v.length >= 8) || "Username must be more than 8 characters",
      ],
      password1: "",
      password2: "",
      passauth:"",
      passRules: [
        (v) => !!v || "Password is required",
        (v) =>
          (v && v.length >= 8) || "Password must be more than 8 characters",
      ],
      passRules2: [
        (v) => !!v || "Password is required",
        (v) => (v && v === this.password1) || "Password must be the same",        
      ],
      langRules:[
        ()=> this.lnagList.length>0 || "You must choose at least one language"
      ],
      sound: true,
      widgets: false,      
      lang: ['Englisg', 'French', 'German', 'Spanish'],
      lnagList: ['French'],
      states: [
          'Alabama', 'Alaska', 'American Samoa', 'Arizona',
          'Arkansas', 'California', 'Colorado', 'Connecticut',
          'Delaware', 'District of Columbia', 'Federated States of Micronesia',
          'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho',
          'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
          'Louisiana', 'Maine', 'Marshall Islands', 'Maryland',
          'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
          'Missouri', 'Montana', 'Nebraska', 'Nevada',
          'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
          'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio',
          'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico',
          'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee',
          'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia',
          'Washington', 'West Virginia', 'Wisconsin', 'Wyoming',
        ],
    };
  },
  computed: {
    isValidFormUsername(){      
      if(this.username.length>7 && this.passauth!=="")
        return true;
      else
        return false;
    },
    isValidFormPass(){
      if((this.password1.length>7) && (this.password2 === this.password1) && (this.passauth!==""))
        return true;
      else 
        return false;
    },
    isValidFromLanguages(){
      return (this.lnagList.length!==0 && this.passauth!=="")? true: false;
    }
  },
  methods: {
    // updateUserName=()=>{

    // },
    // updatePassword=()=>{

    // },
    // updateLanguagesList=()=>{

    // }
  },
};
</script>
