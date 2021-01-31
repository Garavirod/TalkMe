<template>
     <!-- Progress -->
    <v-row
      class="fill-height"
      align-content="center"
      justify="center"
      v-show="isVisible"
    >
      <v-col class="subtitle-1 text-center" cols="12"> {{text}} </v-col>
      <v-col cols="6">
        <v-progress-linear
          color="#204051"
          indeterminate
          rounded
          height="6"
        ></v-progress-linear>
      </v-col>
    </v-row>
    <!-- end progress -->
</template>

<script>
export default {
    props = ['text','isVisible'],   
}
</script>