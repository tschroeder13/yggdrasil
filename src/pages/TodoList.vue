<template>
  <q-page padding>
    <q-card v-for="todo in todos" :key=todo._id>
      <q-card-title>
        <q-checkbox v-model="todo.done"/>
        {{ todo.title }}
      </q-card-title>
      <q-card-separator/>
      <q-card-main>
        <dl class="horizontal">
        <dt>Due Date</dt>
        <dd>{{ todo.due }} </dd>
        <dt>Description</dt>
        <dd>{{ todo.description }}</dd>
        </dl>
      </q-card-main>
    </q-card>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn
        round
        color="negative"
        icon="add"
        to="/todo/detail"
      />
    </q-page-sticky>
  </q-page>
</template>

<script>
import store from '../store/TodoStore'
export default {
  // name: 'PageName',
  data () {
    return {
    }
  },
  computed: {
    todos () {
      console.log(JSON.stringify(store.state.todos))
      return store.state.todos
    }
  }
}
</script>

<style>
</style>
