import styled from 'styled-components'
import { cores } from '../../styles'

const Formulario = styled.form`
  height: 360px;
  width: 100%;
  background-image: url('https://cdn.pixabay.com/photo/2018/08/10/15/45/woman-3597101_1280.jpg');
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${cores.primaria};
    content: '';
    opacity: 0.7;
  }

  @media (max-width: 768px) {
    height: auto;
    padding: 24px 0;

    font-size: 32px;
  }
`
const Divisoria = styled.div`
  position: relative;
  color: #eee;
`

const TituloHero = styled.h2`
  font-family: Gloock, serif;
  font-size: 48px;
`
export { Formulario, Divisoria, TituloHero }
