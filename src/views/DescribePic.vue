<template>
  <v-container>
    <v-row>
      <v-col class="col-4">
        <h3>Describe pictures</h3>
        <v-row color="red">
          <v-col class="col-12">
            <p>
              <span>
                <v-icon>mdi-checkbox-multiple-blank-circle</v-icon>
              </span>
              Conversation topic
            </p>
            <div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dolore veritatis quibusdam, molestias similique blanditiis? Sint atque dolores magni possimus, porro laudantium. Laborum cupiditate, dolorum vero distinctio quas alias modi!</p>
            </div>
          </v-col>
          <h3>Notes</h3>
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
      <!-- Pcture -->
      <v-col class="col-5">
        <h3>Picture</h3>
        <v-row>
          <v-col class="col-6 text-center">
            <v-btn class="mr-2" color="#febf63" fab x-small dark>
              <v-icon>mdi-stop</v-icon>
            </v-btn>
            <v-btn color="error" fab x-small dark class="mr-2">
              <v-icon>mdi-microphone-settings</v-icon>
            </v-btn>
            <v-btn color="#febf63" fab x-small dark>
              <v-icon>mdi-reload</v-icon>
            </v-btn>
          </v-col>
          <v-col class="col-6 text-center">
            <audio src="audio.ogg" controls autoplay loop class="ml-2">
              <p>Tu navegador no implementa el elemento audio</p>
            </audio>
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-img
            src="https://bad.src/not/valid"
            lazy-src="https://picsum.photos/id/11/100/60"
            aspect-ratio="1"
            class="grey lighten-2"
            max-width="800"
            max-height="300"
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "DescribePic"
};
</script>