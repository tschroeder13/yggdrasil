import { uid } from 'quasar'
import store from '.'
export function addTodo (ctx) {
  let todo = {
    _id: uid(), // new Date().toISOString(),
    text: ctx.state.newTodo,
    done: false
  }
  this.$store.state.db.put(todo)
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
  this.$store.state.db.put(todo)
    .then(res => {
      todo._rev = res.rev
      ctx.commit('editTodo', todo)
    })
    .catch(() => {
      console.log('oh gosh')
    })
}

export function removeTodo (ctx, todo) {
  this.$store.state.remove(todo)
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
  store.db.allDocs({ include_docs: true })
    .then(res => {
      ctx.commit('setTodos', res.rows.map(row => row.doc))
    })
    .catch(() => {
      console.log('mamma')
    })
}
