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
    description: string,
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
        description:"To jest przykładowy opis",
        images:["Bhp/1.png", "Bhp/2.png", "Bhp/3.png"],
        github: "https://github.com/Zaniew1/BHP",
        view: "asd",
        content:[
              {
                header: "Description",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore excepturi officia sint at natus delectus obcaecati quibusdam! Perspiciatis consequuntur dolorum dolorem eum laboriosam, quae animi dolore itaque est, aut obcaecati!",
            },
              {
                header: "Features",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore excepturi officia sint at natus delectus obcaecati quibusdam! Perspiciatis consequuntur dolorum dolorem eum laboriosam, quae animi dolore itaque est, aut obcaecati!",
            },
            {
                header: "Tech",
                list: ["NODE_ENV: dev | prod", "NODE_ENV2: dev | prod" ],
            },
            {
                header: "Environment variables",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore excepturi officia sint at natus delectus obcaecati quibusdam! Perspiciatis consequuntur dolorum dolorem eum laboriosam, quae animi dolore itaque est, aut obcaecati!",
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
                icon: <SiCypress/>,
                name: "Cypress",
                color:{color: "#17202C"}
            },
        ],
        description:"To jest portoflio opis",
        images:["Portfolio/1.png", "Portfolio/2.png"],
        github: "https://github.com/Zaniew1/NEXT-Portfolio",
        view: "https://www.mzaniewski.pl"
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
        description:"To jest przykładowy opis",
        images:["Photography/1.png","Photography/2.png","Photography/3.png","Photography/4.png","Photography/5.png","Photography/6.png"],
        github: "https://github.com/Zaniew1/NEXT-PhotographySite",
        view: ""
    },
    {
        id: 3,
        title: "System autoryzacyjny",
        type:"Back-end",
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
        description:"To jest przykładowy opis",
        images:["Auth/1.png","Auth/2.png","Auth/3.png" ],
        github: "https://github.com/Zaniew1/NODE-Auth"
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
        description:"To jest przykładowy opis",
        images:["Blog/1.png", "Blog/2.png"],
        github: "https://github.com/Zaniew1/MERN-Blog"
    },
    {
        id: 5,
        title: "Pomodoro",
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
                icon: <SiCypress/>,
                name: "Cypress",
                color:{color: "#17202C"}
            },
        ],
        description:"To jest przykładowy opis",
        images:["Pomodoro/1.png","Pomodoro/2.png", "Pomodoro/3.png", "Pomodoro/4.png", "Pomodoro/5.png"],
        github: "https://github.com/Zaniew1/PomodoroApp"
    },
   
] 