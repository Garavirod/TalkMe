<template>
  <v-container class="containerAudioChat">
    <v-row class="pa-2 ma-0 sectionControls">
      <!-- Instructions -->
      <v-col class="col-6">
        <h1>Audio chat</h1>
        <v-row color="red">
          <v-col class="col-12">
            <p>
              <span>
                <v-icon>mdi-checkbox-multiple-blank-circle</v-icon>
              </span>
              Conversation topic
            </p>
            <div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dolore veritatis quibusdam, molestias similique blanditiis? Sint atque dolores magni possimus, porro laudantium. Laborum cupiditate, dolorum vero distinctio quas alias modi!</p>
            </div>
          </v-col>
          <v-col class="col-12">
            <v-btn color="#ede682">
              change
              <v-icon class="ma-1">mdi-reload</v-icon>
            </v-btn>
          </v-col>
          <v-col class="col-12">
            <p>
              <span>
                <v-icon>mdi-grease-pencil</v-icon>
              </span>
              Write your notes before speaking
            </p>
            <v-textarea solo auto-grow name="input-7-4" label="Notes"></v-textarea>
          </v-col>
        </v-row>
      </v-col>
      <!-- Audio messages -->
      <v-col>
        <v-card class="mx-auto" max-width="500">
          <v-card-title class="white--text">
            <v-col class="col-12 text-center">
              <v-btn class="mr-2" color="#febf63" fab x-small dark>
                <v-icon>mdi-near-me</v-icon>
              </v-btn>
              <v-btn color="error" fab x-small dark class="mr-2">
                <v-icon>mdi-microphone-settings</v-icon>
              </v-btn>
              <v-btn color="#febf63" fab x-small dark>
                <v-icon>mdi-ear-hearing</v-icon>
              </v-btn>
            </v-col>
          </v-card-title>

          <v-card-text
            class="pt-4"
          >Lorem ipsum dolor sit, amet Inventore deserunt voluptatem maxime a veniam placeat, eos impedit nulla quos? Officiis, aperiam ducimus.</v-card-text>

          <v-divider></v-divider>

          <v-virtual-scroll :items="messages" :item-height="80" height="300">
            <template v-slot="{ item }">
              <v-list-item>
                <v-list-item-avatar>
                  <v-img :src="item.avatar"></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                  <audio src="audio.ogg" controls autoplay loop class="ml-2">
                    <p>Tu navegador no implementa el elemento audio</p>
                  </audio>
                </v-list-item-content>
              </v-list-item>
            </template>
          </v-virtual-scroll>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
    .containerAudioChat{
        background-color: #424242;
        /* border-radius: 10px; */
    }

    .sectionControls{
      background-color: #ffff;
    }
</style>

<script>
import {mapMutations, mapState} from 'vuex';
export default {
  name: "AudioChat",
  data() {
    return {
      messages: [
        {
          user: "Julian",
          active: true,
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg"
        },
        {
          user: "Julian",
          active: false,
          avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg"
        },
        {
          user: "Julian",
          active: true,
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg"
        },
        {
          user: "Julian",
          active: false,
          avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg"
        },
        {
          user: "Julian",
          active: true,
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg"
        },
        {
          user: "Julian",
          active: false,
          avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg"
        },
        {
          user: "Julian",
          active: true,
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg"
        },
        {
          user: "Julian",
          active: false,
          avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg"
        },
        {
          user: "Julian",
          active: true,
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg"
        },
        {
          user: "Julian",
          active: false,
          avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg"
        },
        {
          user: "Julian",
          active: true,
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg"
        },
        {
          user: "Julian",
          active: false,
          avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg"
        },
        {
          user: "Julian",
          active: true,
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg"
        },
        {
          user: "Julian",
          active: false,
          avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg"
        }
      ]
    };
  },
  computed: {
    ...mapState(['chatList'])
  },
  methods:{
    ...mapMutations(["setChatList"]),
  },
  mounted() {
    this.setChatList(true);    
    console.log(this.chatList);
    
  },
  beforeDestroy() {
    this.setChatList(false);
    console.log(this.chatList);
    
  },
};
</script>