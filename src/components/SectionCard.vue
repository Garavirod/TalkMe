<template>
<v-container fluid class="containerSections">
    <v-card class="ma-5">
        <v-system-bar></v-system-bar>
        <v-toolbar flat>
            <v-toolbar-title>
                <h2>{{ nameSection }}</h2>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <div>
                <v-btn to="/sections" small depressed color="#ade498">Back to sections</v-btn>
            </div>
        </v-toolbar>
        <v-banner single-line>
            Enjoy to learn
            <template v-slot:actions>
                <v-btn color="#ede682" small depressed @click="dialog = !dialog">Read instructions</v-btn>
            </template>
        </v-banner>
        <v-card-text class="cardSection">
            <v-sheet max-width="100%" class="mx-auto">
                <slot name="SectionContent"></slot>
            </v-sheet>
        </v-card-text>
    </v-card>
    <!-- Modal instructions -->
    <v-row justify="center">
        <v-dialog v-model="dialog" persistent max-width="400">
            <v-card>
                <v-card-title class="headline">Instrucions</v-card-title>
                <v-card-text>{{ instructions }}</v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="green darken-1" text @click="dialog = false">Agree</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
    <!-- End modal instructions -->
</v-container>
</template>

<style>
.containerSections {
    background: rgb(34, 193, 195);
    background: linear-gradient(0deg, rgba(34, 193, 195, 1) 0%, rgba(253, 223, 45, 1) 100%);
}

.section1 {
    background-color: aliceblue;
    height: 100vh;
}

/* .headerSection2{
    background-color: #ade498;
} */
</style>

<script>
import {
    mapState
} from "vuex";
export default {
    name: "SectionCard",
    props: ["nameSection", "notes", "instructions"],
    data() {
        return {
            dialog: false,
        };
    },
    computed: {
        ...mapState(["progress"]),
    },
};
</script>
