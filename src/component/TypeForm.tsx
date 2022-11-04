import { useEffect, useRef } from 'react';
import { UseFormReturn } from 'react-hook-form';

interface ITypeForm {
  onSubmit: (data: any, e: any) => void;
  form: UseFormReturn;
}

export function TypeForm({ form, onSubmit }: ITypeForm) {
  const {
    handleSubmit,
    register,
    setFocus,
    formState: { errors, isSubmitting },
  } = form;
  useEffect(() => {
    setFocus('task_input');
  }, [setFocus]);
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col gap-2 mt-3'
      >
        <label htmlFor='task_input' className='font-semibold text-left'>
          해야할 일
        </label>
        <div className='flex'>
          <input
            id='task_input'
            placeholder='Type Todo task Here!'
            className='w-[15em] bg-indigo-100 text-indigo-700 text-base font-semibold px-6 py-2 rounded-lg mr-auto disabled:opacity-50'
            type={'text'}
            {...register('task_input')}
            disabled={isSubmitting}
            required
          />
          <button
            className='rounded-xl border border-stone-600 w-13 h-10 basis-13 px-3 py-2'
            type='submit'
          >
            ADD
          </button>
        </div>
      </form>
    </div>
  );
}
