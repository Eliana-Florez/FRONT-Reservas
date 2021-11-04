import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../views/Inicio.vue'
import ReservasView from '../views/ReservasView.vue'
import AdminView from '../views/AdminView.vue'
import EditView from '../views/EditReservaView.vue'
import HabitacionesView from '../views/HabitacionesView.vue'
import ContactoView from '../views/ContactoView.vue'
import AdminMensaje from '../views/AdminMensajeView.vue'


Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'home',
    component: Inicio
  },
  {
    path:'/reservasview',
    name:'ReservasView',
    component:ReservasView
  },
  {
    path:'/adminview',
    name:'AdminView',
    component:AdminView
  }
  ,
  {
    path:'/editreservaview/:id',
    name:'EditReservaView',
    component:EditView
  },
  {
    path:'/habitacionesview',
    name:'HabitacionesView',
    component:HabitacionesView
  },
  {
    path:'/contactoview',
    name:'ContactoView',
    component:ContactoView
  }
  ,
  {
    path:'/adminMensaje',
    name:'adminMensaje',
    component:AdminMensaje
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
