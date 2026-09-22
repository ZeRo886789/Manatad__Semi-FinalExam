import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Meals from '../views/Meals.vue'
import About from '../views/About.vue'

const routes = [
	{
		path: '/',
		name: 'home',
		component: Home
	},
	{
		path: '/meals',
		name: 'meals',
		component: Meals
	},
	{
		path: '/about',
		name: 'about',
		component: About
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router
