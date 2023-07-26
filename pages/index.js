import RootLayout from "@/app/layout";
import Image from "next/image";
import styles from "../app/styles/Home.module.css"
import Card from "@/components/Card";

export async function getStaticProps() {
    const maxPokemons = 251
    const api = 'https://pokeapi.co/api/v2/pokemon/'
    const res = await fetch(`${api}/?limit=${maxPokemons}`)
    const data = await res.json()
    
    //add pokemon index
    data.results.forEach((item, index) => {
        item.id = index + 1
    });

    return {
        props: {
            pokemons: data.results,
        },
    }
}

export default function Home({ pokemons }) {
    
    return (
        <RootLayout>
            <>
                <div className={styles.title_container}>
                    <h1 className={styles.title}>Poké<span>dex</span></h1>
                    <Image src="/images/pokeball.png" width="50" height="50" alt="Pokeball" />
                </div>
                <div className={styles.pokemon_container}>
                    {pokemons.map((pokemon) => (
                        <Card key={pokemon.id} pokemon={pokemon} />
                    ))} {/*map com parentesis pq está retornando um objeto (JSX) */}
                </div>
            </>
        </RootLayout>
    )
}

  //link do vídeo do projeto original: https://www.youtube.com/watch?v=5ic5drXl3so&list=PLnDvRpP8BnezfJcfiClWskFOLODeqI_Ft&index=18
