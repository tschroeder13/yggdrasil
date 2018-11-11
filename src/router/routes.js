
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', name: 'Home', component: () => import('pages/Index.vue') },
      { path: '/about', name: 'About', component: () => import('pages/about.vue') },
      {
        path: '/todo',
        component: () => import('layouts/Todo.vue'),
        children: [
          { path: '', name: 'Todo List', component: () => import('pages/TodoList.vue') },
          { path: '/todo/detail', name: 'Todo Detail', component: () => import('pages/TodoDetail.vue') }
        ]
      }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
