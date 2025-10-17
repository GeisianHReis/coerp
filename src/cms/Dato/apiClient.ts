import client from './client';
import { managementClient, CreateItemPayload } from './managementClient';
import { ApolloQueryResult } from 'apollo-client';

// Interface genérica de interação com DatoCMS
export interface IDatoAPIClient {
  query<TData = any, TVars = Record<string, any>>(options: {
    query: any; // DocumentNode
    variables?: TVars;
    preview?: boolean;
  }): Promise<ApolloQueryResult<TData>>;
  mutate<TData = any>(options: {
    payload: CreateItemPayload;
  }): Promise<TData>;
  createProgramacaoFerraz(input: CreateProgramacaoFerrazInput): Promise<CreateProgramacaoFerrazPayload>;
}

// Tipos de exemplo para uma mutation (ajuste conforme o schema real do DatoCMS)
export interface CreateProgramacaoFerrazInput {
  evento: string;
  horario: string;
  informacoes?: string;
  mes?: number;
  destaque?: boolean;
  descricao?: string;
}

export interface CreateProgramacaoFerrazPayload {
  id: string;
  evento: string;
  horario: string;
  informacoes?: string;
  mes?: number;
  destaque?: boolean;
}

class DatoAPIClient implements IDatoAPIClient {
  async query<TData, TVars>(options: { query: any; variables?: TVars; preview?: boolean }) {
    return client.query<TData, TVars>({
      query: options.query,
      variables: options.variables,
      // header X-Include-Drafts para preview: Apollo link já injeta Authorization
      // podemos passar contexto se necessário para drafts.
      fetchPolicy: options.preview ? 'no-cache' : 'cache-first',
    });
  }

  async mutate<TData>(options: { payload: CreateItemPayload }): Promise<TData> {
    const result = await managementClient.createItem(options.payload);
    return result.data || result; // Retorna o item criado
  }

  async createProgramacaoFerraz(input: CreateProgramacaoFerrazInput): Promise<CreateProgramacaoFerrazPayload> {
    // ID do modelo Programacaoferraz no DatoCMS
    const MODEL_ID = 'FyHNgln3Qt-vRk8SaNqfmQ';
    
    // Formato JSON:API correto
    const payload = {
      data: {
        type: 'item',
        attributes: {
          evento: input.evento,
          horario: input.horario,
          informacoes: input.informacoes || null,
          mes: input.mes || null,
          destaque: input.destaque || false,
          // Se o campo descricao existir e for text, adicione aqui
          // descricao: input.descricao || null,
        },
        relationships: {
          item_type: {
            data: {
              type: 'item_type',
              id: MODEL_ID
            }
          }
        }
      }
    };

    try {
      const result = await managementClient.createItem(payload as any);
      return result.data.attributes;
    } catch (error: any) {
      throw new Error(`Erro ao criar programação: ${error.message}`);
    }
  }
}

export const datoApi = new DatoAPIClient();

// Exemplo de uso (remova ou adapte ao integrar em componentes):
// import { datoApi } from 'src/cms/Dato/apiClient';
// await datoApi.createProgramacaoFerraz({ evento: 'Culto Jovem', horario: '19:00', destaque: true });
