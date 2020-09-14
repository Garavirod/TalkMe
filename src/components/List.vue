<template>
<v-row justify="center">
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
        <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark v-bind="attrs" v-on="on">
                Chat List
            </v-btn>
        </template>
        <v-card>
            <v-toolbar dark color="primary">
                <v-btn icon dark @click="dialog = false">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
                <v-toolbar-title>People active now</v-toolbar-title>
                <v-spacer></v-spacer>
            </v-toolbar>

            <v-container>
                <v-row class="text-center">
                    <v-col cols="12" lg="3" md="4" sm="4" xs="12" v-for="item in actives" :key="item.id">
                        <v-card>
                            <v-list-item three-line>
                                <v-list-item-content>
                                    <div class="overline mb-4">{{item.country}}</div>
                                    <v-list-item-title class="headline mb-1">{{item.user}}</v-list-item-title>
                                    <v-list-item-subtitle>Level : {{item.level}}</v-list-item-subtitle>
                                </v-list-item-content>

                                <v-list-item-avatar tile size="80" color="grey">
                                    <v-img :src="item.avatar"></v-img>
                                </v-list-item-avatar>
                            </v-list-item>

                            <v-card-actions>
                                <v-btn text>Choose</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>

        </v-card>
    </v-dialog>
</v-row>
</template>

<script>
export default {
    data() {
        return {
            dialog: false,
            actives: [{
                    user: "Julian",
                    country: "Mexico",
                    active: false,
                    level: "Advanced",
                    avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
                },
                {
                    user: "Julian",
                    country: "Spain",
                    active: true,
                    level: "Advanced",
                    avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
                },
                {
                    user: "Julian",
                    country: "Cuba",
                    active: false,
                    level: "Advanced",
                    avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
                },
                {
                    user: "Julian",
                    country: "Colombia",
                    active: false,
                    level: "Advanced",
                    avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
                },
                {
                    user: "Julian",
                    country: "Argentina",
                    active: true,
                    level: "Advanced",
                    avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
                },
                {
                    user: "Julian",
                    country: "Dinamarca",
                    active: false,
                    level: "Advanced",
                    avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
                },
                {
                    user: "Julian",
                    country: "China",
                    active: false,
                    level: "Advanced",
                    avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
                },
                {
                    user: "Julian",
                    country: "Mexico",
                    active: true,
                    level: "Advanced",
                    avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
                },
                {
                    user: "Rusia",
                    country: "Mexico",
                    active: false,
                    level: "Advanced",
                    avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
                },
                {
                    user: "Rosa",
                    country: "Brazil",
                    active: true,
                    level: "Advanced",
                    avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
                },
                {
                    user: "Julian",
                    country: "Mexico",
                    active: false,
                    level: "Advanced",
                    avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
                },
                {
                    user: "Julian",
                    country: "Mexico",
                    active: true,
                    level: "Advanced",
                    avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
                },
                {
                    user: "Julian",
                    country: "Mexico",
                    active: false,
                    level: "Advanced",
                    avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
                },
            ],

        }
    },
}
</script>
