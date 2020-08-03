<template>
<v-app>
  <v-navigation-drawer app v-if="true">
    <ChatList/>
  </v-navigation-drawer>
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
export default {
  components:{
    Navbar,
    ChatList,
  }
}
</script>