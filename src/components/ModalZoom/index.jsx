import styled from "styled-components"
import Imagens from "../Galeria/Imagens"

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`
const DialogEstilizado = styled.dialog`
  position: absolute;
  top: 300px;
  width: 80%;
  padding: 0;
  border: none;
  background-color: transparent;
  & form {
    position: absolute;
    top: 20px;
    right: 20px;
    & button {
      cursor: pointer;
      border: none;
      background-color: transparent;
    }
  }
`

const ModalZoom = ({ foto, aoFechar }) => {
  return (
    foto && 
    <>
      <Overlay />
      <DialogEstilizado open={!!foto} onClose={aoFechar}>
        <Imagens foto={foto} expandida={true} />
        <form method="dialog">
          <button type="submit">
            <img src="/icones/fechar.png" alt="Icone para fechar modal" />
          </button>
          </form>
      </DialogEstilizado>
    </>
  )
}

export default ModalZoom