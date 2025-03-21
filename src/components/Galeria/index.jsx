import { styled } from 'styled-components'
import Tags from './Tags'
import Titulo from '../Titulo'
import Populares from './Populares'
import Imagens from './Imagens'

const GaleriaContainer = styled.div`
  display: flex;
`
const SecaoFluida = styled.section`
  flex-grow: 1;
`

const Galeria = ({ fotos = [] }) => {
  return (
    <>
      <Tags />
      <GaleriaContainer>
        <SecaoFluida>
          <Titulo>
            Navegue pela galeria
          </Titulo>
          {fotos.map(
            (foto) => <Imagens key={foto.id} foto={foto} />
          )}
        </SecaoFluida>
        <Populares />
      </GaleriaContainer>
    </>
  )
}

export default Galeria