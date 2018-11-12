<template>
  <q-layout> <!-- Be sure to play with the Layout demo on docs -->
    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import store from '../store/TodoStore'
import PouchDB from 'pouchdb'
export default {
  // name: 'LayoutName',
  data () {
    return {
    }
  },
  created () {
    store.dispatch('syncAll')

    let db = PouchDB('todos')
    db.changes({ since: 'now', live: true })
      .on('change', () => {
        store.dispatch('syncAll')
      })
  }
}
</script>

<style>
</style>
