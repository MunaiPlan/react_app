export interface TodoState {
  todos: Todo[];
}

export interface Todo {
  _id: string;
  description: string;
  owner: string;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface AggregatedTodos {
  completed: Todo[];
  todo: Todo[];
}
