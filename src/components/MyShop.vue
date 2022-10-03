<template>
<div class="main">
  <h1>Boutique</h1>
  <ul class="cards">
    <li class="cards_item">
      <div class="card">
        <div class="card_image"><img class="imm" src="@/views/img/rachit-tank-2cFZ_FB08UM-unsplash.jpg"></div>
        <div class="card_content">
          <h2 class="card_title">Montre </h2>
          <p class="card_text">Un modele de montre de la marque Dior sortie en 2022.</p>
          <p class="card_text card_text_prix">Prix : <span class="prix">10 000 FCFA</span> <span><font-awesome-icon @click="ajouter(montre)" icon="fa-solid fa-cart-shopping" :classMontre="add"/></span> </p>
          <button class="btn card_btn" @click="open(10000)">Acheter</button>
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card">
        <div class="card_image"><img class="imm" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"></div>
        <div class="card_content">
          <h2 class="card_title">Air force NIKE</h2>
          <p class="card_text">Nike vous propose sa nouvelle paire adapté aux sports extrême.</p>
          <p class="card_text card_text_prix">Prix : <span class="prix">22 000 FCFA</span> <span><font-awesome-icon icon="fa-solid fa-cart-shopping" class="add"/></span></p>
          <button class="btn card_btn" @click="open(22000)">Acheter</button>
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card">
        <div class="card_image"><img class="imm" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"></div>
        <div class="card_content">
          <h2 class="card_title">Casque Stéréo </h2>
         <p class="card_text">Envie d'écouter de la musique sous un nouveau jour ? Essayer le casque Bing </p>
          <p class="card_text card_text_prix">Prix : <span class="prix">8 000 FCFA</span> <span><font-awesome-icon icon="fa-solid fa-cart-shopping" class="add"/></span></p>
          <button class="btn card_btn" @click="open(8000)">Acheter</button>
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card">
        <div class="card_image"><img class="imm" src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"></div>
        <div class="card_content">
          <h2 class="card_title">Appareil photo</h2>
          <p class="card_text">Redécouvrez votre entourage et votre environnement sous de nouvelles couleur.</p>
          <p class="card_text card_text_prix">Prix : <span class="prix">25 000 FCFA</span> <span><font-awesome-icon icon="fa-solid fa-cart-shopping" class="add"/></span></p>
          <button class="btn card_btn" @click="open(25000)">Acheter</button>
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card">
        <div class="card_image"><img class="imm" src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"></div>
        <div class="card_content">
          <h2 class="card_title">Pots de chambre</h2>
          <p class="card_text">Des pots de décoration made in taiwan, et certifié bio-dégradable pour les amoureux de nature.</p>
          <p class="card_text card_text_prix">Prix : <span class="prix">6 500 FCFA</span> <span><font-awesome-icon icon="fa-solid fa-cart-shopping" class="add"/></span></p>
          <button class="btn card_btn" @click="open(6500)">Acheter</button>
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card">
        <div class="card_image"><img class="imm" src="https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTd8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"></div>
        <div class="card_content">
          <h2 class="card_title">Ordinateur HP</h2>
          <p class="card_text">Ordinateur Hp 2gb Ram, HDD 250gb , processeur amd RADEON, carte graphique intel HD 5000</p>
          <p class="card_text card_text_prix">Prix : <span class="prix">100 000 FCFA</span> <span><font-awesome-icon icon="fa-solid fa-cart-shopping" class="add"/></span></p>
          <button class="btn card_btn" @click="open(100000)">Acheter</button>
        </div>
      </div>
    </li>
  </ul>
</div>

  
</template>

<script>
import {
  openKkiapayWidget,
  addKkiapayListener,
  removeKkiapayListener,
} from "kkiapay";

export default {
    name: "MyShop",

    data() {
      return {
        classMontre:"add",
        Product:[],
        classCart:"",
        
      }
    },

    

    methods: {

      
      
      ajouter(name)
      {
        //ajouter
        if (this.classMontre == "add") {

            this.Product.push("montre");
            this.classMontre == "added";
        }
        else
        {
          this.classMontre == "add";
          // * remove montre
        }
       
          
      },
       
    open(prix) {
      openKkiapayWidget({
        amount: prix,
        api_key: "757abf9023a811ed995cd39f617b9df2",
        sandbox: true,
        phone: "97000000",
      });
    },
  },
}
</script>

<style scoped>
/* Font */
@import url('https://fonts.googleapis.com/css?family=Quicksand:400,700');

/* Design */
*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  background-color: #ecf9ff;
}

body {
  color: #272727;
  font-family: 'Quicksand', serif;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0;
  padding: 1rem;
}

.main{
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
    font-size: 24px;
    font-weight: 400;
    text-align: center;
}

img {
  height: auto;
  max-width: 100%;
  vertical-align: middle;
}

.btn {
  color: #ffffff;
  padding: 0.8rem;
  font-size: 14px;
  text-transform: uppercase;
  border-radius: 4px;
  font-weight: 400;
  display: block;
  width: 100%;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background-color: dodgerblue;
  
}

.btn:hover {
  
  background-color: rgba(255, 255, 255, 0.12);
}

.cards {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
}

.cards_item {
  display: flex;
  padding: 1rem;
}

@media (min-width: 40rem) {
  .cards_item {
    width: 50%;
  }
}

@media (min-width: 56rem) {
  .cards_item {
    width: 33.3333%;
  }
}

.card {
  background-color: white;
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.card_content {
  padding: 1rem;
  background: linear-gradient(to bottom left, #EF8D9C 40%, #FFC39E 100%);
}

.card_title {
  color: #ffffff;
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: capitalize;
  margin: 0px;
}

.card_text {
  color: #ffffff;
  margin-top: 0.5rem;
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 1.25rem;    
  font-weight: 400;
 
}
.made_by{
  font-weight: 400;
  font-size: 13px;
  margin-top: 35px;
  text-align: center;
}

.imm
{
  width: 100%;
  height: 264px;
}

.prix
{
  color: black;
}

.card_text_prix
{
  font-size: 25px;
}

.add
{
  color: rgb(255, 255, 255);
}

.add:hover
{
  cursor: pointer;
}

.added
{
  color: black;
}
</style>