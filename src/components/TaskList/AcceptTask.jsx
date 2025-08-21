import React from 'react'

const AcceptTask = ({ data, index, updateStatus }) => {
  console.log()
  return (
    <div className=' flex-shrink-0 p-5 h-full w-[300px] bg-yellow-400 rounded-xl  '>
      <div className='flex items-center justify-between'>
        <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>{data.category}</h3>
        <h4 className='text-sm'>{data.taskDate}</h4>
      </div>
      <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
      <p className='text-sm mt-2'>{data.taskDescription}</p>
      <div className='flex justify-between mt-4'>
        <button
          onClick={() => updateStatus(index, 'completed')}
          className='bg-green-500 py-1 px-2 text-sm rounded-sm hover:bg-green-600 hover:scale-105 transition-transform duration-200'>Mark as Completed</button>
        <button
          onClick={() => updateStatus(index, 'failed')}
          className='bg-red-500 py-1 px-2 text-sm rounded-sm hover:bg-red-600 hover:scale-105 transition-transform duration-200'>Mark as Failed</button>
      </div>
    </div>
  )
}

export default AcceptTask