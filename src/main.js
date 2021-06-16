import Vue from 'vue'
import App from './App.vue'

import {library} from '@fortawesome/fontawesome-svg-core'
import {fas, faThumbsUp} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas, faThumbsUp);
Vue.component('font-awsome-icon', FontAwesomeIcon);


Vue.config.productionTip = false;


new Vue({
  render: h => h(App),
}).$mount('#app')