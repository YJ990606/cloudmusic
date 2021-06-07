import Vue from 'vue'
import VueRouter from "vue-router";


Vue.use(VueRouter)

const Find = () => import('../views/find/Find')
const Ksong = () => import('../views/ksong/Ksong')
const Mine = () => import('../views/mine/Mine')
const Sprinkler = () => import('../views/sprinkler/Sprinkler')
const Yuncun = () => import('../views/yuncun/Yuncun')

const routes = [
	{
		path: '',
		redirect: '/find'
	},{
		path: '/find',
		component: Find
	},{
		path: '/ksong',
		component: Ksong
	},{
		path: '/mine',
		component: Mine
	},{
		path: '/sprinkler',
		component: Sprinkler
	},{
		path: '/yuncun',
		component: Yuncun
	}
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
