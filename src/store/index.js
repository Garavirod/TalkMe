import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        sections: [{
                name: 'Audio Chat',
                img: require('../assets/illustration4.png'),
                description: 'Speak with other person who are learing too',
                path: '/audio-chat',
                component: 'AudioChat'
            },
            {
                name: 'Speaking fight',
                img: require('../assets/fight.png'),
                description: 'Compete with others to find out who has the best pronunciation',
                path: '/speaking-fight',
                component: ''
            },
            {
                name: 'Out laud reading',
                img: require('../assets/reading.png'),
                description: 'Read a text out loud to improve your pronunciation',
                path: '/reading',
                component: ''
            },
            {
                name: 'Situations',
                img: require('../assets/situations.png'),
                description: 'Improvise in diferent random situations',
                path: '/situations',
                component: ''
            },
            {
                name: 'Describe pictures',
                img: require('../assets/illustration2.png'),
                description: 'Describe pictures to improve your vocabulary',
                path: '/describe-pictures',
                component: ''
            }
        ],
        // Chatlist visible
        chatList: false,        
        // Data progress user
        progress : [
            {
                tag:'Victories',
                img : require('../assets/victories.png'),
                score : 0

            },
            {
                tag:'Fails',
                img : require('../assets/fails.png'),
                score : 0
            },
            {
                tag:'Medals',
                img : require('../assets/medals.png'),
                score : 0
            },
        ]
    },
    mutations: {
        setChatList(state, value) {
            state.chatList = value;
        },

    },
    actions: {},
    modules: {}
})