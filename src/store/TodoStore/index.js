import state from './state'
import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'
import PouchDB from 'pouchdb'

export const db = new PouchDB('todos')
PouchDB.sync('todos', 'http://127.0.0.1:5984/todos/', { live: true })
db.info().then(function (info) {
  console.log(info)
})
db.allDocs({include_docs: true}).then(function (result) {
  return Promise.all(result.rows.map(function (row) {
    console.log('DB Row: ' + JSON.stringify(row.doc))
  }))
})

export default function () {
  return {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
  }
}
