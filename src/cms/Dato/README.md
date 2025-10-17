# DatoCMS API Client

Camada de abstração para consumir e enviar dados (mutations) para o DatoCMS.

## Configuração dos Tokens
Crie um arquivo `.env.local` na raiz do projeto com:
```
# Token de leitura (Content Delivery API - GraphQL)
VITE_DATO_API_TOKEN=seu_token_leitura

# Token de escrita (Content Management API - REST) para mutations
VITE_DATO_MANAGEMENT_TOKEN=seu_token_management
```
Nunca commitar esse arquivo. O token de management deve ter permissões de escrita no modelo desejado.

**IMPORTANTE**: Mutations usam REST API (JSON:API format) via `https://site-api.datocms.com/items`, não GraphQL.

## Uso Básico de Query
```ts
import gql from 'graphql-tag';
import { datoApi } from './apiClient';

async function carregarDestaques() {
  const QUERY = gql`{
    allProgramacaoferrazs(filter: { destaque: { eq: true } }, orderBy: horario_ASC, first: 3) {
      evento
      horario
    }
  }`;
  const { data } = await datoApi.query<{ allProgramacaoferrazs: { evento: string; horario: string; }[] }>({ query: QUERY });
  return data.allProgramacaoferrazs;
}
```

## Uso de Mutation (Criar Programação)
Requer `VITE_DATO_MANAGEMENT_TOKEN` válido e **ID do modelo correto**. Usa REST API JSON:API format.

**ANTES DE USAR**: Encontre o ID do modelo no DatoCMS:
1. Vá em Settings > Models
2. Clique no modelo "Programacaoferraz" 
3. Copie o ID (ex: `BxZ9Y2aKQVeTnM4hP8wLpD`)
4. Substitua `SUBSTITUA_PELO_ID_DO_MODELO` em `apiClient.ts`

```ts
import { datoApi } from './apiClient';

await datoApi.createProgramacaoFerraz({
  evento: 'Culto Jovem',
  horario: '19:00',
  destaque: true,
  mes: 10,
  informacoes: 'Traga sua Bíblia',
});
```

## Métodos Disponíveis
- `query({ query, variables?, preview? })` - executa uma query GraphQL (leitura).
- `mutate({ payload })` - executa criação via REST API JSON:API.
- `createProgramacaoFerraz(input)` - exemplo concreto de criação de programação.

## Endpoint Utilizado
- **Leitura (queries)**: `https://graphql.datocms.com/` (GraphQL)
- **Escrita (mutations)**: `https://site-api.datocms.com/items` (REST JSON:API)

## Preview / Drafts
Para obter drafts você pode adicionar cabeçalho `X-Include-Drafts: true`. Hoje o link padrão não injeta isso; adapte se necessário criando outro httpLink.

## Upload de Arquivos
Para uploads (imagens / assets) é necessário usar a REST API de uploads do Dato antes de associar o ID ao campo em uma mutation. Não implementado aqui – próximo passo se necessário.
