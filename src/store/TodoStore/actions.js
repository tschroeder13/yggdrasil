import PouchDB from 'pouchdb'
const db = new PouchDB('todos')
PouchDB.sync('todos', 'http://127.0.0.1:5984/todos/', { live: true })

export function addTodo (ctx) {
  let todo = {
    _id: new Date().toISOString(),
    text: ctx.state.newTodo,
    done: false
  }
  db.put(todo)
    .then(res => {
      todo._rev = res.rev
      ctx.commit('addTodo', todo)
      ctx.commit('cleanNewTodo')
    })
    .catch(() => {
      console.log('error')
    })
}

export function editTodo (ctx, todo) {
  db.put(todo)
    .then(res => {
      todo._rev = res.rev
      ctx.commit('editTodo', todo)
    })
    .catch(() => {
      console.log('oh gosh')
    })
}

export function removeTodo (ctx, todo) {
  db.remove(todo)
    .then(res => {
      ctx.commit('removeTodo', todo)
    })
    .catch(() => {
      console.log('noooo!')
    })
}

export function removeDones (ctx) {
  let dones = ctx.getters.dones
  dones.forEach(todo => ctx.dispatch('removeTodo', todo))
}

export function syncAll (ctx) {
  db.allDocs({ include_docs: true })
    .then(res => {
      ctx.commit('setTodos', res.rows.map(row => row.doc))
    })
    .catch(() => {
      console.log('mamma')
    })
}
