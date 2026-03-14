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
  getAllProgramacaoFerraz(): Promise<ProgramacaoFerrazItem[]>;
  deleteProgramacaoFerraz(itemId: string): Promise<void>;
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

export interface ProgramacaoFerrazItem {
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
      
      // Retornar o objeto completo com ID e attributes
      return {
        id: result.data.id,
        evento: result.data.attributes.evento,
        horario: result.data.attributes.horario,
        informacoes: result.data.attributes.informacoes,
        mes: result.data.attributes.mes,
        destaque: result.data.attributes.destaque
      };
    } catch (error: any) {
      console.error('[DatoCMS] Erro ao criar evento:', error);
      throw new Error(`Erro ao criar programação: ${error.message}`);
    }
  }

  async getAllProgramacaoFerraz(): Promise<ProgramacaoFerrazItem[]> {
    const MODEL_ID = 'FyHNgln3Qt-vRk8SaNqfmQ';
    
    try {
      // Primeira tentativa: buscar com filtro
      let result;
      try {
        result = await managementClient.getAllItems(MODEL_ID);
      } catch (filterError) {
        console.warn('[DatoCMS] Filtro falhou, tentando buscar todos os itens');
        // Segunda tentativa: buscar todos e filtrar manualmente
        result = await managementClient.getItems();
      }
      
      // Verificar se result.data existe e é array
      if (!result.data || !Array.isArray(result.data)) {
        console.error('[DatoCMS] Estrutura inesperada da resposta');
        return [];
      }
      
      // Filtrar apenas itens do modelo correto se necessário
      let filteredData = result.data;
      if (!MODEL_ID || result.data.length > 0) {
        filteredData = result.data.filter((item: any) => 
          item.relationships?.item_type?.data?.id === MODEL_ID ||
          item.type === 'item' // Fallback se a estrutura for diferente
        );
      }
      
      // Transformar resposta JSON:API em array simples
      const eventos = filteredData.map((item: any) => ({
        id: item.id,
        evento: item.attributes?.evento || 'Sem nome',
        horario: item.attributes?.horario || 'Sem horário',
        informacoes: item.attributes?.informacoes || null,
        mes: item.attributes?.mes || null,
        destaque: item.attributes?.destaque || false
      }));
      
      return eventos;
    } catch (error: any) {
      console.error('[DatoCMS] Erro ao buscar eventos:', error);
      throw new Error(`Erro ao buscar programações: ${error.message}`);
    }
  }

  async deleteProgramacaoFerraz(itemId: string): Promise<void> {
    try {
      await managementClient.deleteItem(itemId);
    } catch (error: any) {
      console.error('[DatoCMS] Erro ao excluir evento:', error);
      throw new Error(`Erro ao excluir programação: ${error.message}`);
    }
  }
}

export const datoApi = new DatoAPIClient();

// Exemplo de uso (remova ou adapte ao integrar em componentes):
// import { datoApi } from 'src/cms/Dato/apiClient';
// await datoApi.createProgramacaoFerraz({ evento: 'Culto Jovem', horario: '19:00', destaque: true });
