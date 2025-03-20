import styled from 'styled-components'
import EstilosGlobais from './components/EstilosGlobais'
import Cabecalho from './components/Cabecalho'
import BarraLateral from './components/BarraLateral'
import Banner from './components/Banner'
import imagemBanner from './assets/banner.png'

const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`
const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 90%;
`
const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`

function App() {
  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>
        <Cabecalho />
        <MainContainer>
          <BarraLateral />
          <Banner
            backgroundImage={imagemBanner}
            texto='A galeria mais completa de fotos do espaço!'
          />
        </MainContainer>
      </AppContainer>
    </FundoGradiente>
  )
}

export default App