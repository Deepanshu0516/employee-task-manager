import React from "react";

const FailedTask = ({ data, index, updateStatus }) => {
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
          onClick={() => updateStatus(index, 'failed')}
          className='w-full bg-red-500 hover:bg-red-600 transition-transform duration-200 hover:scale-105 py-1 px-2 text-sm rounded-sm'>Failed</button>
      </div>
    </div>
  )
}

export default FailedTask
