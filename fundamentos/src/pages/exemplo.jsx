import Cabecalho from "../components/Cabecalho"
import Link from 'next/link'

export default function Exemplo(){
  return (
    <div>
      <Link href="/">
        Voltar
      </Link>
      <Cabecalho nome="Henrique" idade={25} status={true}/>
      <Cabecalho nome="Henrique"/>
    </div>
  )
} 