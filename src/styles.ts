// Através do createGlobalStyle temos acesso ao DOM, de toda a arvore HTML
import { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
  }
`
export default EstiloGlobal
