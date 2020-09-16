<template>
<SectionCard :nameSection="idSituation" :instructions="instructions">
    <template v-slot:SectionContent>
        <v-container>
            <v-row>
                <v-col cols="12" lg="4" md="6" sm="6" xs="12">
                    <v-row class="mx-auto">
                        <v-col class="white rounded">
                            <v-img src="https://picsum.photos/200/300" aspect-ratio="1" max-width="100%" max-height="100%"></v-img>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="12" lg="8" md="6" sm="6" xs="12">
                    <v-row class="mb-2">
                        <h3><span>
                                <v-icon>mdi-comment-question-outline</v-icon>
                            </span> Situation</h3>
                        <v-col cols="12">
                            <v-card elevation="1" class="pa-3">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim velit commodi dolorum delectus iusto eum dicta corrupti beatae. Quo facilis nemo eum, nesciunt similique ducimus eligendi nam perferendis vero molestiae.
                            </v-card>

                        </v-col>
                    </v-row>
                    <v-row>
                        <h3><span>
                                <v-icon>mdi-lightbulb-on</v-icon>
                            </span>Topics</h3>
                        <v-col cols="12">
                            <v-card elevation="1" class="pa-3">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim velit commodi dolorum delectus iusto eum dicta corrupti beatae. Quo facilis nemo eum, nesciunt similique ducimus eligendi nam perferendis vero molestiae.
                            </v-card>

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
            <v-row class="text-center">
                <v-col cols="12">
                    <v-btn outlined color="#3b6978">Let's begin</v-btn>
                </v-col>
            </v-row>

        </v-container>
    </template>
</SectionCard>
</template>

<script>
import SectionCard from "../components/SectionCard";

export default {
    name: "Situation",
    components: {
        SectionCard,
    },
    data: () => ({
        sectionName: null,
        instructions: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas tempora, quia consequatur sequi rem quidem maiores adipisci, quis iusto veniam rerum, placeat dolore delectus earum ratione. Inventore ullam veritatis quae.",
    }),
    computed: {
        idSituation() {
            return this.$route.params.id;
        }
    },
}
</script>
