import Tag from '../Tag'
import { Card, Descricao, Titulo } from './styles'

const Product = () => {
  return (
    <Card>
      <img src="" alt="" />
      <Titulo>Nome do jogo</Titulo>
      <Tag>Categoria</Tag>
      <Tag>Windows</Tag>
      <Descricao>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur amet
        suscipit dolore, nam vel aliquam vitae similique eligendi nulla dolorem
        alias odit quas expedita. Commodi fugiat quia accusantium totam facilis.
      </Descricao>
    </Card>
  )
}

export default Product
