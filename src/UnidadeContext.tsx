import { createContext, useState, ReactNode, useEffect } from 'react';

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
  const [unidadeSelecionada, setUnidadeSelecionada] = useState<string>(() => {
    return localStorage.getItem('unidadeSelecionada') || '';
  });
  
  useEffect(() => {
    localStorage.setItem('unidadeSelecionada', unidadeSelecionada);
  }, [unidadeSelecionada]);

  return (
    <UnidadeContext.Provider value={{ unidadeSelecionada, setUnidadeSelecionada }}>
      {children}
    </UnidadeContext.Provider>
  );
};

export default UnidadeContext;
