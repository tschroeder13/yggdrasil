import PouchDB from 'pouchdb'
const db = new PouchDB('todos')
PouchDB.sync('todos', 'http://127.0.0.1:5984/todos/', { live: true })

export default {
  pouch: db,
  todos: [],
  new_todo: null
}
