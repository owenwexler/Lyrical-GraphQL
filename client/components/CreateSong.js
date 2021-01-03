import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Link, Router, hashHistory } from 'react-router';

import ErrorCard from './ErrorCard';
import Loader from './Loader';

class CreateSong extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      validationError: false,
      loading: false,
    }
  }

  onSubmit(e) {
    e.preventDefault();

    if (this.state.title === '') {
      this.setState({ validationError: true });
      setInterval(() => {
        this.setState({ validationError: false });
      }, 2950);
      return;
    } else {
      this.setState({ loading: true });
      this.props.mutate({
        variables: {
          title: this.state.title
        }
      }).then(() => {
        hashHistory.push('/');
      });
    }
  }

  render() {
    return (
      <div>
        <Link to="/"><h5>&lt; Back</h5></Link>
        <h3>Create a New Song:</h3>
        <form onSubmit={this.onSubmit.bind(this)}>
          <label>Song Title:</label>
          <input
            onChange={e => this.setState( { title: e.target.value })}
            value={this.state.title}
          />
        </form>
        {this.state.loading ? <Loader /> : null}
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