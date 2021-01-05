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
        isUserLogged:false,
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
        
        /* LOGIN USER */
        // async login(state, payload){
        //     const url = `${process.env.VUE_APP_API}`;
        //     try {
        //         const res = await Axios.post(url,payload);
        //         const userSate = {
        //             uid: res.data.uid,
        //             token: res.data.token
        //         }
        //         localStorage.setItem('blumin-user',JSON.stringify(userSate));
        //         state.isUserLogged = true;
        //         return true;                             
        //     } catch (error) {
        //         console.log(error);
        //         state.isUserLogged = false; 
        //         return false;               
                
        //     }        
        // },
        
         /* LOGOUT USER */
        //  logout(state){
        //     // Remove from local storage
        //     localStorage.removeItem('blumin-tkn');
        //     state.isUserLogged = false;             
        // }, 

        setUserActive(state,value){
            state.isUserLogged = value;
        }
    },
    actions: {},
    modules: {}
})