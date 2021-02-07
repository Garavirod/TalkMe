<template>
  <v-card class="mt-4">
    <v-list three-line>
      <!-- Skeleton is loading messages -->
      <v-skeleton-loader
        v-if="isLoadingChatBox"
        type="list-item-avatar-three-line, list-item-avatar-three-line, list-item-avatar-three-line"
      ></v-skeleton-loader>
      <!-- End skeleton -->
      <v-row>
        <v-col cols="12" v-for="user in inboxUserHistory" :key="user.uid">          
          <v-card class="mx-auto" max-width="90%" tile @click="openChatBox(user)">
            <v-list-item two-line>
                <v-avatar
                  class="profile rounded-circle mr-3"
                  color="#204051"
                  size="60"
                  tile
                >
                  <span class="white--text headline">{{user.username.substring(0,3)}}</span>
                </v-avatar>              
              <v-list-item-content>
                <v-list-item-title>{{user.username}}</v-list-item-title>
                <v-list-item-subtitle>{{user.country}}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-col>
      </v-row>
    </v-list>
  </v-card>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
export default {
  data: () => ({
    
  }),
  computed: {
    ...mapState(["inboxUserHistory", "isLoadingChatBox"]),
  },
  methods: {
    ...mapActions(["getInboxUser","loadMessagesOnBox"]),    
    ...mapMutations(['setStatusChatBoxVisible']),

    async openChatBox(user){
      this.setStatusChatBoxVisible(true); //open box mexases
      await this.loadMessagesOnBox(user); // Load messages on box      
    },
  },
  created() {
    this.getInboxUser();
  },
};
</script>
