<template>
<v-container fluid>
    <v-card>
        <!-- HEAD SECTION-->
        <v-row class="ma-3">
            <v-col cols="12" lg="6" md="6" xs="12" class="text-center">
                <h1>{{ nameSection }}</h1>
            </v-col>
            <v-col cols="12" lg="6" md="6" xs="12">
                <v-row class="text-center">
                    <v-col cols="12">
                        <v-btn color="#ede682" small depressed @click="dialog = !dialog">Read instructions</v-btn>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>

        <!--HERE GOES THE COMPONENT-->
        <v-card-text class="ma-0 pa-0">
            <v-sheet max-width="100%" id="sheetCard">
                <slot name="SectionContent"></slot>
            </v-sheet>
        </v-card-text>
    </v-card>
    <!-- Modal instructions -->
    <v-row justify="center">
        <v-dialog v-model="dialog" persistent max-width="400">
            <v-card>
                <v-card-title class="headline">Instructions</v-card-title>
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
#sheetCard {
    background: #dddcdc;
}
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
