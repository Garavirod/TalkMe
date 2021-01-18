<template>
<v-container class="pa-1">
    <v-row class="text-center">
        <v-col cols="12" lg="12" xs="12">
            <v-card  class="">
                <!--HEAD BOX-->
                <v-card-title class="black--text text-center">
                    <v-col class="text-center">
                        <h3>Box Messages</h3>
                        <p>You are talking with</p>
                        <p>{{speaker}}</p>
                    </v-col>
                </v-card-title>
                <v-card-text class="text-center">Don't forget always to be polite</v-card-text>
                <v-divider></v-divider>
                <!--MESSAGES-->
                <v-virtual-scroll :items="messages" :item-height="80" height="300" class="">
                    <template v-slot="{ item }">
                        <v-list-item class="ma-2">
                            <div v-show="false">
                                <v-list-item-avatar>
                                    <v-img :src="item.avatar"></v-img>
                                </v-list-item-avatar>
                                <v-list-item-content>
                                    <audio controls class="ml-2" id="audioBox">                                    
                                    </audio>
                                </v-list-item-content>
                            </div>
                            <v-row>
                                <AudioCardMessage/>
                            </v-row>
                        </v-list-item>
                    </template>
                </v-virtual-scroll>
                <v-divider></v-divider>
                <!--BUTTONS CONTROLS-->
                <AudioControls :ctr_send="true" />
            </v-card>
        </v-col>
    </v-row>
</v-container>
</template>

<style>
/* audio {
    -moz-border-radius: 7px 7px 7px 7px;
    -webkit-border-radius: 7px 7px 7px 7px;
    border-radius: 20px;
    background-color: white;
    width: 100px;

} */

#audioBox{
    width: 60%;
}
</style>

<script>
import { mapState } from 'vuex';
import AudioControls from "../components/AudioControls";
import AudioCardMessage from '../components/AudioCardMessage';
export default {
    name: "BoxMessages",
    props: ["speaker"],
    components: {
        AudioControls,
        AudioCardMessage,
    },
    computed:{
        ...mapState(['socket']),
    },
    data() {
        return {
            isrecording: false,
            messages: [{
                    user: "Julian",
                    active: true,
                    avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
                },
                {
                    user: "Julian",
                    active: false,
                    avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
                },
                {
                    user: "Julian",
                    active: true,
                    avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
                },
                {
                    user: "Julian",
                    active: false,
                    avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
                },
                {
                    user: "Julian",
                    active: true,
                    avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
                },
                {
                    user: "Julian",
                    active: false,
                    avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
                },
                {
                    user: "Julian",
                    active: true,
                    avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
                },
                {
                    user: "Julian",
                    active: false,
                    avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
                },
                {
                    user: "Julian",
                    active: true,
                    avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
                },
                {
                    user: "Julian",
                    active: false,
                    avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
                },
                {
                    user: "Julian",
                    active: true,
                    avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
                },
                {
                    user: "Julian",
                    active: false,
                    avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
                },
                {
                    user: "Julian",
                    active: true,
                    avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
                },
                {
                    user: "Julian",
                    active: false,
                    avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
                },
            ],
        };
    },
};
</script>
