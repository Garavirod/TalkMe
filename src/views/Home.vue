<template>
  <v-container fluid class="ma-0 pa-0">
    <header id="header-index">
      <section class="textos-header">
        <h1>Improve your english speaking skills</h1>
        <h2>With a powerfull web applicaction</h2>
      </section>
      <svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ffff"
          fill-opacity="1"
          d="M0,96L60,128C120,160,240,224,360,213.3C480,203,600,117,720,112C840,107,960,181,1080,202.7C1200,224,1320,192,1380,176L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        />
      </svg>
    </header>
    <main>
      <section class="container about-us">
        <h2 class="title">What is Talk-me ?</h2>
        <div class="container-about-us">
          <img src="../assets/illustration1.png" alt class="image-about-us" />
          <div class="text-content">
            <h3>
              <span>1</span>The best prodcuts
            </h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa ut minima sequi ipsam, sed accusantium quia assumenda fugiat dolorem repudiandae? Natus, impedit adipisci dolorem ducimus eaque explicabo consequuntur maxime repellendus.</p>
            <h3>
              <span>2</span>The best technology
            </h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa ut minima sequi ipsam, sed accusantium quia assumenda fugiat dolorem repudiandae? Natus, impedit adipisci dolorem ducimus eaque explicabo consequuntur maxime repellendus.</p>
          </div>
        </div>
      </section>
      <section class="suitcase">
        <div class="container">
          <h2 class="title">Sections</h2>
          <div class="gallery-suitcase">            
            <div class="image-suitcase" v-for="sec in sections" :key="sec.name">
               <v-img :src="sec.img"></v-img>
              <div class="hover-gallery">
                <i class="fas fa-eye"></i>
                <b><p>{{sec.name}}</p></b>
                <p >{{sec.description}}</p>
              </div>
            </div>                      
          </div>
        </div>
      </section>
      <section class="clients container mb-5">
        <h2 class="title">What our users say about?</h2>
        <div class="cards">
          <div class="card" v-for="user in users" :key="user.id">
            <img :src="user.avatar" alt />
            <div class="content-text-card">
              <h4>Name : {{user.name}}</h4>
              <p>{{user.comentary}}</p>
            </div>
          </div>          
        </div>
      </section>
      <!-- <section class="about-services">
        <div class="container">
          <h2 class="title">Our services</h2>
          <div class="service-container">
            <div class="service-indv">
              <img src="../assets/illustration2.png" alt />
              <h4>Name</h4>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, dolorem.</p>
            </div>
            <div class="service-indv">
              <img src="../assets/illustration3.png" alt />
              <h4>Name</h4>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, dolorem.</p>
            </div>
            <div class="service-indv">
              <img src="../assets/illustration4.png" alt />
              <h4>Name</h4>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, dolorem.</p>
            </div>
          </div>
        </div>
      </section> -->
    </main>
    <footer>
      <div class="container-footer">
        <div class="content-foo">
          <h4>Phone</h4>
          <p>1234567898</p>
        </div>
        <div class="content-foo">
          <h4>Email</h4>
          <p>qwerty@gmail.com</p>
        </div>
        <div class="content-foo">
          <h4>Location</h4>
          <p>1234567898</p>
        </div>
      </div>
      <h2 class="final-title">&copy; Garavirod | Rodrigo García</h2>
    </footer>
  </v-container>
</template>

<style>
.container {
  width: 100%;  
  overflow: hidden;
  margin: auto;  
}
.title {
  /* ede682 */
  color: #febf63;
  font-size: 30px;
  text-align: center;
  margin-bottom: 60px;
}

#header-index {
  width: 100%;
  height: 600px;
  /* UI-GRADIENT */
  background: #7fdbda; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #bdfff3,
    #7fdbda
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
      to right,
      rgba(59, 181, 185, 0.589),
      rgba(75, 195, 195, 0.664)
    ),
    url(../assets/illustration0.jpg); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  position: relative;
}

#header-index .textos-header {
  display: flex;
  height: 430px;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}

.wave {
  position: absolute;
  bottom: 0;
  width: 100%;
}

.container-about-us {
  display: flex;
  /*this distribuite de space beween the objects*/
  justify-content: space-evenly;
}

.image-about-us {
  width: 48%;
}

.about-us .text-content {
  width: 48%;
  /* background-color: #642a73; */
}

.textos-header h1 {
    font-size: 50px;
    color: #fff;
    font-weight: bold;
}

.textos-header h2 {
    font-size: 30px;
    font-weight: 300;
    color: #fff;
}

/* Abput talkme */

.container-about-us {
    display: flex;
    /*this distribuite de space beween the objects*/
    justify-content: space-evenly;
}

.image-about-us {
    width: 48%;
}

.about-us .text-content {
    width: 48%;
    /* background-color: #642a73; */
}

.text-content h3 span {
    background-color: #ede682;
    color: #fff;
    border-radius: 50%;
    text-align: center;
    display: inline-block;
    width: 30px;
    height: 30px;
    padding: 2px;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.5);
    margin-right: 5px;
}

.text-content p {
    padding: 2px 0px 30px 15px;
    font-weight: 300;
    text-align: justify;
}

/* Gallery */

.suitcase {
    background-color: #f2f2f2;
}

.gallery-suitcase {
    display: flex;
    justify-content: space-evenly;
    /* If it is more than the precentage 'go' */
    flex-wrap: wrap;
}

