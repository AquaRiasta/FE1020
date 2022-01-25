import React from "react";

interface MyProps {
  addTask: Function;
}

class TaskCreate extends React.Component<MyProps> {
  state = {
    title: "",
    description: "",
  };

  render() {
    return (
      <div className="task__create">
        <input
          type="text"
          placeholder="Task title"
          value={this.state.title}
          onChange={(e) => this.setState({ title: e.target.value })}
        />
        <textarea
          placeholder="Task description"
          value={this.state.description}
          onChange={(e) => this.setState({ description: e.target.value })}
        />
        <button
          onClick={() => {
            this.props.addTask(this.state.title, this.state.description);
            this.setState({ title: "", description: "" });
          }}
        >
          Create
        </button>
      </div>
    );
  }
}

export default TaskCreate;
