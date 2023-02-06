import styles from '../styles/Estiloso.module.css'
import Link from 'next/link'
import Layout from "../components/Layout"

export default function Estiloso() {
   return (
    <div>
      <Link href="/">
        Voltar
      </Link>
      <Layout titulo="Titulo teste">
        <h1 className={styles.red}>
          Estilo usando css modulos
        </h1>
      </Layout>
    </div>
   )
} 