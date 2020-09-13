<template>
<v-container fluid class="ma-0 pa-4 containerSection">
    <v-row class="section rounded-md ma-4 pa-2" justify="space-around" v-for="sec in sections" :key="sec.id">
        <v-col cols="12" lg="4" sm="6" xs="12" md="6">
            <div>
                <v-img :src="sec.img" aspect-ratio="1.7" class="rounded-lg"></v-img>
            </div>
        </v-col>
        <v-col cols="12" lg="8" sm="6" xs="12" md="6">
            <h4 class="titleSection">{{ sec.name }}</h4>
            <hr class="ma-3 divider" />
            <p>
                <span>
                    <v-icon>mdi-checkbox-multiple-blank-circle</v-icon>
                </span>
                ipsum dolor sit amet, consectetur adipisicing elit. Veritatis magnam
                quibusdam, illo ut ad, ea amet officia sed, pariatur tempora
                voluptatem iure sapiente reiciendis eum earum fugiat? Corrupti, magni
                recusandae!
            </p>
            <p>
                <span>
                    <v-icon>mdi-checkbox-multiple-blank-circle</v-icon>
                </span>
                {{ sec.description }}
            </p>
            <div class="my-2">
                <v-btn large color="#ede682" :to="sec.path">Go</v-btn>
            </div>
        </v-col>
    </v-row>
</v-container>
</template>

<style>
.section {
    background-color: white;
}

.containerSection {
    background: rgb(34, 193, 195);
    background: linear-gradient(0deg, rgba(34, 193, 195, 1) 0%, rgba(253, 223, 45, 1) 100%);
}

.titleSection {
    font-size: 30px;
    color: #424242;
}

.divider {
    border-style: none;
    height: 5px;
    background-color: #febf63;
}
</style>

<script>
import {
    mapState
} from "vuex";

export default {
    name: "Sections",
    computed: {
        ...mapState(["sections"]),
    },
    components: {

    },
    data() {
        return {};
    },
};
</script>
