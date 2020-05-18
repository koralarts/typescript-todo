import * as React from 'react'

import { TodoItem } from '../classes/TodoItem'

const TODO_INPUT_ID = 'new-todo-item'

export interface OnSubmit {
  (values: TodoItem): any
}

export interface AddFormProps {
  onSubmit: OnSubmit
}

export const AddForm = (props: AddFormProps) => {
  const [description, setDescription] = React.useState('')

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value)
  }
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    props.onSubmit(new TodoItem(description))
    setDescription('')
  }

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor={TODO_INPUT_ID}>Add New Item</label>
      <input
        id={TODO_INPUT_ID}
        type='text'
        value={description}
        onChange={onChange}
        required autoFocus
        aria-label='Enter description of todo item'
        placeholder='Water the garden'
      />
      <input type='submit' aria-label='Add todo item' />
    </form>
  )
}
