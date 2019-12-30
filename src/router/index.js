import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/platform',
    name: 'platform',
    component: () => import('../views/Platform.vue')
  },
  {
    path: '/video',
    name: 'video',
    component: () => import('../views/Video.vue')
  },
  {
    path: '/equipment',
    name: 'equipment',
    component: () => import('../views/Equipment.vue')
  },
  {
    path: '/equipment-detail',
    name: 'equipment-detail',
    component: () => import('../views/EquipmentDetail.vue')
  },
  {
    path: '/environmental-monitoring',
    name: 'environmental-monitoring',
    component: () => import('../views/EnvironMon.vue')
  },
  {
    path: '/power-monitoring',
    name: 'power-monitoring',
    component: () => import('../views/PowerMon.vue')
  },
  {
    path: '/notice',
    name: 'notice',
    component: () => import('../views/Notice.vue')
  },
  {
    path: '/error',
    name: 'error',
    component: () => import('../views/Error.vue')
  },
  {
    path: '/help',
    name: 'help',
    component: () => import('../views/Help.vue')
  },
  {
    path: '/help-detail',
    name: 'help-detail',
    component: () => import('../views/HelpDetail.vue')
  },
  {
    path: '/my',
    name: 'my',
    component: () => import('../views/My.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
