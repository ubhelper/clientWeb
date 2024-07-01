import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

let routes = [
	// {
	// 	path: '*',
	// 	component: () => import('../views/404.vue'),
	// },
	{
		path: '/',
		name: 'Home',
		meta: {
			title: 'Personal assistant',
			auth: false
		},
		component: () => import('../views/index.vue')
	},
	{
		path: '/register',
		name: 'Register',
		meta: {
			title: 'Personal assistant',
			auth: false
		},
		component: () => import('../views/register.vue')
	},
]

const auth = {
	loggedIn() {
		const token = localStorage.getItem("token");
		const user = localStorage.getItem("user");
		
		const isUser = user ? (user === 'undefined' ? false : true ) : false;

		if (token) {

			if (!isUser) {
				return false;
			}
			
			return true;
		} else {
			return false;
		}
		// return store.getters.isLogged
	},
	logout() {
		store.commit('setLogout')
	}
}

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
	scrollBehavior (to, from, savedPosition) {
		if ( to.hash ) {
			return {
				selector: to.hash,
				behavior: 'smooth',
			}
		}
		return {
			x: 0,
			y: 0,
			behavior: 'smooth',
		}
	}
})

router.beforeEach((to, from, next) => {
	document.title = to.meta.title;
	let authrequired = false
	if(to && to.meta && to.meta.auth)
		authrequired = true

	//console.log('authrequired', authrequired, to.name)
	if(authrequired) {
		if(auth.loggedIn()) {
			if(to.name === 'Sign-In') {
				router.push('/test-speed');
				return false
			} else { 
				next()
			}	
		} else {
			if(to.name !== 'Sign-In'){
				router.push('/sign-in');
				return false
			}
			next()
		}
	} else {
		next();
	}
})

export default router
