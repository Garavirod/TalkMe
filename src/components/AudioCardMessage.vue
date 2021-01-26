<template>
    <v-card
        elevation="10"
        outlined
        shaped
        class="pa-2 ma-2"
    >
        <v-card-text class="ma-0">{{who}}</v-card-text>
        <v-card-subtitle class="ma-0">{{dateMessage.slice(0,10)}}</v-card-subtitle>
        <audio controls class="audio-mess" :id="idMessage"></audio>   
         
    </v-card>
</template>

<style>
    .audio-mess{
        width: 90%;
        height: 20px;
    }


</style>

<script>
export default {
    props:['messageFragments','dateMessage','who','idMessage'],

    methods:{
        injectAucdio(){
            // Obtain buffer of data code base64
            const buffer = new Buffer.from(this.messageFragments,"base64");
            // Convert buffer to audio
            const blobAudio = new Blob([buffer],{ 'type' : 'audio/ogg; codecs=opus' });            
            // Create url based on blob
            const url = window.URL.createObjectURL(blobAudio);
            // Insert url in audio tag
            let audioElement = document.getElementById(this.idMessage);
            audioElement.src = url;
        }
    },
   mounted() {
       this.injectAucdio();
   },
}
</script>