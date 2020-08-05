<template>
  <v-container fluid>
    <v-row class="pa-2 ma-0 sectionControls">
      <!-- Instructions -->
      <v-col class="col-5">
        <h1>Out laud reading</h1>
            <v-btn to="/sections" small depressed color="#ade498">Back to sections</v-btn>
        <v-row>
          <v-col class="col-12">
            <p>
              <span>
                <v-icon>mdi-checkbox-multiple-blank-circle</v-icon>
              </span>
              Instructions
            </p>
            <div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dolore veritatis quibusdam, molestias similique blanditiis? Sint atque dolores magni possimus, porro laudantium. Laborum cupiditate, dolorum vero distinctio quas alias modi!</p>
            </div>
          </v-col>
          <v-col class="col-6">
            <v-btn color="#ede682">
              Hear extract
              <v-icon class="ma-1">mdi-ear-hearing</v-icon>
            </v-btn>
          </v-col>
          <v-col class="col-6 text-center">
            <v-btn class="mr-2" color="#febf63" fab x-small dark>
              <v-icon>mdi-stop</v-icon>
            </v-btn>
            <v-btn color="error" fab x-small dark class="mr-2">
              <v-icon>mdi-microphone-settings</v-icon>
            </v-btn>
            <v-btn class="mr-2" color="#febf63" fab x-small dark>
              <v-icon>mdi-reload</v-icon>
            </v-btn>
            
          </v-col>
          <v-col class="col-12 text-center mt-5">
            <audio src="audio.ogg" controls autoplay loop>
              <p>Tu navegador no implementa el elemento audio</p>
            </audio>
          </v-col>
        </v-row>
      </v-col>
      <!-- Text -->
      <v-col class="col-7 Extract pa-5 text-justify">
        <h4 class="mb-4">Extraxct</h4>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi molestias necessitatibus asperiores iure veniam ducimus distinctio voluptatem tempora est natus laboriosam alias, rem optio tenetur repudiandae facere perspiciatis eius cum consequuntur ut. Corrupti consequatur nam, aut, omnis alias provident nulla debitis praesentium molestias asperiores sequi facere! Placeat necessitatibus explicabo, et laboriosam delectus facere adipisci culpa, ullam perferendis quae accusamus molestias sapiente repellendus ipsam minus sit illum accusantium modi tempore natus totam quo esse distinctio! Deleniti, ab nemo. Reiciendis maxime velit aperiam. Amet adipisci delectus possimus, nihil fugiat magni, deleniti in unde ipsa dolorum ratione tempora excepturi, obcaecati accusamus. Perferendis vel, vitae sunt, necessitatibus sapiente libero sint voluptas voluptatem dolores expedita, consequuntur ipsam ipsa sequi? Voluptatem, voluptatum facilis itaque magni impedit sit est animi ab explicabo placeat optio ut nemo debitis! Nam nobis temporibus odio ea necessitatibus facere iste quam ab beatae a. Facilis quidem, error dignissimos ad rerum quasi hic repellat veniam laborum totam possimus fuga aperiam alias reprehenderit tenetur eligendi quis inventore laboriosam dolore provident modi laudantium dolorum accusantium? Possimus similique officia quam temporibus. Nostrum ipsum odio quo ex beatae blanditiis perferendis, nobis iste ipsa esse voluptate, aliquid ab sequi veritatis earum. Sapiente, assumenda vel optio impedit distinctio in?</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi molestias necessitatibus asperiores iure veniam ducimus distinctio voluptatem tempora est natus laboriosam alias, rem optio tenetur repudiandae facere perspiciatis eius cum consequuntur ut. Corrupti consequatur nam, aut, omnis alias provident nulla debitis praesentium molestias asperiores sequi facere! Placeat necessitatibus explicabo, et laboriosam delectus facere adipisci culpa, ullam perferendis quae accusamus molestias sapiente repellendus ipsam minus sit illum accusantium modi tempore natus totam quo esse distinctio! Deleniti, ab nemo. Reiciendis maxime velit aperiam. Amet adipisci delectus possimus, nihil fugiat magni, deleniti in unde ipsa dolorum ratione tempora excepturi, obcaecati accusamus. Perferendis vel, vitae sunt, necessitatibus sapiente libero sint voluptas voluptatem dolores expedita, consequuntur ipsam ipsa sequi? Voluptatem, voluptatum facilis itaque magni impedit sit est animi ab explicabo placeat optio ut nemo debitis! Nam nobis temporibus odio ea necessitatibus facere iste quam ab beatae a. Facilis quidem, error dignissimos ad rerum quasi hic repellat veniam laborum totam possimus fuga aperiam alias reprehenderit tenetur eligendi quis inventore laboriosam dolore provident modi laudantium dolorum accusantium? Possimus similique officia quam temporibus. Nostrum ipsum odio quo ex beatae blanditiis perferendis, nobis iste ipsa esse voluptate, aliquid ab sequi veritatis earum. Sapiente, assumenda vel optio impedit distinctio in?</p>
      </v-col>
    </v-row>
  </v-container>
</template>


<style>
.Extract {
  background-color: #f0d2a7;
  overflow: scroll;
  max-height: 450px;
}
</style>

<script>
export default {
  name: "ReadingLoud",
  data: () => ({
    sticky: false
  })
};
</script>