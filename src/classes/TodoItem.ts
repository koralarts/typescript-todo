export interface ITodoItem {
  description: string
  done: boolean
}

export class TodoItem implements ITodoItem {
  description: string = ''
  done: boolean = false

  constructor(description: string, done: boolean = false) {
    this.description = description
    this.done = done
  }
}
