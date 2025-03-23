import styled from 'styled-components'
import EstilosGlobais from './components/EstilosGlobais'
import Cabecalho from './components/Cabecalho'
import BarraLateral from './components/BarraLateral'
import Banner from './components/Banner'
import imagemBanner from './assets/banner.png'
import Galeria from './components/Galeria'
import fotos from './fotos.json'
import { useState } from 'react'
import ModalZoom from './components/ModalZoom'

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
  margin-top: 12px;
  display: flex;
  gap: 24px;
`
const ConteudoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

const App = () => {
  const [fotosGaleria, setFotosGaleria] = useState(fotos)
  const [fotoSelecionada, setFotoSelecionada] = useState(null)

  function alternarFavorito(foto) {
    setFotosGaleria(fotosGaleria.map((fotoAtual) => {
      return {
        ...fotoAtual,
        favorita: fotoAtual.id === foto.id ? !fotoAtual.favorita : fotoAtual.favorita
      }
    }))
  }

  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>
        <Cabecalho />
        <MainContainer>
          <BarraLateral />
          <ConteudoGaleria>
            <Banner
              backgroundImage={imagemBanner}
              texto='A galeria mais completa de fotos do espaço!'
            />
            <Galeria 
              fotos={fotosGaleria}
              aoFotoSelecionada={(foto) => setFotoSelecionada(foto)}
              aoAlternarFavorito={alternarFavorito} 
            />
          </ConteudoGaleria>
        </MainContainer>
      </AppContainer>
      <ModalZoom 
        foto={fotoSelecionada} 
        aoFechar={() => setFotoSelecionada(null)}
      />
    </FundoGradiente>
  )
}

export default App