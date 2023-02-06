import styles from '../styles/Estiloso.module.css'
import Link from 'next/link'

export default function Estiloso() {
   return (
    <div>
      <Link href="/">
        Voltar
      </Link>
      <h1 className={styles.red}>
        Estilo usando css modulos
      </h1>
    </div>
   )
} 