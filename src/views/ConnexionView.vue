<template>
<iframe name="dummyframe" id="dummyframe" style="display: none"></iframe>
  <div class="connexion">
    
  <div :class="container">
      <div class="forms-container">
        <div class="signin-signup">
          <form target="dummyframe" class="sign-in-form">
            <h2 class="title">Connexion</h2>
            <p class="erreur" v-if="this.ExisteLogin == 'true'">Le mot de passe ou le nom d'utilisateur est incorrect</p>
            <div class="input-field">
              <font-awesome-icon class="icon" icon="fa-solid fa-user" />
              <input type="text" placeholder="Nom d'utilisateur" v-model="InputLogin.Username"/>
            </div>
            <div class="input-field">
              <font-awesome-icon icon="fa-solid fa-lock" class="icon"/>
              <input type="password" name="password" id="" placeholder="Mot de passe" autocomplete="on" v-model="InputLogin.Password"/>
            </div>
            <input type="submit" value="se connecter" class="btn solid" @click="ConnexionLogin"/>
            <p class="social-text">Ou se connecter avec </p>
            <div class="social-media">
              <a href="#" class="social-icon">
                <font-awesome-icon icon="fa-brands fa-facebook-f" />
              </a>
              <a href="#" class="social-icon">
                <font-awesome-icon icon="fa-brands fa-twitter" />
              </a>
              <a href="#" class="social-icon">
                <font-awesome-icon icon="fa-brands fa-google" />
              </a>
              <a href="#" class="social-icon">
                <font-awesome-icon icon="fa-brands fa-linkedin-in" />
              </a>
            </div>
          </form>
          <form target="dummyframe" class="sign-up-form">
            <h2 class="title">Inscription</h2>
            <p class="erreur" v-if="Existe == 'true'">Le compte existe déja</p>
            <div class="input-field">
              <font-awesome-icon class="icon" icon="fa-solid fa-user" />
              <input type="text" placeholder="Nom d'utilisateur" v-model="Input.Username" required/>
            </div>
            <div class="input-field">
              <font-awesome-icon class="icon" icon="fa-solid fa-envelope" />
              <input type="email" placeholder="Email" v-model="Input.Email" required/>
            </div>
            <div class="input-field">
              <font-awesome-icon icon="fa-solid fa-lock" class="icon"/>
              <input type="password" name="password" id="password-form" placeholder="Mot de passe" v-model="Input.Password" required autocomplete="on"/>
            </div>
            <span @click="login"><input type="submit" class="btn" value="S'inscrire" /></span>
            <p class="social-text">Ou s'inscire avec </p>
            <div class="social-media">
              <a href="#" class="social-icon">
                <font-awesome-icon icon="fa-brands fa-facebook-f" />
              </a>
              <a href="#" class="social-icon">
                <font-awesome-icon icon="fa-brands fa-twitter" />
              </a>
              <a href="#" class="social-icon">
                <font-awesome-icon icon="fa-brands fa-google" />
              </a>
              <a href="#" class="social-icon">
                <font-awesome-icon icon="fa-brands fa-linkedin-in" />
              </a>
            </div>
          </form>
        </div>
      </div>

      <div class="panels-container">
        <div class="panel left-panel">
          <div class="content">
            <h3>Vous êtes nouveau ?</h3>
            <p>
              Crée un nouveau compte en vous  
              inscrivant ici
            </p>
            <button class="btn transparent" id="sign-up-btn" @click="modeUp">
              Inscription
            </button>
            <router-link to="/" class="space">
            <button class="btn transparent " id="sign-up-btn">
              revenir au site
            </button>
            </router-link>
            
          </div>
          <img src="./img/log.svg" class="image" alt="" />
        </div>
        <div class="panel right-panel">
          <div class="content">
            <h3>Vous avez déja un compte ?</h3>
            <p>
              Connectez-vous ici
              
            </p>
            <button class="btn transparent" id="sign-in-btn" @click="modeOut">
              Connexion
            </button>
            <router-link to="/" class="space">
              <button class="btn transparent " id="sign-in-btn">
              revenir au site
            </button>
            </router-link>
            
          </div>
          <img src="./img/register.svg" class="image" alt="" />
        </div>
      </div>
    </div>
      
  
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      //create
            container: "container",
            Existe:"",
            trouve:'false',
            Comptes: [],
            Input:
            {
                Username: "",
                Email: "",
                Password:""
            },

      //login
            Deja:"",
            Erreur: "" ,
            ExisteLogin:"",
            trouve:'false',
            index: 0,
            Comptes: [],
            InputLogin:
            {
                Username: "",
                Password:""
            }
            
    }
  },

  async created() {
        try
        {
            const response = await axios.get('http://localhost:3000/Comptes');
            this.Comptes = response.data;
            
        } catch (error)
        {
            console.log(error);
        }
    },


  methods:{
    modeUp()
    {
      this.container = "container sign-up-mode";
    },

    modeOut()
    {
      this.container = "container";
    },

    async addItem() 
    {
        
        
      const save = await axios.post(` http://localhost:3000/Comptes`, {
                    nom: this.Input.Username,
                    Email : this.Input.Email,
                    Password : this.Input.Password,

                    });
                                        
                    this.Comptes = [...this.Comptes, save.data];
                    sessionStorage.setItem("connecte", "true");
                    this.$router.replace({name: "boutique"});
                    
                    
    },

    login()
        {
          
            this.trouve = 'false';
            this.Comptes.forEach(compte => {
                if (compte.nom == this.Input.Username || this.Input.Username == "" ) {
                    this.Existe = 'true';
                          setTimeout(() => {
                              this.Existe = 'false';
                          }, 2000); 
                    this.trouve ='true';
                }
 
                
            });
        if (this.trouve == 'false') 
                {
                    this.addItem();
          
                }                 
        },

        ConnexionLogin()
        {
           
            this.Comptes.forEach(compte => {
                if (compte.nom == this.InputLogin.Username && compte.Password == this.InputLogin.Password) {

                    sessionStorage.setItem("connecte", "true");
                    this.$router.replace({name:"boutique"});
                    this.Deja = "trouve";
                    sessionStorage.setItem("name", compte.nom);
                }
                else if (compte.nom != this.InputLogin.Username && compte.Password != this.InputLogin.Password)
                {
                    this.Erreur = 'true';
                }
 
                
            });
          console.log(this.Erreur);
          console.log(this.Deja);
            if (this.Erreur == 'true' && this.Deja == "")
            {
             
                this.ExisteLogin = 'true';
                          setTimeout(() => {
                              this.ExisteLogin = 'false';
                          }, 3000); 
            }
   
        this.Deja ="";
        
        }
  },

  
}


