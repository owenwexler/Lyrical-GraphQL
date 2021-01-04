import React from 'react';

import { graphql } from 'react-apollo';
import { Link } from 'react-router';

import getSongByID from '../queries/getSongByID';

import Loader from './Loader';

const SongDetail = (props) => {

  let pageData;

  if (props.loading || !props.data.song) {
    pageData = <Loader />
  } else {
    const { song } = props.data
    pageData = <h3 className="center-align"> {song.title} </h3>
  }

  return (
    <div className="container">
      <Link to="/"><h5>&lt; Back</h5></Link>
      { pageData }
    </div>
  )
}

export default graphql(getSongByID, {
  options: (props) => { return { variables: { id: props.params.id } } }
})(SongDetail);

