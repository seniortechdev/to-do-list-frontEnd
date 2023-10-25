import React, { useEffect, useState } from 'react';
import '../../styles/homePage.css';
import { addTask, removeTask, getTasks } from '../../redux/homePage/action';
import { useDispatch, useSelector } from 'react-redux';

const HomePage = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError] = useState("")
    const dispatch = useDispatch();
    const { tasks, errorAddingTask } = useSelector(state => state.task);

    const handleAddTask = async () => {
      if(title === "" || description === "") {
        setError("Please fill task title and description")
        setTimeout(() => {
          setError("")
        }, 4000)
        return
      }
        const newTask = {title: title, description: description}
        await dispatch(addTask({newTask}))
        if (errorAddingTask){
          setError(errorAddingTask);
          setTimeout(() => {
            setError("")
          }, 5000)
        } else {
         setTitle("");
         setDescription("");
        }
    };

    const handleDel = (id) => {
      dispatch(removeTask(id));
    };

    useEffect(() => {
      dispatch(getTasks())
    },[]);
  
  return (
    <div className='home-page-div'>
      {error && (
        <div className="error">
          {error}
        </div>
      )}
      <section className='add-task'>
        <input type="text" placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} data-testid="title-input"/>
        <textarea placeholder='Description' value={description} onChange={(e) => setDescription(e.target.value)} />
        <button onClick={handleAddTask}>
            Add task
        </button>
      </section>
      <section>
        <table>
            <tbody>
                {tasks.map( (task) => (
                    <tr key={task._id}>
                        <td>{task.title}</td>  
                        <td>{task.description}</td>
                        <td>
                          <button onClick={() => handleDel(task._id)}>
                            Del
                          </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
      </section>
    </div>
  )
}

export default HomePage