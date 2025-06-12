import React from 'react';
import { Play } from '@phosphor-icons/react'; 
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
  type: string;
  date: string;
  title: string;
  videoLink: string;
}

const onlineVideos: VideoProps[] = [
  {
    type: 'Culto da Família',
    date: '09/03',
    title: 'A escolha da melhor parte - Pr. Gonçalves.',
    videoLink: 'https://www.youtube.com',
  },
  {
    type: 'Culto da Família',
    date: '02/03',
    title: 'Tema da palavra - Pr. Nome.',
    videoLink: 'https://www.youtube.com',
  },
  {
    type: 'Culto da Família',
    date: '23/02',
    title: 'Tema da palavra - Pr. Nome.',
    videoLink: 'https://www.youtube.com',
  },
  {
    type: 'Culto da Família',
    date: '16/02',
    title: 'Tema da palavra - Pr. Nome.',
    videoLink: 'https://www.youtube.com',
  },
  {
    type: 'Culto da Família',
    date: '09/02',
    title: 'Tema da palavra - Pr. Nome.',
    videoLink: 'https://www.youtube.com',
  },
];

export function OnlineProgrammation() {
  const handleWatchClick = (link: string) => {
    window.open(link, '_blank');
  };

  const handleViewMoreClick = () => {
    console.log('Navigating to full programation page...');
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
        <ViewMoreButton onClick={handleViewMoreClick}>
          Ver Mais
        </ViewMoreButton>
      </LeftSection>

      <VideosGrid>
        {onlineVideos.map((video, index) => (
          <VideoCard key={index}>
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