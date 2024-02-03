//Importando o Styled Conponents
import styled from 'styled-components'

// Atriubindo tipagem ao atributo
type BotaoProps = {
  principal: boolean
  // O ternario torna a propridade opcional
  fontSize?: string
}

// TampletaString
// Atribindo tipagem ao botão
const Botao = styled.button<BotaoProps>`
  //Caso o Botão seja o principal verde se não azul
  background-color: ${(props) => (props.principal ? 'green' : 'blue')};
  font-size: ${(props) => props.fontSize || '16px'};
`

// Criando componente a partir de outro componente
// Não usamos o ponto, e sim um contrutor, passomos o componente que vamos ultilizar
// Ele é mais especifico, por isso esta regra se sobrepoe a do componente principal, usa o efeito cascata do CSS
const BotaoPerigo = styled(Botao)`
  background-color: red;
  color: #fff;

  span {
    text-decoration: line-through;
  }
`

function Teste() {
  // Criando o atributo principal
  return (
    <>
      <Botao principal>Enviar</Botao>
      <Botao fontSize="14px" principal={false}>
        Cancelar
      </Botao>
      {/* O atributo 'as' recebe um string com uma tag HTML */}
      <BotaoPerigo as="a" principal>
        <span>Não clique aqui!</span>
      </BotaoPerigo>
    </>
  )
}

export default Teste
