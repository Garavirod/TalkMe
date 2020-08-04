<template>
  <v-card class="mx-auto white--text" max-width="400" color="#424242">
    <div color="#7fdbda">
      <v-card-title class="white--text font-weight-black">New chat</v-card-title>
      <v-card-text class="pt-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</v-card-text>
    </div>

    <v-divider></v-divider>

    <v-virtual-scroll :items="items" :item-height="50" height="500">
      <template v-slot="{ item }">
        <v-list-item>
          <v-list-item-avatar>
            <v-img :src="item.avatar"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title class="white--text">{{ item.user }}</v-list-item-title>
          </v-list-item-content>

          <v-list-item-action>
            <v-btn depressed small>
              <v-icon :color="item.active ? '#ade498' : 'grey'">mdi-message</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </template>
    </v-virtual-scroll>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        user: "Julian",
        active: false,
        avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg"
      },
      {
        user: "Julian",
        active: true,
        avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg"
      },
      {
        user: "Julian",
        active: false,
        avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg"
      },
      {
        user: "Julian",
        active: false,
        avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg"
      },
      {
        user: "Julian",
        active: true,
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg"
      },
      {
        user: "Julian",
        active: false,
        avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg"
      },
      {
        user: "Julian",
        active: false,
        avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg"
      },
      {
        user: "Julian",
        active: true,
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg"
      },
      {
        user: "Julian",
        active: false,
        avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg"
      },
      {
        user: "Julian",
        active: true,
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg"
      },
      {
        user: "Julian",
        active: false,
        avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg"
      },
      {
        user: "Julian",
        active: true,
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg"
      },
      {
        user: "Julian",
        active: false,
        avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg"
      }
    ]
  }),

  computed: {
    items() {
      const namesLength = this.names.length;
      const surnamesLength = this.surnames.length;
      const colorsLength = this.colors.length;

      return Array.from({ length: 10000 }, () => {
        const name = this.names[this.genRandomIndex(namesLength)];
        const surname = this.surnames[this.genRandomIndex(surnamesLength)];

        return {
          color: this.colors[this.genRandomIndex(colorsLength)],
          fullName: `${name} ${surname}`,
          initials: `${name[0]} ${surname[0]}`
        };
      });
    }
  },

  methods: {
    genRandomIndex(length) {
      return Math.ceil(Math.random() * (length - 1));
    }
  }
};
</script>