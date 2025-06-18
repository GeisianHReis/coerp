import { useState, useEffect, useCallback } from 'react';
import { Play } from '@phosphor-icons/react';
import { fetchYoutubeVideos, YoutubeVideoItem } from '../../youtube/youtubeApi';
import {
  OnlineProgrammationContainer,
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

export function OnlineProgrammationCultos() {
  const [onlineVideos, setOnlineVideos] = useState<VideoProps[]>([]);
  const loadVideos = useCallback(async (token?: string) => {
    try {
      const data = await fetchYoutubeVideos(15, token);
      
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
    }
  }, []);

  useEffect(() => {
    loadVideos();
  }, [loadVideos]);

  const handleWatchClick = (link: string) => {
    window.open(link, '_blank');
  };


  return (
    <OnlineProgrammationContainer>
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
      </VideosGrid>
    </OnlineProgrammationContainer>
  );
}