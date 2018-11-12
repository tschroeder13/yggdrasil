/*
export function someGetter (state) {
}
*/
export function dones (ctx) {
  return ctx.todos.filter(todo => todo.done)
}
