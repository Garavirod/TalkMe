<template>
<v-app>
  <ChatList app v-if="chatList"/>
  <Navbar/>
  <v-main>
    <v-container fluid  class="ma-0 pa-0">
      <router-view></router-view>
    </v-container>
  </v-main>
  <v-footer app>
    <!-- -->
  </v-footer>
</v-app>
  
</template>

<script>

import Navbar from "@/components/Navbar.vue";
import ChatList from "@/components/ChatList.vue";
import { mapState } from 'vuex';
export default {
  components:{
    Navbar,
    ChatList,
  },
  computed:{
    ...mapState(["chatList"]),
  }
}
</script>