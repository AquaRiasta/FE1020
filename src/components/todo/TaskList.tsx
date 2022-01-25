import React from "react";
import TaskElement from "./TaskElement";

interface MyProps {
  taskData: any;
  utilities: any;
}

class TaskList extends React.Component<MyProps> {
  clearAllTask = () => {
    this.props.utilities.clearAllTask();
  }

  state = {
    selection: "all",
  };

  render() {
    return (
      <>
        <div className="task__button--filter">
          <button onClick={(e) => this.setState({ selection: "all" })}>
            All
          </button>
          <button onClick={(e) => this.setState({ selection: "todo" })}>
            Todo
          </button>
          <button onClick={(e) => this.setState({ selection: "done" })}>
            Done
          </button>
        </div>
        <div className="task__list">
          {this.props.taskData
            .filter((task: any) => {
              console.log(task);
              if (this.state.selection === "all") {
                return true;
              } else if (this.state.selection === "todo") {
                return task.done === false;
              } else if (this.state.selection === "done") {
                return task.done === true;
              }
            })
            .map((task: any) => (
              <TaskElement
                title={task.title}
                description={task.description}
                id={task.id}
                done={task.done}
                utilities={this.props.utilities}
                key={task.id}
              />
            ))}
        </div>
        <div className="task__button--action">
          <button onClick={this.props.utilities.clearTask}>Clear all</button>
          <button onClick={this.props.utilities.clearDoneTask}>Clear 'done'</button>
        </div>
      </>
    );
  }
}

export default TaskList;
