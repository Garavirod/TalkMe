<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn outlined color="#3b6978" small dark v-bind="attrs" v-on="on">
          Clues
        </v-btn>
      </template>
      <v-card>
        <v-toolbar dark color="#204051">
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>How can I describe a picure ?</v-toolbar-title>
        </v-toolbar>
        <v-list three-line subheader>
          <v-subheader>What about to say?</v-subheader>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Brief overview</v-list-item-title>
              <v-list-item-subtitle
                >We talk about the scene itself, without focusing on any
                particular detail.
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Speculation</v-list-item-title>
              <v-list-item-subtitle
                >We infer ideas from things we see in the image. Less relevant
                details</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Long description</v-list-item-title>
              <v-list-item-subtitle
                >We focus on the details, always from the most general to the most specific.</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list three-line subheader>
          <v-subheader>Tips</v-subheader>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Structure</v-list-item-title>
              <v-list-item-subtitle
                >always use the same structure. In this way, you will not have to think about how to describe a photo but only about what vocabulary to use.</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Avoid long pauses</v-list-item-title>
              <v-list-item-subtitle
                >try saying something like let me think or let me see when you need some time to think.</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Always justify your speculations</v-list-item-title>
              <v-list-item-subtitle
                >It seems that they are celebrating a birthday or an anniversary. I say this because these two people are carrying a gift and some flowers.</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: "CluesPicture",
  data() {
    return {
      dialog: false,
    };
  },
};
</script>
