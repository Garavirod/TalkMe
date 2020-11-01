<template>
<v-card elevation="2">
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
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Hic debitis labore velit numquam sit eveniet praesentium
                                    harum vel ratione nemo possimus incidunt, officia doloribus
                                    voluptatibus animi optio reiciendis! Ipsa, beatae.
                                </p>
                            </v-col>
                        </v-row>
                        <v-card>
                            <v-row class="text-right">
                                <v-col cols="12" xs="12" lg="6" sm="4">
                                    <v-row class="text-center">
                                        <v-col class="mt-2">
                                            <v-avatar class="profile rounded-circle" color="grey" size="164" tile>
                                                <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
                                            </v-avatar>
                                        </v-col>
                                    </v-row>
                                </v-col>
                                <v-col cols="12" lg="6" xs="12" sm="8">
                                    <v-list-item two-line>
                                        <v-list-item-content>
                                            <v-list-item-title><b>Email</b></v-list-item-title>
                                            <v-list-item-subtitle>{{
                          dataUser.email
                        }}</v-list-item-subtitle>
                                        </v-list-item-content>
                                    </v-list-item>
                                    <v-list-item two-line>
                                        <v-list-item-content>
                                            <v-list-item-title><b>Country</b></v-list-item-title>
                                            <v-list-item-subtitle>{{
                          dataUser.country
                        }}</v-list-item-subtitle>
                                        </v-list-item-content>
                                    </v-list-item>
                                    <v-list-item two-line>
                                        <v-list-item-content>
                                            <v-list-item-title><b>Choosen lenguages</b></v-list-item-title>
                                            <v-list-item-subtitle v-for="language in dataUser.chosen_lan" :key="language">
                                                {{ language }}
                                            </v-list-item-subtitle>
                                        </v-list-item-content>
                                    </v-list-item>
                                </v-col>
                            </v-row>
                            <v-row class="text-center">
                                <v-col cols="12">
                                    <v-btn large outlined color="#204051">Update</v-btn>
                                </v-col>
                                <v-col cols="12">      
                                    <FormUpdate/>                              
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
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Hic debitis labore velit numquam sit eveniet praesentium
                                    harum vel ratione nemo possimus incidunt, officia doloribus
                                    voluptatibus animi optio reiciendis! Ipsa, beatae.
                                </p>
                            </v-col>
                        </v-row>
                        <v-card class="ma-2">
                            <v-row class="text-center">
                                <!--VICTORIES-->
                                <v-col cols="12" sm="4" lg="4" xs="12">
                                    <v-row align="center" justify="center">
                                        <v-img :src="require('../assets/victory.png')" max-height="32" max-width="32" aspect-ratio="1"></v-img>
                                    </v-row>
                                </v-col>
                                <v-col cols="12" sm="4" lg="4" xs="12">
                                    <p>Victories</p>
                                </v-col>
                                <v-col cols="12" sm="4" lg="4" xs="12">{{ dataUser.victories }}</v-col>

                                <!--FAILS-->
                                <v-col cols="12" sm="4" lg="4" xs="12">
                                    <v-row align="center" justify="center">
                                        <v-img :src="require('../assets/fails.png')" max-height="32" max-width="32" aspect-ratio="1"></v-img>
                                    </v-row>
                                </v-col>
                                <v-col cols="12" sm="4" lg="4" xs="12">
                                    <p>Fails</p>
                                </v-col>
                                <v-col cols="12" sm="4" lg="4" xs="12">{{ dataUser.fails }}</v-col>
                                <!--MEDALS-->
                                <v-col cols="12" sm="4" lg="4" xs="12">
                                    <v-row align="center" justify="center">
                                        <v-img :src="require('../assets/medal.png')" max-height="32" max-width="32" aspect-ratio="1"></v-img>
                                    </v-row>
                                </v-col>
                                <v-col cols="12" sm="4" lg="4" xs="12">
                                    <p>Medals</p>
                                </v-col>
                                <v-col cols="12" sm="4" lg="4" xs="12">{{ dataUser.medals }}</v-col>
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
                                            Lorem ipsum dolor sit amet, consectetur adipisicing
                                            elit. Hic debitis labore velit numquam sit eveniet
                                            praesentium harum vel ratione nemo possimus incidunt,
                                            officia doloribus voluptatibus animi optio reiciendis!
                                            Ipsa, beatae.
                                        </p>
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>
                        <v-row class="text-center">
                            <v-col cols="12">
                                <v-btn large outlined color="#204051" :to="{ name: 'Audios-History' }">Audios history</v-btn>
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
import FormUpdate from '../components/FormUpdate';
export default {
    name: "UserInformation",
    components:{
        FormUpdate
    },
    computed: {
        ...mapState(["userInfo"])
    },
    data() {
        return {
            dataUser: {
                email: '',
                chosen_lan: [],
                country: '',
                victories: 0,
                fails: 0,
                medals: 0
            },
        }
    },
    created() {
        this.dataUser.email = this.userInfo.email;
        this.dataUser.country = this.userInfo.country;
        this.dataUser.chosen_lan = this.userInfo.choosen_langages;
        this.dataUser.victories = this.userInfo.progress_app.victories;
        this.dataUser.fails = this.userInfo.progress_app.fails;
        this.dataUser.medals = this.userInfo.progress_app.medals;
    }

}
</script>
