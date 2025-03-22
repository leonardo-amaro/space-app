import { styled } from 'styled-components'
import Tags from './Tags'
import Titulo from '../Titulo'
import Populares from './Populares'
import Imagens from './Imagens'

const GaleriaContainer = styled.div`
  display: flex;
  gap: 20px;
`
const SecaoFluida = styled.section`
  flex-grow: 1;
`
const ImagensContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
`

const Galeria = ({ fotos = [], aoFotoSelecionada }) => {
  return (
    <>
      <Tags />
      <GaleriaContainer>
        <SecaoFluida>
          <Titulo>
            Navegue pela galeria
          </Titulo>
          <ImagensContainer>
            {fotos.map(
              (foto) => <Imagens 
                key={foto.id} 
                foto={foto} 
                aoZoomSolicitado={aoFotoSelecionada}
              />
            )}
          </ImagensContainer>
        </SecaoFluida>
        <Populares />
      </GaleriaContainer>
    </>
  )
}

export default Galeria