<template>
  <SectionCard :nameSection="sectionName" :notes="true" :instructions="instructions">
    <template v-slot:SectionContent>
     <v-container>    
      <ChatList/>
      <Pagination/>
     </v-container>
    </template>
    <template v-slot:extract>
      <p>{{extract}}</p>
    </template>
  </SectionCard>
</template>

<script>
import ChatList from '../components/ChatList';
import Pagination from '../components/Pagination.vue';
import SectionCard from "../components/SectionCard";
export default {
  name: "PeopleActiveChat",
  components: {
    ChatList,
    SectionCard,
    Pagination,
  },
  data() {
    return {
      sectionName: "Prepare your chat room",
      extract:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas tempora, quia consequatur sequi rem quidem maiores adipisci, quis iusto veniam rerum, placeat dolore delectus earum ratione. Inventore ullam veritatis quae.",
      instructions:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas tempora, quia consequatur sequi rem quidem maiores adipisci, quis iusto veniam rerum, placeat dolore delectus earum ratione. Inventore ullam veritatis quae."
    };
  }
};
</script>