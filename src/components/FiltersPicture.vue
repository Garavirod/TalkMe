<template>
<v-row justify="center">
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
        <template v-slot:activator="{ on, attrs }">
            <v-btn outlined color="#3b6978" dark v-bind="attrs" v-on="on" small>
                Filter by
            </v-btn>
        </template>
        <v-card>
            <v-toolbar dark color="#20405">
                <v-btn icon dark @click="dialog = false">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
                <v-toolbar-title>Filter by ...</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items>
                    <v-btn dark text @click="dialog = false">Save</v-btn>
                </v-toolbar-items>
            </v-toolbar>
            <v-list three-line subheader>
                <v-subheader>Filter a according to following</v-subheader>
                <v-list-item>
                    <v-list-item-action>
                        <v-checkbox color="#febf63" v-model="people"></v-checkbox>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>People</v-list-item-title>
                        <v-list-item-subtitle>Notify me about updates to apps or games that I downloaded</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item>
                    <v-list-item-action>
                        <v-checkbox color="#febf63" v-model="places"></v-checkbox>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Places</v-list-item-title>
                        <v-list-item-subtitle>Auto-update apps at any time. Data charges may apply</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item>
                    <v-list-item-action>
                        <v-checkbox color="#febf63" v-model="landscapes"></v-checkbox>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Landscapes</v-list-item-title>
                        <v-list-item-subtitle>Automatically add home screen widgets</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item>
                    <v-list-item-action>
                        <v-checkbox color="#febf63" v-model="animals"></v-checkbox>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Animals</v-list-item-title>
                        <v-list-item-subtitle>Automatically add home screen widgets</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item>
                    <v-list-item-action>
                        <v-checkbox color="#febf63" v-model="meetings"></v-checkbox>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Meetings</v-list-item-title>
                        <v-list-item-subtitle>Automatically add home screen widgets</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item>
                    <v-list-item-action>
                        <v-checkbox color="#febf63" v-model="cartoons"></v-checkbox>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Cartoons</v-list-item-title>
                        <v-list-item-subtitle>Automatically add home screen widgets</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item>
                    <v-list-item-action>
                        <v-checkbox color="#febf63" v-model="random"></v-checkbox>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Random</v-list-item-title>
                        <v-list-item-subtitle>Automatically add home screen widgets</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-card>
    </v-dialog>
</v-row>
</template>

<script>
export default {
    name: "FilterPicture",
    data() {
        return {
            dialog: false,
            places: false,
            landscapes: false,
            animals: false,
            meetings: false,
            cartoons: false,
            random: true,
            people: true
        }
    },
}
</script>
