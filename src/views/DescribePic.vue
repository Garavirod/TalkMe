<template>
<SectionCard :nameSection="sectionName" :instructions="instructions">
    <template v-slot:SectionContent>
        <v-container>
            <v-row class="text-center">
                <v-col cols="12" lg="12" md="12">
                    <v-card class="pa-2">
                        <!--CONTROLS-->
                        <v-row class="text-center">
                           
                            <!--FILTERS-->
                            <v-col cols="12" lg="6">
                                <v-row>
                                    <v-col cols="12" lg="12">
                                        <v-text-field
                                            v-model="kwordFilter"
                                            label="Filter pictures by kword"
                                            outlined                                            
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12" lg="12">
                                        <v-btn 
                                            small 
                                            outlined 
                                            color="#3b6978"
                                            :disabled="validFilterField"
                                            @click="getPictures"
                                        >
                                            Filter
                                        </v-btn>
                                    </v-col>
                                </v-row>                                 
                            </v-col>
                             <v-col cols="12" lg="6">
                                <v-row>
                                    <v-col cols="12" lg="12">
                                        <CluesPicture />
                                    </v-col>
                                    <v-col cols="12" lg="12">
                                        <v-btn 
                                            small 
                                            outlined 
                                            color="#3b6978"
                                            @click="changeNextPicture"
                                        >
                                            Change picture
                                        </v-btn>
                                    </v-col>
                                </v-row>                                
                            </v-col>                            
                        </v-row>
                        <!--PICTURE-->
                        <v-row class="text-center">
                            <v-col cols="12" lg="9" md="12" xs="12" sm="12" class="mx-auto">
                                <v-img :src="current_image"  aspect-ratio="1" class="grey lighten-2 animate__animated animate__fadeInDown" max-height="500">
                                    <template>
                                        <v-row class="fill-height ma-0" align="center" justify="center">
                                            <v-progress-circular indeterminate color="#3b6978" v-if="preload"></v-progress-circular>
                                        </v-row>
                                    </template>
                                </v-img>
                            </v-col>
                        </v-row>
                        <!--AUDIO CONTROLS COMPONENT-->
                        <AudioControls :ctr_send="false" />
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </template>
</SectionCard>
</template>

<style></style>

<script>
import SectionCard from "../components/SectionCard";
import AudioControls from "../components/AudioControls";
import CluesPicture from "../components/CluesPicture";
import axios from "axios";
export default {
    name: "DescribePic",    
    components: {
        SectionCard,
        AudioControls,
        CluesPicture,
    },
    data: () => ({
        preload:true,
        current_image:"",
        kwordFilter:"Animals",
        picturesResults:[],
        idxPictArray:0,
        sectionName: "Describing pictures",
        extract: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas tempora, quia consequatur sequi rem quidem maiores adipisci, quis iusto veniam rerum, placeat dolore delectus earum ratione. Inventore ullam veritatis quae.",
        instructions: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas tempora, quia consequatur sequi rem quidem maiores adipisci, quis iusto veniam rerum, placeat dolore delectus earum ratione. Inventore ullam veritatis quae.",
    }),
    computed:{
        validFilterField(){
            return (this.kwordFilter==="") ? true:false;
        }
    },
    methods:{        
        async getPictures(){
            this.current_image="";
            this.preload=true;
            const key = "g9RhX8mCpp5TjdicEI4UCpckeh5zPXl7k3dckGbeE34";            
            const limit = 50;
            const url = `https://api.unsplash.com/search/photos?per_page=${limit}&query=${this.kwordFilter}&client_id=${key}`;            
            await axios.get(url)
            .then((data)=>{                
                this.picturesResults = data.data.results; 
                this.current_image = this.picturesResults[this.idxPictArray].urls.full;
                this.preload = false;
            })
            .catch(err=>{
                console.log("Error on pettition",err);
            });
        },
        changeNextPicture(){            
            if(this.idxPictArray<this.picturesResults.length-1){
                this.idxPictArray += 1;
            }else{
                this.idxPictArray = 0;                
            }
            this.current_image = this.picturesResults[this.idxPictArray].urls.full;            
        }
    },
    created() {
      this.getPictures();  
    },
};
</script>
