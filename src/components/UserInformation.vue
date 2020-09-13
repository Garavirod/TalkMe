<template>
<v-card elevation="2" class="ma-3">
    <v-container fluid>
        <v-row class="headerSections ma-4">
            <!--PERSONAL INFORMATION-->
            <v-col cols="12">
                <v-row>
                    <v-col cols="12" lg="6">
                        <h2>Personal information</h2>
                        <hr />
                        <v-row>
                            <v-col cols="12">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic
                                    debitis labore velit numquam sit eveniet praesentium harum vel
                                    ratione nemo possimus incidunt, officia doloribus voluptatibus
                                    animi optio reiciendis! Ipsa, beatae.
                                </p>
                            </v-col>
                        </v-row>
                        <v-card>
                            <v-row class="text-right">
                                <v-col cols="12" xs="12" lg="4" sm="4">
                                    <v-row class="text-center">
                                        <v-col class="mt-2">
                                            <v-avatar class="profile rounded-circle" color="grey" size="164" tile>
                                                <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
                                            </v-avatar>
                                        </v-col>
                                    </v-row>
                                </v-col>
                                <v-col cols="12" lg="8" xs="12" sm="8">
                                    <v-list-item two-line>
                                        <v-list-item-content>
                                            <v-list-item-title><b>Username</b></v-list-item-title>
                                            <v-list-item-subtitle>{{userInfo.username}}</v-list-item-subtitle>
                                        </v-list-item-content>
                                    </v-list-item>
                                    <v-list-item two-line>
                                        <v-list-item-content>
                                            <v-list-item-title><b>Age</b></v-list-item-title>
                                            <v-list-item-subtitle>{{userInfo.age}}</v-list-item-subtitle>
                                        </v-list-item-content>
                                    </v-list-item>
                                    <v-list-item two-line>
                                        <v-list-item-content>
                                            <v-list-item-title><b>Country</b></v-list-item-title>
                                            <v-list-item-subtitle>{{userInfo.country}}</v-list-item-subtitle>
                                        </v-list-item-content>
                                    </v-list-item>
                                    <v-list-item two-line>
                                        <v-list-item-content>
                                            <v-list-item-title><b>Choosen lenguages</b></v-list-item-title>
                                            <v-list-item-subtitle v-for="language in userInfo.Choosen_lengages" :key="language">
                                                {{language}}
                                            </v-list-item-subtitle>
                                        </v-list-item-content>
                                    </v-list-item>
                                </v-col>
                            </v-row>
                            <v-row class="text-center">
                                <v-col cols="12">
                                    <v-btn large color="primary">Update</v-btn>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-col>
                    <!--PROGRESS-->
                    <v-col cols="12" lg="6">
                        <h2>Progress information</h2>
                        <hr />
                        <v-row>
                            <v-col cols="12">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic
                                    debitis labore velit numquam sit eveniet praesentium harum vel
                                    ratione nemo possimus incidunt, officia doloribus voluptatibus
                                    animi optio reiciendis! Ipsa, beatae.
                                </p>
                            </v-col>
                        </v-row>
                        <v-card class="ma-2">
                            <v-row class="text-center" v-for="it in progress" :key="it.tag">
                                <v-col cols="12" sm="4" lg="4" xs="12">
                                    <v-row align="center" justify="center">
                                        <v-img :src="it.img" max-height="32" max-width="32" aspect-ratio="1"></v-img>
                                    </v-row>
                                </v-col>
                                <v-col cols="12" sm="4" lg="4" xs="12">
                                    <p>{{ it.tag }}</p>
                                </v-col>
                                <v-col cols="12" sm="4" lg="4" xs="12">{{ it.score }}</v-col>
                            </v-row>
                        </v-card>
                        <!--HISTORY-->
                        <v-row>
                            <v-col cols="12">
                                <h2>Saved records</h2>
                                <hr />
                                <v-row>
                                    <v-col cols="12">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic
                                            debitis labore velit numquam sit eveniet praesentium harum vel
                                            ratione nemo possimus incidunt, officia doloribus voluptatibus
                                            animi optio reiciendis! Ipsa, beatae.
                                        </p>
                                    </v-col>
                                </v-row>

                            </v-col>
                        </v-row>
                        <v-row class="text-center">
                            <v-col cols="12">
                                <v-btn large color="primary">Audios history</v-btn>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</v-card>
</template>

<script>
import {
    mapState
} from "vuex";
export default {
    name: "UserInformation",
    computed: {
        ...mapState(["userInfo"])
    },
    data() {
        return {
            progress: [{
                    tag: 'Victories',
                    img: require('../assets/victory.png'),
                    score: 0

                },
                {
                    tag: 'Fails',
                    img: require('../assets/fails.png'),
                    score: 0
                },
                {
                    tag: 'Medals',
                    img: require('../assets/medal.png'),
                    score: 0
                },
            ],
        }
    },

}
</script>
