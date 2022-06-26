import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4sl20x727cw01wg52af9s0n/master',
    cache: new InMemoryCache()
})