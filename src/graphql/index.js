import { gql } from '@apollo/client';

export const GET_ALL = gql`
  query GetAll($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
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
