import {ApolloClient, HttpLink, InMemoryCache} from "@apollo/client";
import {getToken} from "../utils/auth-utils";

const client = new ApolloClient({
    link: new HttpLink({
        uri: `https://ap-south-1.aws.realm.mongodb.com/api/client/v2.0/app/application-0-pciwh/graphql`,
        fetch: async (uri, options) => {
            const accessToken = await getToken();
            options.headers.Authorization = `Bearer ${accessToken}`;
            return fetch(uri, options);
        },
    }),
    cache: new InMemoryCache(),
});

export default client;
