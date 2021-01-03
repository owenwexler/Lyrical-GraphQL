import React from 'react';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import { songTitles } from '../queries/queries';

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
    pageData = <div><h1>Loading...</h1></div>
  } else {
    pageData = (
      <ul className="collection">
        {
          data.songs.map(song => {
            return <li key={song.id} className="collection-item"><h1>{song.title}</h1></li>
          })
        }
      </ul>
    )
  }

  return (
    <div>
      {pageData}
    </div>
  )
}

export default graphql(query)(SongList);
