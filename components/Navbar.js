import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <nav>
            <div>
                <Image src="/images/pokeball.png" width="30" height="30" alt="Pokedéx" />
                <h1>Pokedéx</h1>
            </div>
            <ul>
                <li>
                    <Link href="/"><p>Home</p></Link>
                </li>

                <li>
                    <Link href="/about"><p>Sobre</p></Link>
                </li>
            </ul>
        </nav>
    )
}