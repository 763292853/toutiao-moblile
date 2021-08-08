import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/')
  },
  {
    path: '/',
    component: () => import('@/views/layout/'),
    children: [
      {
        path: '',
        name: 'hom',
        component: () => import('@/views/hom/')
      },
      {
        path: '/qa',
        name: 'qa',
        component: () => import('@/views/qa/')
      }, {
        path: '/video',
        name: 'my',
        component: () => import('@/views/video/')
      }, {
        path: '/my',
        name: 'my',
        component: () => import('@/views/my/')
      }
      // {
      //   path: '*',
      //   name: 'errors',
      //   component: () => import('@/views/errors/')
      // }
    ]
  }

]

const router = new VueRouter({
  routes
})

export default router
