<template>
  <SectionCard :nameSection="sectionName" :instructions="instructions">
    <template v-slot:SectionContent>
      <v-card flat>
        <v-tabs
          v-model="tab"
          background-color="grey"
          centered
          dark
          icons-and-text
        >
          <v-tabs-slider></v-tabs-slider>

          <v-tab href="#tab-1">
            Search speakers
            <v-icon>mdi-account-search</v-icon>
          </v-tab>

          <v-tab href="#tab-2">
            My chats
            <v-icon>mdi-message</v-icon>
          </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
          <v-tab-item value="tab-1">
            <chat-list />
          </v-tab-item>
          <v-tab-item value="tab-2">
            <v-row class="ma-2">               
              <!-- <List /> -->
              <v-col cols="12" lg="6" md="6" sm="12" xs="12">
                <BoxMessages :speaker="speaker" />
              </v-col>

              <v-col cols="12" lg="6" md="6" sm="12" xs="12">
                <recent-chats />
              </v-col> 
              <!--TOPIC CONVERASTION-->
              <v-col cols="12" lg="6" md="6" sm="12" xs="12">
                <v-row>
                  <h3>
                    <span>
                      <v-icon>mdi-lightbulb-on</v-icon>
                    </span>
                    Conversation topics
                  </h3>
                  <v-col cols="12">
                    <v-card elevation="1" class="pa-3">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Enim velit commodi dolorum delectus iusto eum dicta
                      corrupti beatae. Quo facilis nemo eum, nesciunt similique
                      ducimus eligendi nam perferendis vero molestiae.
                    </v-card>
                    <v-row class="text-center">
                      <v-col cols="12">
                        <v-btn outlined color="#3b6978">change</v-btn>
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
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </template>
  </SectionCard>
</template>

<script>
import SectionCard from "../components/SectionCard";
import BoxMessages from "../components/BoxMessages";
// import List from "../components/List";
import { mapMutations } from "vuex";
import ChatList from "../components/ChatList.vue";
import RecentChats from "../components/RecentChats.vue";
export default {
  name: "AudioChat",
  components: {
    BoxMessages,
    SectionCard,
    ChatList,
    RecentChats,
    // List,
  },
  data() {
    return {
      tab: null,
      sectionName: "Audio chat",
      extract:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas tempora, quia consequatur sequi rem quidem maiores adipisci, quis iusto veniam rerum, placeat dolore delectus earum ratione. Inventore ullam veritatis quae.",
      instructions:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas tempora, quia consequatur sequi rem quidem maiores adipisci, quis iusto veniam rerum, placeat dolore delectus earum ratione. Inventore ullam veritatis quae.",
      speaker: "Rodrigo",
    };
  },
  methods: {
    /* Access store methods */
    ...mapMutations(["socketConnection", "socketDisconn"]),
  },
  created() {
    /* Calls for socket connection method from store */
    this.socketConnection();
  },
  destroyed() {
    /* Calls for socket connection method from store */
    this.socketDisconn();
  },
};
</script>
