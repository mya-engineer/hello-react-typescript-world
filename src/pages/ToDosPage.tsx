import React, { useState, useEffect } from 'react'
import { ToDoForm } from '../components/ToDoForm'
import { ToDoList } from '../components/ToDoList'
import { ITodo } from '../interfaces'

declare var confirm: (question: string) => boolean

export const ToDosPage: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([])

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
    setTodos(saved)
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false,
    }
    setTodos(prev => [newTodo, ...prev])
  }

  const toggleHandler = (id: number) => {
    setTodos(prev =>
      prev.map(todo => {
        return {
          ...todo,
          completed: todo.id === id ? !todo.completed : todo.completed,
        }
      })
    )
  }

  const removeHandler = (id: number) => {
    const shouldRemove = confirm('Are you sure?')
    if (shouldRemove) {
      setTodos(prev => prev.filter(todo => todo.id !== id))
    }
  }

  return (
    <>
      <ToDoForm onAdd={addHandler} />
      <ToDoList
        todos={todos}
        onToggle={toggleHandler}
        onRemove={removeHandler}
      />
    </>
  )
}
