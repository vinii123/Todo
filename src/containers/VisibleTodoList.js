import { connect } from "react-redux";
import { VisibilityFilters, toggleTodo } from "../actions";
import TodoList from "../Component/TodoList";

const getVisibleTodos = (todos, filter) => {
  console.log('toodoo', todos);
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMLETED:
      return todos.filter((task) => task.comleted);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter((task) => !task.comleted);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

const mapStateToProps = (state) => {
  console.log('stt', state);
  return {todos: getVisibleTodos(state.todos, state.visibilityFilter)}
};

const mapDispatchToProps = (dispatch) => ({
  toggleTodo: (id) => dispatch(toggleTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
