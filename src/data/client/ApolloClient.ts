import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const client = new ApolloClient({
    link: new HttpLink({
        uri: 'https://graphql-server-brickbit-robertos-projects-bbe25202.vercel.app/graphql'
    }),
    cache: new InMemoryCache(),
});

export default client;