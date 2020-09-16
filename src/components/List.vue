<template>
<v-row justify="center">
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
        <template v-slot:activator="{ on, attrs }">
            <v-btn outlined color="#3b6978" dark v-bind="attrs" v-on="on">
                Chat List
            </v-btn>
        </template>
        <v-card>
            <v-toolbar dark color="#204051">
                <v-btn icon dark @click="dialog = false">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
                <v-toolbar-title>People active now</v-toolbar-title>
                <v-spacer></v-spacer>
            </v-toolbar>
            <!--CHAT LIST COMPONENT-->
            <ChatList />
        </v-card>
    </v-dialog>
</v-row>
</template>

<script>
import ChatList from "../components/ChatList";
export default {
    components: {
        ChatList,
    },
    data() {
        return {
            dialog: false,
        }
    },
}
</script>
