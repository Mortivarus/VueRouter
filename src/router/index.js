import {createRouter, createWebHashHistory } from 'vue-router'
import Overview from '../pages/groceries/Overview.vue'
import Create from '../pages/groceries/Create.vue'
import Edit from '../pages/groceries/Edit.vue'

const routes = [
    {
        path:'/',
        name: 'Overview',
        component: Overview
    },
    {
        path: '/create',
        name: 'Create',
        component: Create
    },
    {
        path:'/edit',
        name: 'Edit',
        component: Edit
    }

]

const router = createRouter({
    history: createWebHashHistory(),
    routes})

export default router