import { useEffect, useState } from 'react';
import {
  HeroContainer,
  ImageArea,
  BackgroundImageWrapper,
} from './styles';

import heroBackground from '../../assets/Ativo 5.webp';
import client from '../../cms/Dato/client';
import gql from 'graphql-tag';

interface HeroSectionProps {
  unitName: string;
}

export function HeroSection({ unitName }: HeroSectionProps) {
  const [cartaz, setCartaz] = useState<string>('');

  useEffect(() => {
    let isMounted = true;

    client.query({
      query: gql`
        query {
          cartazhomeferraz {
            cartaz {
              url
            }
          }
        }
      `,
    })
      .then((res) => {
        if (!isMounted) return;

        const cartazData = res.data.cartazhomeferraz.cartaz;
        setCartaz(cartazData?.url ?? '');
      })
      .catch((error) => {
        console.error('Erro ao buscar dados do cartaz:', error);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <HeroContainer>
      <ImageArea>
        <a
          href="https://www.sympla.com.br/evento/celebracao-de-aniversario-50-anos-da-coerp/3345273?algoliaID=9c8da1994516efc0fdaa83927d8cd4aa"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: 'block', width: '100%' }}
        >
          <BackgroundImageWrapper src={cartaz || heroBackground} alt="COERP 50 anos" style={{ cursor: 'pointer' }} />
        </a>
      </ImageArea>
    </HeroContainer>
  );
}