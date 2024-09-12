import { createApp } from 'vue'
import router from "./router";
import store from './store'
import App from './App.vue'
import components from './components/UI'
import phoneDirective from './directives/phoneDirective'

const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
})

app.directive('phone', phoneDirective)

app
    .use(router)
    .use(store)
    .mount('#app')
