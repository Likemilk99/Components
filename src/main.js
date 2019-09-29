import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import CommonComponents from "./components/index";

import App from './App.vue'

CommonComponents.forEach(component => Vue.component(component.name, component));

Vue.config.productionTip = false;

Vue.use(ElementUI);

new Vue({
  render: h => h(App)
}).$mount('#app');
