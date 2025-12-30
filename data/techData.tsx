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

export type TechDataTechnologiesType = {
        icon: React.ReactNode | undefined,
        name: string,
        color?: {color: string} | {background: string}
}
type TechDataType = {
    id: number,
    section: string,
    technologies: TechDataTechnologiesType[]
}[]

export const techData: TechDataType = [
    {
        id: 0,
        section: "tech.frontend",
        technologies:[
            {
                icon: <SiJavascript/>,
                name: "JavaScript",
                color:{color: "#F7DF1E"}
            },
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
                icon: <SiHtml5 />,
                name: "HTML",
                color:{color: "#E34F26"}
            },
            {
                icon: <SiCss3/>,
                name: "CSS / SASS / Tailwind",
                color:{color: "#1572B6"}
            },
        ]
    },
    {
        id: 1,
        section: "tech.backend",
        technologies:[
            {
                icon: <SiPhp/>,
                name: "PHP",
                color:{color: "#777BB4"}
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
        ]
    },
        {
        id: 2,
        section: "tech.database",
        technologies:[
            {
                icon: <SiMysql/>,
                name: "MySql",
                color:{color: "#4479A1"}
            },
            {
                icon: <SiMongodb/>,
                name: "MongoDB",
                color:{color: "#47A248"}
            },
            {
                icon: <DiRedis/>,
                name: "Redis",
                color:{color: "#DC382D"}
            },
            {
                icon: <SiMongoose/>,
                name: "Mongoose",
                color:{color: "#880000"}
            },
            {
                icon: <SiPrisma />,
                name: "Prisma",
                color:{color: "#0C4A6E"}
            },
          
        ]
    },
        {
        id: 3,
        section: "tech.tests",
        technologies:[
            {
                icon: <SiJest/>,
                name: "Jest",
                color:{color: "#C21325"}
            },
            {
                icon: <SiCypress/>,
                name: "Cypress",
                color:{color: "#17202C"}
            },
            {
                icon: <LuTestTubeDiagonal/>,
                name: "SuperTest",
                color:{color: "#6C757D"}
            },
          
        ]
    },
        {
        id: 4,
        section: "tech.tools",
        technologies:[
            {
                icon: <LiaGit/>,
                name: "GIT / GitHub / GitHub Actions",
                color:{color: "#F05032"}
            },
            {
                icon: <SiDocker/>,
                name: "Docker / Docker Compose / Docker Hub",
                color:{color: "#2496ED"}
            },
            {
                icon: <VscVscode/>,
                name: "VSCode",
                color:{color: "#007ACC"}
            },
            {
                icon: <SiPostman />,
                name: "Postman",
                color:{color: "#FF6C37"}
            },
            {
                icon: <SiJira />,
                name: "Jira",
                color:{color: "#0052CC"}
            },
            {
                icon: <BsFiletypeDoc/>,
                name: "jsDoc",
                color:{color: "#555"}
            },
        ]
    },
    {
        id: 5,
        section: "tech.rest",
        technologies:[
            {
                icon: <SiZod/>,
                name: "Zod",
                color:{color: "#6F2CAC"}
            },
      
            {
                icon: <SiFfmpeg  />,
                name: "FFMPEG",
                color: { color:  "#388E3C"}
            },
            {
                icon: <SiJsonwebtokens />,
                name: "JWT",
                color: {background: "linear-gradient(135deg, #00FFFF, #00AFFF, #FF007F, #B200FF)"}
            },
              {
                icon: <TbBrandFramerMotion />,
                name: "Motion Framer",
                color: {background: "linear-gradient(135deg, #ff3cac 0%, #784ba0 50%, #2b86c5 100%)"}
            },
        ]
    }
     

];