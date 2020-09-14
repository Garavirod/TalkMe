<template>
<SectionCard :nameSection="sectionName" :instructions="instructions">
    <template v-slot:SectionContent>
        <v-container fluid>
            <!--HEAD-->
            <v-row class="text-center">
                <v-col cols="12" lg="12">
                    <h1>Extract</h1>
                </v-col>
                <v-col cols="12" lg="12">
                    <v-btn color="primary">Change</v-btn>
                </v-col>
            </v-row>
            <!--TEXT-->
            <v-row class="">
                <v-col cols="12">
                    <template>
                        <v-card class="overflow-y-auto ma-2 text-justify" max-height="500" max-width="100%">
                            <v-row class="text-center">
                                <v-col cols="12" lg="12">
                                    <h3>
                                        Qliver twist
                                    </h3>
                                </v-col>
                                <v-col cols="12" lg="12">
                                    <i>Chales Dikens</i>
                                </v-col>
                            </v-row>
                            <v-card-text>
                                <div v-for="n in 12" :key="n" class="mb-4">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi commodi earum tenetur. Asperiores dolorem placeat ab nobis iusto culpa, autem molestias molestiae quidem pariatur. Debitis beatae expedita nam facere perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ducimus cupiditate rerum officiis consequuntur laborum doloremque quaerat ipsa voluptates, nobis nam quis nulla ullam at corporis, similique ratione quasi illo!
                                </div>
                            </v-card-text>
                        </v-card>
                    </template>
                </v-col>
            </v-row>
            <!--AUDIO CONTROLS-->
            <v-row class="text-center">
                <v-col>
                    <v-btn small class="mx-2" fab dark color="red" @click="isrecording = !isrecording">
                        <v-icon dark v-if="isrecording">mdi-stop</v-icon>
                        <v-icon dark v-else>mdi-microphone</v-icon>
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>
    </template>
</SectionCard>
</template>

<style>
.Reading {
    background-color: #ffff;
    overflow: scroll;
    max-height: 450px;
}
</style>

<script>
import SectionCard from "../components/SectionCard";
export default {
    name: "ReadingLoud",
    components: {
        SectionCard
    },
    data: () => ({
        sectionName: "Out laud reading",
        extract: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas tempora, quia consequatur sequi rem quidem maiores adipisci, quis iusto veniam rerum, placeat dolore delectus earum ratione. Inventore ullam veritatis quae.",
        instructions: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas tempora, quia consequatur sequi rem quidem maiores adipisci, quis iusto veniam rerum, placeat dolore delectus earum ratione. Inventore ullam veritatis quae.",
        reading: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas tempora, quia consequatur sequi rem quidem maiores adipisci, quis iusto veniam rerum, placeat dolore delectus earum ratione. Inventore ullam veritatis quae.",
    })
};
</script>
