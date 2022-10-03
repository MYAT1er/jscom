<template>
  
    <div class="big-wrapper light">
        <img src="./img/shape.png" alt="" class="shape" />

        <header>
          <div class="container ">
            <div class="logo">
              <img src="./img/logo.png" alt="Logo" />
              <h3>JscomPay</h3>
            </div>

            <div :class="link">
              <ul>
                <li><a href="#">Fonctionnalités</a></li>
                <li><a href="#">Tarif</a></li>
                <li><a href="#">Entreprise</a>
                </li>
                <li><a href="#">Ressources</a></li>
                <li>
                    <router-link to="/">
                        Acceuil
                    </router-link>
                </li>
                <li>
                  <router-link to="connexion" class="btn" v-if="Etat == 'deconnecte'">
                    Connexion
                  </router-link>
                  
                  </li>
                  <li class="profile" v-if="Etat == 'connecte'">
                  <profile />
                  
                  
                  </li>
                  <li class="deco" v-if="Etat == 'connecte'" @click="deco">
                      <font-awesome-icon icon="fa-solid fa-user-xmark" />
                  </li>
                  <li>
                    <a href="/cart"><font-awesome-icon icon="fa-solid fa-cart-shopping" /></a>
                  </li>
              </ul>
            </div>

            <div class="overlay"></div>

            <div class="hamburger-menu" @click="mobile">
              <div class="bar"></div>
            </div>
          </div>
        </header><br><br><br><br><br><br>

        <my-shop/>
        <footer class="footer py-70 bg-bw" id="footer">
      <div class="container">
          <div class="footer-blocks row">
              <div class="footer-block f-links px-15"><!-- Footer links -->
                  <ul>
                      <li><a href="#">A propos de nous</a></li>
                      <li><a href="#">Nous écrire</a></li>
                      <li><a href="#">Politique de confidentialité</a></li>
                  </ul>
              </div><!-- End footer links -->
              <div class="footer-block s-links px-15"><!-- Social links -->
                  <ul>
                      <li><a href=""><font-awesome-icon icon="fa-brands fa-facebook"/></a></li>
                      <li><a href=""><font-awesome-icon icon="fa-brands fa-twitter"/></a></li>
                      <li><a href=""><font-awesome-icon icon="fa-brands fa-youtube"/></a></li>
                      <li><a href=""><font-awesome-icon icon="fa-brands fa-instagram"/></a></li>
                  </ul>
              </div><!-- End social links -->

              <div class="copyright" id="copyright">
                  &copy; | JscomPay 2021-2022 all rights reserved
              </div>
          </div>
      </div>
  </footer>
    </div>
</template>

<script>
import MyShop from '@/components/MyShop.vue'
import Profile from '@/components/profile.vue';
export default {
  components: { MyShop, Profile },
  data() {
    return {
      Etat:"",
      EtatConnecte:"",
      link:'links',
      posts: [
      { id: 1, title: 'mon premier produit', title2: "mon2eprojet"}
    ],
    }
  },

  beforeCreate() {
      
      this.Etat = sessionStorage.getItem("connecte"); 
      
      if (this.Etat == "true") {
        
      }
      else
      {
        this.$router.replace({name: "connexion"});
      }

    
    },

    mounted() {
      if (sessionStorage.getItem("connecte") == 'true')
    {
        this.Etat= 'connecte';
    }
    else 
    {
      this.Etat = "deconnecte";
    }

    console.log(this.posts);
    localStorage.setItem('posts', JSON.stringify(this.posts));
    },

    methods: {
     deco()
  {
    
    sessionStorage.setItem("connecte", "false");
    location.reload();
    alert("Vous avez été déconnecté");
  },

   mobile()
  {
      if (this.link == "links") {
        this.link = "links menu-mobile";
      }
      else 
      {
        this.link = 'links';
      }

  }

  },

}


</script>

<style scoped >
 @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap");

.light {
  --mainColor: #64bcf4;
  --hoverColor: #5bacdf;
  --backgroundColor: #f1f8fc;
  --darkOne: #312f3a;
  --darkTwo: #45424b;
  --lightOne: #919191;
  --lightTwo: #aaa;
}

.dark {
  --mainColor: #64bcf4;
  --hoverColor: #5bacdf;
  --backgroundColor: #192e3a;
  --darkOne: #f3f3f3;
  --darkTwo: #fff;
  --lightOne: #ccc;
  --lightTwo: #e7e3e3;
}

*,
*::before,
*::after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  font-family: "Poppins", sans-serif;
}

.stop-scrolling {
  height: 100%;
  overflow: hidden;
}

