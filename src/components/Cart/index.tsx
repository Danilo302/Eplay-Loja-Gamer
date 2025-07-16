import Button from '../Button'
import Tag from '../Tag'
import {
  CartContainer,
  CartItem,
  Overlay,
  Prices,
  Quantily,
  Sidebar
} from './styles'

const Cart = () => {
  return (
    <CartContainer>
      <Overlay></Overlay>
      <Sidebar>
        <ul>
          <CartItem>
            <img src="" alt="" />
            <div>
              <h3>nome do jogo</h3>
              <Tag>RPG</Tag>
              <Tag>PS5</Tag>
              <span>R$ 150</span>
            </div>
            <button type="button" />
          </CartItem>
        </ul>
        <Quantily> 2 jogos no carrinho</Quantily>
        <Prices>
          total de R$ 250.00 <span>Em até 6x sem juros</span>
        </Prices>
        <Button title="Clique aqui para continuar a compra" type="button">
          Continuar com a compra
        </Button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
