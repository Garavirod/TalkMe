<template>
    <v-card
        elevation="10"
        outlined
        shaped
        class="pa-2 ma-2"
    >
        <v-card-text class="ma-0">{{who}}</v-card-text>
        <v-card-subtitle class="ma-0">23-02-2023</v-card-subtitle>
        <audio controls class="audio-mess"></audio>   
         
    </v-card>
</template>

<style>
    .audio-mess{
        width: 90%;
        height: 30px;
    }


</style>

<script>
export default {
    props:['who']
}
</script>