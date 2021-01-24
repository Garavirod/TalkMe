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
        height: 30px;
    }


</style>

<script>
export default {
    props:['messageFragments','dateMessage','who','idMessage'],

    methods:{
        injectAucdio(){
/*             const buff = new Buffer.from(this.messageFragments,'base64')
            const blobAudio = new Blob(buff,{type:'audio/mp3'}); */
            const url = window.URL.createObjectURL(this.messageFragments);
            let audioElement = document.getElementById(this.idMessage);
            audioElement.src = url;
            /* console.log("Converting....",audioElement); */
        }
    },
   mounted() {
       this.injectAucdio();
   },
}
</script>