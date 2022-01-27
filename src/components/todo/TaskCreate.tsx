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
      <div className="task__create form container">
        <input
          type="text"
          placeholder="Task title"
          value={this.state.title}
          onChange={(e) => this.setState({ title: e.target.value })}
          className="task__input form__input input input__title"
        />
        <textarea
          placeholder="Task description"
          value={this.state.description}
          onChange={(e) => this.setState({ description: e.target.value })}
          className="task__input form__input input input__textarea"
        />
        <button
          className="task__button button button__box-container task__button--create"
          onClick={() => {
            this.props.addTask(this.state.title, this.state.description);
            this.setState({ title: "", description: "" });
          }}
        >
          ➕ Create
        </button>
      </div>
    );
  }
}

export default TaskCreate;
