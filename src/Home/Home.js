import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { TaskList } from "./components/TaskList";
import { addTask, fetchTaskList } from "./store/home.slice";
import { useSelector } from "react-redux";

export function Home() {
  const dispatch = useDispatch();
  const taskList = useSelector((state) => state.home.list);

  const [taskName, setTaskName] = useState("");

  useEffect(() => {
    dispatch(fetchTaskList());
  });

  return (
      <div style={{ display: "flex", justifyContent: "center", marginTop: 10 }}>
        <form>
          <input type="text" onChange={(e) => setTaskName(e.target.value)} />

          <button
            style={{ marginLeft: 10 }}
            type="button"
            onClick={() => dispatch(addTask(taskName))}
          >
            Add Task
          </button>
        </form>
      </div>
      <TaskList />
  );
}
