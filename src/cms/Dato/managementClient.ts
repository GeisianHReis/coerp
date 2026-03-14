// Client para Content Management API (REST) do DatoCMS
// Necessário token com permissões de gestão: VITE_DATO_MANAGEMENT_TOKEN
// Endpoint correto: https://site-api.datocms.com
// Formato: JSON:API specification

import { envConfig } from '../../utils/env';

const managementToken = envConfig.datoManagementToken;
const baseUrl = 'https://site-api.datocms.com';

if (!managementToken) {
  const message = '[DatoCMS] VITE_DATO_MANAGEMENT_TOKEN não configurado. Verifique o arquivo .env.local';
  console.error(message);
  if (envConfig.isProduction) {
    throw new Error(message);
  }
}

// Interface para criação de item no DatoCMS (formato JSON:API)
export interface CreateItemPayload {
  data: {
    type: 'item';
    attributes: {
      [fieldName: string]: any; // Campos específicos do modelo
    };
    relationships: {
      item_type: {
        data: {
          type: 'item_type';
          id: string; // ID do modelo no DatoCMS
        };
      };
    };
  };
}

// Cliente REST para Content Management API
export class DatoManagementClient {
  private baseHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/vnd.api+json',
    'Authorization': `Bearer ${managementToken || ''}`,
    'X-Api-Version': '3',
  };

  async createItem(payload: CreateItemPayload): Promise<any> {
    if (!managementToken || managementToken === 'SEU_TOKEN_DE_MANAGEMENT_AQUI') {
      throw new Error('Token de management não configurado. Configure VITE_DATO_MANAGEMENT_TOKEN no .env.local');
    }

    // eslint-disable-next-line no-console
    console.log('[DatoCMS] Enviando para:', `${baseUrl}/items`);
    // eslint-disable-next-line no-console
    console.log('[DatoCMS] Headers:', { ...this.baseHeaders, Authorization: 'Bearer [HIDDEN]' });
    // eslint-disable-next-line no-console
    console.log('[DatoCMS] Payload:', payload);

    const response = await fetch(`${baseUrl}/items`, {
      method: 'POST',
      headers: this.baseHeaders,
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`DatoCMS API Error (${response.status}): ${error}`);
    }

    return response.json();
  }

  async getItems(modelId?: string): Promise<any> {
    // DatoCMS usa filter[item_type] ao invés de filter[type]
    const url = modelId 
      ? `${baseUrl}/items?filter[item_type]=${modelId}`
      : `${baseUrl}/items`;
    
    const response = await fetch(url, {
      method: 'GET',
      headers: this.baseHeaders,
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('[DatoCMS] Erro na resposta:', response.status, error);
      throw new Error(`DatoCMS API Error (${response.status}): ${error}`);
    }

    return response.json();
  }

  async getAllItems(modelId: string): Promise<any> {
    return this.getItems(modelId);
  }

  async deleteItem(itemId: string): Promise<any> {
    if (!managementToken || managementToken === 'SEU_TOKEN_DE_MANAGEMENT_AQUI') {
      throw new Error('Token de management não configurado. Configure VITE_DATO_MANAGEMENT_TOKEN no .env.local');
    }

    const response = await fetch(`${baseUrl}/items/${itemId}`, {
      method: 'DELETE',
      headers: this.baseHeaders,
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`DatoCMS API Error (${response.status}): ${error}`);
    }

    // DELETE pode retornar 204 No Content
    if (response.status === 204) {
      return null;
    }

    return response.json();
  }
}

export const managementClient = new DatoManagementClient();
export default managementClient;