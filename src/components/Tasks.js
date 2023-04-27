import Task from "./Task"

const Tasks = ({ tasks, onDelete, onToggle }) => {

    return (
        // setTasks([...tasks, {}])
        <>
            {tasks.map((task) => (
                <Task key={task.id} task={task}
                onDelete={onDelete} 
                onToggle={onToggle} />
            ))}
        </>
    )
}

// const Task = () => {
//     return (
//         <div
//             className={`task ${task.reminder && 'reminder'}`}
//             onDoubleClick={() => onToggle(task.id)}
//             >
//             <h3>
//             {task.text}{' '}
//             <FaTimes
//                 style={{ color: 'red', cursor: 'pointer' }}
//                 onClick={() => onDelete(task.id)}
//             />
//             </h3>
//             <p>{task.day}</p>
//         </div>
//         )
// }

export default Tasks