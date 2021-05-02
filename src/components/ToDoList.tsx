import React from 'react'
import { ITodo } from '../interfaces'

type ToDoListProps = {
  todos: ITodo[]
  // onToggle?(id: number): void // ? means not required
  // onRemove?: (id: number) => void
  onToggle(id: number): void
  onRemove: (id: number) => void
}

export const ToDoList: React.FunctionComponent<ToDoListProps> = ({
  todos,
  onToggle,
  onRemove,
}) => {
  if (!todos.length) {
    return <p className='center'>No ToDos Yet!</p>
  }

  const removeHandler = (event: React.MouseEvent, id: number) => {
    event.preventDefault()
    onRemove(id)
  }

  return (
    <ul>
      {todos.map(todo => {
        return (
          <li
            className={todo.completed ? 'todo completed' : 'todo'}
            key={todo.id}>
            <label>
              <input
                type='checkbox'
                checked={todo.completed}
                onChange={onToggle.bind(null, todo.id)}
              />
              <span>{todo.title}</span>
              <i
                className='material-icons red-text'
                onClick={event => removeHandler(event, todo.id)}>
                delete
              </i>
            </label>
          </li>
        )
      })}
    </ul>
  )
}
