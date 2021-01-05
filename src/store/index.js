import Vue from 'vue'
import Vuex from 'vuex'
import io from 'socket.io-client';
import Axios from 'axios';


Vue.use(Vuex)

export default new Vuex.Store({
    state: {        
        /* SOCKET VARIABLES */
        socket:null,
        endpointConn:'http://localhost:5000',
        /* FLAG TO KNOW IF USER IS LOGGED */
        isUserLogged:false,
        /* COUNTRIES LIST */
        countriesList:[],
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
    },
    actions: {},
    modules: {}
})