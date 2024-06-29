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
`;

export const GET_PLACES_FILTERED = gql`
query PlacesQueryByKey($key: String!) {
    place(key: $key) {
        key
        place {
            type
            name 
            coordinates
        }
    }
}
`;


