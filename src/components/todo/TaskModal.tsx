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
        <div className="modal__content">
          <input
            type="checkbox"
            name={this.props.id}
            id={this.props.id}
            defaultChecked={this.props.done}
            onChange={(e) => this.setState({ done: !this.state.done })}
          />
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
          <div className="modal__button">
            <button onClick={this.saveEditedTask}>Save</button>
            <button onClick={this.props.toggleModal}>Cancel</button>
          </div>
        </div>
      </Modal>
    );
  }
}

export default TodoModal;
