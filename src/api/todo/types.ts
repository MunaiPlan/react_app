import { Todo } from '~/modules/todo';

export interface TodoListResponse {
  count: number;
  data: Todo[];
}

export type TodoCreateRequest = Pick<Todo, 'description'>;

export interface TodoCreateResponse {
  success: boolean;
  data: Todo;
}

export interface TodoUpdateRequest
  extends Partial<Omit<Todo, 'owner' | 'createdAt' | 'updatedAt' | '_id'>> {
  _id: string;
}

export interface TodoUpdateResponse {
  success: boolean;
  data: Todo;
}

export interface TodoDeleteResponse {
  success: boolean;
  data: Record<string, never>;
}
