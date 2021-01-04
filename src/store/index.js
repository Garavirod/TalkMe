import Vue from 'vue'
import Vuex from 'vuex'
import io from 'socket.io-client';
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        /* SOCKET VARIABLES */
        socket:null,
        endpointConn:'http://localhost:5000',
        isActiveOnChat:false,
        /* FLAG TO KNOW IF USER IS LOGGED */
        isLogged:false,
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
             
        // DATA PROGRESS USER OBJ      
        userInfo:{            
            email:'',
            username:'',                       
            country:'',
            choosen_langages:[],
            progress_app: {victories:0,fails:0,medals:0},
            online:false,
            uid:null,
            isLogged:false,
            token:null            
        }
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
        setUserInformation(state, payload){           
            state.userInfo.email = payload.email;
            state.userInfo.username = payload.username;
            state.userInfo.country = payload.country;
            state.userInfo.choosen_langages = payload.languages;
            state.userInfo.progress_app.victories = payload.victories;
            state.userInfo.progress_app.fails = payload.fails;
            state.userInfo.progress_app.medals = payload.medals;
            state.userInfo.uid = payload.uid;
            state.userInfo.isLogged = true;
            state.userInfo.token = payload.token
            // Save on storage
            localStorage.setItem('blumin-user',JSON.stringify(state.userInfo));
        },

        resetUserInfromation(state){
            state.userInfo.email = "";
            state.userInfo.username = "";
            state.userInfo.country = "";
            state.userInfo.choosen_langages = "";
            state.userInfo.progress_app.victories = 0;
            state.userInfo.progress_app.fails = 0;
            state.userInfo.progress_app.medals = 0;
            state.userInfo.uid = null;
            state.userInfo.isLogged = false;
            state.userInfo.token = null;
            // Remove from local storage
            localStorage.removeItem('blumin-user');
        }
    },
    actions: {},
    modules: {}
})