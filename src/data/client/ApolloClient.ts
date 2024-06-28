import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const client = new ApolloClient({
    link: new HttpLink({
        uri: 'https://graphql-server-4zc4oxlv1-robertos-projects-bbe25202.vercel.app/graphql'
    }),
    cache: new InMemoryCache(),
});

export default client;