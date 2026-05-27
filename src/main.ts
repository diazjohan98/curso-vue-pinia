import './assets/main.css'
import { VueQueryPlugin } from '@tanstack/vue-query'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

// app.use(VueQueryPlugin)
VueQueryPlugin.install(app, {
  queryClientConfig: {
    defaultOptions: {
      queries: {
        gcTime: 1000 * 120, // 2 minutos
        refetchOnReconnect: 'always',
      },
    },
  },
})

app.use(router)

app.mount('#app')
