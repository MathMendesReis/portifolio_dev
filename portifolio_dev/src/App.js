import { ThemeProvider } from 'styled-components';
import { GlobalStyled } from './components/globalStyled/globalStlyed';
import { theme } from '../src/components/globalStyled/theme/theme'
import { Router } from './components/routers/Routers';
import { GlobalState } from './components/context/globalState';
import { Header } from './components/header';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyled />
      <GlobalState>
        <Header/>
        <Router />
      </GlobalState>
    </ThemeProvider>
  );
}

export default App;
