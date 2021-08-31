import * as mdijs from '@mdi/js'
import {createApp} from 'vue'
import App from './App.vue'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import mdiVue from 'mdi-vue/v3'

createApp(App).use(mdiVue, {
	icons: mdijs
}).mount('#app')
