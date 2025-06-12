import React from 'react';
import {
  HeroContainer,
  TopHeaderArea,
  Tagline,
  MainLogoImage, 
  UnitIndicator,
  ImageArea,
  BackgroundImageWrapper,
  FoundingDate,
} from './styles';


import heroBackground from '../../assets/capa.jpg';
import coerpLogo from '../../assets/capa_coerp.svg';

interface HeroSectionProps {
  unitName: string;
}

export function HeroSection({ unitName }: HeroSectionProps) {
  return (
    <HeroContainer>
      <TopHeaderArea>
        <Tagline>"Um Só Corpo Um Só Propósito,</Tagline>
        <MainLogoImage src={coerpLogo} alt="COERP Logo" />
        <UnitIndicator>{unitName}</UnitIndicator>
      </TopHeaderArea>

      <ImageArea>
        <BackgroundImageWrapper src={heroBackground} alt="COERP Church Service" />
        <FoundingDate>Desde 13 de Abril de 1976</FoundingDate>
      </ImageArea>
    </HeroContainer>
  );
}