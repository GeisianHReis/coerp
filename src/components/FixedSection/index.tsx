import React, { useState } from 'react';
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
import client from '../../cms/Dato/client';
import gql from 'graphql-tag';

interface HeroSectionProps {
  unitName: string;
}

export function HeroSection({ unitName }: HeroSectionProps) {
  const [cartaz, setCartaz] = useState<string>('');
  client.query({
    query: gql`
          query {
            cartazhomeferraz {
                cartaz {
                url
                }
            }
        }
        `
  }).then((res) => {
    const cartazData = res.data.cartazhomeferraz.cartaz;
    setCartaz(cartazData.url);
    console.log('Dados do cartaz:', cartazData);
  }).catch((error) => {
    console.error('Erro ao buscar dados do cartaz:', error);
  });
  return (
    <HeroContainer>
      {!cartaz || cartaz === '' ? (
        <><TopHeaderArea>
          <Tagline>"Um Só Corpo Um Só Propósito,</Tagline>
          <MainLogoImage src={coerpLogo} alt="COERP Logo" />
          <UnitIndicator>{unitName}</UnitIndicator>
        </TopHeaderArea>
          <ImageArea>
            <BackgroundImageWrapper src={heroBackground} alt="COERP cartaz" />
            <FoundingDate>Desde 13 de Abril de 1976</FoundingDate>
          </ImageArea>
        </>
      ) : (
        <>
        <TopHeaderArea> 
        </TopHeaderArea>
          <ImageArea>
            <BackgroundImageWrapper src={cartaz} alt="COERP cartaz" />
          </ImageArea>
        </>
      )}

    </HeroContainer>
  );
}