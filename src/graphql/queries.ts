// src/graphql/queries.ts
import {
    ApolloClient,
    from,
    gql,
    HttpLink,
    InMemoryCache,
} from "@apollo/client";

export const GET_ROCKETS = gql`
    query GetRockets {
        rockets {
            id
            name
            description
        }
    }
`;

const link = from([
    new HttpLink({ uri: "https://spacex-production.up.railway.app/" }),
]);

export const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: link,
});
