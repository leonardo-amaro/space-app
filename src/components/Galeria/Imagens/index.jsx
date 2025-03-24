import styled from 'styled-components'
import BotaoIcone from '../../BotaoIcone'

const Figure = styled.figure`
  width: ${(props) => props.$expandida ? '100%' : '400px'};
  position: relative;
  max-width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  & > img {
    max-width: 100%;
    border-radius: 20px 20px 0 0;
  }
  span {
    font-size: 16px;
    color: #FFFFFF;
    background: rgba(217, 217, 217, 0.3);
    border-radius: 10px;
    transition: background-color 0.3s ease;
    padding: 12px;
    box-sizing: border-box;
    border: 2px solid transparent;
    position: absolute;
    top: 16px;
    right: 16px;
  }
  figcaption {
    background-color: #001634;
    border-radius: 0px 0px 20px 20px;
    color: white;
    box-sizing: border-box;
    padding: 12px;
    h3 {
      font-family: 'GandhiSansBold';
    }
    h4 {
      font-weight: 300;
      opacity: 0.75;
      flex-grow: 1;
    }
    h3,
    h4 {
      margin: 0;
      font-size: 16px;
    }
  }
`
const Rodape = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Imagens = ({ foto, aoZoomSolicitado, aoAlternarFavorito, expandida = false }) => {
  const iconeFavorito = foto.favorita ? '/icones/favorito-ativo.png' : '/icones/favorito.png'

  return (
    <Figure $expandida={expandida} id={`foto-${foto.id}`}>
      <span>Tag</span>
      <img src={foto.path} alt={`Foto de ${foto.titulo}`} />
      <figcaption>
        <h3>
          {foto.titulo}
        </h3>
        <Rodape>
          <h4>
            {`Fonte: ${foto.fonte}`}
          </h4>
          <BotaoIcone onClick={() => aoAlternarFavorito(foto)}>
            <img src={iconeFavorito} alt='Icone de favorito' />
          </BotaoIcone>
          { //Renderização condicional
            !expandida && <BotaoIcone aria-hidden={expandida} onClick={() => aoZoomSolicitado(foto)}>
              <img src='/icones/expandir.png' alt='Icone de expandir' />
            </BotaoIcone>
          }
        </Rodape>
      </figcaption>
    </Figure>
  )
}

export default Imagens