import React, { useContext } from 'react';
import AcceptTask from './AcceptTask';
import NewTask from './NewTask';
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';
import { AuthContext } from '../../context/AuthProvider';

const TaskList = ({ data }) => {
  // AuthContext should provide: [userData, setUserData, loggedInUser, setLoggedInUser]
  const [userData, setUserData, loggedInUser, setLoggedInUser] = useContext(AuthContext);

  const updateTaskStatus = (taskIndex, status) => {
  const updatedUserData = userData.map((user) => {
    if (user.id === data.id) {
      const updatedTasks = user.tasks.map((task, idx) => {
        if (idx === taskIndex) {
          return {
            ...task,
            active: false,
            newTask: false,
            completed: false,
            failed: false,
            [status]: true // set the clicked status to true
          };
        }
        return task;
      });

      const counts = {
        active: updatedTasks.filter(t => t.active).length,
        newTask: updatedTasks.filter(t => t.newTask).length,
        completed: updatedTasks.filter(t => t.completed).length,
        failed: updatedTasks.filter(t => t.failed).length
      };

      return { ...user, tasks: updatedTasks, taskCounts: counts };
    }
    return user;
  });

  setUserData(updatedUserData);
  localStorage.setItem("employees", JSON.stringify(updatedUserData));
};


  return (
    <div
      id='tasklist'
      className='h-[55%] w-full py-5 mt-10 flex items-center justify-start gap-5 flex-nowrap overflow-x-auto'
    >
      {data.tasks.map((elem, idx) => {
        if (elem.active) {
          return <AcceptTask key={idx} data={elem} index={idx} updateStatus={updateTaskStatus} />;
        }
        if (elem.newTask) {
          return <NewTask key={idx} data={elem} index={idx} updateStatus={updateTaskStatus} />;
        }
        if (elem.completed) {
          return <CompleteTask key={idx} data={elem} index={idx} updateStatus={updateTaskStatus} />;
        }
        if (elem.failed) {
          return <FailedTask key={idx} data={elem} index={idx} updateStatus={updateTaskStatus} />;
        }
        return null;
      })}
    </div>
  );
};

export default TaskList;
