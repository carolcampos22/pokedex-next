import RootLayout from "@/app/layout";

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
  
  export default function Home({pokemons}) {
    return (
      <RootLayout>
        <div>
        <h1>Pokedex</h1>
        <ul>
          {pokemons.map((pokemon) => (
            <li key={pokemon.id}>{pokemon.name}</li>
          ))} {/*map com parentesis pq está retornando um objeto (JSX) */}
        </ul>
      </div>
      </RootLayout>
    )
  }
  
  //link do vídeo do projeto original: https://www.youtube.com/watch?v=5ic5drXl3so&list=PLnDvRpP8BnezfJcfiClWskFOLODeqI_Ft&index=18
  