img {
  width: 100%;
}

a {
  text-decoration: none;
}

.big-wrapper {
  position: relative;
  padding: 1.7rem 0 2rem;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  background-color: var(--backgroundColor);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.container {
  position: relative;
  max-width: 81rem;
  width: 100%;
  margin: 0 auto;
  padding: 0 3rem;
  z-index: 10;
}

header {
  position: relative;
  z-index: 70;
}

header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.overlay {
  display: none;
}

.logo {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.logo img {
  width: 40px;
  margin-right: 0.6rem;
  margin-top: -0.6rem;
}

.logo h3 {
  color: var(--darkTwo);
  font-size: 1.55rem;
  line-height: 1.2;
  font-weight: 700;
}

.links ul {
  display: flex;
  list-style: none;
  align-items: center;
}

.links a {
  font-family: 'Poppins', sans-seriff;
  color: var(--lightTwo);
  margin-left: 4.5rem;
  display: inline-block;
  transition: 0.3s;
}

.links a:hover {
  color: var(--hoverColor);
  transform: scale(1.05);
}

.btn {
  display: inline-block;
  padding: 0.9rem 1.9rem;
  color: #fff !important;
  background-color: var(--mainColor);
  border-radius: 16px;
  text-transform: capitalize;
  transition: 0.3s;
}

.btn:hover {
  background-color: var(--hoverColor);
  transform: scale(1) !important;
}

.hamburger-menu {
  position: relative;
  z-index: 99;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  display: none;
}

.hamburger-menu .bar {
  position: relative;
  width: 100%;
  height: 3px;
  background-color: var(--darkTwo);
  border-radius: 3px;
  transition: 0.5s;
}

.bar::before,
.bar::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: var(--darkTwo);
  border-radius: 3px;
  transition: 0.5s;
}

.bar::before {
  transform: translateY(-8px);
}

.bar::after {
  transform: translateY(8px);
}

.big-wrapper.active .hamburger-menu .bar {
  background-color: transparent;
}

.big-wrapper.active .bar::before {
  transform: translateY(0) rotate(-45deg);
}

.big-wrapper.active .bar::after {
  transform: translateY(0) rotate(45deg);
}

.showcase-area .container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-content: center;
}
.showcase-area .container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-content: center;
}

.big-title {
  font-size: 1.4rem;
  color: var(--darkOne);
  text-transform: capitalize;
  line-height: 1.4;
}

.text {
  color: var(--lightOne);
  font-size: 1.1rem;
  margin: 1.9rem 0 2.5rem;
  max-width: 600px;
  line-height: 2.3;
}

.showcase-area .btn {
  box-shadow: 0 0 40px 2px rgba(0, 0, 0, 0.05);
}

.person {
  width: 60%;
  transform: translate(15%, 25px);
}
.perso {
  width: 35%;
  transform: translate(60%, -80px);
}

.toggle-btn {
  display: inline-block;
  border: none;
  background: var(--darkTwo);
  color: var(--backgroundColor);
  outline: none;
  cursor: pointer;
  height: 39px;
  width: 39px;
  border-radius: 50%;
  font-size: 1.1rem;
  transition: 0.3s;
}

.toggle-btn i {
  line-height: 39px;
}

.toggle-btn:hover {
  background: var(--mainColor);
}

.big-wrapper.light .toggle-btn i:last-child {
  display: none;
}

.big-wrapper.light .toggle-btn i:first-child {
  display: block;
}

.big-wrapper.dark .toggle-btn i:last-child {
  display: block;
}

.big-wrapper.dark .toggle-btn i:first-child {
  display: none;
}

.shape {
  position: absolute;
  z-index: 0;
  width: 500px;
  bottom: -180px;
  left: -15px;
  opacity: 0.1;
}

.copy {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  animation: appear 1s 1 both;
}

@keyframes appear {
  0% {
    clip-path: circle(30% at -25% -25%);
  }
  100% {
    clip-path: circle(150% at 0 0);
  }
}

