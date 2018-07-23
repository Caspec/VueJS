/* import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue'

Vue.component('app-servers', Home);

new Vue({
  el: '#app',
  render: h => h(App)
}) */

/* import Vue from 'vue'
import App from './App.vue'
import Header from './Header.vue'
import Footer from './Footer.vue'

Vue.component('Headers', Header);
Vue.component('Footers', Footer);

new Vue({
  el: '#app',
  render: h => h(App)
}) */

import Vue from 'vue'
import App from './App.vue'
import Top from './components/Top.vue'
import Bottom from './components/Bottom.vue'

Vue.component('Top', Top);
Vue.component('Bottom', Bottom);

new Vue({
  el: '#app',
  render: h => h(App)
}) 