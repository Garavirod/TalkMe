<template>
<SectionCard :nameSection="sectionName" :instructions="instructions">
    <template v-slot:SectionContent>
        <v-container fluid>
            <v-row>
                <v-col cols="12" lg="6">
                    <BoxMessages />
                </v-col>
                <v-col cols="12" lg="6">
                    <h1>Topics</h1>
                </v-col>
            </v-row>
        </v-container>
    </template>
</SectionCard>
</template>

<style>
.containerAudioChat {
    background-color: #ffff;
    /* border-radius: 10px; */
}

.sectionControls {
    background-color: #ffff;
}
</style>

<script>
import SectionCard from "../components/SectionCard";
import BoxMessages from "../components/BoxMessages";
import {
    mapMutations,
    mapState
} from "vuex";
export default {
    name: "AudioChat",
    components: {
        BoxMessages,
        SectionCard
    },
    data() {
        return {
            sectionName: "Audio chat",
            extract: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas tempora, quia consequatur sequi rem quidem maiores adipisci, quis iusto veniam rerum, placeat dolore delectus earum ratione. Inventore ullam veritatis quae.",
            instructions: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas tempora, quia consequatur sequi rem quidem maiores adipisci, quis iusto veniam rerum, placeat dolore delectus earum ratione. Inventore ullam veritatis quae."
        };
    },
    computed: {
        ...mapState(["chatList"])
    },
    methods: {
        ...mapMutations(["setChatList"])
    },
    mounted() {
        this.setChatList(true);
        console.log(this.chatList);
    },
    beforeDestroy() {
        this.setChatList(false);
        console.log(this.chatList);
    }
};
</script>
