<template>
  <SectionCard :nameSection="sectionName" :notes="false" :instructions="instructions">
    <template v-slot:contentSection>
      <v-col class="col-12 text-center">
        <h3>Reading fragment</h3>
      </v-col>
      <v-col class="Reading col-12 text-justify">
        {{reading}}
      </v-col>
    </template>
    <template v-slot:extract>
      <p>{{extract}}</p>
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
    extract:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas tempora, quia consequatur sequi rem quidem maiores adipisci, quis iusto veniam rerum, placeat dolore delectus earum ratione. Inventore ullam veritatis quae.",
    instructions:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas tempora, quia consequatur sequi rem quidem maiores adipisci, quis iusto veniam rerum, placeat dolore delectus earum ratione. Inventore ullam veritatis quae.",
    reading :
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas tempora, quia consequatur sequi rem quidem maiores adipisci, quis iusto veniam rerum, placeat dolore delectus earum ratione. Inventore ullam veritatis quae.",
  })
};
</script>