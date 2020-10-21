import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _27191d64 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _0dd5f16d = () => interopDefault(import('../pages/attractions.vue' /* webpackChunkName: "pages/attractions" */))
const _c04dabbe = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _0c2b4c13 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _27191d64,
    name: "about"
  }, {
    path: "/attractions",
    component: _0dd5f16d,
    name: "attractions"
  }, {
    path: "/contact",
    component: _c04dabbe,
    name: "contact"
  }, {
    path: "/",
    component: _0c2b4c13,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
