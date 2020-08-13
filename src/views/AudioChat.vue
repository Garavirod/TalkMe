<template>
  <SectionCard :nameSection="sectionName" :notes="true" :instructions="instructions">
    <template v-slot:contentSection>
      <BoxMessages />
    </template>
    <template v-slot:extract>
      <p>{{extract}}</p>
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
import BoxMessages from "../components/BoxMessages";
import SectionCard from "../components/SectionCard";
import { mapMutations, mapState } from "vuex";
export default {
  name: "AudioChat",
  components: {
    BoxMessages,
    SectionCard
  },
  data() {
    return {
      sectionName: "Audio chat",
      extract:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas tempora, quia consequatur sequi rem quidem maiores adipisci, quis iusto veniam rerum, placeat dolore delectus earum ratione. Inventore ullam veritatis quae.",
      instructions:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas tempora, quia consequatur sequi rem quidem maiores adipisci, quis iusto veniam rerum, placeat dolore delectus earum ratione. Inventore ullam veritatis quae."
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