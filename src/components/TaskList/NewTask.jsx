import React from 'react'

const NewTask = ({ data, index, updateStatus }) => {
  return (
    <div className=' flex-shrink-0 p-5 h-full w-[300px] bg-yellow-400 rounded-xl  '>
      <div className='flex items-center justify-between'>
        <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>{data.category}</h3>
        <h4 className='text-sm'>{data.taskDate}</h4>
      </div>
      <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
      <p className='text-sm mt-2'>{data.taskDescription}</p>
      <div className='mt-4'>
        <button
          onClick={() => updateStatus(index, 'active')}
          className='bg-red-500 py-1 px-2 text-sm rounded-sm hover:bg-red-600 hover:scale-105 transition-transform duration-200'>Accept Task</button>
      </div>
    </div>
  )
}

export default NewTask