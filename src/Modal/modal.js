import React from "react";

/**
 * Modal component
 * @description renders a basic modal to the page after a user clicks a link
 */

class Modal extends React.Component {
  render() {
    return (
      <section className="modalContainer">
        <button onClick={this.props.isShown}>X</button>
        <h3>Selected Character: {this.props.children}</h3>
      </section>
    );
  }
}

export default Modal;