</script>

<style scoped>

.space
{
  margin-right: 10px;
  margin-left: 10px;
}

.erreur
{
  font-size: 20px;
  animation: shake 0.5s;
  color: red;
}

.connexion
{
  margin-right: 0px;
  padding-right: 0px;
}
.icon
{
  margin-top: 20px;
  margin-left: 20px;
}


@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body,
input {
  font-family: "Poppins", sans-serif;
}

.container {
  position: relative;
  width: 100%;
  background-color:  #f1f8fc;
  min-height: 100vh;
  overflow: hidden;
}

.forms-container {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.signin-signup {
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  left: 75%;
  width: 50%;
  transition: 1s 0.7s ease-in-out;
  display: grid;
  grid-template-columns: 1fr;
  z-index: 5;
}

form {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0rem 5rem;
  transition: all 0.2s 0.7s;
  overflow: hidden;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
}

form.sign-up-form {
  opacity: 0;
  z-index: 1;
}

form.sign-in-form {
  z-index: 2;
}

.title {
  font-size: 2.2rem;
  color: #444;
  margin-bottom: 10px;
}

.input-field {
  max-width: 380px;
  width: 100%;
  background-color: #f0f0f0;
  margin: 10px 0;
  height: 55px;
  border-radius: 55px;
  display: grid;
  grid-template-columns: 15% 85%;
  padding: 0 0.4rem;
  position: relative;
}

.input-field i {
  text-align: center;
  line-height: 55px;
  color: #acacac;
  transition: 0.5s;
  font-size: 1.1rem;
}

.input-field input {
  background: none;
  outline: none;
  border: none;
  line-height: 1;
  font-weight: 600;
  font-size: 1.1rem;
  color: #333;
}

.input-field input::placeholder {
  color: #aaa;
  font-weight: 500;
}

.social-text {
  padding: 0.7rem 0;
  font-size: 1rem;
}

.social-media {
  display: flex;
  justify-content: center;
}

.social-icon {
  height: 46px;
  width: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0.45rem;
  color: #333;
  border-radius: 50%;
  border: 1px solid #333;
  text-decoration: none;
  font-size: 1.1rem;
  transition: 0.3s;
}

.social-icon:hover {
  color: #4481eb;
  border-color: #4481eb;
}

.btn {
  width: 150px;
  background-color: #5995fd;
  border: none;
  outline: none;
  height: 49px;
  border-radius: 49px;
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  margin: 10px 0;
  cursor: pointer;
  transition: 0.5s;
}

.btn:hover {
  background-color: #4d84e2;
}
.panels-container {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.container:before {
  content: "";
  position: absolute;
  height: 2000px;
  width: 2000px;
  top: -10%;
  right: 48%;
  transform: translateY(-50%);
  background-image: linear-gradient(-45deg, #4481eb 0%, #04befe 100%);
  transition: 1.8s ease-in-out;
  border-radius: 50%;
  z-index: 6;
}

.image {
  width: 100%;
  transition: transform 1.1s ease-in-out;
  transition-delay: 0.4s;
}

.panel {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
  text-align: center;
  z-index: 6;
}

.left-panel {
  pointer-events: all;
  padding: 3rem 17% 2rem 12%;
}

.right-panel {
  pointer-events: none;
  padding: 3rem 12% 2rem 17%;
}

.panel .content {
  color: #fff;
  transition: transform 0.9s ease-in-out;
  transition-delay: 0.6s;
}

.panel h3 {
  font-weight: 600;
  line-height: 1;
  font-size: 1.5rem;
}

.panel p {
  font-size: 0.95rem;
  padding: 0.7rem 0;
}

.btn.transparent {
  margin: 0;
  background: none;
  border: 2px solid #fff;
  width: 130px;
  height: 41px;
  font-weight: 600;
  font-size: 0.8rem;
}

.right-panel .image,
.right-panel .content {
  transform: translateX(800px);
}

/* ANIMATION */

.container.sign-up-mode:before {
  transform: translate(100%, -50%);
  right: 52%;
}

.container.sign-up-mode .left-panel .image,
.container.sign-up-mode .left-panel .content {
  transform: translateX(-800px);
}

.container.sign-up-mode .signin-signup {
  left: 25%;
}

.container.sign-up-mode form.sign-up-form {
  opacity: 1;
  z-index: 2;
}

.container.sign-up-mode form.sign-in-form {
  opacity: 0;
  z-index: 1;
}

.container.sign-up-mode .right-panel .image,
.container.sign-up-mode .right-panel .content {
  transform: translateX(0%);
}

.container.sign-up-mode .left-panel {
  pointer-events: none;
}

.container.sign-up-mode .right-panel {
  pointer-events: all;
}

@media (max-width: 870px) {
  .container {
    min-height: 800px;
    height: 100vh;
  }
  .signin-signup {
    width: 100%;
    top: 95%;
    transform: translate(-50%, -100%);
    transition: 1s 0.8s ease-in-out;
  }

  .signin-signup,
  .container.sign-up-mode .signin-signup {
    left: 50%;
  }

  .panels-container {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 2fr 1fr;
  }

  .panel {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 2.5rem 8%;
    grid-column: 1 / 2;
  }

  .right-panel {
    grid-row: 3 / 4;
  }

  .left-panel {
    grid-row: 1 / 2;
  }

  .image {
    width: 200px;
    transition: transform 0.9s ease-in-out;
    transition-delay: 0.6s;
  }

  .panel .content {
    padding-right: 15%;
    transition: transform 0.9s ease-in-out;
    transition-delay: 0.8s;
  }

  .panel h3 {
    font-size: 1.2rem;
  }

  .panel p {
    font-size: 0.7rem;
    padding: 0.5rem 0;
  }

  .btn.transparent {
    width: 110px;
    height: 35px;
    font-size: 0.7rem;
  }

  .container:before {
    width: 1500px;
    height: 1500px;
    transform: translateX(-50%);
    left: 30%;
    bottom: 68%;
    right: initial;
    top: initial;
    transition: 2s ease-in-out;
  }

  .container.sign-up-mode:before {
    transform: translate(-50%, 100%);
    bottom: 32%;
    right: initial;
  }

  .container.sign-up-mode .left-panel .image,
  .container.sign-up-mode .left-panel .content {
    transform: translateY(-300px);
  }

  .container.sign-up-mode .right-panel .image,
  .container.sign-up-mode .right-panel .content {
    transform: translateY(0px);
  }

  .right-panel .image,
  .right-panel .content {
    transform: translateY(300px);
  }

  .container.sign-up-mode .signin-signup {
    top: 5%;
    transform: translate(-50%, 0);
  }
}

@media (max-width: 570px) {
  form {
    padding: 0 1.5rem;
  }

  .image {
    display: none;
  }
  .panel .content {
    padding: 0.5rem 1rem;
  }
  .container {
    padding: 1.5rem;
  }

  .container:before {
    bottom: 72%;
    left: 50%;
  }

  .container.sign-up-mode:before {
    bottom: 28%;
    left: 50%;
  }
}

@keyframes shake {
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
}

</style>