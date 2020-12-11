<template>
<SectionCard :nameSection="sectionName" :instructions="instructions">
    <template v-slot:SectionContent>
        <v-container>
            <!--TEXT-->
            <v-row class="text-center">
                <v-col cols="12" lg="12">
                    <v-card>
                        <v-row class="mb-2">
                            <v-col cols="12" lg="12">
                                <p>
                                    Choose an extract that you prefer!
                                </p>
                            </v-col>
                            <v-row class="text-center">
                                <v-col class="12" lg="12">
                                    <v-btn small outlined color="#3b6978">Change extract</v-btn>
                                </v-col>
                            </v-row>
                        </v-row>
                        <v-card class="overflow-y-auto ma-2 text-justify" max-height="450" max-width="100%">
                            <v-row class="text-center">
                                <v-col cols="12" lg="12">
                                    <h3>
                                        Olliver Twist
                                    </h3>
                                </v-col>
                                <v-col cols="12" lg="12">
                                    <i>Charles Dikens</i>
                                </v-col>
                            </v-row>
                            <v-card-text>
                                <div v-for="n in 12" :key="n" class="mb-4 pa-2">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                                    commodi earum tenetur. Asperiores dolorem placeat ab nobis
                                    iusto culpa, autem molestias molestiae quidem pariatur.
                                    Debitis beatae expedita nam facere perspiciatis. Lorem ipsum
                                    dolor sit amet consectetur adipisicing elit. Repellendus
                                    ducimus cupiditate rerum officiis consequuntur laborum
                                    doloremque quaerat ipsa voluptates, nobis nam quis nulla ullam
                                    at corporis, similique ratione quasi illo!
                                </div>
                            </v-card-text>
                            <!--AUDIO CONTROLS-->
                        </v-card>
                        <AudioControls :ctr_send="false" />
                    </v-card>

                </v-col>
            </v-row>
        </v-container>
    </template>
</SectionCard>
</template>

<script>
import SectionCard from "../components/SectionCard";
import AudioControls from "../components/AudioControls";
export default {
    name: "ReadingLoud",
    components: {
        SectionCard,
        AudioControls,
    },
    data: () => ({
        sectionName: "Out laud reading",
        extract: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas tempora, quia consequatur sequi rem quidem maiores adipisci, quis iusto veniam rerum, placeat dolore delectus earum ratione. Inventore ullam veritatis quae.",
        instructions: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas tempora, quia consequatur sequi rem quidem maiores adipisci, quis iusto veniam rerum, placeat dolore delectus earum ratione. Inventore ullam veritatis quae.",
        reading: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas tempora, quia consequatur sequi rem quidem maiores adipisci, quis iusto veniam rerum, placeat dolore delectus earum ratione. Inventore ullam veritatis quae.",
    }),
};
</script>
