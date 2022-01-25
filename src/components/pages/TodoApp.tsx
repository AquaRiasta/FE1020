import React from "react";
import Task from "../todo/TaskElement";
import TaskList from "../todo/TaskList";
import TaskCreate from "../todo/TaskCreate";

interface taskItem {
  title: string;
  description: string;
  id: number;
  done: boolean;
}

class TodoApp extends React.Component {
  state = {
    taskData: [],
    taskDataId: 0,
  };

  // CREATE
  addTask = (title: string, description: string) => {
    const newTaskData = [
      ...this.state.taskData,
      { title, description, id: this.state.taskDataId, done: false },
    ];
    const newTaskDataId = this.state.taskDataId + 1;
    this.setState({ taskData: newTaskData, taskDataId: newTaskDataId });
    localStorage.setItem("taskData", JSON.stringify(newTaskData));
    localStorage.setItem("taskDataId", JSON.stringify(newTaskDataId));
  };

  // READ
  componentDidMount() {
    const localTaskData =
      JSON.parse(String(localStorage.getItem("taskData"))) || [];
    const localTaskDataId =
      Number(JSON.parse(String(localStorage.getItem("taskDataId")))) || 0;
    this.setState({ taskData: localTaskData, taskDataId: localTaskDataId });
  }

  // UPDATE
  updateTask = (
    id: number,
    done: boolean,
    title: string,
    description: string
  ) => {
    const newTaskData = this.state.taskData.map((task: taskItem) => {
      if (task.id === id) {
        return { title, description, id, done };
      }
      return task;
    });
    this.setState({ taskData: newTaskData });
    localStorage.setItem("taskData", JSON.stringify(newTaskData));
  };

  // DELETE
  deleteTask = (id: number) => {
    const newTaskData = this.state.taskData.filter(
      (task: taskItem) => task.id !== id
    );
    this.setState({ taskData: newTaskData });
    localStorage.setItem("taskData", JSON.stringify(newTaskData));
  };

  clearTask = () => {
    this.setState({ taskData: [], taskDataId: 0 });
    localStorage.setItem("taskData", JSON.stringify([]));
    localStorage.setItem("taskDataId", JSON.stringify(0));
  };

  clearDoneTask = () => {
    const newTaskData = this.state.taskData.filter((task: taskItem) => {
      return task.done === false;
    });
    this.setState({ taskData: newTaskData });
    localStorage.setItem("taskData", JSON.stringify(newTaskData));
  };

  utilities = {
    updateTask: this.updateTask,
    deleteTask: this.deleteTask,
    clearTask: this.clearTask,
    clearDoneTask: this.clearDoneTask,
  };

  render() {
    return (
      <>
        <TaskCreate addTask={this.addTask} />
        <TaskList taskData={this.state.taskData} utilities={this.utilities} />
      </>
    );
  }
}

export default TodoApp;
