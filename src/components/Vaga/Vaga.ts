import styled from 'styled-components'
import { cores } from '../../styles'

const Vagas = styled.li`
  border: 1px solid ${cores.primaria};
  background-color: ${cores.secundaria};
  color: ${cores.primaria};
  padding: 16px;
  transition: all ease 0.3s;
  border-radius: 8px;

  &::hover {
    background-color: ${cores.primaria};
    color: ${cores.secundaria};
  }
`

const VagaTitulo = styled.h3`
  font-weight: bold;
  margin-bottom: 16px;
`
const VagaLink = styled.a`
    border-color: ${cores.secundaria};
    background-color: ${cores.primaria};
    color: ${cores.secundaria};
    display: inline-block;
    padding: 8px 16px;
    text-decoration: none;
    margin-top: 16px;
    font-weight: bold;
    font-size: 14px;
    border-radius: 8px;
    text-align: center;
    &::hover {
      border-color: ${cores.primaria};
      background-color: ${cores.secundaria};
      color: ${cores.primaria};
    }
    @media (max-width: 768px) {
      display: block;
    }
  }
`
export { Vagas, VagaLink, VagaTitulo }
