import React from 'react';

import { Link } from 'react-router';

import { graphql } from 'react-apollo';

import Loader from './Loader';

import gql from 'graphql-tag';
import query from '../queries/fetchSongs';

const SongList = ({ data, mutate }) => {

  const onSongDelete = (id) => {
    mutate({ variables: { id } })
      .then(() => data.refetch());
  }

  let pageData;

  if (!data.songs) {
    pageData = <div><Loader /></div>
  } else {
    pageData = (
      <div>
        <ul className="collection">
          {
            data.songs.map(({ id, title }) => {
              let linkText = `songs/${id}`;
              return (
                <div className="collection-item">
                  <Link to={linkText}>
                    <li key={id}><h5>{title}</h5></li>
                  </Link>
                  <i className="material-icons" onClick={() => onSongDelete(id)}>delete</i>
                </div>
              );
            })
          }
        </ul>
        <Link to="/songs/new" className="btn-floating btn-large blue right">
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

const mutation = gql`
  mutation DeleteSong($id: ID) {
    deleteSong(id: $id) {
      id
    }
  }
`

export default graphql(mutation)(
  graphql(query)(SongList)
);