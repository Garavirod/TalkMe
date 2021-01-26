<template>
  <v-container class="pa-1" elevation="5">
    <v-row class="text-center">
      <v-col cols="12" lg="12" xs="12">
        <v-card class="pa-2">
          <!--HEAD BOX-->
          <v-card-title class="black--text text-center">
            <v-col class="text-center">
              <h3>Box Messages</h3>
              <p>You are talking with</p>
              <p>{{ openchat.chosenUser.username }}</p>
            </v-col>
          </v-card-title>
          <v-card-text class="text-center"
            >Don't forget always to be polite</v-card-text
          >
          <!--MESSAGES-->
          <v-container id="box-mess" no-gutters>
            <v-skeleton-loader
             v-if="this.openchat.isloading"
              type="list-item-avatar-three-line, list-item-avatar-three-line, list-item-avatar-three-line"
            ></v-skeleton-loader>
            <v-row
              v-else
              class="animate__animated animate__fadeInDown"
              v-for="m in messagesOnBox"
              :key="m._id"
              :justify="uidUser !== m.toUser ? 'end' : 'start'"
            >
              <v-col cols="12" lg="6" md="8" sm="8" xs="12">
                <AudioCardMessage
                  :messageFragments="m.audioMessage"
                  :dateMessage="m.createdAt"
                  :idMessage="m._id"
                  :who="
                    uidUser !== m.toUser ? 'You' : openchat.chosenUser.username
                  "
                />
              </v-col>
            </v-row>
          </v-container>
          <!--BUTTONS CONTROLS-->
          <AudioControls :ctr_send="true" />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
#audioBox {
  width: 60%;
}

#box-mess {
  background-color: rgb(236, 247, 247);
  max-height: 300px;
  min-height: 300px;
  overflow-y: scroll;
}
</style>

<script>
import { mapState } from "vuex";
import AudioControls from "../components/AudioControls";
import AudioCardMessage from "../components/AudioCardMessage";
import { getUserInfo } from "../helpers/utils";
export default {
  name: "BoxMessages",
  components: {
    AudioControls,
    AudioCardMessage,
  },
  computed: {
    ...mapState(["socket", "openchat", "messagesOnBox"]),
  },
  data() {
    return {
      isrecording: false,
      uidUser: null,
    };
  },
  methods: {
    scrollToEnd() {
      const boxContainer = document.querySelector("#box-mess");
      const scrollHeight = boxContainer.scrollHeight;
      boxContainer.scrollTop = scrollHeight;
    },
  },
  mounted() {
    this.scrollToEnd();
  },
  updated() {
    this.scrollToEnd();
  },
  created() {
    const { uid } = getUserInfo();
    this.uidUser = uid;
  },
};
</script>
