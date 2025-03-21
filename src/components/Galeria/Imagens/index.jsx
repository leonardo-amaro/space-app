const Imagens = ({ foto }) => {
  return (
    <figure>
      <img src={foto.path} alt={`Foto de ${foto.titulo}`} />
      <figcaption>
        <p>
          {foto.titulo}
        </p>
      </figcaption>
    </figure>
  )
}

export default Imagens