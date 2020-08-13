<template>
<SectionCard :nameSection="sectionName" :notes="true" :instructions="instructions">
    <template v-slot:contentSection>
       <v-row align="center" justify="center">
         <v-col class="col-12 ma-2">
            <v-img
            src="https://bad.src/not/valid"
            lazy-src="https://picsum.photos/id/11/100/60"
            aspect-ratio="1"
            class="grey lighten-2"
            max-width="800"
            max-height="320"
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
              </v-row>
            </template>
          </v-img>
         </v-col>
        </v-row>
    </template>
    <template v-slot:extract>
      <p>{{extract}}</p>
    </template>
  </SectionCard>
</template>


<style>
</style>

<script>
import SectionCard from "../components/SectionCard";
export default {
  name: "DescribePic",
  components: {
    SectionCard
  },
  data: () => ({
    sectionName: "Describing pictures",
    extract:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas tempora, quia consequatur sequi rem quidem maiores adipisci, quis iusto veniam rerum, placeat dolore delectus earum ratione. Inventore ullam veritatis quae.",
    instructions:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas tempora, quia consequatur sequi rem quidem maiores adipisci, quis iusto veniam rerum, placeat dolore delectus earum ratione. Inventore ullam veritatis quae.",
    
  })
};
</script>
