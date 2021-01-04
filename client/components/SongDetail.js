import React from 'react';

import { graphql } from 'react-apollo';

import getSongByID from '../queries/getSongByID';

import Loader from './Loader';

const SongDetail = (props) => {

  console.log('SongDetail props: ', props);

  let pageData;

  if (props.loading || !props.data.song) {
    pageData = <Loader />
  } else {
    const { song } = props.data
    pageData = <h3 className="center-align"> {song.title} </h3>
  }

  return (
    <div className="container">
      { pageData }
    </div>

  )
}

export default graphql(getSongByID, {
  options: (props) => { return { variables: { id: props.params.id } } }
})(SongDetail);

