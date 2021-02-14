<template>
<!--BUTTONS CONTROLS-->
<v-row class="text-center ma-2" id="AudioComponent">
    <v-col cols="12">
         <v-select 
          v-model="itemDevice"          
          :items="listDevices"     
          :hint="`${itemDevice.label} ${itemDevice.devId}`"     
          item-text="label"
          item-value="devId"          
          persistent-hint
          return-object
          single-line
          label="Choose an audio device">
        </v-select>
    </v-col>
    <v-col cols="12">
        <v-btn
            v-if="ctr_send"
            :disabled="isBufferFelt" 
            @click="sendAudio" 
            small 
            class="mx-2" 
            fab 
            dark 
            color="#3b6978"
        >
            <v-icon dark>mdi-send</v-icon>
        </v-btn>
        <v-btn 
            small 
            class="mx-2" 
            fab 
            dark 
            color="red" 
            @click="startRecording"
            v-if="!isrecording"
            >
            <v-icon dark >mdi-microphone</v-icon>
        </v-btn>
        <v-btn 
            small 
            class="mx-2" 
            fab 
            dark 
            color="red" 
            @click="stopRecording"
            v-if="isrecording"
            >
            <v-icon dark>mdi-stop</v-icon>
        </v-btn>
    </v-col>
    <v-col v-if="isrecording" cols="12">
        <v-row class="text-center outlined">
            <v-col cols="12" lg="4" xs="4" sm="4">{{hrs}}</v-col>
            <v-col cols="12" lg="4" xs="4" sm="4">{{min}}</v-col>
            <v-col cols="12" lg="4" xs="4" sm="4">{{sec}}</v-col>
        </v-row>
    </v-col>
    <v-col cols="12" v-show="!isBufferFelt" class="animate_animated animate_headShake">
        <audio controls id="audioPlay"></audio>        
    </v-col>    
</v-row>
</template>

<style>
#AudioComponent {
    background: white;
}

#audioPlay{
    width: 90%;
}
</style>

<script>
import swal from 'sweetalert';
import { mapMutations, mapState } from "vuex";
import { getUserInfo } from '../helpers/utils';
export default {
    name: "AudioControls",
    props: ['ctr_send'],
    computed:{
        /* VUEX */
        ...mapState(['socket','chosenUserForChating','messagesOnBox']),
        /* TEMPLATE */
        isBufferFelt(){
            return (this.audioFragments.length === 0) ? true : false;
        }
    },
    data() {
        return {
            isrecording: false,
            itemDevice: { label: '', devId: '' },
            listDevices:[],
            mediaRecorder:null,
            audioFragments:[],
            hrs:0,
            min:0,
            sec:0,
            initTime:null,
            idInterval:null, 
            recording:null,
            blobAudio:null,
            sentMessage:false,
            
        }
    },    
  /*   watch:{
        sentMessage:function (){
            // Recieve audio message
            this.socket.on("voice-msg", (newMessage)=>{
                this.setNewMessage(newMessage.message);                              
            })
        }
    }, */
    methods:{
        /**VUEX */
        ...mapMutations(['setNewMessage']),
        /* 
            This method excecutes mediaRecording start
            for recording audio.
         */
        startRecording(){            
            if(!this.listDevices.length){
                swal("Oops!","There's no devices for recording","error");                
            }else if(this.itemDevice.label==='' && this.itemDevice.devId===''){
                swal("Oops!","You forgot choosing a device","warning");
            }
            else{
                this.isrecording = !this.isrecording;
                navigator.mediaDevices.getUserMedia(
                    {
                        audio:{
                            deviceId:this.itemDevice.devId
                        }
                    }
                ).then(stream=>{
                    if(this.audioFragments.length > 0){
                            this.audioFragments = [];
                    }
                    this.mediaRecorder = new MediaRecorder(stream);
                    this.mediaRecorder.start();
                    this.startCounting();
                    this.mediaRecorder.addEventListener("dataavailable", (e) => {  
                        /* If audio lasts one minute and controls are in audio chat */                        
                        if(this.min === 1 && this.ctr_send === true){
                            this.stopRecording();
                        }                      
                        this.audioFragments.push(e.data);
                    });

                    this.mediaRecorder.addEventListener("stop", () => {                            
                            // Detener el stream
                            stream.getTracks().forEach(track => track.stop());
                            // Detener la cuenta regresiva
                            this.stopCounting();
                            // Convertir los fragmentos a un objeto binario
                            this.blobAudio = new Blob(this.audioFragments,{type:'audio/ogg; codecs=opus'});                             
                            // Crear una URL o enlace para descargar
                            const urlAudio = window.URL.createObjectURL(this.blobAudio);
                            this.recording = document.getElementById('audioPlay');
                            this.recording.src = urlAudio;                            
                            this.isrecording = !this.isrecording;
                    });
                })
                .catch(err=>{
                    console.log('Error on recording >: ',err);
                })               
            }

        },
        /* 
            This method execute the stop mediaRecording event
            for stop recording audio
         */
        stopRecording(){
            this.mediaRecorder.stop();
            this.mediaRecorder = null;
        },
        /* This method clears the List of audio devices */
        cleanListDevices(){
            this.listDevices = [];
        },
        /*
            This method converts each numSec interval
            in hours, minutes or seconds
        */
        secToParseTime(numSec){
            this.hrs= Math.floor(numSec / 3600);
            let res = Math.floor(numSec % 3600);
            this.min = Math.floor(res / 60);
            this.sec = Math.floor(res % 60);
        },
        /*
            This method initializes the interval recording time 
        */
        startCounting(){
            this.initTime = Date.now();
            this.idInterval = setInterval(()=>{
                this.secToParseTime((Date.now() - this.initTime) / 1000);
            },500);
        },
        /* 
            This method clears and reset interval recording time
        */
        stopCounting(){
            clearInterval(this.idInterval);
            this.initTime = null;
            this.hrs = 0;
            this.min = 0;
            this.sec = 0;
        },
        sendAudio: function (){                        
            const {uid} = getUserInfo();
            const audioMessage = {
                fromUser: uid,
                toUser: this.chosenUserForChating.uid,
                audioMessage:this.blobAudio,                                
            }
            // empty fragments
            this.audioFragments=[];  
            /* Send message through socket */
            this.socket.emit('personal-message',audioMessage);
            this.sentMessage = ! this.sentMessage;             
                
        }

    },
    mounted(){
        this.socket.on("voice-msg", (newMessage)=>{                
                this.setNewMessage(newMessage.message);                              
        })
    },
    created(){
        
        /* Verify supporting UserMedia */
        const hasSupport = !!(navigator.mediaDevices.getUserMedia);
        /* 
            When component were created this block verifies
            if the webborwoser suppotrs MediaRecorder.
         */
        if(typeof MediaRecorder === "undefined" || !hasSupport){
            swal("Oops!","Your borwser not support this tachnology, please get upload it","error");
            this.$router.push("Sections");           
        }else{
            navigator.mediaDevices.enumerateDevices()
            .then(devices=>{
                this.cleanListDevices();
                devices.forEach((div,idx)=>{
                    if(div.kind==="audioinput"){
                        const obj = {
                            label : div.label || `Device ${idx + 1}`,
                            devId : div.deviceId                        
                        }
                        this.listDevices.push(obj);
                    }
                })
            })
        }

    }
}
</script>