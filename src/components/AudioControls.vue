<template>
<!--BUTTONS CONTROLS-->
<v-row class="text-center ma-2" id="AudioComponent">
    <v-col cols="12">
        <v-btn small class="mx-2" fab dark color="#3b6978">
            <v-icon dark>mdi-send</v-icon>
        </v-btn>
        <v-btn small class="mx-2" fab dark color="red" @click="isrecording = !isrecording">
            <v-icon dark v-if="isrecording">mdi-stop</v-icon>
            <v-icon dark v-else>mdi-microphone</v-icon>
        </v-btn>
    </v-col>
    <v-col v-if="isrecording">
        <v-row class="text-center outlined">
            <v-col cols="12" lg="4" xs="4" sm="4">00</v-col>
            <v-col cols="12" lg="4" xs="4" sm="4">00</v-col>
            <v-col cols="12" lg="4" xs="4" sm="4">00</v-col>
        </v-row>
    </v-col>
</v-row>
</template>

<style>
#AudioComponent {
    background: white;
}
</style>

<script>
export default {
    name: "AudioControls",
    props: ['ctr_send'],
    data() {
        return {
            isrecording: false,
        }
    },
}
</script>
