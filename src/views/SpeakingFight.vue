<template>
    <SectionCard :nameSection="sectionName" />
</template>

<script>
import SectionCard from '../components/SectionCard';
export default {
    name:'SpeakingFight',
    components:{
        SectionCard,
    },
    data() {
        return {
            sectionName:'Speaking Fight'
        }
    },

}
</script>