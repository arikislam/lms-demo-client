import {createApp} from 'vue'
import App from './App.vue'
import store from '@/app/store'
import router from '@/router'

import SubmitButton from "@/components/common/buttons/SubmitButton"
import ErrorMessage from "@/components/common/ErrorMessage"
import AdminLayout from '@/views/layouts/AdminLayout'
import HeaderSection from '@/components/common/SectionHeader'

import "vue-toastification/dist/index.css"
import Toast from "vue-toastification";

createApp(App).mount('#app')

const app = createApp(App)

app.use(store)
app.use(router)
app.use(Toast);
// app.use(VueSweetalert2)
app.component('error-message', ErrorMessage)
app.component('submit-button', SubmitButton)
app.component('admin-layout', AdminLayout)
app.component('section-header', HeaderSection)
app.mount('#app')

export default app
