import { gql } from '@apollo/client';

export const GET_ALL_RICKS = gql`
  query {
    characters(filter: { name: "rick" }) {
      info {
        count
      }
      results {
        id
        name
        status
        image
      }
    }
  }`