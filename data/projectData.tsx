import { SiTypescript,SiJavascript,SiNextdotjs,SiReact,SiCss3,SiHtml5,SiPostman,SiZod,
        SiFfmpeg,SiJsonwebtokens,SiPhp, SiNodedotjs, SiExpress, SiMongodb, SiMysql,SiJest,
        SiCypress,SiDocker,SiJira,SiPrisma,SiMongoose} from "react-icons/si";
import {       } from "react-icons/si";
import { DiRedis, } from "react-icons/di";
import { LiaGit } from "react-icons/lia";
import { VscVscode } from "react-icons/vsc";
import { BsFiletypeDoc } from "react-icons/bs";
import { LuTestTubeDiagonal } from "react-icons/lu";
import { TbBrandFramerMotion } from "react-icons/tb";
import { TechDataTechnologiesType } from "./techData";

export type ProjectDataType = {
    id: number, 
    title: string,
    type: string,
    technologies: TechDataTechnologiesType[],
    images: string[],
    github?: string,
    view?: string,
    content?: {header?:string, text?: string, image?:string, list?:string[]}[]

}


export const projectData : ProjectDataType[] = [
    {
        id: 0,
        title: "BHP (Saas)",
        type:"Full-stack",
        technologies: [
            {
                icon: <SiTypescript/>,
                name: "Typescript",
                color:{color: "#3178C6"}
            },
            {
                icon: <SiNodedotjs/>,
                name: "Node",
                color:{color: "#339933"}
            },
            {
                icon: <SiExpress/>,
                name: "Express",
                color:{color: "#555"}
            },
            {
                icon: <SiReact />,
                name: "React",
                color:{color: "#61DAFB"}
            },
            {
                icon: <SiZod/>,
                name: "Zod",
                color:{color: "#6F2CAC"}
            },
            {
                icon: <BsFiletypeDoc/>,
                name: "jsDoc",
                color:{color: "#555"}
            },
            {
                icon: <SiJest/>,
                name: "Jest",
                color:{color: "#C21325"}
            },
            {
                icon: <SiPrisma />,
                name: "Prisma",
                color:{color: "#0C4A6E"}
            },
            {
                icon: <SiDocker/>,
                name: "Docker",
                color:{color: "#2496ED"}
            },
            {
                icon: <SiJsonwebtokens />,
                name: "JWT",
                color: {background: "linear-gradient(135deg, #00FFFF, #00AFFF, #FF007F, #B200FF)"}
            },
           
        ],
        images:["/Bhp/1.png", "/Bhp/2.png", "/Bhp/3.png"],
        github: "https://github.com/Zaniew1/BHP",
        view: "",
        content:[
              {
                header: "Opis - w trakcie rozwoju",
                text: "Aplikacja ta powstaje z inicjatywy mojego brata, który pracuje jako BHP-owiec w dużej firmie produkcyjnej. Potrzebował on systemu do zarządzania firmami, działami i pracownikami.",
            },
             {
                header: "Funkcje",
                list: ["system autoryzacji i autentykacji",
                        "zarządzanie firmami",
                        "zarządzanie działami",
                        "zarządzanie pracownikami",
                        "przypominanie o zaległych szkoleniach bhp pracowników (maile)",
                        "przypominanie o zaległych badaniach lekarskich (maile)",
                        "drukowanie skierowania na badania lekarskie",
                        "weryfikacja NIP-u w krajowym rejestrze",
                        "przechowywanie dokumentów firm, działów i pracowników",
                        "import/export dokumentów excel",
                        "wykonywanie ocen ryzyka miejsca pracy",
                        "wykonywanie kontrol miejsca pracy",
                        "zgłaszanie wypadków pracowników",
                ]
            },
              {
                header: "Uruchomienie - Docker ",
                list: ['git clone ', 'cd BHP', 'docker-compose up --build'],
            },
            {
                header: "Environment variables",
                list: [''],
            }
        ]
    },
     {
        id: 1,
        title: "Portfolio",
        type:"Front-end",
         technologies: [
            {
                icon: <SiTypescript/>,
                name: "Typescript",
                color:{color: "#3178C6"}
            },
            {
                icon: <SiReact />,
                name: "React",
                color:{color: "#61DAFB"}
            },
            {
                icon: <SiNextdotjs/>,
                name: "Next",
                color:{color: "#555"}
            },
            {
                icon: <TbBrandFramerMotion/>,
                name:"Framer Motion",
                color: {background: "linear-gradient(135deg, #ff3cac 0%, #784ba0 50%, #2b86c5 100%)"}
            }
        ],
        images:["/Portfolio/1.png", "/Portfolio/2.png"],
        github: "https://github.com/Zaniew1/NEXT-Portfolio",
        view: "https://www.mzaniewski.pl",
        content:[
            {
                header: "Opis",
                text: "Projekt ten jest moim portfolio. Chciałem w nim pokazać kim jestem, czym się interesuję, w jakich technologiach pracuje i jak wygląda moje doświadczenie komercyjne.",
            },
            {
                header: "Uruchomienie - Docker",
                list: [
                    "git clone https://github.com/Zaniew1/NEXT-Portfolio.git", 
                    "cd NEXT-Portfolio",
                    "docker-compose up --build", 
                    "open http://localhost:3000 in your browser"
                ],
            },
            {
                header: "Uruchomienie - npm",
                list: [
                    "git clone https://github.com/Zaniew1/NEXT-Portfolio.git", 
                    "cd NEXT-Portfolio",
                    "npm i",
                    "npm run dev",
                    "open http://localhost:3000 in your browser"
                ],
            },
            {
                header: "Funkcje",
                list: [
                    "Efekt scrollowania", 
                    "Sekcje portfolio (projekty)", 
                    "O mnie / bio",
                    "Technologie i stack technologiczny",
                    "Doświadczenie zawodowe",
                    "Możliwość pobrania CV",
                    "Formularz kontaktowy",
                    "Nawigacja po sekcjach (O mnie, Projekty, Technologie, Doświadczenie, Kontakt)"
                ],
            }
        ]
    },
    {
        id: 2,
        title: "Portfolio fotografa",
        type:"Full-stack",
         technologies: [
            {
                icon: <SiTypescript/>,
                name: "Typescript",
                color:{color: "#3178C6"}
            },
            {
                icon: <SiReact />,
                name: "React",
                color:{color: "#61DAFB"}
            },
            {
                icon: <SiNextdotjs/>,
                name: "Next",
                color:{color: "#555"}
            },
        ],
        images:["/Photography/1.png","/Photography/2.png","/Photography/3.png","/Photography/4.png","/Photography/5.png","/Photography/6.png"],
        github: "https://github.com/Zaniew1/NEXT-PhotographySite",
        view: "https://react-photography-site-qbn6kf07z-zaniew1.vercel.app/",
        content:[
            {
                header: "Opis",
                text: "W tym projekcie stworzyłem nowoczesne portfolio fotograficzne w Next, dla fotografa ślubnego. Chciałem, żeby strona była prosta w nawigacji, a jednocześnie efektowna wizualnie, więc postawiłem na single-page layout z płynnym przewijaniem do poszczególnych sekcji.",
            },
            {
                header: "Uruchomienie",
                list: [
                    "git clone https://github.com/Zaniew1/NEXT-PhotographySite.git", 
                    "cd NEXT-PhotographySite",
                    "npm i",
                    "npm run dev",
                ],
            },
            {
                header: "Funkcje",
                list: [
                   "Galerie zdjęć w formie sliderów - każda sesja ślubna ma swoją prezentację zdjęć, którą użytkownik może przewijać. Użyłem tutaj Reactowego komponentu galerii, który pozwala też na powiększanie zdjęć po kliknięciu, co daje efekt pełnego podglądu.",
                    "Menu nawigacyjne - zrobiłem je jako sticky menu, które pozwala przejść do sekcji „Oferta”, „O mnie”, „Opinie” i „Kontakt” jednym kliknięciem, wykorzystując anchor links i płynne przewijanie.",
                    "Sekcje informacyjne - każda sekcja jest responsywna, zoptymalizowana pod mobilne urządzenia i desktop. Zadbałem o to, żeby tekst i zdjęcia dobrze się skalowały i były czytelne.",
                    "Responsywność i UX - cała strona działa płynnie na desktopie i na urządzeniach mobilnych, slider działa też na gesty swipe, a zdjęcia ładują się w miarę przewijania (lazy loading), żeby strona była szybka."
                ],
            }
        ]
    },
    {
        id: 3,
        title: "System autoryzacyjny",
        type:"Back-end",
         technologies: [
            {
                icon: <SiNodedotjs/>,
                name: "Node",
                color:{color: "#339933"}
            },
                {
                icon: <SiTypescript/>,
                name: "Express",
                color:{color: "#3178C6"}
            },
                {
                icon: <SiExpress/>,
                name: "Typescript",
                color:{color: "#555"}
            },
                {
                icon: <SiZod/>,
                name: "Zod",
                color:{color: "#6F2CAC"}
            },
                {
                icon: <SiJest/>,
                name: "Jest",
                color:{color: "#3178C6"}
            },
            {
                icon: <SiMongodb/>,
                name: "MongoDB ",
                color:{color: "#47A248"}
            },
             {
                icon: <SiMongoose/>,
                name: "Mongoose ",
                color:{color: "#880000"}
            },
            {
                icon: <DiRedis />,
                name: "Redis",
                color:{color: "#DC382D"}
            },
            {
                icon: <SiDocker/>,
                name: "Docker",
                color:{color: "#2496ED"}
            },
            {
                icon: <SiJsonwebtokens/>,
                name: "JWT",
                color:{background: "linear-gradient(135deg, #00FFFF, #00AFFF, #FF007F, #B200FF)"}
            },
        ],
        images:["/Auth/1.png","/Auth/2.png","/Auth/3.png" ],
        github: "https://github.com/Zaniew1/NODE-Auth",
        content:[
            {
                header: "Opis",
                text: "Celem tego projektu jest stworzenie mikrousługi, która będzie w stanie zapewnić pełną autoryzację i uwierzytelnianie przy użyciu JWT i sesji użytkownika. Aplikacja wykorzystuje zarówno token dostępu, jak i token odświeżania, aby zapewnić większe bezpieczeństwo. Sesje użytkownika stanowią dodatkowe zabezpieczenie. Użytkownik nie jest w pełni zweryfikowany, jeśli nie zweryfikuje swojego konta za pomocą kodu weryfikacyjnego przesłanego na adres e-mail. Wszystkie dane są weryfikowane przez Zod i buforowane przez Redis, a cały projekt jest konteneryzowany za pomocą Docker. Istnieje również ponad 170 testów jednostkowych i E2E o prawie 100% pokryciu.",
            },
            {
                header: "Quick start",
                list: ["git clone https://github.com/Zaniew1/NODE-Auth.git", "cd NODE-Auth", "npm i ", "npm run dev" ],
            },
            {
                header: "Funkcje",
                list: ["Autoryzacja", "Autentykacja", "Sesje użytkownika", "JWT access token i refresh token", "Wysyłanie maili dzięki Sendgrid" ],
            },
            {
                header: "Env",
                list: ["NODE_ENV", "PORT", "JWT_SECRET", "JWT_REFRESH_SECRET", "JWT_EXPIRES_IN", "APP_VERSION", "APP_ORIGIN", "MONGO_DB_PASS", "REDIS_HOST", "REDIS_PORT", "REDIS_PASS" ],
            },
        ]
    },
    {
        id: 4,
        title: "Blog",
        type:"Full-stack",
         technologies: [
            {
                icon: <SiTypescript/>,
                name: "Typescript",
                color:{color: "#3178C6"}
            },
            {
                icon: <SiReact />,
                name: "React",
                color:{color: "#61DAFB"}
            },
            {
                icon: <SiNextdotjs/>,
                name: "Next",
                color:{color: "#555"}
            },
        ],
        images:["/Blog/1.png", "/Blog/2.png"],
        github: "https://github.com/Zaniew1/MERN-Blog",
        content:[
              {
                header: "Opis",
                text: "Aplikacja ta jest blogiem, który może prowadzić więcej niż jedna osoba. Rejestracja użytkownika umożliwia mu dodawanie postów. Pod postem wyświetlać się będzie miniatura danego użytkownika oznaczając że to on wykonał dany post.",
            },
            {
                header: "Quick start",
                list: ["git clone https://github.com/Zaniew1/MERN-Blog.git", "cd MERN-Blog", "docker-compose up --build"],
            },
            {
                header: "Funkcjonalności",
                list: ["autoryzacja i autentykacja użytkownika", "dodawanie postów", "dodawanie zdjęć użytkownika", "edycja i usuwanie postów", "wysyłanie newsletterów"],
            },
        ]
    },
    {
        id: 5,
        title: "Pomodoro",
        type:"Front-end",
         technologies: [
            {
                icon: <SiHtml5/>,
                name: "HTML",
                color:{color: "#E34F26"}
            },
                 {
                icon: <SiCss3/>,
                name: "CSS",
                color:{color: "#1572B6"}
            },
                 {
                icon: <SiJavascript/>,
                name: "Javascript",
                color:{color: "#F7DF1E"}
            },
 

        ],
        images:["/Pomodoro/1.png","/Pomodoro/2.png", "/Pomodoro/3.png", "/Pomodoro/4.png", "/Pomodoro/5.png"],
        github: "https://github.com/Zaniew1/PomodoroApp",
        content:[
              {
                header: "Opis",
                text: "Ta aplikacja jest klonem strony PomoFocus.io. Strona ta jest moim pierwszym projektem, powstała w roku 2021. Jest to przykład bardziej zaawansowanej to do listy. Zawiera zegar, listę rzeczy do zrobienia oraz licznik czasu, który oblicza orientacyjny czas zakończenia zadań. Strona wykorzystuje LocalStorage dla wszystkich elementów li i ich właściwości, wszystkie ustawienia są również zapisywane w lokalnej pamięci. W ustawieniach można zmienić czasy wyświetlania zarówno zegra pracy jak i krótkiej i długiej przerwy.\n Możliwe jest ustawienie dźwięków 'cykania' podczas odliczania zegara, a także dźwięk zakończenia pracy.",
            },
              {
                header: "Quick start",
                list: ["git clone https://github.com/Zaniew1/PomodoroApp.git", "cd PomodoroApp", "npm i ", "npm run dev" ],
            },
        ]
    },
   
] 