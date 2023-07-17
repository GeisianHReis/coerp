import { createContext, useState, ReactNode } from 'react';

interface UnidadeContextType {
  unidadeSelecionada: string;
  setUnidadeSelecionada: (unidade: string) => void;
}

const UnidadeContext = createContext<UnidadeContextType>({
  unidadeSelecionada: '',
  setUnidadeSelecionada: () => {},
});

interface UnidadeProviderProps {
  children: ReactNode;
}

export const UnidadeProvider = ({ children }: UnidadeProviderProps) => {
  const [unidadeSelecionada, setUnidadeSelecionada] = useState('');

  return (
    <UnidadeContext.Provider value={{ unidadeSelecionada, setUnidadeSelecionada }}>
      {children}
    </UnidadeContext.Provider>
  );
};

export default UnidadeContext;