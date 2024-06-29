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

export const GET_CITY = gql`
  query GetCity($id: Int!) {
    city(id: $id) {
      id
      name
      nativeName
      currency
      language
    }
  }
`;


