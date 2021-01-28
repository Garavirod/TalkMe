<template>
  <SectionCard :nameSection="sectionName" :instructions="instructions">
    <template v-slot:SectionContent>
      <v-card flat>
        <v-tabs
          v-model="mainTab"
          background-color="grey"
          centered
          dark
          icons-and-text
        >
          <v-tabs-slider></v-tabs-slider>
          <!-- TABS -->
          <v-tab href="#tab-1">
            Search
            <v-icon>mdi-account-search</v-icon>
          </v-tab>

          <v-tab href="#tab-2">
            Inbox
            <v-icon>mdi-inbox</v-icon>
          </v-tab>
        </v-tabs>

        <v-tabs-items v-model="mainTab">
          <!-- SEARCH SPEAKERS -->
          <v-tab-item value="tab-1">
            <chat-list />
          </v-tab-item>
          <!-- INBOX MESSAGES -->
          <v-tab-item value="tab-2">
            <inbox-chat />
          </v-tab-item>
        </v-tabs-items>

        <!-- CHAT BOX -->
        <v-row justify="center" >
          <v-dialog
            v-model="openchat.status"
            fullscreen
            hide-overlay
            transition="dialog-bottom-transition"
            
          >
            <v-card id="box-mess-content">
              <v-toolbar dark color="#204051">
                <v-btn icon dark @click="setOpenBoxMessages({status:false,user:null})">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
                <v-toolbar-title>Chatbox</v-toolbar-title>
                <v-spacer></v-spacer>                
              </v-toolbar>              
              <v-row class="ma-2">                
                <v-col cols="12" lg="6" md="6" sm="12" xs="12">
                  <BoxMessages />
                </v-col>
                <!-- TOPICS AND INBOX -->
                <v-col cols="12" lg="6" md="6" sm="12" xs="12">
                  <v-row>
                    <v-col cols="12">
                      <v-row>
                        <h3>
                          <span>
                            <v-icon>mdi-lightbulb-on</v-icon>
                          </span>
                          Conversation topics
                        </h3>
                        <v-col cols="12">
                          <v-card elevation="1" class="pa-3">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Enim velit commodi dolorum delectus iusto eum
                            dicta corrupti beatae. Quo facilis nemo eum,
                            nesciunt similique ducimus eligendi nam perferendis
                            vero molestiae.
                          </v-card>
                          <v-row class="text-center">
                            <v-col cols="12">
                              <v-btn color="#3b6978" outlined>change</v-btn>
                            </v-col>
                          </v-row>
                        </v-col>
                      </v-row>
                      <v-row>
                        <h3>
                          <span>
                            <v-icon>mdi-pencil-box</v-icon>
                          </span>
                          Write your notes
                        </h3>
                        <v-col cols="12">
                          <v-textarea
                            solo
                            name="input-7-4"
                            label="write your ideas..."
                          ></v-textarea>
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>            
            </v-card>
          </v-dialog>
        </v-row>        
      </v-card>
    </template>
  </SectionCard>
</template>

<style>
  #box-mess-content{
    
    background-color: #cae8d5;
  }
</style>

<script>
import SectionCard from "../components/SectionCard";
import BoxMessages from "../components/BoxMessages";
// import List from "../components/List";
import { mapActions, mapMutations, mapState } from "vuex";
import ChatList from "../components/ChatList.vue";
import InboxChat from "../components/InboxChat.vue";
export default {
  name: "AudioChat",
  components: {
    BoxMessages,
    SectionCard,
    ChatList,
    InboxChat,
    // List,
  },
  data() {
    return {      
      mainTab: null,
      secundaryTab: null,
      sectionName: "Audio chat",
      default:this.userInformation,
      extract:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas tempora, quia consequatur sequi rem quidem maiores adipisci, quis iusto veniam rerum, placeat dolore delectus earum ratione. Inventore ullam veritatis quae.",
      instructions:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas tempora, quia consequatur sequi rem quidem maiores adipisci, quis iusto veniam rerum, placeat dolore delectus earum ratione. Inventore ullam veritatis quae.",
    };
  },
  methods: {
    /* Access store methods */
    ...mapMutations([
      "socketDisconn",
      "setOpenBoxMessages",
      "getUsersActives",      
      "getUsersActives"
    ]),
    ...mapActions(['getUserInformation']),
  },
  computed:{
    ...mapState(["openchat","userInformation"]),
  },

  created() {
      this.getUserInformation();
  },
  destroyed() {
    /* Calls for socket connection method from store */
    this.socketDisconn();
  },
};
</script>
