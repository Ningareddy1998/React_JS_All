import {Component} from 'react'
import './index.css'

class TodoItem extends Component {
  render() {
    const {todo, deleteTodo} = this.props
    const {id, title} = todo

    return (
      <li className="todo-item">
        <p>{title}</p>
        <button
          type="button"
          className="delete-button"
          onClick={() => deleteTodo(id)}
        >
          Delete
        </button>
      </li>
    )
  }
}

export default TodoItem
