import { faClose, faL, faUndo } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { NotificationContainer, NotificationManager } from "react-notifications";
import 'react-notifications/lib/notifications.css';

const ToDoList = () => {
    const [task, setTask] = useState({
        tasks: ""
    })
    const [line, setLine] = useState(false)
    const [lines, setLines] = useState(null)
    const [allTasks, setAllTasks] = useState([]) // the state to handle the list of tasks in the all tasks 
    const [deletedTask, setDeletedTask] = useState([]) // all deleted task will be stored here
    const [completedTasks, setCompletedTasks] = useState([]);
    const handleClick = () => {
        if (task.tasks.trim() !== "") {
            if (!allTasks.includes(task.tasks.trim())) {
                setAllTasks([...allTasks, task.tasks]); // this is another method to add any items to a list by destructuring it
                setTask({ tasks: "" }) // here the input field is getting cleaned up
                NotificationManager.success('The task is in your To Do List', 'Task Added Successfully', 3000);
            }
            else {
                NotificationManager.warning('Add Different Task', 'Cannot Add Repeated Task', 3000);
            }
        }
        else {
            NotificationManager.warning('Write Some Task Atleast', 'Cannot Save Empty Task', 3000);
        }
    };

    // the wrong way to filter the array

    // const handleDelete = (index) => {
    //     allTasks.filter((_, i) => (
    //         i !== index ? task.tasks : ""
    //     ))
    // }

    // the right way

    const handleDelete = (index) => {
        setAllTasks(allTasks.filter((_, i) => i !== index));
        // filter return the array of the values that satisfies the condition
        setDeletedTask([...deletedTask, allTasks[index]])
    }

    const handleUndo = () => {
        if (deletedTask.length > 0) {
            setAllTasks([...allTasks, deletedTask[deletedTask.length - 1]])
            setDeletedTask(deletedTask.slice(0, -1));
            NotificationManager.success("The Task has Been undoed", "undo has been done", 3000)
        }
        else {
            NotificationManager.warning("Can't Undo Currently", "There is nothing to Undo", 3000)
        }
    }
    const handleLine = (index) => {
        if (completedTasks.includes(index)) {
            setCompletedTasks(completedTasks.filter(i => i !== index));
            NotificationManager.warning("The Task has Been UnDone", "Task has Been Undoned", 3000)
            // is array ke andar sirf clicked items ki array hogi ya fir jinpe click kiya gaya hai
        } else {
            setCompletedTasks([...completedTasks, index]);
            NotificationManager.success("The Task has Been Done", "Task has Been Done", 3000)
        }
    }

    return (
        <div className="px-4 mt-10">
            <div className="flex items-center justify-center gap-3">
                <input type="text" className="w-full border border-black p-3" value={task.tasks} onChange={(e) => setTask({ ...task, tasks: e.target.value })} placeholder="Enter Your To Do Task" />
                <button className="bg-green-600 border border-red-800 h-full p-3" onClick={handleClick}>Save</button>
                <button className="flex items-center justify-center gap-1 bg-green-700 p-3" onClick={handleUndo}>Undo <FontAwesomeIcon icon={faUndo} /> </button>
            </div>
            {allTasks.map((obj, index) =>
                <div key={index} onClick={() => handleLine(index)} className={`flex items-center justify-between p-4 mt-3 bg-black`}>
                    <p className={`text-white text-4xl ${completedTasks.includes(index) ? "line-through" : ""}`}>{obj}</p>
                    <FontAwesomeIcon icon={faClose} className="text-white size-10" onClick={() => handleDelete(index)} />
                </div>
            )}
            <NotificationContainer />
        </div>
    )
}

export default ToDoList