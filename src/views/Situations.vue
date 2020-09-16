<template>
<SectionCard :nameSection="sectionName" :instructions="instructions">
    <template v-slot:SectionContent>
        <v-container>
            <v-row>
                <v-col cols="12" lg="4" md="3" sm="3" xs="12" v-for="item in situations" :key="item.id">
                    <v-card class="mx-auto" max-width="344">
                        <v-img :src="item.img" max-height="100%" max-width="100%" aspect-ratio="1"></v-img>
                        <v-card-title>
                            {{ item.situation }}
                        </v-card-title>
                        <v-card-actions>
                            <v-btn color="primary" text>
                                Go
                            </v-btn>
                            <v-spacer></v-spacer>
                        </v-card-actions>

                        <v-expand-transition>
                            <div>
                                <v-divider></v-divider>
                                <v-card-text>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Autem blanditiis sit reprehenderit voluptatibus odio soluta
                                    dolor incidunt sint vitae repellat, enim commodi, nostrum
                                    hic dicta placeat. Officia incidunt dolores voluptates!
                                </v-card-text>
                            </div>
                        </v-expand-transition>
                    </v-card>
                </v-col>
            </v-row>
            <!--PAGINATION-->
            <v-row class="text-center">
                <v-col cols="12" lg="12">
                    <Pagination />
                </v-col>
            </v-row>
        </v-container>
    </template>
</SectionCard>
</template>

<script>
import SectionCard from "../components/SectionCard";
import Pagination from "../components/Pagination";
export default {
    name: "Situation",
    components: {
        SectionCard,
        Pagination,
    },
    data: () => ({
        show: false,
        sectionName: "Situations",
        instructions: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas tempora, quia consequatur sequi rem quidem maiores adipisci, quis iusto veniam rerum, placeat dolore delectus earum ratione. Inventore ullam veritatis quae.",
        situations: [{
                id: 1,
                situation: "Car robery",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, neque.",
                img: "https://picsum.photos/id/237/200/300",
            },
            {
                id: 2,
                situation: "Car robery",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, neque.",
                img: "https://picsum.photos/id/237/200/300",
            },
            {
                id: 3,
                situation: "Car robery",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, neque.",
                img: "https://picsum.photos/id/237/200/300",
            },
            {
                id: 4,
                situation: "Car robery",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, neque.",
                img: "https://picsum.photos/id/237/200/300",
            },
            {
                id: 5,
                situation: "Car robery",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, neque.",
                img: "https://picsum.photos/id/237/200/300",
            },
            {
                id: 6,
                situation: "Car robery",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, neque.",
                img: "https://picsum.photos/id/237/200/300",
            },
            {
                id: 7,
                situation: "Car robery",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, neque.",
                img: "https://picsum.photos/id/237/200/300",
            },
            {
                id: 8,
                situation: "Car robery",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, neque.",
                img: "https://picsum.photos/id/237/200/300",
            },
            {
                id: 9,
                situation: "Car robery",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, neque.",
                img: "https://picsum.photos/id/237/200/300",
            },
            {
                id: 10,
                situation: "Car robery",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, neque.",
                img: "https://picsum.photos/id/237/200/300",
            },
        ],
    }),
};
</script>
