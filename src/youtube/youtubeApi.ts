import axios from 'axios';

// Sua chave de API do YouTube (substitua pelo valor real e use variáveis de ambiente em produção)
// É ALTAMENTE RECOMENDADO usar um arquivo .env.local para isso no React
// Ex: no .env.local -> REACT_APP_YOUTUBE_API_KEY=SUA_CHAVE_AQUI
const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY || 'AIzaSyCLnN9wBlw_4CEljcEUOcC9luIf93JIDwc';

const YOUTUBE_BASE_URL = 'https://www.googleapis.com/youtube/v3';

// ID do seu canal do YouTube. Você pode encontrá-lo na URL do seu canal, ou
// nas configurações avançadas do seu canal no YouTube Studio.
// Ex: https://www.youtube.com/channel/UC-your-channel-id
const CHANNEL_ID = 'UCGLgjKNosmwLoRaDEVXR1gg';

export interface YoutubeVideoItem {
  id: {
    videoId: string;
  };
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      default: { url: string; width: number; height: number; };
      medium: { url: string; width: number; height: number; };
      high: { url: string; width: number; height: number; };
    };
    channelTitle: string;
    liveBroadcastContent: string; // 'none', 'live', 'upcoming'
  };
}

export interface YoutubeApiResponse {
  items: YoutubeVideoItem[];
  nextPageToken?: string;
  prevPageToken?: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
}

/**
 * Busca vídeos de um canal do YouTube.
 * @param maxResults Número máximo de resultados a serem retornados (padrão: 5, máximo: 50).
 * @param pageToken Token para paginação (para carregar mais vídeos).
 * @returns Promessa com a resposta da API do YouTube.
 */
export const fetchYoutubeVideos = async (maxResults: number = 5, pageToken?: string): Promise<YoutubeApiResponse> => {
  try {
    const params = {
      key: YOUTUBE_API_KEY,
      channelId: CHANNEL_ID,
      part: 'snippet,id', // Retorna informações básicas e ID do vídeo
      order: 'date', // Ordena por data de publicação (mais recente primeiro)
      type: 'video', // Busca apenas vídeos (não playlists, canais, etc.)
      maxResults: Math.min(maxResults, 20), // Limita para não exceder o máximo da API
      ...(pageToken && { pageToken }), // Adiciona pageToken se existir
    };

    const response = await axios.get<YoutubeApiResponse>(`${YOUTUBE_BASE_URL}/search`, { params });
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar vídeos do YouTube:', error);
    throw error;
  }
};
