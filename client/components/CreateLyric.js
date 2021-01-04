import React, { Component } from 'react';

class CreateLyric extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ''
    }
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>Add a Lyric</label>
          <input onChange={e => this.setState({ content: e.target.value })} value={this.state.content} />
        </form>
      </div>
    )
  }
}

export default CreateLyric;