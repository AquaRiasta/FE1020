import React from "react";
import TodoModal from "./TaskModal";

interface MyProps {
  title: string;
  description: string;
  id: string;
  done: boolean;
  utilities: any;
}

class TaskElement extends React.Component<MyProps> {
  state = {
    modal: false,
  };

  checkTask = () => {
    this.props.utilities.updateTask(
      this.props.id,
      !this.props.done,
      this.props.title,
      this.props.description
    );
  };

  deleteTask = () => {
    this.props.utilities.deleteTask(this.props.id);
  };

  toggleModal = () => {
    this.setState({ modal: !this.state.modal });
  };

  render() {
    return (
      <div className="task__item">
        <input
          className="task__checkbox button button__checkbox"
          type="checkbox"
          name={this.props.id}
          id={this.props.id}
          checked={this.props.done}
          onChange={this.checkTask}
        />
        <div className="task__detail">
          <h2 className="task__detail-title heading heading__title">
            {this.props.title}
          </h2>
          <p className="task__detail-description heading heading__subtitle">
            {this.props.description}
          </p>
        </div>
        <button
          className="task__button button button__icon"
          onClick={this.toggleModal}
        >
          ✏️
        </button>
        <button
          className="task__button button button__icon"
          onClick={this.deleteTask}
        >
          🗑️
        </button>
        {this.state.modal ? (
          <TodoModal
            title={this.props.title}
            description={this.props.description}
            id={this.props.id}
            done={this.props.done}
            utilities={this.props.utilities}
            toggleModal={this.toggleModal}
            key={this.props.id}
          />
        ) : null}
      </div>
    );
  }
}

export default TaskElement;
