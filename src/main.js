import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope, faUserXmark, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF,faTwitter,faGoogle,faLinkedinIn,faFacebook,faYoutube, faInstagram} from '@fortawesome/free-brands-svg-icons'


library.add(faUserSecret,faUser,faLock,faFacebookF,faTwitter,faGoogle,faLinkedinIn,faEnvelope,faFacebook,faYoutube,faInstagram,faUserXmark,faCartShopping)

createApp(App).use(store).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