@media screen and (max-width: 870px) {
  .hamburger-menu {
    display: flex;
  }

  .deco 
  {
    display: none;
  }

  .profile
  {
    display:none;
  }

  .links {
    top: 0;
    right: 0;
    position: absolute;
    background-color:  rgb(255, 255, 255, 0.20 );
    backdrop-filter: blur(7px);
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 100%;
    transition: all 0.5s ease;
  }
  .links.menu-mobile{
    margin-right: 0;
  }

  .links ul {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .container .links ul li{
    margin: 1px 0;
    font-size: 0.5 rem;
  }

  .links a {
    color: #fff;
    margin-left: 0;
    padding: 2rem 0;
  }

  .links .btn {
    background: none;
  }

  .overlay {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    opacity: 0;
    pointer-events: none;
    transition: 0.5s;
  }

  .big-wrapper.active .links {
    transform: translateX(0);
    box-shadow: 0 0 50px 2px rgba(0, 0, 0, 0.4);
  }

  .big-wrapper.active .overlay {
    pointer-events: all;
    opacity: 1;
  }

  .showcase-area {
    padding: 2.5rem 0;
    max-width: 700px;
    margin: 0 auto;
  }

  .showcase-area .container {
    grid-template-columns: 1fr;
    justify-content: center;
    grid-gap: 2rem;
  }

  .big-title {
    font-size: 1.1rem;
  }

  .text {
    font-size: 0.95rem;
    margin: 1.4rem 0 1.5rem;
  }

  .person {
    width: 100%;
    transform: none;
  }

  .logo h3 {
    font-size: 1.25rem;
  }

  .shape {
    bottom: -180px;
    left: -150px;
  }
}

@media screen and (max-width: 470px) {
  .container {
    padding: 0 1.5rem;
  }

  .big-title {
    font-size: 0.9rem;
  }

  .text {
    margin: 1.1rem 0 1.5rem;
  }

  .showcase-area .btn {
    font-size: 0.8rem;
  }
}
ul, ol, li, dl {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.row {
  display: flex;
  flex-wrap: wrap;
  margin-left: -15px;
  margin-right: -15px;
}
.py-70 {
  padding-top: 70px;
  padding-bottom: 70px;
}
.px-15 {
  padding-left: 15px;
  padding-right: 15px;
}
.bg-bw {
  background-color: #eaf6ff;
}

#footer .footer-blocks .footer-block {
  width: 50%;
  flex: 0 0 50%;
}
@media (max-width: 768px) {
  #footer .footer-blocks .footer-block {
    width: 100%;
    flex: 0 0 100%;
  }
}
#footer .footer-blocks .f-links li {
  margin-bottom: 1rem;
}
#footer .footer-blocks .f-links li a {
  padding: .5rem 0;
  color: #7a7b7b;
  border-bottom: 1px solid transparent;
  transition: all .3s ease;
}
#footer .footer-blocks .f-links li a:hover {
  color: #5bacdf;
  border-bottom-color: #5bacdf;
}
#footer .footer-blocks .s-links ul {
  display: flex;
  align-items: center;
  width: 100%;
}
#footer .footer-blocks .s-links a {
  padding: 1rem;
  color: #7a7b7b;
  transition: .3s ease;
}
#footer .footer-blocks .s-links a:hover {
  color:#5bacdf;
}
#footer .footer-blocks .copyright {
  width: 100%;
  margin-top: 1rem;
  padding: 1rem;
  color: #5bacdf;
  text-align: center;
}
@media (max-width: 768px) {
  #mentors .mentors-wrapper .mentors-container .mentor-box {
    width: 90%;
    flex: 0 0 90%;
    margin-left: auto;
    margin-right: auto;
  }
}
#mentors .mentors-wrapper .mentors-container .box {
  text-align: center;
  border-radius: .25rem;
  margin-bottom: 2rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  box-shadow: 1px 1px 3px rgba(255, 164, 0, 0.25), -1px -1px 3px rgba(255, 164, 0, 0.25);
}
#mentors .mentors-wrapper .mentors-container .mentor-img {
  width: 200px;
  padding: 1rem;
  margin: auto;
  border-radius: 50%;
}
.img {
  width: 100%;
  vertical-align: middle;
}

.img-rounded {
  border-radius: 50%;
}

.dropdown, .dropdown.second{
  position: initial;
  top: initial;
  left: initial;
  transform: initial;
  opacity: 1;
  pointer-events: auto;
  width: 100%;
  padding: 0;
  background-color: #3183ac;
  display: none;
}
.dropdown{
    position: absolute;
    top: 100%;
    left: 0;
    width: 10rem;
    transform: translateY(10px);
    opacity: 0;
    pointer-events: none;
    transition: .5s;
}
.deco
{
  margin-left: 20px;
  display: inline-block;
  padding: 0.9rem 1.9rem;
  color: #fff !important;
  background-color: rgb(245, 92, 92);
  border-radius: 16px;
  text-transform: capitalize;
  transition: 0.3s;
}

.deco:hover
{
  color: var(--hoverColor);
  transform: scale(1.05);
  cursor: pointer;

}

.user
{
  padding-left: 10px;
}


</style>