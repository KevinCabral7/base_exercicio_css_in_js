import { Vagas, VagaLink, VagaTitulo } from './Vaga'

type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const Vaga = (props: Props) => (
  <Vagas>
    <ul>
      <VagaTitulo>{props.titulo}</VagaTitulo>
      <li>Localizacao: {props.localizacao}</li>
      <li>Senioridade: {props.nivel}</li>
      <li>Tipo de contratacao: {props.modalidade}</li>
      <li>
        Salário: {props.salarioMin} - {props.salarioMax}
      </li>
      <li>Requisitos: {props.requisitos.join(', ')}</li>
      <VagaLink>Ver detalhes e candidatar-se</VagaLink>
    </ul>
  </Vagas>
)

export default Vaga
