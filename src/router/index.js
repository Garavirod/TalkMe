import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Sections from '../views/Sections'
import AudioChat from '../views/AudioChat'
import DescribePic from '../views/DescribePic';
import Reading from '../views/ReadingLoud';
import SpeakingFight from '../views/SpeakingFight';
import Welcome from '../views/Welcome'


Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/sections',
        name: 'Sections',
        component: Sections
    },
    {
        path: '/audio-chat',
        name: 'AudioChat',
        component: AudioChat
    },
    {
        path: '/describe-pictures',
        name: 'DescribePic',
        component: DescribePic
    },
    {
        path: '/reading',
        name: 'ReadingLoud',
        component: Reading
    },
    {
        path: '/speaking-fight',
        name: 'SpeakingFight',
        component: SpeakingFight
    },
    {
        path: '/welcome',
        name:'Welcome',
        component:Welcome
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router