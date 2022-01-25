import React from "react";
import ReactDOM from "react-dom";

const modalElement = document.getElementById("modal");

interface ModalProps {
  children: React.ReactNode;
}

class Modal extends React.Component<ModalProps> {
  element: HTMLDivElement;

  constructor(props: ModalProps) {
    super(props);
    this.element = document.createElement("div");
  }

  componentDidMount() {
    modalElement?.appendChild(this.element);
  }

  componentWillUnmount() {
    modalElement?.removeChild(this.element);
  }

  render(): React.ReactNode {
    return ReactDOM.createPortal(this.props.children, this.element);
  }
}

export default Modal;