<template>
<v-container>
    <v-row class="text-center">
        <v-col cols="12" lg="12" xs="12">
            <v-card max-width="820" class="pa-0">
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
                <v-virtual-scroll :items="messages" :item-height="80" height="300" class="mt-2">
                    <template v-slot="{ item }">
                        <v-list-item class="ma-2">
                            <v-list-item-avatar>
                                <v-img :src="item.avatar"></v-img>
                            </v-list-item-avatar>
                            <v-list-item-content>
                                <audio src="audio.ogg" controls class="ml-2">
                                    <p>Tu navegador no implementa el elemento audio</p>
                                </audio>
                            </v-list-item-content>
                        </v-list-item>
                    </template>
                </v-virtual-scroll>
                <v-divider></v-divider>
                <!--BUTTONS CONTROLS-->
                <v-row class="text-center">
                    <v-col cols="12">
                        <v-btn small class="mx-2" fab dark color="indigo">
                            <v-icon dark>mdi-send</v-icon>
                        </v-btn>
                        <v-btn small class="mx-2" fab dark color="red" @click="isrecording = !isrecording">
                            <v-icon dark v-if="isrecording">mdi-stop</v-icon>
                            <v-icon dark v-else>mdi-microphone</v-icon>
                        </v-btn>
                    </v-col>
                    <v-col v-if="isrecording">
                        <v-row class="text-center">
                            <v-col cols="12" lg="4">00</v-col>
                            <v-col cols="12" lg="4">00</v-col>
                            <v-col cols="12" lg="4">00</v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-card>
        </v-col>
    </v-row>
</v-container>
</template>

<style>
audio {
    -moz-border-radius: 7px 7px 7px 7px;
    -webkit-border-radius: 7px 7px 7px 7px;
    border-radius: 20px;
    background-color: white;
    width: 100px;

}
</style>

<script>
export default {
    name: "BoxMessages",
    props: ["speaker"],
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
