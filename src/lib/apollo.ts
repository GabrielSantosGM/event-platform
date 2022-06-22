import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oqx2ju0vgs01xkaf6d8nbb/master',
    cache: new InMemoryCache()
})