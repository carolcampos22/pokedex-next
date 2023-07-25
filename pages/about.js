import Image from "next/image";
import styles from "../app/styles/About.module.css"
import RootLayout from "@/app/layout";

export default function About() {
    return (
        <RootLayout>
            <div className={styles.about}>
                <h1>Sobre o projeto</h1>
                <p>Lorem ipsum dolor sit amet. Est numquam aliquid et maxime harum in ratione modi vel esse reiciendis! Ea excepturi sint eos commodi consectetur et voluptates beatae est ullam saepe id doloribus magni et voluptates dolore et quibusdam odio. Eos consequatur accusamus ut ratione harum id quisquam perspiciatis id dolorem delectus. Et tempore enim est rerum internos aut consequatur unde est molestias error eum cupiditate repudiandae. </p>
                <Image src="/images/charizard.png" width="300" height="300" alt="Charizard"/>
            </div>
        </RootLayout>
    )
}