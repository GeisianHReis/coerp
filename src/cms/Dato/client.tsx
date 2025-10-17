// Apollo Client (v2) configurado para consumir a API GraphQL do DatoCMS.
// Token agora vem de variável de ambiente Vite: VITE_DATO_API_TOKEN.
// Nunca commitar tokens sensíveis no repositório.
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { envConfig } from '../../utils/env';

const token = envConfig.datoApiToken;

if (!token) {
  const message = '[DatoCMS] VITE_DATO_API_TOKEN não configurado. Verifique o arquivo .env.local';
  console.error(message);
  if (envConfig.isProduction) {
    throw new Error(message);
  }
}

const httpLink = createHttpLink({
  uri: 'https://graphql.datocms.com/',
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: Object.assign(
      {},
      headers || {},
      {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`,
      }
    ),
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;