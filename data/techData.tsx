import { SiTypescript,SiJavascript,SiNextdotjs,SiReact,SiCss3,SiHtml5,SiPostman,SiZod,
        SiFfmpeg,SiJsonwebtokens,SiPhp, SiNodedotjs, SiExpress, SiMongodb, SiMysql,SiJest,
        SiCypress,SiDocker,SiJira,SiPrisma,SiMongoose} from "react-icons/si";
import {       } from "react-icons/si";
import { DiRedis, } from "react-icons/di";
import { LiaGit } from "react-icons/lia";
import { VscVscode } from "react-icons/vsc";
import { BsFiletypeDoc } from "react-icons/bs";
import { LuTestTubeDiagonal } from "react-icons/lu";
type TechDataType = {
    id: number,
    section: string,
    technologies: {
        icon: React.ReactNode | undefined,
        name: string,
        color?: string
    }[]
}[]

export const techData: TechDataType = [
    {
        id: 0,
        section: "FrontEnd",
        technologies:[
            {
                icon: <SiJavascript/>,
                name: "JavaScript",
                color: "#F7DF1E"
            },
            {
                icon: <SiTypescript/>,
                name: "Typescript",
                color: "#3178C6"
            },
            {
                icon: <SiNextdotjs/>,
                name: "Next",
                color: "#555"
            },
            {
                icon: <SiReact />,
                name: "React",
                color: "#61DAFB"
            },
            {
                icon: <SiHtml5 />,
                name: "HTML",
                color: "#E34F26"
            },
            {
                icon: <SiCss3/>,
                name: "CSS / SASS / Tailwind",
                color: "#1572B6"
            },
        ]
    },
    {
        id: 1,
        section: "BackEnd",
        technologies:[
            {
                icon: <SiPhp/>,
                name: "PHP",
                color: "#777BB4"
            },
            {
                icon: <SiNodedotjs/>,
                name: "Node",
                color: "#339933"
            },
            {
                icon: <SiExpress/>,
                name: "Express",
                color: "#555"
            },
        ]
    },
        {
        id: 2,
        section: "Bazy Danych",
        technologies:[
            {
                icon: <SiMysql/>,
                name: "MySql",
                color: "#4479A1"
            },
            {
                icon: <SiMongodb/>,
                name: "MongoDB",
                color: "#47A248"
            },
            {
                icon: <DiRedis/>,
                name: "Redis",
                color: "#DC382D"
            },
          
        ]
    },
        {
        id: 3,
        section: "Testowanie",
        technologies:[
            {
                icon: <SiJest/>,
                name: "Jest",
                color: "#C21325"
            },
            {
                icon: <SiCypress/>,
                name: "Cypress",
                color: "#17202C"
            },
            {
                icon: <LuTestTubeDiagonal/>,
                name: "SuperTest",
                color: "#6C757D"
            },
          
        ]
    },
        {
        id: 4,
        section: "Narzędzia",
        technologies:[
            {
                icon: <LiaGit/>,
                name: "GIT / GitHub / GitHub Actions",
                color: "#F05032"
            },
            {
                icon: <SiDocker/>,
                name: "Docker / Docker Compose / Docker Hub",
                color: "#2496ED"
            },
            {
                icon: <VscVscode/>,
                name: "VSCode",
                color: "#007ACC"
            },
            {
                icon: <SiPostman />,
                name: "Postman",
                color: "#FF6C37"
            },
            {
                icon: <SiJira />,
                name: "Jira",
                color: "#0052CC"
            },
            {
                icon: <BsFiletypeDoc/>,
                name: "jsDoc",
                color: "#555"
            },
        ]
    },
    {
        id: 5,
        section: "Pozostałe",
        technologies:[
            {
                icon: <SiZod/>,
                name: "Zod",
                color: "#6F2CAC"
            },
            {
                icon: <SiMongoose/>,
                name: "Mongoose",
                color: "#880000"
            },
            {
                icon: <SiPrisma />,
                name: "Prisma",
                color: "#0C4A6E"
            },
            {
                icon: <SiFfmpeg  />,
                name: "FFMPEG",
                color: "#0063C1"
            },
            {
                icon: <SiJsonwebtokens />,
                name: "JWT",
                color: "linear-gradient(135deg, #00FFFF, #00AFFF, #FF007F, #B200FF)"
            },
        ]
    }
];