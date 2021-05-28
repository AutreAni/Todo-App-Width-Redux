import TodoList from './TodoList';
import './TodoApp.css';
import './AddTodo';
import AddTodo from './AddTodo';
import Tasks from './Tasks';



const TodoApp = () => {
    return(
        <div className = "container">
        <Tasks />
        <TodoList />
        <AddTodo />
        </div>
    )
}

export default TodoApp;
