import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isLogged:false,
        sections: [{
                name: 'Audio Chat',
                img: require('../assets/ilustration2.png'),
                description: 'Speak with other person who are learing too',
                path: '/audio-chat',
                component: 'AudioChat'
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
             
        // Data progress user        
        userInfo:{            
            email:'rodrigo@rodrigo.com',
            username:"Garavirod",                       
            country:'Mexico',
            choosen_langages:[
                {
                    lang:"English",
                    level:"B2"
                },
                {
                    lang:"French",
                    level:"A1"
                }
            ],
            progress_app: {victories:23,fails:3,medals:5}
        }
    },
    mutations: {
        setChatList(state, value) {
            state.chatList = value;
        },

    },
    actions: {},
    modules: {}
})