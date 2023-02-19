import { createRouter, createWebHistory } from "vue-router";
import CatCom from "../pages/CatCom"
import DogCom from "../pages/DogCom"
import HomeCom from "../pages/HomeCom"
const routes = [
  {
    path: "/",
    name: 'HomeCom',
    component:HomeCom
  },
  {
    path: "/cat",
    name:'CatCom',
    component:CatCom,
  },
  {
    path: "/dog",
    name:'DogCom',
    component:DogCom,
  }
]
const router = createRouter({
  history: createWebHistory(
    window.__POWERED_BY_QIANKUN__ ? "/micro-app3" : "/"
  ),
  routes,
})

export default router