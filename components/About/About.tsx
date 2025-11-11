import styles from "./About.module.css"
import Image from 'next/image'
const About = () => {
    return <div className={styles.about}>
        <div className={styles.about__text}>
            <p>Kim jestem</p>
            <p>Mam na imię Maciej. Obecnie pracuję jako trener osobisty w klubie Fabryka Formy Bałtyk w Poznaniu. Trener personalny to mój zawód już od 2006 roku. By go wykonywać, ukończyłem profesjonalny kurs instruktorski ze specjalizacją fitness – sporty siłowe – kulturystyka (TKKF – Poznań). Przeszedłem również szkolenia z zakresu treningu crossfitowego, funkcjonalnego, trx oraz zakresu dietetyki w sporcie. Ciągle się rozwijam i wykorzystuję posiadaną wiedzę, prowadząc treningi personalne. Kształtuję zarówno męskie, jak i kobiece sylwetki wprowadzając w życie moich podopiecznych aktywność fizyczną oraz dietę. Teraz kiedy prowadzę również sklep z dietami online, mogę zaproponować więcej zbilansowanych rozwiązań, łącząc zdrowe odżywianie z indywidualnymi treningami personalnymi.</p>
        </div>
        <div className={styles.about__picture}>
            <Image 	fill preload={true} style={{ objectFit: 'cover' }}  quality={100} alt={"Mateusz skupiony podczas pracy"} src={'/focus.png'}></Image>
        </div>
    </div>
}

export default  About