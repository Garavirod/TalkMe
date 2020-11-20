<template>
  <div>
    <v-row justify="center">
      <v-btn
        small
        outlined
        color="#204051"
        class="ma-2"
        dark
        @click="dialog2 = true"
      >
        Edit username
      </v-btn>
      <v-dialog
        v-model="dialog"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
        scrollable
      >
      </v-dialog>

      <v-dialog v-model="dialog2" max-width="500px">
        <v-card>
          <v-card-title>
            Upadate username          
          </v-card-title>
          <v-card-text>
            <v-row class="text-center">
              <!--Edit username-->
              <v-col cols="12">
                <v-text-field
                  v-model="username"
                  :rules="usernameRules"
                  label="Username"
                  required
                >
                </v-text-field>
              </v-col>             
              <!--Verify password-->
              <v-col cols="12">
                <v-text-field
                  v-model="pass"                  
                  :rules="passRules"
                  label="Password verification"
                  type="password"
                  required
                ></v-text-field>
              </v-col>              
            </v-row>         
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" text @click="dialog2 = false">
              Close
            </v-btn>
            <v-btn color="primary" text @click="dialog2 = false">
              Update
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-dialog v-model="dialog3" max-width="500px">
        <v-card>
          <v-card-title>
            <span>Dialog 3</span>
            <v-spacer></v-spacer>
            <v-menu bottom left>
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on">
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item
                  v-for="(item, i) in items"
                  :key="i"
                  @click="() => {}"
                >
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-card-title>
          <v-card-actions>
            <v-btn color="primary" text @click="dialog3 = false">
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      dialog2: false,
      dialog3: false,
      notifications: false,
      username: "Garavirod",
      usernameRules: [
        (v) => !!v || "Username is required",
        (v) =>
          (v && v.length >= 8) || "Username must be more than 8 characters",
      ],
      pass: "",
      passRules: [
        (v) => !!v || "Password is required",
        (v) =>
          (v && v.length >= 8) || "Password must be more than 8 characters",
      ],
      sound: true,
      widgets: false,
      items: [
        {
          title: "Click Me",
        },
        {
          title: "Click Me",
        },
        {
          title: "Click Me",
        },
        {
          title: "Click Me 2",
        },
      ],
      select: [
        { text: "State 1" },
        { text: "State 2" },
        { text: "State 3" },
        { text: "State 4" },
        { text: "State 5" },
        { text: "State 6" },
        { text: "State 7" },
      ],
    };
  },
};
</script>
