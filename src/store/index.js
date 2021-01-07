import Vue from 'vue'
import Vuex from 'vuex'
import io from 'socket.io-client';
import Axios from 'axios';
import { getUserInfo } from '../helpers/utils';


Vue.use(Vuex)

export default new Vuex.Store({
    state: {     
        /* USER INFORMATION */   
        userInformation: {
            email: "",
            username:"",        
            chosen_lan: [],
            country: "",
            victories: 0,
            fails: 0,
            medals: 0,
          },
        /* SOCKET VARIABLES */
        socket:null,
        /* ENDPOINT API BLUMIN BACKEND */
        endpointConn:'http://localhost:5000',
        /* FLAG TO KNOW IF USER IS LOGGED */
        isUserLogged:false,
        /* COUNTRIES LIST */
        countriesList:[],
        /* LEVELS LIST */
        levelsList: ["A1", "A2", "B1", "B2", "C1", "C2"],  
        /* LANGUAGES LIST */
        languagesList:[
            'English',
            'Mandarin Chinese',
            'Hindi',
            'Spanish',
            'French',
            'Standard Arabic',
            'Bengali',
            'Russian',
            'Portuguese',
            'Indonesian',
            'Urdu',
            'Standard German',
            'Japanese',
            'Swahili',
            'Marathi',
            'Telugu',
            'Turkish',
            'Yue Chinese (cantonese)',
            'Tamil',
            'Western Punjabi',
            'Wu Chinese',
            'Korean',
            'Vietnamese',
            'Hausa',
            'Javanese',
            'Egyptian Arabic',
            'Italian',
            'Gujarati',
            'Thai',
            'Amharic',
            'Kannada',
            'Iranian Persian',
            'Bhojpuri',
            'Min Nan Chinese',
            'Jinyu Chinese',
            'Filipino',
            'Nigerian Pidgin'
        ],
        /* GENERAL INFORMATION ABOUT APP SECTIONS */
        sections: [{
                name: 'Audio Chat',
                img: require('../assets/ilustration2.png'),
                description: 'Speak with other person who are learing too',
                path: '/people-active',
                component: ''
            },
            {
                name: 'Speaking fight',
                img: require('../assets/ilustration6.png'),
                description: 'Compete with others to find out who has the best pronunciation',
                path: '/speaking-fight',
                component: ''
            },
            {
                name: 'Out laud reading',
                img: require('../assets/ilustration3.png'),
                description: 'Read a text out loud to improve your pronunciation',
                path: '/reading',
                component: ''
            },
            {
                name: 'Situations',
                img: require('../assets/ilustration4.png'),
                description: 'Improvise in diferent random situations',
                path: '/situations',
                component: ''
            },
            {
                name: 'Describe pictures',
                img: require('../assets/ilustration5.png'),
                description: 'Describe pictures to improve your vocabulary',
                path: '/describe-pictures',
                component: ''
            }
        ],
             
    },
    mutations: {    
        socketConnection(state){
            /* Initialization socket */
            state.socket = io.connect(state.endpointConn,{
                transports:['websocket']
            });
            if(state.socket.connected){
                state.isActiveOnChat = true;
            }
        },
        socketDisconn(state){
            /* Disconnect socket */
            state.socket.disconnect();
            state.socket = null;
            state.isActiveOnChat = false;            
        },       
        setUserActive(state,value){
            /* Set user logged in  true or false*/
            state.isUserLogged = value;
        },
        async getCountriesAPI(state){
            /* Get all nationalities from Countries REST */
            const url = 'https://restcountries.eu/rest/v2/all';
            await Axios.get(url)
            .then(res =>{
                console.log(res.data);              
                res.data.forEach(el => {
                    state.countriesList.push(el.name);
                    /* TODO get all languages */
                });
            })
            .catch(err=>{
              console.log(err);
            });
        },

        async getUserInformation(state){
            /* Recover uid from token */
            const {uid} = getUserInfo();
            /* Http request AXIOS GET */
            await Axios.get(`${process.env.VUE_APP_API}/user-info/${uid}`)
            .then(res => {                
                state.userInformation.username = res.data.userInfo.username;
                state.userInformation.email = res.data.userInfo.email;
                state.userInformation.chosen_lan = res.data.userInfo.languages;
                state.userInformation.country = res.data.userInfo.country;
                state.userInformation.victories = res.data.userInfo.victories;
                state.userInformation.fails = res.data.userInfo.fails;
                state.userInformation.medals = res.data.userInfo.medals;
            })
            .catch(err => {
                console.log(err);
            });   
        }
    },
    actions: {},
    modules: {}
})