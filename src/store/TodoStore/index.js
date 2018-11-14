import state from './state'
import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'
import PouchDB from 'pouchdb'
/* exported db */
// eslint-disable-next-line no-unused-vars
const db = new PouchDB('todos')
PouchDB.sync('todos', 'http://127.0.0.1:5984/todos/', { live: true })
export default function () {
  return {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
  }
}
