<template>
<SectionCard :nameSection="sectionName" :instructions="instructions">
    <template v-slot:SectionContent>
        <v-container fluid>
            <v-row>
                <v-col cols="12" lg="6" md="6" sm="12" xs="12">
                    <List />
                    <BoxMessages :speaker="speaker" />
                </v-col>
                <v-col cols="12" lg="6" md="6" sm="12" xs="12">
                    <!--TOPIC CONVERASTION-->
                    <v-row>
                        <h3><span>
                                <v-icon>mdi-lightbulb-on</v-icon>
                            </span> Conversation topics</h3>
                        <v-col cols="12">
                            <v-card elevation="1" class="pa-3">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim velit commodi dolorum delectus iusto eum dicta corrupti beatae. Quo facilis nemo eum, nesciunt similique ducimus eligendi nam perferendis vero molestiae.
                            </v-card>
                            <v-row class="text-center">
                                <v-col cols="12">
                                    <v-btn color="primary">change</v-btn>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                    <v-row>
                        <h3><span>
                                <v-icon>mdi-pencil-box</v-icon>
                            </span> Write your notes</h3>
                        <v-col cols="12">
                            <v-textarea solo name="input-7-4" label="write your ideas..."></v-textarea>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </template>
</SectionCard>
</template>

<script>
import SectionCard from "../components/SectionCard";
import BoxMessages from "../components/BoxMessages";
import List from "../components/List";
// import {
//     mapMutations,
//     mapState
// } from "vuex";
export default {
    name: "AudioChat",
    components: {
        BoxMessages,
        SectionCard,
        List
    },
    data() {
        return {
            sectionName: "Audio chat",
            extract: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas tempora, quia consequatur sequi rem quidem maiores adipisci, quis iusto veniam rerum, placeat dolore delectus earum ratione. Inventore ullam veritatis quae.",
            instructions: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas tempora, quia consequatur sequi rem quidem maiores adipisci, quis iusto veniam rerum, placeat dolore delectus earum ratione. Inventore ullam veritatis quae.",
            speaker: "Rodrigo"
        };
    },
    computed: {
        // ...mapState(["chatList"])
    },
    methods: {
        // ...mapMutations(["setChatList"])
    },
    // mounted() {
    //     this.setChatList(true);
    //     console.log(this.chatList);
    // },
    // beforeDestroy() {
    //     this.setChatList(false);
    //     console.log(this.chatList);
    // }
};
</script>
