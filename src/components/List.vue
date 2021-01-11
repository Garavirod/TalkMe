<template>
  <v-row class="text-center">
    <!-- SEARCH SPEAKERS -->
    <v-col cols="12" lg="6" md="6" sm="6">
      <v-dialog
        v-model="searchSpeaker"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
      >
        <template v-slot:activator="{ on, attrs }">        
          <v-btn color="#3b6978" dark v-bind="attrs" v-on="on" fab>
            <v-icon dark>
              mdi-account-search
            </v-icon>            
          </v-btn>
        </template>
        <v-card>
          <v-toolbar dark color="#204051">
            <v-btn icon dark @click="searchSpeaker = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>Search speakers</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <!--CHAT LIST COMPONENT-->
          <ChatList />
          <Pagination />
        </v-card>
      </v-dialog>
    </v-col>
    <!-- CHATS -->
    <v-col cols="12" lg="6" md="6" sm="6">
      <v-dialog
        v-model="myChats"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn  fab color="#3b6978" dark v-bind="attrs" v-on="on">
            <v-icon dark>
              mdi-message
            </v-icon>            
          </v-btn>
        </template>
        <v-card>
          <v-toolbar dark color="#204051">
            <v-btn icon dark @click="myChats = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>My chats</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
        </v-card>
      </v-dialog>
    </v-col>
  </v-row>
</template>

<script>
import { mapMutations } from "vuex";
import ChatList from "../components/ChatList";
import Pagination from "../components/Pagination";
export default {
  components: {
    ChatList,
    Pagination,
  },
  data() {
    return {
      searchSpeaker: false,
      myChats: false,
    };
  },
  methods: {
    /* VUEX */
    ...mapMutations(["setChatVisible"]),
    /* TEMPLATE */
  },
};
</script>
