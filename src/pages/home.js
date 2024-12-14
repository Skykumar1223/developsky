import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { addTask, updateTask } from "../features/addtaskSlice";
import Red from "../assets/redic.png";

const Home = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);
  const [selectedTaskId, setSelectedTaskId] = useState(null); 
  const [editNotes, setEditNotes] = useState(""); 

  const storedData = localStorage.getItem("user");
  const userName = storedData ? JSON.parse(storedData).user_name : "";

  const onSubmit = (data) => {
    dispatch(
      addTask({
        id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
        task_name: data.task_name,
        notes: data.notes,
      })
    );
  };

  const handleEditClick = (task) => {
    setSelectedTaskId(task.id); 
    setEditNotes(task.notes); 
  };

  const handleNoteChange = (e) => {
    setEditNotes(e.target.value); 
  };

  const handleSaveNotes = () => {
    if (selectedTaskId !== null) {
      dispatch(updateTask({ id: selectedTaskId, notes: editNotes }));
      setSelectedTaskId(null);
    }
  };

  return (
    <div className="home-content">
      <div className="container-lg">
        <Link to="/front" className="linkbtn">
          Home Page/
        </Link>
        <button
          type="button"
          className="linkbtn"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Your/Notes
        </button>

        <div>
          <h3>Welcome {userName}</h3>
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <div className="col-4" id="in-border" key={task.id}>
                <div
                  id="top-border"
                  className="d-flex justify-content-between align-items-center"
                >
                  <p>{task.task_name}</p>
                  <span>
                    <img src={Red} className="iconcode" alt="icon" />
                  </span>
                </div>
                <div className="inform">
                  {selectedTaskId === task.id ? (
                    <>
                     
                      <textarea
                        className="form-control"
                        value={editNotes}
                        onChange={handleNoteChange}
                      ></textarea>
                      <button className="btn btn-success" onClick={handleSaveNotes}>
                        Save
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => setSelectedTaskId(null)}
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <p>Task Notes: {task.notes}</p>
                      <button
                        className="btn btn-warning"
                        onClick={() => handleEditClick(task)}
                      >
                        Edit
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))
          ) : (
            <p>No tasks available</p>
          )}
        </div>

        {/* Modal for Adding Tasks */}
        <div className="modal fade" id="exampleModal" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="text-center">Add Notes</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      {...register("task_name", { required: true })}
                    />
                    {errors.task_name && (
                      <p className="text-danger">Task name is required!</p>
                    )}
                  </div>
                  <div className="mb-3">
                    <textarea
                      className="form-control"
                      {...register("notes", { required: true })}
                    ></textarea>
                    {errors.notes && (
                      <p className="text-danger">Please add notes!</p>
                    )}
                  </div>
                  <div className="d-flex justify-content-center">
                    <button
                      type="submit"
                      className="btn btn-success"
                      data-bs-dismiss="modal"
                    >
                      Add
                    </button>
                    <button type="button" className="btn btn-danger">
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
