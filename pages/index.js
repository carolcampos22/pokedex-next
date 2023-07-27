import React, { useState } from 'react';
import RootLayout from '@/app/layout';
import Image from 'next/image';
import styles from '@/app/styles/Home.module.css';
import Card from '@/components/Card';

export async function getStaticProps() {
  const maxPokemons = 251;
  const api = 'https://pokeapi.co/api/v2/pokemon/';
  const res = await fetch(`${api}/?limit=${maxPokemons}`);
  const data = await res.json();

  // add pokemon index
  data.results.forEach((item, index) => {
    item.id = index + 1;
  });

  return {
    props: {
      pokemons: data.results,
    },
  };
}

export default function Home({ pokemons }) {
  const itemsPerPage = 20;
  const [visiblePokemons, setVisiblePokemons] = useState(itemsPerPage);
  const [searchPokemon, setSearchPokemon] = useState("");

  const loadMorePokemons = () => {
    if (visiblePokemons + itemsPerPage <= pokemons.length) {
      setVisiblePokemons((prevVisiblePokemons) => prevVisiblePokemons + itemsPerPage);
    } else {
      setVisiblePokemons(pokemons.length);
    }
  };

  const handleSearchPokemon = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchPokemon(value);
  };

  //
  const filteredPokemons = pokemons.filter((pokemon) => pokemon.name.toLowerCase().includes(searchPokemon));

  return (
    <RootLayout>
      <>
        <div className={styles.title_container}>
          <h1 className={styles.title}>
            Poké<span>dex</span>
          </h1>
          <Image src="/images/pokeball.png" width="50" height="50" alt="Pokeball" />
        </div>
        <div className={styles.search_container}>
          <input
            className={styles.input}
            type="text"
            placeholder="Buscar por nome do Pokémon..."
            value={searchPokemon}
            onChange={handleSearchPokemon}
          />
        </div>
        <div className={styles.pokemon_container}>
          {filteredPokemons.length > 0 ? (
            filteredPokemons.slice(0, visiblePokemons).map((pokemon) => (
              <Card key={pokemon.id} pokemon={pokemon} />
            ))
          ) : (
            <div className={styles.not_found}>Nenhum Pokémon encontrado.</div>
          )}
        </div>
        {visiblePokemons < pokemons.length && (
          <div className={styles.button}><button onClick={loadMorePokemons}>Carregar mais Pokémon</button></div>
        )}
      </>
    </RootLayout>
  );
}
