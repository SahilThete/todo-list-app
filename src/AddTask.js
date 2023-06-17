import React, { Component } from 'react';

class AddTask extends Component {
  state = {
    task: ''
  };

  handleInputChange = e => {
    this.setState({ task: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onAddTask(this.state.task);
    this.setState({ task: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Add Task"
          value={this.state.task}
          onChange={this.handleInputChange}
        />
        <button>Add</button>
      </form>
    );
  }
}

export default AddTask;