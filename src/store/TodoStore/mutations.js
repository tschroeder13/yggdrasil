/*
export function someMutation (state) {
}
*/
export function addTodo (state, todo) {
  state.todos.push(todo)
}

export function editTodo (state, editTodo) {
  let todo = state.todos.find(todo => editTodo._id === todo._id)
  let index = state.todos.indexOf(todo)
  state.todos.splice(index, 1, editTodo)
}
export function removeTodo (state, todo) {
  let index = state.todos.indexOf(todo)
  state.todos.splice(index, 1)
}

export function cleanNewTodo (state) {
  state.newTodo = ''
}

export function setTodos (state, todos) {
  console.log('setting state.todos')
  state.todos = todos
}
