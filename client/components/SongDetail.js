import React from 'react';

import { graphql } from 'react-apollo';
import { Link } from 'react-router';

import getSongByID from '../queries/getSongByID';

import Loader from './Loader';
import CreateLyric from './CreateLyric';

const SongDetail = (props) => {

  let pageData;
  let song;

  if (props.loading || !props.data.song) {
    pageData = <Loader />
  } else {
    song = props.data.song;
    pageData = <h3 className="center-align"> {song.title} </h3>
  }

  return (
    <div className="container">
      <Link to="/"><h5>&lt; Back</h5></Link>
      { pageData }
      <br />
      {props.data.song ? <CreateLyric songId={song.id}/> : <Loader />}
    </div>
  )
}

export default graphql(getSongByID, {
  options: (props) => { return { variables: { id: props.params.id } } }
})(SongDetail);

