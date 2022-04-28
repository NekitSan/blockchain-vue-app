import { createApp } from 'vue';
import App from './App.vue';
import components from "@/components/UI";


const app = createApp(App);
app.config.productionTip = false;

Object.keys(components).forEach(component => {
    app.component(components[component].name, components[component]);
});

app.mount('#app');
