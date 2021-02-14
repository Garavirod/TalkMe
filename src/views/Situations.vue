<template>
  <SectionCard :nameSection="sectionName" :instructions="instructions">
    <template v-slot:SectionContent>
      <v-container>
        <v-row>
          <v-col
            cols="12"
            lg="4"
            md="3"
            sm="3"
            xs="12"
            v-for="item in situations"
            :key="item.id"
          >
            <v-card class="mx-auto" max-width="344">
              <v-card-title>
                {{ item.situation }}
              </v-card-title>
              <v-card-actions>
                   <v-btn color="red lighten-2" dark @click="startStituation(item.situation)">
                      Let's try
                   </v-btn>               
                <v-spacer></v-spacer>
              </v-card-actions>
              <v-expand-transition>
                <div>
                  <v-divider></v-divider>
                  <v-card-text>
                    {{ item.description }}
                  </v-card-text>
                </div>
              </v-expand-transition>
            </v-card>
          </v-col>
        </v-row>

         <!-- DIALOG -->
                <v-dialog v-model="dialog" width="500">
                  <v-card>
                    <v-card-title class="headline grey lighten-2">
                      {{situation}}
                    </v-card-title>

                    <v-card-text>
                      <h5 class="text-center">Do your best!</h5>
                      <audio-controls/>
                    </v-card-text>

                    <v-divider></v-divider>

                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="primary" text @click="dialog = false">
                        cancel
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
                <!-- DIALOG -->
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
import situationsFile from "../assets/situations.json";
import AudioControls from "../components/AudioControls.vue";
export default {
  name: "Situation",
  components: {
    SectionCard,
    Pagination,
    AudioControls,
  },
  data: () => ({
    situation:"",
    readyMessage:"Are you ready?",
    ready:true,
    dialog: false,
    show: false,
    sectionName: "Situations",
    instructions:
      "In this section you can test your vocabulary, structure and idea coherence when trying to imporvise in certain types of situations.",
    situations: [],
  }),
  methods: {
      startStituation(name){
          this.dialog=true;
          this.situation = name;
      }
  },
  created() {
    this.situations = situationsFile;
  },
};
</script>
