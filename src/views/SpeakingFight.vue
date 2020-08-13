<template>
  <SectionCard 
    :nameSection="sectionName" 
    :notes="true"
    :instructions="instructions">
    <template v-slot:contentSection>
      <BoxMessages />
    </template>
    <template v-slot:extract>
      <p>{{extract}}</p>
    </template>
  </SectionCard>
</template>

<script>
import SectionCard from "../components/SectionCard";
import BoxMessages from "../components/BoxMessages";
export default {
  name: "SpeakingFight",
  components: {
    SectionCard,
    BoxMessages
  },
  data() {
    return {
      sectionName: "Speaking Fight",
      extract :'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas tempora, quia consequatur sequi rem quidem maiores adipisci, quis iusto veniam rerum, placeat dolore delectus earum ratione. Inventore ullam veritatis quae.',
      instructions :'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas tempora, quia consequatur sequi rem quidem maiores adipisci, quis iusto veniam rerum, placeat dolore delectus earum ratione. Inventore ullam veritatis quae.',
    };
  }
};
</script>