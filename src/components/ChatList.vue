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
          Search speakers
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
        v-for="item in actives"
        :key="item.id"
      >
        <v-card>
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">{{ item.country }}</div>
              <v-list-item-title class="headline mb-1">{{
                item.user
              }}</v-list-item-title>
              <v-list-item-subtitle
                >Level : {{ item.level }}</v-list-item-subtitle
              >
            </v-list-item-content>

            <v-list-item-avatar tile size="80" color="grey">
              <v-img :src="item.avatar"></v-img>
            </v-list-item-avatar>
          </v-list-item>

          <v-card-actions>
            <v-btn text :to="{ name: 'AudioChat', params: { id: item.uid } }"
              >Choose</v-btn
            >
          </v-card-actions>
        </v-card>
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
          max-height="100%" max-width="100%"
        >         
        </v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
  .title-people-active{ font-size: 30px;}
</style>

<script>
import Axios from "axios";
import { mapMutations, mapState } from "vuex";
export default {
  data: () => ({
    lang: "",
    actives: [
      {
        user: "Julian",
        country: "Mexico",
        active: false,
        level: "Advanced",
        avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
        uid: "1",
      },
      {
        user: "Julian",
        country: "Spain",
        active: true,
        level: "Advanced",
        avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
        uid: "2",
      },
      {
        user: "Julian",
        country: "Cuba",
        active: false,
        level: "Advanced",
        avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
        uid: "3",
      },
      {
        user: "Julian",
        country: "Colombia",
        active: false,
        level: "Advanced",
        avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
        uid: "4",
      },
      {
        user: "Julian",
        country: "Argentina",
        active: true,
        level: "Advanced",
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        uid: "5",
      },
      {
        user: "Julian",
        country: "Dinamarca",
        active: false,
        level: "Advanced",
        avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
        uid: "6",
      },
      {
        user: "Julian",
        country: "China",
        active: false,
        level: "Advanced",
        avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
        uid: "7",
      },
      {
        user: "Julian",
        country: "Mexico",
        active: true,
        level: "Advanced",
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        uid: "8",
      },
      {
        user: "Rusia",
        country: "Mexico",
        active: false,
        level: "Advanced",
        avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
        uid: "9",
      },
      {
        user: "Rosa",
        country: "Brazil",
        active: true,
        level: "Advanced",
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        uid: "10",
      },
      {
        user: "Julian",
        country: "Mexico",
        active: false,
        level: "Advanced",
        avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
        uid: "11",
      },
      {
        user: "Julian",
        country: "Mexico",
        active: true,
        level: "Advanced",
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        uid: "12",
      },
      {
        user: "Julian",
        country: "Mexico",
        active: false,
        level: "Advanced",
        avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
        uid: "13",
      },
    ],
  }),

  computed: {
    /* VUEX */
    ...mapState(["userInformation"]),
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

    ...mapMutations(["getUserInformation"]),
    /* +++++++++++++++++++++++++++ */
    /* --------- TEMPLATE--------- */
    /* +++++++++++++++++++++++++++ */

    genRandomIndex(length) {
      return Math.ceil(Math.random() * (length - 1));
    },
    async searchSpeakers() {
      const url = `${process.env.VUE_APP_API}/`;
      await Axios.get(url)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },

  created() {
    this.getUserInformation();
  },
};
</script>
