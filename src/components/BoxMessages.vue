<template>
<v-container>
    <v-card class="mx-auto" max-width="620">
        <v-card-title class="black--text text-center">
            <v-col class="text-center col-12">
                <h3>Box Messages</h3>
            </v-col>
        </v-card-title>

        <v-card-text class="pt-4 text-center">Don't forget always to be polite</v-card-text>

        <v-divider></v-divider>

        <v-virtual-scroll :items="messages" :item-height="80" height="300" class="mt-2">
            <template v-slot="{ item }">
                <v-list-item>
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
    </v-card>
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
    data() {
        return {
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
