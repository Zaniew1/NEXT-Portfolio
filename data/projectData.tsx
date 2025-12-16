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
                icon: <SiCypress/>,
                name: "Cypress",
                color:{color: "#17202C"}
            },
        ],
        images:["/Bhp/1.png", "/Bhp/2.png", "/Bhp/3.png"],
        github: "https://github.com/Zaniew1/BHP",
        view: "asd",
        content:[
              {
                header: "Description",
                text: "umt, aut obcaecati!",
            },
              {
                header: "Features",
                text: "atis consequunore itaque est, aut obcaecati!",
            },
            {
                header: "Tech",
                list: ["NODE_ENV: dev | prod", "NODE_ENV2: dev | prod" ],
            },
            {
                header: "Environment variables",
                text: "Lorem ilorti!",
            }
        ]
    },
     {
        id: 1,
        title: "Portfolio",
        type:"Front-end",
         technologies: [
            {
                icon: <SiExpress/>,
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
                icon: <SiCypress/>,
                name: "Cypress",
                color:{color: "#17202C"}
            },
        ],
        images:["/Portfolio/1.png", "/Portfolio/2.png"],
        github: "https://github.com/Zaniew1/NEXT-Portfolio",
        view: "https://www.mzaniewski.pl",
        content:[
              {
                header: "Description",
                text: "Projekt ten jest moim portfolio. Chciałem w nim pokazać kim jestem, czym się interesuję, w jakich technologiach pracuje i jak wygląda moje doświadczenie komercyjne.",
            },
              {
                header: "Features",
                text: "atis consequunore itaque est, aut obcaecati!",
            },
            {
                header: "Tech",
                list: ["NODE_ENV: dev | prod", "NODE_ENV2: dev | prod" ],
            },
            {
                header: "Environment variables",
                text: "Lorem ilorti!",
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
            {
                icon: <SiCypress/>,
                name: "Cypress",
                color:{color: "#17202C"}
            },
        ],
        images:["/Photography/1.png","/Photography/2.png","/Photography/3.png","/Photography/4.png","/Photography/5.png","/Photography/6.png"],
        github: "https://github.com/Zaniew1/NEXT-PhotographySite",
        view: ""
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
            {
                icon: <SiCypress/>,
                name: "Cypress",
                color:{color: "#17202C"}
            },
        ],
        images:["/Blog/1.png", "/Blog/2.png"],
        github: "https://github.com/Zaniew1/MERN-Blog",
        content:[
              {
                header: "Opis",
                text: "",
            },
              {
                header: "Quick start",
                list: ["git clone https://github.com/Zaniew1/PomodoroApp.git", "cd PomodoroApp", "npm i ", "npm run dev" ],
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