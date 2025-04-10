import styled from "styled-components";

export const ListaProgramacao = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    margin-left: 12%;
    margin-right: 8%;
    margin-top: 120px;
    
    font-size: 16pt;
    font-family: ${(props) => props.theme["font-family-paragraph"]};
    color: black;
  
    @media screen and (max-width: 650px) {
        margin-top: 0;
        margin-left: 5%;
        margin-right: 5%;
    }

    h1 {
        display: flex;
        align-items: center;
        justify-content: center;

        color: ${(props) => props.theme["black"]};
        font-family: ${(props) => props.theme["font-family-heading"]};
        font-size: ${(props) => props.theme["size-heading"]};
        @media screen and (max-width: 650px) {
            font-size: ${(props) => props.theme["size-mobile-heading"]};
        }
    }
    p{
        margin-bottom: 1em;
        color: ${(props) => props.theme["black"]};
        font-family: ${(props) => props.theme["font-family-paragraph"]};
        font-size: ${(props) => props.theme["size-paragraph"]};
    }
`;

export const Box = styled.main`
    display: flex;
    flex-direction: row;
`;

export const GaleriaDaliderança = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto auto;
    margin-bottom: 10%;
    @media screen and (max-width: 1020px) {
        grid-template-columns: auto auto auto auto;
    }
    @media screen and (max-width: 850px) {
        grid-template-columns: auto auto auto;
    }
    @media screen and (max-width: 650px) {
        grid-template-columns: auto auto;
    }
`;
export const Liderança = styled.div`
    display: flex;
    flex-direction: column;

    border-radius: 8px;
    padding: 0.5em;
    img{
        border-radius: 8px;
        width: 150px;
    }
`;

export const SobreSection = styled.section`
  padding: 5rem 1.5rem 3rem;
  background-color: white;
  color: black;
  position: relative;

  .text-center {
    text-align: center;
    position: relative;
    margin-bottom: 2rem;

    h2 {
      font-size: 3rem;
      font-weight: bold;
      line-height: 1.2;

      span {
        display: block;
      }
    }
  }

  .img-container {
    display: flex;
    justify-content: center;
    margin-top: 2rem;

    .img-sobre {
      max-width: 100%;
      width: 768px;
      border-radius: 1rem;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    }
  }

  .max-w-3xl {
    max-width: 768px;
    margin: 4rem auto 0 auto;
  }

  .bloco {
    margin-top: 3rem;

    h4 {
      display: flex;
      align-items: center;
      font-size: 1.25rem;
      font-weight: bold;

      strong {
        font-weight: 900;
        margin-left: 0.3rem;
      }

      .barra-lateral {
        width: 4px;
        height: 20px;
        background-color: #3663AC;
        margin-right: 0.5rem;
        display: inline-block;
      }
    }

    p {
      margin-top: 0.5rem;
      font-size: 1.125rem;
      line-height: 1.75rem;
    }
  }
    .topo-container {
  display: flex;
  justify-content: space-between;
  align-items: stretch; // importante para alinhar verticalmente
  max-width: 768px;
  margin: 0 auto 2rem auto;
  padding: 0 1rem;
  position: relative;
}

.quem-somos h2 {
  font-size: 3rem;
  font-weight: bold;
  line-height: 1.2;

  span {
    display: block;
  }
}

.ano-box {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  font-size: 3rem;
  font-weight: bold;
  line-height: 1;
  padding-top: 0.3rem;

  .square {
    width: 1.5rem;
    height: 1.5rem;
    background-color: #3663AC;
    margin-top: 0.5rem;
  }
}
`;