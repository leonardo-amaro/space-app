import { styled } from 'styled-components'
import Tags from './Tags'
import Titulo from '../Titulo'
import Populares from './Populares'

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
          {fotos.map((foto) => <div>{foto.titulo}</div>)}
        </SecaoFluida>
        <Populares />
      </GaleriaContainer>
    </>
  )
}

export default Galeria