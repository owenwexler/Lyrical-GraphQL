import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import ErrorCard from './ErrorCard';

class CreateSong extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      validationError: false,
    }
  }

  onSubmit(e) {
    e.preventDefault();

    if (this.state.title === '') {
      this.setState({ validationError: true });
      setInterval(() => {
        this.setState({ validationError: false });
      }, 2500);
    } else {
      this.props.mutate({
        variables: {
          title: this.state.title
        }
      })
    }
  }

  render() {
    return (
      <div>
        <h3>Create a New Song:</h3>
        <form onSubmit={this.onSubmit.bind(this)}>
          <label>Song Title:</label>
          <input
            onChange={e => this.setState( { title: e.target.value })}
            value={this.state.title}
          />
        </form>
        {this.state.validationError ? <ErrorCard message="Please enter a song title." /> : null}
      </div>
    );
  }
}

const mutation = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      title
    }
  }
`;

export default graphql(mutation)(CreateSong);