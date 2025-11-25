import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Services from './views/Services.vue'
import Portfolio from './views/Portfolio.vue'
import Testimonials from './views/Testimonials.vue'
import Blog from './views/Blog.vue'
import Contact from './views/Contact.vue'
import FortisCaseStudy from './views/FortisCaseStudy.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/services', component: Services },
    { path: '/portfolio', component: Portfolio },
    { path: '/testimonials', component: Testimonials },
    { path: '/blog', component: Blog },
    { path: '/contact', component: Contact },
    { path: '/case-studies/fortis-physiotherapy', component: FortisCaseStudy }
  ]
})

createApp(App).use(router).mount('#app')
