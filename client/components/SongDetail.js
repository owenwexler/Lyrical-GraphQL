import React from 'react';

import { graphql } from 'react-apollo';

import getSongByID from '../queries/getSongByID';

const SongDetail = ({ data }) => {
  return (
    <div>
      <h3>Song Detail</h3>
    </div>
  )
}

export default graphql(getSongByID)(SongDetail);

