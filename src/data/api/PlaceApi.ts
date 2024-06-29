import { gql } from "@apollo/client";

export const GET_PLACES = gql`
query PlacesQuery {
    places {
        key
        place {
            type
            name 
            coordinates
        }
    }
  }
}
`;

