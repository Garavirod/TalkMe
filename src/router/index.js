import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Sections from '../views/Sections'
import AudioChat from '../views/AudioChat'
import DescribePic from '../views/DescribePic';
import Reading from '../views/ReadingLoud';
import SpeakingFight from '../views/SpeakingFight';
import Welcome from '../views/Welcome'
import Situations from "../views/Situations";
import Situation from "../views/Situation";
import AudiosHistory from "../views/AudiosHistory";
import { isLoggedIn } from '../helpers/utils';



Vue.use(VueRouter)

const routes = [
    {
        path:'*',
        redirect: '/'
    },
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta:{
            isPrivate:false
        }
    },
    {
        path: '/sections',
        name: 'Sections',
        component: Sections,
        meta:{
            isPrivate:true
        }
    },
    {
        path: '/audio-chat',
        name: 'AudioChat',
        component: AudioChat,
        meta:{
            isPrivate:true
        }
    },
    {
        path: '/describe-pictures',
        name: 'DescribePic',
        component: DescribePic,
        meta:{
            isPrivate:true
        }
    },
    {
        path: '/reading',
        name: 'ReadingLoud',
        component: Reading,
        meta:{
            isPrivate:true
        }
    },
    {
        path: '/speaking-fight',
        name: 'SpeakingFight',
        component: SpeakingFight,
        meta:{
            isPrivate:true
        }
    },
    {
        path: '/welcome',
        name:'Welcome',
        component:Welcome,
        meta:{
            isPrivate:true
        }
    },
    {
        path: '/situations',
        name:'Situations',
        component:Situations,
        meta:{
            isPrivate:true
        }
    },
    {
        path: '/situation/:id',
        name:'Situation',
        component:Situation,
        meta:{
            isPrivate:true
        }
    },
    {
        path: '/audios-history',
        name: 'Audios-History',
        component: AudiosHistory,
        meta:{
            isPrivate:true
        }
    },


]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})




// Router protection
router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some ( r => r.meta.isPrivate );
    if(requiresAuth && !isLoggedIn()){    
        next('Home');
    }else{
        next();
    }       
});

export default router
