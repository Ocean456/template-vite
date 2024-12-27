import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import router  from "@/router";
import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.mount('#app')
