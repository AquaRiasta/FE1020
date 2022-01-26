import React from "react";
import Modal from "../common/Modal";

interface MyProps {
  title: string;
  description: string;
  id: string;
  done: boolean;
  utilities: any;
  toggleModal: any;
}

class TodoModal extends React.Component<MyProps> {
  state = {
    done: this.props.done,
    title: this.props.title,
    description: this.props.description,
  };

  saveEditedTask = () => {
    this.props.utilities.updateTask(
      this.props.id,
      this.state.done,
      this.state.title,
      this.state.description
    );
    this.props.toggleModal();
  };

  render(): React.ReactNode {
    return (
      <Modal>
        <div className="modal task__modal">
          <input
            className="task__checkbox button button__checkbox"
            type="checkbox"
            name={this.props.id}
            id={this.props.id}
            defaultChecked={this.props.done}
            onChange={(e) => this.setState({ done: !this.state.done })}
          />
          <input
            className="task__input form__input input input__text"
            type="text"
            placeholder="Task title"
            value={this.state.title}
            onChange={(e) => this.setState({ title: e.target.value })}
          />
          <textarea
            className="task__input form__input input input__textarea"
            placeholder="Task description"
            value={this.state.description}
            onChange={(e) => this.setState({ description: e.target.value })}
          />
          <div className="modal__button">
            <button
              className="task__button button button__box-container button__modification"
              onClick={this.saveEditedTask}
            >
              Save
            </button>
            <button
              className="task__button button button__box-container button__modification"
              onClick={this.props.toggleModal}
            >
              Cancel
            </button>
          </div>
        </div>
      </Modal>
    );
  }
}

export default TodoModal;
