<template>
  <v-container fluid class="containerSections">
    <v-card class="ma-5">
      <v-system-bar></v-system-bar>
      <v-toolbar flat>
        <v-toolbar-title>
          <h2>{{nameSection}}</h2>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <div>
          <v-btn to="/sections" small depressed color="#ade498">Back to sections</v-btn>
        </div>
      </v-toolbar>
      <v-banner single-line>
        We can't save your edits while you are in offline mode.
        <template v-slot:actions>
          <v-btn color="#ede682" small @click="dialog=!dialog">Read instructions</v-btn>
        </template>
      </v-banner>
      <v-card-text class="cardSection">
        <v-sheet max-width="95%" height="100vh" class="mx-auto">
          <v-row>
            <!-- Sections 2 -->
            <v-col class="col-7 section2">
              <v-row class="headerSection2 ma-1">
                <v-col class="col-6 text-center">
                  <v-btn class="mr-2" color="#febf63" fab x-small dark>
                    <v-icon>mdi-near-me</v-icon>
                  </v-btn>
                  <v-btn color="error" fab x-small dark class="mr-2">
                    <v-icon>mdi-microphone-settings</v-icon>
                  </v-btn>
                  <v-btn color="#febf63" fab x-small dark>
                    <v-icon>mdi-ear-hearing</v-icon>
                  </v-btn>
                </v-col>
                <v-col class="col-6 text-center">
                  <audio src="audio.ogg" controls autoplay loop class="ml-2">
                    <p>Tu navegador no implementa el elemento audio</p>
                  </audio>
                </v-col>
              </v-row>
            </v-col>
            <!-- Section 1 -->
            <v-col class="col-5 section1 pa-5">
              <v-row>
                <v-col class="col-12">
                  <p>
                    <span>
                      <v-icon>mdi-comment-text-outline</v-icon>
                    </span>
                    Extract
                  </p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod possimus itaque culpa maxime, optio est voluptatibus exercitationem assumenda similique, voluptatum quis enim at cumque temporibus pariatur illum, harum sequi quaerat magni libero incidunt. Sunt quos deserunt quia nostrum labore debitis.</p>
                  <v-btn color="#ede682" small>Change extract</v-btn>
                </v-col>
                <v-col class="col-12">
                  <p>
                    <span>
                      <v-icon>mdi-grease-pencil</v-icon>
                    </span>
                    Write your notes before speaking
                  </p>
                  <v-textarea solo auto-grow name="input-7-4" label="Notes"></v-textarea>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-sheet>
      </v-card-text>
    </v-card>
    <!-- Modal instructions -->
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="400">
        <v-card>
          <v-card-title class="headline">Instrucions for speaking fight</v-card-title>
          <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text>
          <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text>
          <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" text @click="dialog = false">Agree</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
    <!-- End modal instructions -->
  </v-container>
</template>

<style>
.containerSections {
  background-color: #424242;
}

.cardSection {
  background-color: #7fdbda;
}

.section1 {
  background-color: aliceblue;
  height: 100vh;
}

.section2 {
  background-color: #fff;
}

/* .headerSection2{
    background-color: #ade498;
} */
</style>

<script>
export default {
  name: "SectionCard",
  props: ["nameSection"],
  data() {
    return {
      dialog: false
    };
  }
};
</script>