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
    <!-- People active -->
    <v-row v-if="userInformation.chosen_lan.length !== 0">
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
    <!-- No languages -->
    <v-row v-else-if="userInformation.chosen_lan.length === 0">
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
    <!-- No people active -->
    <v-row class="text-center" v-else-if="false">
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
import { getUserInfo } from "../helpers/utils";
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

    ...mapMutations(["getUserInformation", "setActiveUsersList","setOpenBoxMessages"]),
    /* +++++++++++++++++++++++++++ */
    /* --------- TEMPLATE--------- */
    /* +++++++++++++++++++++++++++ */

    genRandomIndex(length) {
      return Math.ceil(Math.random() * (length - 1));
    },
    async searchSpeakers() {
      // const url = `${process.env.VUE_APP_API}/`;
      // await Axios.get(url)
      //   .then((res) => {
      //     console.log(res);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
      // this.socket.emit('chosen-language', (this.lang));
    },

    async getUsersActives() {
      const { uid } = getUserInfo();
      this.socket.on("list-users", (data) => {
        const users = data.filter((user) => user.uid !== uid);
        this.setActiveUsersList(users);
        console.log(users);
      });
    },

    chosenUser(user){
      console.log('USER >: ',user.uid);
    }
  },

  created() {
    this.getUsersActives();
    this.getUserInformation();
  },
};
</script>
