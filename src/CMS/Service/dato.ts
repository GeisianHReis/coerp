import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';

const token = 'f338721efdf012d08a7dc185f31fa1';
const httpLink = createHttpLink({
  uri: 'https://graphql.datocms.com/',
});
const authLink = setContext((_, { headers }) => {
  return {
      headers: Object.assign(
          headers || {},
          {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Authorization': `Bearer ${token}`,
          }
      )
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;