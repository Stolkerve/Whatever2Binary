import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/HomeView.vue")
  },
  {
    path: "/stringbinary",
    name: "StringBinary",
    component: () => import("@/views/StringBinaryView.vue")
  },
  {
    path: "/rgbahex",
    name: "RGBAHex",
    component: () => import("@/views/RGBAHexView.vue")
  },
  {
    path: "/numberbinaryhex",
    name: "NumberBinaryHex",
    component: () => import("@/views/NumberBinaryHexView.vue")
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
