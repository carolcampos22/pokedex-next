import Image from "next/image";
import Link from "next/link";
import styles from "../app/styles/Card.module.css"

export default function Card({pokemon}) {
    const imageNumber = pokemon.id
    
    return (
        <div className={styles.card}>
            <Image 
                src={`/images/pokemons/poke_${imageNumber}.gif`}
                width="120"
                height="160"
                alt={pokemon.name}
            
            />
            <p className={styles.id}>#{pokemon.id}</p>
            <h3 className={styles.title}>{pokemon.name}</h3>
            <Link href={`/pokemon/${pokemon.id}`}>
                <p className={styles.btn}>Detalhes</p>
            </Link>
        </div>
    )
}