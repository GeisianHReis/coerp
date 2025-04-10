import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/defaultTheme"
import { GlobalStyle } from "./styles/global"
import { BrowserRouter, useLocation } from "react-router-dom"
import { Router } from "./Router"
import { Footer } from "./components/Footer"
import { TopMenu } from "./components/TopMenu"
import { Header } from "./components/Header"
import { UnidadeProvider } from "./UnidadeContext"

function AppContent() {
  const location = useLocation();
  const showTopMenuAndFooter = location.pathname !== '/inicial';

  return (
    <>
      {showTopMenuAndFooter && <Header />}
      <Router />
      {showTopMenuAndFooter && <Footer />}
      {showTopMenuAndFooter && <GlobalStyle />}
    </>
  );
}

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <UnidadeProvider>
          <AppContent />
        </UnidadeProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
