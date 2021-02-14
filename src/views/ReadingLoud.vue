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
                  <p>Choose an extract that you prefer!</p>
                </v-col>
                <v-row class="text-center">
                  <v-col class="12" lg="12">
                    <v-btn small outlined color="#3b6978" @click="changeExtract()">Change extract</v-btn>
                  </v-col>
                </v-row>
              </v-row>
              <v-card
                class="overflow-y-auto ma-2 text-justify"
                max-height="450"
                max-width="100%"
              >
                <v-row class="text-center">
                  <v-col cols="12" lg="12">
                    <h3>{{extracts[idxText].title}}</h3>
                  </v-col>
                  <v-col cols="12" lg="12">
                    <i>{{extracts[idxText].author}}</i>
                  </v-col>
                </v-row>
                <v-card-text>
                  <div class="mb-4 pa-2 m-2">
                    <p>
                        {{extracts[idxText].text}}
                    </p>                                       
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
import extractFile from '../assets/extract.json';
export default {
  name: "ReadingLoud",
  components: {
    SectionCard,
    AudioControls,
  },
  data: () => ({
    extracts:[],
    idxText:0,
    sectionName: "Out laud reading",
    instructions:"In this section you can test your pronunciation by reading aloud small fragments of texts by well-known authors, use the voice recorder to listen to your performance.",
    reading:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas tempora, quia consequatur sequi rem quidem maiores adipisci, quis iusto veniam rerum, placeat dolore delectus earum ratione. Inventore ullam veritatis quae.",
  }),
  methods:{
      changeExtract: function () {
          this.idxText += 1;
          if(this.idxText>this.extracts.length-1){
              this.idxText = 0;
          } 
      }
  },
  created(){
      this.extracts = extractFile;      
  }
};
</script>
