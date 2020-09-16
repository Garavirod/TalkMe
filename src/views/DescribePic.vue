<template>
<SectionCard :nameSection="sectionName" :instructions="instructions">
    <template v-slot:SectionContent>
        <v-container>
            <v-row class="text-center">
                <v-col cols="12" lg="12" md="12">
                    <v-card class="pa-2">
                        <!--CONTROLS-->
                        <v-row class="text-center">
                            <v-col cols="12" lg="4">
                                <v-btn small outlined color="#3b6978">Change picture</v-btn>
                            </v-col>
                            <v-col cols="12" lg="4">
                                <FliterPicture />
                            </v-col>
                            <v-col cols="12" lg="4">
                                <CluesPicture />
                            </v-col>
                        </v-row>
                        <!--PICTURE-->
                        <v-row class="text-center">
                            <v-col cols="12" lg="9" md="12" xs="12" sm="12" class="mx-auto">
                                <v-img src="https://bad.src/not/valid" lazy-src="https://picsum.photos/id/11/100/60" aspect-ratio="1" class="grey lighten-2" max-height="500">
                                    <template v-slot:placeholder>
                                        <v-row class="fill-height ma-0" align="center" justify="center">
                                            <v-progress-circular indeterminate color="blue lighten-5"></v-progress-circular>
                                        </v-row>
                                    </template>
                                </v-img>
                            </v-col>
                        </v-row>
                        <!--AUDIO CONTROLS COMPONENT-->
                        <AudioControls />
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </template>
</SectionCard>
</template>

<style></style>

<script>
import SectionCard from "../components/SectionCard";
import AudioControls from "../components/AudioControls";
import CluesPicture from "../components/CluesPicture";
import FliterPicture from "../components/FiltersPicture";
export default {
    name: "DescribePic",
    components: {
        SectionCard,
        AudioControls,
        CluesPicture,
        FliterPicture
    },
    data: () => ({
        sectionName: "Describing pictures",
        extract: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas tempora, quia consequatur sequi rem quidem maiores adipisci, quis iusto veniam rerum, placeat dolore delectus earum ratione. Inventore ullam veritatis quae.",
        instructions: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas tempora, quia consequatur sequi rem quidem maiores adipisci, quis iusto veniam rerum, placeat dolore delectus earum ratione. Inventore ullam veritatis quae.",
    }),
};
</script>
