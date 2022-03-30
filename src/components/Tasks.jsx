import React from "react";

import Task from "./Task"

const Tasks = ({ tasks, handleTaskClick, handleTasDeletion }) =>{
    return (
        <>
            {tasks.map((task) => (
                <Task
                    key={task.id} 
                    task={task} 
                    handleTaskClick={handleTaskClick} 
                    handleTasDeletion={handleTasDeletion} 
                />
            ))}
        </>
    );
};

export default Tasks;