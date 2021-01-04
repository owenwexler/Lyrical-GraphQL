import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import ErrorCard from './ErrorCard';

class CreateLyric extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: '',
      validationError: false
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.state.content === '') {
      this.setState({ validationError: true });
      setInterval(() => {
        this.setState({ validationError: false });
      }, 2950);
      return;
    } else {
      this.props.mutate({
        variables: {
          content: this.state.content,
          songId: this.props.songId
        }
      });
      this.setState({ content: '' });
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>Add a Lyric</label>
          <input onChange={e => this.setState({ content: e.target.value })} value={this.state.content} />
        </form>
        {this.state.validationError ? <ErrorCard message="Please enter a lyric" /> : null}
      </div>
    )
  }
}

const mutation = gql`
  mutation AddLyricToSong ($content: String, $songId: ID) {
    addLyricToSong(content: $content, songId: $songId) {
      id
      lyrics {
        content
      }
    }
  }
`

export default graphql(mutation)(CreateLyric);