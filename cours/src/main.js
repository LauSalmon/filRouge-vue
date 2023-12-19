import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Activity from './components/activity.vue'
import Accomodation from './components/accomodation.vue'
import Travel from './components/travel.vue'
import Restaurant from './components/restaurant.vue'
import NewActivity from './components/newActivity.vue'

const app = createApp(App);
app.component('add-accomodation', Accomodation);
app.component('add-activity', Activity);
app.component('add-restaurant', Restaurant);
app.component('add-travel', Travel);
app.component('new-activity', NewActivity);

app.mount('#app')
