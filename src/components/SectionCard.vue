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
            <v-row v-for="p in progress" :key="p.id">>
                <v-col class="col-3">
                    <v-img :src="p.img" aspect-ratio="1"></v-img>
                    {{ p.addsup }}
                    {{ p.tag }}
                </v-col>
            </v-row>
            <template v-slot:actions>
                <v-btn color="#ede682" small @click="dialog = !dialog">Read instructions</v-btn>
            </template>
        </v-banner>
        <v-card-text class="cardSection">
            <v-sheet max-width="95%" height="100vh" class="mx-auto">
                <v-row>
                    <!-- Sections Left -->
                    <v-col class="col-7 section2">
                        <v-row class="headerSection2 ma-1">
                            <v-col class="col-12 text-center">
                                <v-btn class="mr-2" color="#febf63" fab small dark>
                                    <v-icon>mdi-near-me</v-icon>
                                </v-btn>
                                <v-btn color="error" fab small dark class="mr-2">
                                    <v-icon>mdi-microphone-settings</v-icon>
                                </v-btn>
                                <v-btn color="#febf63" fab small dark>
                                    <v-icon>mdi-ear-hearing</v-icon>
                                </v-btn>
                            </v-col>
                        </v-row>
                        <slot name="contentSection"></slot>
                    </v-col>
                    <!-- Section Right -->
                    <v-col class="col-5 section1 pa-5">
                        <v-row>
                            <!-- RUBRIC SECTION -->
                            <v-col class="col-12">
                                <p>
                                    <span>
                                        <v-icon>mdi-comment-text-outline</v-icon>
                                    </span>
                                    Rubric
                                </p>
                                <v-btn class="mt-2 mb-3" color="#ede682" small>Change</v-btn>
                                <v-col class="col-12 Extract">
                                    <slot name="extract"></slot>
                                </v-col>
                            </v-col>
                            <!-- WRITE SECTION -->
                            <v-col class="col-12" v-if="notes">
                                <p>
                                    <span>
                                        <v-icon>mdi-grease-pencil</v-icon>
                                    </span>
                                    Write your notes before speaking
                                </p>
                                <v-textarea solo auto-grow name="input-7-4" label="Notes"></v-textarea>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
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
    background-color: #424242;
}

.cardSection {
    background-color: #7fdbda;
}

.section1 {
    background-color: aliceblue;
    height: 100vh;
}

.section2 {
    background-color: #fff;
}

.Extract {
    background-color: #ffff;
    /* overflow: scroll; */
    max-height: 450px;
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
