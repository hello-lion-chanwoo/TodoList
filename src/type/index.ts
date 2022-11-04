export interface ITodoSlice {
  todos: Array<ITodoProps>;
  type: ITodoType;
}
export interface ITodoProps {
  id: string;
  type: ITodoType;
  task: string;
}
export type ITodoType = 'TODO' | 'ALL' | 'DONE';
