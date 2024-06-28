import { gql } from "@apollo/client";

export const GET_CITIES = gql`
    query CitiesQuery {
      cities {
        id
        name
        nativeName
        currency 
        language
      }
    }
`;

export const CONTINENT_QUERY = gql`
  query ContinentQuery {
    continents {
      code
      name
    }
  }
`;