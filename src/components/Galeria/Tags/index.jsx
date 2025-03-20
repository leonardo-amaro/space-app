import { styled } from 'styled-components'
import tags from './tags.json'

const TagsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`
const TagTitulo = styled.h3`
  color: #D9D9D9;
  font-size: 16px;
  margin: 0;
`
const BotaoContainer = styled.div`
  display: flex;
  gap: 16px;
`
const Tag = styled.button`
  font-size: 16px;
  color: #FFFFFF;
  background: rgba(217, 217, 217, 0.3);
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  padding: 12px;
  box-sizing: border-box;
  border: 2px solid transparent;
  &:hover {
    border-color: #C98CF1;
  }
`

const Tags = () => {
  return (
    <TagsContainer>
      <TagTitulo>
        Busque por tags:
      </TagTitulo>
      <BotaoContainer>
        {tags.map((tag) => {
          return (
            <Tag key={tag.id}>
              {tag.titulo}
            </Tag>
          )
        })}
      </BotaoContainer>
    </TagsContainer>
  )
}

export default Tags