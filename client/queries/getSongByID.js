import gql from 'graphql-tag';

export default gql`
  query GetSongByID ($id: ID!) {
    song(id: $id) {
      title
      lyrics {
        id
        likes
        content
      }
    }
  }
`;