import { TaskList } from '../component/TaskList';
import { TypeForm } from '../component/TypeForm';
import { v4 as uuid } from 'uuid';
import { addTodo, changeType } from '../reducer';
import { useAppDispatch, useAppSelector } from '../reducer/config';
import { ITodoType } from '../type';
import { useForm } from 'react-hook-form';
import { format } from 'node:path/win32';

export default function Home() {
  const dispatch = useAppDispatch();
  const { type } = useAppSelector(state => state.todo);
  const form = useForm();
  const onSubmit = (data: any, e: any) => {
    dispatch(
      addTodo({
        id: uuid(),
        type: 'TODO',
        task: data.task_input,
      })
    );
    e.target.reset();
    form.setFocus('task_input');
  };
  const onClickTypeButton = (e: any) => {
    dispatch(changeType(e.currentTarget.value as ITodoType));
  };
  return (
    <div className='w-[360px] min-h-[100vh] bg-pink-50'>
      <div className='flex flex-col px-4'>
        <div className='w-full h-20 flex justify-center items-center font-bold text-7xl'>
          Todo
        </div>
        <TypeForm form={form} onSubmit={onSubmit} />
        <div className={'bg-indigo-100 w-full rounded-md h-10 mt-4 flex mb-4'}>
          <button
            className={
              type !== 'TODO'
                ? 'w-full h-full font-bold'
                : 'bg-cyan-900 w-full  text-white font-bold rounded-l-md'
            }
            value='TODO'
            onClick={onClickTypeButton}
          >
            TODO
          </button>
          <button
            className={
              type !== 'DONE'
                ? 'w-full h-full font-bold'
                : 'bg-cyan-900 w-full  text-white font-bold'
            }
            value='DONE'
            onClick={onClickTypeButton}
          >
            DONE
          </button>
          <button
            className={
              type !== 'ALL'
                ? 'w-full h-full font-bold'
                : 'bg-cyan-900 w-full  text-white font-bold rounded-r-md'
            }
            value='ALL'
            onClick={onClickTypeButton}
          >
            ALL
          </button>
        </div>
        <TaskList />
      </div>
    </div>
  );
}
