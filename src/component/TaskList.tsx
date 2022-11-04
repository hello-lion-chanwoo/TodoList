import { useAppSelector } from '../reducer/config';
import { TaskBlock } from './TaskBlock';

export function TaskList() {
  const { todos, type } = useAppSelector(state => state.todo);
  console.log(todos, type);
  return (
    <div className='flex flex-col gap-4 mb-5'>
      {todos?.map(todo => {
        if (todo.type === type) return <TaskBlock todo={todo} />;
        if (type === 'ALL') return <TaskBlock todo={todo} />;
      })}
    </div>
  );
}
