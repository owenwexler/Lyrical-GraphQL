import React from 'react';

import { Link } from 'react-router';

import { graphql } from 'react-apollo';

import Loader from './Loader';

import gql from 'graphql-tag';
import query from '../queries/fetchSongs';

const SongList = ({ data }) => {
  let pageData;

  if (!data.songs) {
    pageData = <div><Loader /></div>
  } else {
    pageData = (
      <div>
        <ul className="collection">
          {
            data.songs.map(song => {
              return <li key={song.id} className="collection-item"><h5>{song.title}</h5></li>
            })
          }
        </ul>
        <Link to="/songs/new" className="btn-floating btn-large red right">
          <i className="material-icons">add</i>
        </Link>
      </div>
    )
  }

  return (
    <div>
      {pageData}
    </div>
  )
}

export default graphql(query)(SongList);
