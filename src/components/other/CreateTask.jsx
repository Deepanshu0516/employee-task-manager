import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

    const[userData, setUserData] = useContext(AuthContext)

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [asignTo, setAsignTo] = useState('')
    const [category, setCategory] = useState('')

    const[newTask, setNewTask] = useState({})
    
    const submitHandler = (e) => {
    e.preventDefault();

    const task = {
        taskTitle,
        taskDescription,
        taskDate,
        category,
        active: false,
        newTask: true,
        failed: false,
        completed: false
    };

    const updatedData = userData.map((elem) => {
        if (asignTo === elem.firstName) {
            return {
                ...elem,
                tasks: [...elem.tasks, task],
                taskCounts: {
                    ...elem.taskCounts,
                    newTask: elem.taskCounts.newTask + 1
                }
            };
        }
        return elem;
    });

    setUserData(updatedData);
    localStorage.setItem("employees", JSON.stringify(updatedData)); // persist change

    // reset form
    setTaskTitle('');
    setCategory('');
    setAsignTo('');
    setTaskDate('');
    setTaskDescription('');
};


    return (
        <div className='p-5 bg-[#1c1c1c] mt-5 rounded text-white'>
            <form
                onSubmit={(e) => {
                    submitHandler(e);
                }}
                className='flex flex-wrap w-full items-start justify-between'>
                <div className='w-1/2'>
                    <div>
                        <h3 className='text-sm mb-0.5 text-gray-300'>Task Title</h3>
                        <input
                            value={taskTitle}
                            onChange={(e) => {
                                setTaskTitle(e.target.value)
                            }}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
                            type="text"
                            placeholder='Make a UI design' />
                    </div>
                    <div>
                        <h3 className='text-sm mb-0.5 text-gray-300'>Date</h3>
                        <input
                            value={taskDate}
                            onChange={(e) => {
                                setTaskDate(e.target.value)
                            }}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
                            type="Date" />
                    </div>
                    <div>
                        <h3 className='text-sm mb-0.5 text-gray-300'>Assign to</h3>
                        <input
                            value={asignTo}
                            onChange={(e) => {
                                setAsignTo(e.target.value)
                            }}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
                            type="text"
                            placeholder='Employee Name' />
                    </div>
                    <div>
                        <h3 className='text-sm mb-0.5 text-gray-300'>Category</h3>
                        <input
                            value={category}
                            onChange={(e) => {
                                setCategory(e.target.value)
                            }}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
                            type="text"
                            placeholder='Design or Dev etc' />
                    </div>
                </div>

                <div className='w-2/5 flex flex-col items-start'>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                    <textarea
                        value={taskDescription}
                        onChange={(e) => {
                            setTaskDescription(e.target.value)
                        }}
                        className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400'
                        name="" id=""></textarea>
                    <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full hover:scale-105 transition-transform duration-200'>Create Task</button>
                </div>

            </form>
        </div>
    )
}

export default CreateTask