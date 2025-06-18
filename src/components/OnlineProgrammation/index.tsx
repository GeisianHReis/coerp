import { useState, useEffect, useCallback } from 'react';
import { Play } from '@phosphor-icons/react';
import { fetchYoutubeVideos, YoutubeVideoItem } from '../../youtube/youtubeApi';
import {
  OnlineProgrammationContainer,
  LeftSection,
  TitleBlock,
  OnlineText,
  Description,
  ViewMoreButton,
  VideosGrid,
  VideoCard,
  VideoMeta,
  VideoDate,
  VideoTitle,
  WatchButton,
} from './styles';

interface VideoProps {
  id: string;
  type: string;
  date: string;
  title: string;
  description: string;
  videoLink: string;
  thumbnail: string;
}

export function OnlineProgrammation() {
  const [onlineVideos, setOnlineVideos] = useState<VideoProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const loadVideos = useCallback(async (token?: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await fetchYoutubeVideos(6, token);
      
      const newVideos: VideoProps[] = data.items.map((item: YoutubeVideoItem) => ({
        id: item.id.videoId,
        type: 'Vídeo Online',
        date: new Date(item.snippet.publishedAt).toLocaleDateString('pt-BR'),
        title: item.snippet.title,
        description: item.snippet.description,
        videoLink: `https://www.youtube.com/watch?v=${item.id.videoId}`,
        thumbnail: item.snippet.thumbnails.medium.url,
      }));

      setOnlineVideos(prevVideos => token ? [...prevVideos, ...newVideos] : newVideos);

    } catch (err) {
      console.error('Falha ao carregar vídeos do YouTube:', err);
      setError('Não foi possível carregar os vídeos no momento.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadVideos();
  }, [loadVideos]);

  const handleWatchClick = (link: string) => {
    window.open(link, '_blank');
  };

  const handleViewMoreClick = () => {
    window.open('https://www.youtube.com/@igrejacoerp', '_blank');
  };

  return (
    <OnlineProgrammationContainer>
      <LeftSection>
        <TitleBlock>
          <h1>PROGRAMAÇÃO</h1>
          <OnlineText>ONLINE</OnlineText>
        </TitleBlock>
        <Description>
          Acompanhe nossos cultos pelo Youtube e fortaleça sua fé onde quer que esteja!
        </Description>
        <ViewMoreButton onClick={handleViewMoreClick} disabled={isLoading}>
          {isLoading ? 'Carregando...' : 'Ver Mais'}
        </ViewMoreButton>
        {error && <p style={{color: 'red', marginTop: '10px'}}>{error}</p>}
      </LeftSection>

      <VideosGrid>
        {onlineVideos.map((video) => (
          <VideoCard key={video.id}> 
            <VideoMeta>
              <span>• {video.type}</span>
              <VideoDate>• {video.date} •</VideoDate>
            </VideoMeta>
            <VideoTitle>{video.title}</VideoTitle>
            
            <WatchButton onClick={() => handleWatchClick(video.videoLink)}>
              Assistir <Play size={18} weight="fill" />
            </WatchButton>
          </VideoCard>
        ))}
        {isLoading && onlineVideos.length === 0 && <p>Carregando vídeos...</p>}
        {!isLoading && onlineVideos.length === 0 && !error && <p>Nenhum vídeo encontrado.</p>}
      </VideosGrid>
    </OnlineProgrammationContainer>
  );
}