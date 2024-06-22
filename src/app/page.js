/**
 * Home component for the DoItList application.
 * Manages a to-do list with task addition, completion toggle, and removal functionalities.
 * Uses local storage to persist tasks between sessions.
 *
 * @component
 * @returns {JSX.Element} Rendered Home component
 */
"use client";
import Image from "next/image";
import Link from "next/link";
import {useState, useEffect} from "react";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  /**
   * Handles form submission to add a new task to the list.
   * Updates tasks state and saves to local storage.
   *
   * @param {React.FormEvent<HTMLFormElement>} e - Form submission event
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim() !== "") {
      setTasks([...tasks, {text: newTask.trim(), completed: false}]);
      setNewTask("");
      const updatedTasksString = JSON.stringify(tasks);
      localStorage.setItem("my-tasks", updatedTasksString);
    }
  };

  /**
   * Removes a task from the list.
   * Updates tasks state and saves to local storage.
   *
   * @param {number} index - Index of the task to be removed
   */
  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, taskIndex) => taskIndex !== index);
    setTasks(updatedTasks);
    const updatedTasksString = JSON.stringify(updatedTasks);
    localStorage.setItem("my-tasks", updatedTasksString);
  };

  /**
   * Toggles the completion status of a task.
   * Updates tasks state and saves to local storage.
   *
   * @param {number} index - Index of the task to toggle completion
   */
  const toggleCompletion = (index) => {
    const updatedTasks = tasks.map((task, taskIndex) =>
      taskIndex === index ? {...task, completed: !task.completed} : task
    );
    setTasks(updatedTasks);
    const updatedTasksString = JSON.stringify(updatedTasks);
    localStorage.setItem("my-tasks", updatedTasksString);
  };

  /**
   * Loads tasks from local storage when the component mounts.
   */
  useEffect(() => {
    const tasksString = localStorage.getItem("my-tasks");
    if (tasksString) {
      const loadedTasks = JSON.parse(tasksString);
      setTasks(loadedTasks);
    }
  }, []);

  return (
    <main className="min-h-[calc(100vh-6rem)] p-4">
      <Link
        target="_blank"
        className="fixed right-2 top-2 w-max"
        href="https://github.com/dilkhush/doitlist"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="50"
          height="50"
          viewBox="0 0 48 48"
        >
          <path
            fill="#2100c4"
            d="M24,4C12.954,4,4,12.954,4,24c0,8.887,5.801,16.411,13.82,19.016h12.36 C38.199,40.411,44,32.887,44,24C44,12.954,35.046,4,24,4z"
          ></path>
          <path
            fill="#ddbaff"
            d="M37,23.5c0-2.897-0.875-4.966-2.355-6.424C35.591,15.394,34.339,12,34.339,12 c-2.5,0.5-4.367,1.5-5.609,2.376C27.262,14.115,25.671,14,24,14c-1.71,0-3.339,0.118-4.834,0.393 c-1.242-0.879-3.115-1.889-5.632-2.393c0,0-1.284,3.492-0.255,5.146C11.843,18.6,11,20.651,11,23.5 c0,6.122,3.879,8.578,9.209,9.274C19.466,33.647,19,34.764,19,36l0,0.305c-0.163,0.045-0.332,0.084-0.514,0.108 c-1.107,0.143-2.271,0-2.833-0.333c-0.562-0.333-1.229-1.083-1.729-1.813c-0.422-0.616-1.263-2.032-3.416-1.979 c-0.376-0.01-0.548,0.343-0.5,0.563c0.043,0.194,0.213,0.5,0.896,0.75c0.685,0.251,1.063,0.854,1.438,1.458 c0.418,0.674,0.417,2.468,2.562,3.416c1.53,0.677,2.988,0.594,4.097,0.327l0.001,3.199c0,0.639-0.585,1.125-1.191,1.013 C19.755,43.668,21.833,44,24,44c2.166,0,4.243-0.332,6.19-0.984C29.584,43.127,29,42.641,29,42.002L29,36 c0-1.236-0.466-2.353-1.209-3.226C33.121,32.078,37,29.622,37,23.5z"
          ></path>
          <path
            fill="#ddbaff"
            d="M15,18l3.838-1.279c1.01-0.337,1.231-1.684,0.365-2.302l-0.037-0.026 c-2.399,0.44-4.445,1.291-5.888,2.753C13.596,17.658,14.129,18,15,18z"
          ></path>
          <path
            fill="#ddbaff"
            d="M28.693,14.402c-0.878,0.623-0.655,1.987,0.366,2.327L32.872,18c0.913,0,1.461-0.37,1.773-0.924 c-1.46-1.438-3.513-2.274-5.915-2.701C28.717,14.384,28.705,14.393,28.693,14.402z"
          ></path>
          <path
            fill="#ddbaff"
            d="M24,31c-1.525,0-2.874,0.697-3.791,1.774C21.409,32.931,22.681,33,24,33s2.591-0.069,3.791-0.226 C26.874,31.697,25.525,31,24,31z"
          ></path>
        </svg>
      </Link>
      <div className="mb-4 flex items-center justify-center gap-4 text-2xl font-bold">
        <Image
          src="/logo.png"
          width={40}
          height={40}
          alt="Master Ji's To-Do List"
        />
        <h1>DoItList</h1>
      </div>
      <div className="mx-auto my-4 flex max-w-3xl items-center justify-end">
        <button
          onClick={() => {
            const updatedTasksString = JSON.stringify(tasks);
            localStorage.setItem("my-tasks", updatedTasksString);
          }}
        >
          <Image src="/sync.png" width={40} height={40} alt="Sync" />
        </button>
      </div>
      <form className="mx-auto mb-4 flex max-w-3xl" onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
          className="flex-grow rounded-lg border border-[#161f33] bg-[#1b2538] px-4 py-3 shadow-sm placeholder:text-[#2d3c59] focus:outline-none"
        />
      </form>
      <ul className="mx-auto max-w-3xl list-none p-0">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="flex items-center justify-between border-b border-[#161f33] p-2"
          >
            <div className="checkbox-wrapper-11 flex items-center">
              <input
                type="checkbox"
                id={`task-${index}`}
                checked={task.completed}
                onChange={() => toggleCompletion(index)}
                className="mr-2"
              />
              <label className={task.completed ? "line-through" : ""}>
                {task.text}
              </label>
            </div>
            <button onClick={() => removeTask(index)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="#4f29f0"
              >
                <path d="M 10 2 L 9 3 L 3 3 L 3 5 L 21 5 L 21 3 L 15 3 L 14 2 L 10 2 z M 4.3652344 7 L 5.8925781 20.263672 C 6.0245781 21.253672 6.877 22 7.875 22 L 16.123047 22 C 17.121047 22 17.974422 21.254859 18.107422 20.255859 L 19.634766 7 L 4.3652344 7 z"></path>
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}
