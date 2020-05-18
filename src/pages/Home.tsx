import * as React from 'react'
import { TodoItem } from '../classes/TodoItem'
import { OnSubmit, AddForm } from '../components/AddForm'

const INITIAL_STATE: Array<TodoItem> = [
  new TodoItem('Finish Todo List App', true),
  new TodoItem('Finish adding items', true),
  new TodoItem('Complete all items')
]

export const Home = () => {
  const [items, setItems] = React.useState(INITIAL_STATE)
  const onSubmit: OnSubmit = (item: TodoItem) => {
    setItems((prevItems: Array<TodoItem>) => [
      ...prevItems,
      item
    ])
  }
  const onDelete = (index: number) => () => {
    setItems((prevItems: Array<TodoItem>) =>
      prevItems.filter((_: TodoItem, i: number) => index !== i)
    )
  }
  const onDone = (index: number) => () => {
    setItems((prevItems: Array<TodoItem>) => {
      const newItems = [...prevItems]
      newItems[index].done = !newItems[index].done
      return newItems
    })
  }

  return (
    <>
      <ol>
        {items.map((item: TodoItem, index: number) => (
          <li key={item.description}>
            <div>
              <input
                type='checkbox'
                checked={item.done}
                onChange={onDone(index)}
                aria-label={`Set Item: ${item.description} as ${item.done ? 'todo' : 'done'}`}
              />
              <span className={item.done ? 'item-done' : ''}>{item.description}</span>
            </div>
            <button
              onClick={onDelete(index)}
              className='secondary'
              aria-label={`Delete Item: ${item.description}`}
            >
              Delete
            </button>
          </li>
        ))}
      </ol>
      <AddForm onSubmit={onSubmit} />
    </>
  )
}
