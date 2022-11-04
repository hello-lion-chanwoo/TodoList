import { removeTodo } from '../reducer';
import { useAppDispatch } from '../reducer/config';
import { ITodoProps } from '../type';

export function TaskBlock({ todo }: { todo: ITodoProps }) {
  const dispatch = useAppDispatch();
  return (
    <div className='w-full bg-indigo-100 h-fit px-4 py-3 flex rounded-md justify-between'>
      <span className='font-semibold text-sm whitespace-pre-wrap max-w-200px h-full text-left'>
        {todo.task}
      </span>
      {todo.type === 'TODO' && (
        <button
          className='w-13 h-10 bg-gray-700 text-fuchsia-200 font-medium text-xs rounded-xl basis-13 px-3'
          onClick={() => {
            console.log(todo.id);
            dispatch(removeTodo(todo));
          }}
        >
          DONE
        </button>
      )}
    </div>
  );
}
