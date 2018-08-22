import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// route-level code splitting
// const createListView = id => () => import('../views/CreateListView').then(m => m.default(id))
const meidongaudio = () => import('../views/meidongaudio/index.vue')

export function createRouter () {
  return new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      {path: '/index',name: 'index1',component: meidongaudio},
      { path: '/', redirect: '/index' }
    ]
  })
}
