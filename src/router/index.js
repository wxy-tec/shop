// 配置路由
import Vue from 'vue'
import VueRouter from 'vue-router'


const Home = () => import('../views/home/Home.vue')
const Category = () => import('../views/category/Category.vue')
const Shopcart = () => import('../views/shopcart/Shopcart.vue')
const Profile = () => import('../views/profile/Profile.vue')
const Details = () => import('../views/details/Details.vue')
const Clothes=()=>import('../views/category/Clothes.vue')
const Recommend=()=>import('../views/home/childComps/Recommend.vue')
const ListUser=()=>import('../views/profile/listUser.vue') 
const CreateUser=()=>import('../views/profile/createUser.vue') 
const EditUser=()=>import('../views/profile/editUser.vue')
const Login=()=>import('../components/login.vue')
Vue.use(VueRouter)

const routes = [
  // 框架
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/clothes',
    component: Clothes
  },
  {
    path: '/shopcart',
    name: 'goShopItem',
    component: Shopcart
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: "/details/:goodId",
    name: "Details",
    component: Details
  },
  {
    path:"/recommend",
    name:"Recommend",
    component: Recommend
  },
  {
    path:'/',
    name:'home',
    redirect:'/articles/index'
  },
  {
    path: '/articles/index',
    name: 'list-article',
    component: ListUser
  },
  {
    path: '/articles/create',
    name: 'create-article',
    component: CreateUser
  },
  {
    path: '/articles/:id/edit',
    name: 'edit-article',
    component: EditUser
  },
  {
    path: '/login',
    component: Login
    
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router