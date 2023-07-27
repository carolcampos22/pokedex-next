import Image from "next/image";
import styles from "../app/styles/About.module.css"
import RootLayout from "@/app/layout";

export default function About() {
    return (
        <RootLayout>
            <div className={styles.about}>
                <h1>Sobre o projeto</h1>
                <p>O Pokédex é um projeto criado para exibir informações sobre os diferentes pokémons disponíveis na série de jogos Pokémon.
                    Aqui, você pode encontrar informações básicas sobre os Pokémon.
                </p>
                <p>
                    Este projeto foi desenvolvido utilizando React e Next.js, juntamente com a API pública do PokéAPI para obter os dados dos Pokémon.
                    É uma demonstração simples de como criar uma Pokédex básica em uma aplicação web utilizando tecnologias modernas.
                </p>
                <p>Este projeto foi criado para fins de aprendizado.</p>
                <Image src="/images/charizard.png" width="300" height="300" alt="Charizard" />
            </div>
        </RootLayout>
    )
}