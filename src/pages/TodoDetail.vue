<template>
  <q-page padding class="docs-input row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <q-field
        icon="check_circle_outline"
        label="Task Title"
      >
        <q-input v-model="todo.title" />
      </q-field>
      <q-field
        label="Due Date"
        icon="calendar_today">
        <q-datetime v-model="todo.due" type="datetime"/>
      </q-field>
      <q-field
        label="Done"
        icon="done">
        <q-checkbox v-model="todo.done"/>
      </q-field>
      <q-field
        label="Description"
        icon="receipt">
        <q-editor v-model="todo.description"/>
      </q-field>
      <q-btn
        icon="add"
        align="center"
        @click="save(todo)"
      >
      Save
      </q-btn>
    </div>
  </q-page>
</template>

<script>
// import store from '../store/TodoStore'
import { uid } from 'quasar'
export default {
  // name: 'PageName',
  data () {
    return {
      todo: {
        _id: '',
        title: '',
        due: '',
        done: false,
        description: ''
      }
    }
  },
  methods: {
    save (_todo) {
      if (_todo._id === '') {
        _todo._id = uid()
      }
      console.log(JSON.stringify(_todo))
    }
  }
//   ,computed: {
//     todo () {
//       /*
//       '_id': 'todo1',
//       'title': 'Task #3: Donor',
//       'due': '2018-11-15T10:05:29.118Z',
//       'done': true,
//       'description': 'Foo Bar'
//       */
//       return store.state.new_todo
//     }
//   }
}
</script>

<style>
</style>
