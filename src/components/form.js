import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: undefined,
    };
  }
  handerData = e => {
    e.preventDefault();
    this.props.add(this.state.input);
  };

  handleInput = e => {
    this.setState = ({ input: e.target.value });
  };

  render() {
    return (
      <form onSubmit={this.HandlerData}>
        <input onChange={this.handleInput} /> Add New Item
      </form>
    );
  }
}

export default Form;
