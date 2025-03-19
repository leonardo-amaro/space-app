import { styled } from 'styled-components'

const ItemEstilizado = styled.li``

const ItemNavegacao = ({ children, iconeAtivo, iconeInativo, ativo = false }) => {
  return (
    <ItemEstilizado>
      <img 
        src={ativo ? iconeAtivo : iconeInativo} 
        alt={`Ícone da página ${children}`} 
      />
      {children}
    </ItemEstilizado>
  )
}

export default ItemNavegacao