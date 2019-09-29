import Vue from 'vue';
import VueRouter from 'vue-router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import CommonComponents from "./components/index";
import App from './App.vue'
import routes from './routes';


CommonComponents.forEach(component => Vue.component(component.name, component));

Vue.config.productionTip = false;


Vue.use(VueRouter);
Vue.use(ElementUI);

const router = new VueRouter({routes});

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
});
