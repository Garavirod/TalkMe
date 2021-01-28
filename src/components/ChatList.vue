<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12" lg="8" md="8" sm="12">
        <v-select
          v-model="lang"
          :items="userInformation.chosen_lan"
          label="Choose a language from your list"
          item-text="language"
          item-value="language"
          single-line
          return-object          
        ></v-select>
      </v-col>
      <v-col cols="12" lg="4" md="4" sm="12">
        <v-btn
          @click="searchSpeakers"
          color="#3b6978"
          outlined
          :disabled="!isLangSelected"
        >
          <v-icon right dark>
            mdi-account-search
          </v-icon>
          Search
        </v-btn>
      </v-col>
    </v-row>
     <!-- No languages -->
    <v-row v-if="userInformation.chosen_lan.length === 0">
      <v-col cols="12">
        <v-alert text color="error">
          <h3 class="headline">
            Oops!
          </h3>
          <br />
          <div>
            It seems to be your languages list is empty, you will not be able to
            enter on audio chat till you add languages to your list.
          </div>

          <v-divider class="my-4 error" style="opacity: 0.22"></v-divider>

          <v-row align="center" no-gutters>
            <v-col class="grow">
              You can add languages to your list on your profile settings, press
              button 'Add languages' for do it.
            </v-col>
            <v-spacer></v-spacer>
            <v-col class="shrink">
              <v-btn color="error" outlined to="/welcome">
                Add languages
              </v-btn>
            </v-col>
          </v-row>
        </v-alert>
      </v-col>
    </v-row>
    <!-- People active -->
    <v-row v-else-if="activeUsersOnChat.length !== 0">
      <v-col
        cols="12"
        lg="3"
        md="4"
        sm="4"
        xs="12"
        v-for="item in activeUsersOnChat"
        :key="item.uid"
      >
        <v-hover>
          <template v-slot:default="{ hover }">
            <v-card>
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="overline mb-4">{{ item.country }}</div>
                  <v-list-item-title class="headline mb-1">{{
                    item.username
                  }}</v-list-item-title>
                  <v-list-item-subtitle>Level : B2</v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-avatar tile size="80" color="grey">
                    <v-img
                      src="https://cdn.vuetifyjs.com/images/lists/2.jpg"
                    ></v-img>                  
                </v-list-item-avatar>
              </v-list-item>
              <!-- fade -->
              <v-fade-transition>
                <v-overlay v-if="hover" absolute color="#036358">
                  <v-btn @click="setOpenBoxMessages({status:true, user:item})">Send message</v-btn>
                </v-overlay>
              </v-fade-transition>
            </v-card>
          </template>
        </v-hover>
      </v-col>
    </v-row>
   
    <!-- No people active -->
    <v-row class="text-center" v-else>
      <v-col cols="12">
        <h3 class="title-people-active">No people active</h3>
      </v-col>
      <v-col cols="12" lg="9" md="12" xs="12" sm="12" class="mx-auto">
        <v-img
          :src="require('../assets/no_people_active.png')"
          aspect-ratio="1"
          max-height="100%"
          max-width="100%"
        >
        </v-img>
      </v-col>
    </v-row>

    <!-- Pagination -->
    <pagination />
  </v-container>
</template>

<style>
.title-people-active {
  font-size: 30px;
}
</style>

<script>
// import Axios from "axios";
import { mapMutations, mapState } from "vuex";
/* import { getUserInfo } from "../helpers/utils"; */
import Pagination from "./Pagination.vue";
export default {
  components: { Pagination },
  data: () => ({
    lang: "",
    overlay: false,
  }),

  computed: {
    /* VUEX */
    ...mapState(["userInformation", "socket", "activeUsersOnChat"]),
    /* TEMPLATE */
    isLangSelected() {
      return this.lang === "" ? false : true;
    },
    items() {
      const namesLength = this.names.length;
      const surnamesLength = this.surnames.length;
      const colorsLength = this.colors.length;

      return Array.from(
        {
          length: 10000,
        },
        () => {
          const name = this.names[this.genRandomIndex(namesLength)];
          const surname = this.surnames[this.genRandomIndex(surnamesLength)];

          return {
            color: this.colors[this.genRandomIndex(colorsLength)],
            fullName: `${name} ${surname}`,
            initials: `${name[0]} ${surname[0]}`,
          };
        }
      );
    },
  },

  methods: {
    /* +++++++++++++++++++++++++++ */
    /* ---------- VUEX ----------- */
    /* +++++++++++++++++++++++++++ */

    ...mapMutations(
      [
        "getUserInformation", 
        "setActiveUsersList",
        "setOpenBoxMessages",
        "setSocketConnection",
        "socketDisconn",
        "getUsersOnRoom"
      ]
    ),
    /* +++++++++++++++++++++++++++ */
    /* --------- TEMPLATE--------- */
    /* +++++++++++++++++++++++++++ */

    genRandomIndex(length) {
      return Math.ceil(Math.random() * (length - 1));
    },
    
    /* Search speaker about language  */
    searchSpeakers() {
      /* If soicket is null it's the first connection */
      if(this.socket === null){
        this.lang = this.userInformation.chosen_lan[0].language;        
        this.setSocketConnection(this.lang);
      }else{
        /* there is already a socket connection */
         this.socket.emit('searchspeaker',this.lang.language);// change room
         //save in storage, in case user referes browser
         localStorage.setItem('saved-lang',this.lang.language); 
      }
      /* Get all user actives in the room based on language */
      this.getUsersOnRoom();   
    },

    /* Recover last name room if user refres browser */
    savedLanguageRoom(){
      /* Recover last room name from storage */
      this.lang = localStorage.getItem('saved-lang') || null;
      /* if there exist set connection in that room */
      if(this.lang !== null){
        console.log("there something");
        this.setSocketConnection(this.lang);
        this.getUsersOnRoom();  
      }
    }
  },
  created() {
    this.savedLanguageRoom();
  },
};
</script>
