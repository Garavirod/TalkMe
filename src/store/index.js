import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        sections: [{
                name: 'Audio Chat',
                img: require('../assets/illustration4.png'),
                description: 'Speak with other person who are learing too'
            },
            {
                name: 'Speaking fight',
                img: require('../assets/fight.png'),
                description: 'Compete with others to find out who has the best pronunciation'
            },
            {
                name: 'Out laud reading',
                img: require('../assets/reading.png'),
                description: 'Read a text out loud to improve your pronunciation'
            },
            {
                name: 'Situations',
                img: require('../assets/situations.png'),
                description: 'Improvise in diferent random situations'
            },
            {
                name: 'Describe pictures',
                img: require('../assets/illustration2.png'),
                description: 'Describe pictures to improve your vocabulary'
            }
        ]
    },
    mutations: {},
    actions: {},
    modules: {}
})