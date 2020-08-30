<template>
<v-navigation-drawer app>
    <v-card class="mx-auto" max-width="400">
        <div color="#7fdbda" class="text-center">
            <v-card-title class="black--text ">People active now</v-card-title>
        </div>

        <v-divider></v-divider>
        <div id="ListActives">
            <v-list v-for="item in actives" :key="item.id">
                <v-list-item id="itemActive" class="mt-0">
                    <v-list-item-avatar>
                        <v-img :src="item.avatar"></v-img>
                    </v-list-item-avatar>

                    <v-list-item-content>
                        <v-list-item-title class="black--text">{{
                item.user
              }}</v-list-item-title>
                    </v-list-item-content>

                    <v-list-item-action>
                        <v-icon :color="item.active ? '#ade498' : 'grey'">mdi-message</v-icon>
                    </v-list-item-action>
                </v-list-item>
            </v-list>
        </div>
    </v-card>
</v-navigation-drawer>
</template>

<style>
#itemActive:hover {
    background-color: rgb(221, 224, 214);
    cursor: pointer;
}

#itemActive:active {
    background-color: rgb(135, 221, 236);
}
</style>

<script>
export default {
    data: () => ({
        actives: [{
                user: "Julian",
                active: false,
                avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
            },
            {
                user: "Julian",
                active: true,
                avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
            },
            {
                user: "Julian",
                active: false,
                avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
            },
            {
                user: "Julian",
                active: false,
                avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
            },
            {
                user: "Julian",
                active: true,
                avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            },
            {
                user: "Julian",
                active: false,
                avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
            },
            {
                user: "Julian",
                active: false,
                avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
            },
            {
                user: "Julian",
                active: true,
                avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            },
            {
                user: "Julian",
                active: false,
                avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
            },
            {
                user: "Julian",
                active: true,
                avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            },
            {
                user: "Julian",
                active: false,
                avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
            },
            {
                user: "Julian",
                active: true,
                avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
            },
            {
                user: "Julian",
                active: false,
                avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
            },
        ],
    }),

    computed: {
        items() {
            const namesLength = this.names.length;
            const surnamesLength = this.surnames.length;
            const colorsLength = this.colors.length;

            return Array.from({
                    length: 10000,
                },
                () => {
                    const name = this.names[this.genRandomIndex(namesLength)];
                    const surname = this.surnames[this.genRandomIndex(surnamesLength)];

                    return {
                        color: this.colors[this.genRandomIndex(colorsLength)],
                        fullName: `${name} ${surname}`,
                        initials: `${name[0]} ${surname[0]}`,
                    };
                }
            );
        },
    },

    methods: {
        genRandomIndex(length) {
            return Math.ceil(Math.random() * (length - 1));
        },
    },
};
</script>
