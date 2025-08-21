import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
      <div className='flex items-center justify-between gap-5 mt-10'>
        <div className='rounded-xl w-[45%] bg-emerald-500 py-5 px-6 hover:bg-emerald-600 hover:scale-105 transition-transform duration-200'>
            <h1 className='font-semibold text-3xl'>{data.taskCounts.newTask}</h1>
            <h2 className='font-medium text-2xl mt-0.5'>New Task</h2>
        </div>
        <div className='rounded-xl w-[45%] bg-amber-500 py-5 px-6 hover:bg-amber-600 hover:scale-105 transition-transform duration-200'>
            <h1 className='font-semibold text-3xl'>{data.taskCounts.completed}</h1>
            <h2 className='font-medium text-2xl'>Completed Task</h2>
        </div>
        <div className='rounded-xl w-[45%] bg-rose-500 py-5 px-6 hover:bg-rose-600 hover:scale-105 transition-transform duration-200'>
            <h1 className='font-semibold text-3xl'>{data.taskCounts.active}</h1>
            <h2 className='font-medium text-2xl'>Accepted Task</h2>
        </div>
        <div className='rounded-xl w-[45%] bg-sky-500 py-5 px-6 hover:bg-sky-600 hover:scale-105 transition-transform duration-200'>
            <h1 className='font-semibold text-3xl'>{data.taskCounts.failed}</h1>
            <h2 className='font-medium text-2xl'>Failed Task</h2>
        </div>
      </div>
  )
}

export default TaskListNumbers