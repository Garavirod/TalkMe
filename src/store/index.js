import Vue from 'vue'
import Vuex from 'vuex'
import io from 'socket.io-client';
import Axios from 'axios';
import { getAuthToken, getUserInfo } from '../helpers/utils';


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
        /* USER ACTIVE ON CHAT */
        isActiveOnChat:false,
        /* MESSAGES ON BOX */
        messagesOnBox: [],
        /* ACTIVE SIDEBAR CHATS */
        activeChatSide:false,
        /* SOCKET VARIABLES */
        socket:null,
        /* ENDPOINT SOCKET BLUMIN BACKEND */
        endpointConn:process.env.VUE_APP_SOCKET,
        /* FLAG TO KNOW IF USER IS LOGGED IN CASE TO ACTIVATE NAVBAR CONTROLS */
        isUserLogged:false,
        /* COUNTRIES LIST */
        countriesList:[],
        /* LEVELS LIST */
        levelsList: ["A1", "A2", "B1", "B2", "C1", "C2"],  
        /* CHOSEN USER FOR CHATING */
        chosenUserForChating:null,
        /* IS OPEN CHATBOX */
        isOpenChatBox: false,
        /* IS LOADING CHAT BOX*/
        isLoadingChatBox :false,
        /* INBOX */
        inboxUserHistory:[],
        /* USER ON CHATROOM */
        activeUsersOnChat:[],
        /* Progres */
        setProgress: false,
        /* WAS SEARCHED AROOM BEFORE */
        wasSearched :false,
        /* CHOSEN LANGUAGE */
        chosenLanguage :"",
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
                path: '/audio-chat',
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
        setSocketConnection(state, payload){
            
            /* Initialization socket */
            const token = getAuthToken();
            state.socket = io.connect(state.endpointConn,{
                transports:['websocket'],
                autoConnect:true, //It always creates a new connect when it be called.
                forceNew:true,
                query:{ //By url 
                    'blumin-tkn':token,
                    'language': payload.lang
                }
            });
            if(state.socket!==null){
                if(payload.isTemporal === false){
                    localStorage.setItem('saved-lang',payload.lang); //save in storage for avoid los chat on reload page
                }
                state.chosenLanguage = payload.lang;
                state.isActiveOnChat = true;
            }    
            console.log('Connected...',state.socket);        
        },
        socketDisconn(state,isTemporal=false){
            /* Disconnect socket */
            if(state.socket !== null){
                state.socket.disconnect();
                state.socket = null;
                state.isActiveOnChat = false;
                console.log("Diconnecting...");
                if(isTemporal===false){
                    state.activeUsersOnChat=[];
                    state.wasSearched=false;
                    state.chosenLanguage = "";
                    console.log('Removing localstorage...');
                    localStorage.removeItem('saved-lang');        
                }    
            }
        },     
        

        setUserActive(state,value){
            /* Set user logged in  true or false*/
            state.isUserLogged = value;
        },
        getCountriesAPI(state){
            /* Get all nationalities from Countries REST */
            const url = 'https://restcountries.eu/rest/v2/all';
            Axios.get(url)
            .then(res =>{                             
                res.data.forEach(el => {
                    state.countriesList.push(el.name);                    
                });
            })
            .catch(err=>{
              console.log(err);
            });
        },

        setUserInformation(state, dataUser){
            state.userInformation.username = dataUser.username;
            state.userInformation.email = dataUser.email;
            state.userInformation.chosen_lan = dataUser.languages;
            state.userInformation.country = dataUser.country;
            state.userInformation.victories = dataUser.victories;
            state.userInformation.fails = dataUser.fails;
            state.userInformation.medals = dataUser.medals;
        },

        /* Active side bar chat */
        setChatVisible(state,value){
            state.activeChatSide = value;
        },
        
        setStatusChatBoxVisible(state,value){
            state.isOpenChatBox = value;
        },

        setIsLoadingChatBox(state,value){
            state.isLoadingChatBox = value;
        },

        setUserForChating(state,user){
            state.chosenUserForChating = user;
        },
                                       
        /* SET MESSAGES ON BOX */
        setMessagesOnBox(state,messages){            
            state.messagesOnBox = messages;            
        },

        setNewMessage(state,newMessage){
            /* console.log("Esto llegó ",newMessage); */
            if(!state.messagesOnBox.includes(newMessage)){
                state.messagesOnBox = state.messagesOnBox.concat(newMessage);
            }
        },

        setInboxHistory(state,inbox){
            state.inboxUserHistory = inbox;
        },


        setUsersActivesOnChat(state,users){
            state.activeUsersOnChat = users;
        },

        setProgressValue(state,value){
            state.setProgress = value;
        },

        setWasSearched(state,value){
            state.wasSearched = value;
        },

        setChosenLanguage(state,value){
            state.chosenLanguage = value;
        },
    
    },
    actions: {
        getUserInformation: async function ({commit}){
             /* Recover uid from token */
             const {uid} = getUserInfo();
             /* Http request AXIOS GET */
            const res = await Axios.get(`${process.env.VUE_APP_API}/login/user-info/${uid}`);           
            commit('setUserInformation',res.data.userInfo);           
        },  
        
        loadMessagesOnBox: async function ({commit},user){
            commit('setIsLoadingChatBox',true);
            commit('setUserForChating',user);
            const token = getAuthToken(); //helpers
            const url = `${process.env.VUE_APP_API}/messages/${user.uid}`; //API path from eviroment
            try{
                const data = await Axios.get(url,{
                    headers:{'blumin-tkn': token}
                });
                if (data){
                    commit('setMessagesOnBox',data.data.msg);                    
                    commit('setIsLoadingChatBox',false);//messages were loaded                    
                }
            }catch(err){
                console.log("Error on loading messages >: ",err);
            }      
        },
        getInboxUser: async function ({commit}){
            const {uid} = getUserInfo();
            commit('setIsLoadingChatBox',true);
            const token = getAuthToken(); //helpers
            const url = `${process.env.VUE_APP_API}/messages/inbox/${uid}`; //API path from eviroment
            try{
                const data = await Axios.get(url,{
                    headers:{'blumin-tkn': token}
                });
                if (data){
                    console.log(data.data.inbox);
                    commit('setInboxHistory',data.data.inbox);                    
                    commit('setIsLoadingChatBox',false);//messages were loaded                    
                }
            }catch(err){
                console.log("Error on loading messages >: ",err);
            }

        },
        getUsersOnRoom: function ({commit,state}){
            const {uid} = getUserInfo();
            state.socket.on('list-users', (data) => {
                const users = data.filter((user) => user.uid !== uid);
                commit('setUsersActivesOnChat',users);
                commit('setProgressValue',false);    
                console.log('getting users on room!', state.activeUsersOnChat);            

            });
        },    

        savedLanguageRoom: function ({commit,dispatch},lang) {
            commit('socketDisconn');
            commit('setProgressValue',true); //show progress
            commit('setSocketConnection',{lang:lang,isTemporal:false});
            commit('setChosenLanguage',lang);
            commit('setWasSearched',true);
            dispatch('getUsersOnRoom');
          },
    },
    modules: {}
})