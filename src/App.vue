<template>

    <!-- App.vue -->

<v-app>
  <v-navigation-drawer app v-if="false">
    <h1>CHAT</h1>
  </v-navigation-drawer>

  <v-app-bar 
    app
    absolute
    color="#7fdbda"
    elevate-on-scroll
    scroll-target="#scrolling-techniques-7"
  >
     <v-toolbar-title><h1 class="fontTitle">TalkMe</h1></v-toolbar-title>
     <!-- <v-img id="iconTalkme" src="@/assets/talkme.png"></v-img> -->
     <v-spacer></v-spacer>
      <v-btn depressed color="#ade498">Login</v-btn>          
  </v-app-bar>

  <!-- Sizes your content based upon application components -->
  <v-main>
    <!-- Provides the application the proper gutter -->
    <v-container fluid  class="ma-0 pa-0">
      <!-- If using vue-router -->
      <router-view></router-view>
    </v-container>
  </v-main>

  <v-footer app>
    <!-- -->
  </v-footer>
</v-app>
  
</template>


<style>
  .fontTitle{
    font-family: 'Anton', sans-serif;
    color: #424242;
  }

  #iconTalkme{
    width: 50px;
  }
</style>