import React from 'react';

import { Link } from 'react-router';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import Loader from './Loader';

const query = gql`
  {
    songs {
      id
      title
    }
  }
`;

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
              return <li key={song.id} className="collection-item"><h3>{song.title}</h3></li>
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