.image-suitcase {
    width: 24%;
    margin-bottom: 10px;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.5);
    height: 200px;
}


/* Direct child 'img' */

.image-suitcase>img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

.hover-gallery {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    transform: scale(0);
    background-color: hsla(56, 75%, 72%,0.7);
    /* background-color: hsla(103, 58%, 75%,0.7); */
    transition: transform .5s;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.hover-gallery img {
    width: 50px;
}

.hover-gallery p {
    color: #424242;
    text-align: center;
}

.hover-gallery>i {
    font-size: 40px;
    color: #f80759;
}

.image-suitcase:hover .hover-gallery {
    transform: scale(1);
}

/* Clients */

.cards {
    display: flex;
    justify-content: space-evenly;
}

.cards .card {
    background: #7fdbda;
    display: flex;
    width: 46%;
    height: 200px;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 5px;
    box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
    margin-right: 10px;
    ;
}

.cards .card img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border: solid 4px #fff;
    border-radius: 50%;
    display: block;
}

.cards .card>.content-text-card {
    width: 60%;
    color: #fff;
}

.cards .card>.content-text-card p {
    font-weight: 300;
    padding-top: 5px;
}

/* Our team */

.about-service {
    background-color: #f2f2f2;
    padding-bottom: 30px;
}

.service-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.service-indv {
    width: 28%;
    text-align: center;
}

.service-indv img {
    width: 90%;
}

.service-indv h3 {
    margin: 10px 0;
}

.service-indv p {
    font-weight: 300;
    text-align: justify;
}

/* Footer */

footer {
    background-color: #424242;
    padding: 60px 0 30px 0;
    margin: auto;
    overflow: hidden;
}

.container-footer {
    display: flex;
    width: 90%;
    justify-content: space-evenly;
    margin: auto;
    padding-bottom: 50px;
    border-bottom: 1px solid #ccc;
}

.content-foo {
    text-align: center;
}

.content-foo h4 {
    color: #f2f2f2;
    border-bottom: 3px solid #ede682;
    padding-bottom: 5px;
    margin-bottom: 10px;
}

.content-foo p {
    color: #ccc;
}

.final-title {
    text-align: center;
    font-size: 24px;
    margin-top: 20px;
    color: #9e9797;
}

/* Responsive */

@media screen and (max-width: 900px) {
    header {
        background-position: center;
    }
    .container-about-us {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .about-us .text-content,
    .image-about-us {
        width: 90%;
    }
    /* Gallery */
    .image-suitcase {
        width: 44%;
    }
    /* Clients */
    .cards {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .cards .card {
        width: 90%;
        margin-bottom: 10px;
    }
    /* services */
    .service-container {
        justify-content: center;
        flex-direction: column;
    }
    .service-indv {
        width: 100%;
        text-align: center;
    }
    .service-indv:nth-child(1),
    .service-indv:nth-child(2) {
        margin-bottom: 60px;
    }
    .service-indv img {
        width: 90%;
    }
}

@media screen and (max-width:500px) {
    nav {
        text-align: center;
        padding: 30px 0 0 0;
    }
    nav>a {
        margin-right: 5px;
    }
    .textos-header h1 {
        font-size: 30px;
    }
    .textos-header h2 {
        font-size: 20px;
    }
    /* abput us */
    .image-about-us {
        margin-bottom: 60px;
        width: 99%;
    }
    .about-us .text-content {
        width: 95%;
    }
    /* Gallery */
    .image-suitcase {
        width: 95%;
    }
    /* Clients */
    .cards .card {
        height: 400px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .cards .card img {
        width: 55%;
        height: 25%;
    }
    .cards .card .content-text-card {
        width: 90%;
        text-align: center;
    }
    /* Footer */
    .container-footer {
        flex-direction: column;
        border: none;
    }
    .content-foo {
        margin-bottom: 20px;
        text-align: center;
    }
    .content-foo h4 {
        border: none;
    }
    .content-foo p {
        border-bottom: 1px solid #f2f2f2;
        padding-bottom: 20px;
        color: #ccc;
    }
    .final-title {
        font-size: 20px;
    }
}

</style>

<script>
// @ is an alias to /src
export default {
  name: "Home",
  components: {},
  data: ()=>({
    sections :[
      {
        name: 'Audio Chat',
        img:require('../assets/illustration4.png'),
        description : 'Speak with other person who are learing too'
      },
      {
        name: 'Speaking fight',
        img:require('../assets/fight.png'),
        description : 'Compete with others to find out who has the best pronunciation'
      },
      {
        name: 'Out laud reading',
        img:require('../assets/reading.png'),
        description : 'Read a text out loud to improve your pronunciation'
      },
      {
        name: 'Situations',
        img:require('../assets/situations.png'),
        description : 'Improvise in diferent random situations'
      },
      {
        name: 'Describe pictures',
        img:require('../assets/illustration2.png'),
        description : 'Describe pictures to improve your vocabulary'
      }
    ],
    users:[
      {
        name:'Camile',
        comentary:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, iste.',
        avatar:'https://cdn.vuetifyjs.com/images/lists/2.jpg'
      },
      {
        name:'Ricahrd',
        comentary:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, iste.',
        avatar:'https://cdn.vuetifyjs.com/images/lists/3.jpg'
      },
      {
        name:'Valery',
        comentary:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, iste.',
        avatar:'https://cdn.vuetifyjs.com/images/lists/4.jpg'
      },
    ]
  }
  )};
</script>
