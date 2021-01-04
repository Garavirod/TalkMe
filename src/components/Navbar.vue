<template>
<div>
    <v-app-bar app absolute color="#3b6978" id="navbar-app" elevate-on-scroll scroll-target="#scrolling-techniques-7">
        <v-toolbar-title>
            <h1 class="fontTitle">NameApp</h1>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <!--RESPOSNIVE NAVIGATIOR-->
        <v-app-bar-nav-icon v-if="userInfo.isLogged" color="#ffff" @click="drawer = true"></v-app-bar-nav-icon>
        <!-- REGISTER COMPONENT -->
        <Register v-if="!userInfo.isLogged" />
        <!-- LOGIN COMPONENT -->
        <Login v-if="!userInfo.isLogged" />
    </v-app-bar>

    <!--NAVIGATION RESPONSIVE-->
    <v-navigation-drawer v-model="drawer" absolute temporary>
        <v-list nav dense>
            <v-list-item-group active-class="blue-grey--text text--accent-4">
                <v-list-item :to="{name: 'Welcome'}">
                    <v-list-item-icon>
                        <v-icon>mdi-account</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Profile</v-list-item-title>
                </v-list-item>

                <v-list-item :to="{name: 'Sections'}">
                    <v-list-item-icon>
                        <v-icon>mdi-view-list</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Sections</v-list-item-title>
                </v-list-item>

                <v-list-item :to="{name: 'Audios-History'}">
                    <v-list-item-icon>
                        <v-icon>mdi-database</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>
                        Audios history
                    </v-list-item-title>
                </v-list-item>              

                <v-list-item :to="{path:'/'}">
                    <v-list-item-icon>
                        <v-icon>mdi-logout</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Log out</v-list-item-title>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-navigation-drawer>
    <!-- END NAVIGATION RESPONSOVE-->
</div>
</template>

<style>
.fontTitle {
    font-family: "Anton", sans-serif;
    color: #fff;
}

#navbar-app {
    background: rgba(255, 255, 255, 0.315);
}

#iconTalkme {
    width: 50px;
}
</style>

<script>
import Login from "../components/Login";
import Register from "../components/Register";
import {
    mapState
} from "vuex";
export default {
    name: "Navbar",
    components: {
        Login,
        Register,
    },
    data: () => ({
        drawer: false,
    }),
    computed: {
        ...mapState(["userInfo"]),
    },
};
</script>
