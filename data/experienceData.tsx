import { LiaGit } from "react-icons/lia";
import { SiFfmpeg, SiJavascript, SiJira, SiMysql, SiPhp } from "react-icons/si";

export type ExperienceDataType = {
        id: 0,
        position: string,
        company: string,
        companyLogo: string,
        companyWebsite: string,
        duration: string,
        technologies: {tech: string, icon: React.ReactNode,  color:string}[],
        responsibilities: {key: number, text: string,}[]
}
export const experienceData: ExperienceDataType[] = [
    {
        id: 0,
        position: "Fullstack Developer",
        company: "exp.one.name",
        companyLogo: '/onn.jpg',
        companyWebsite: 'https://www.onnetwork.tv',
        duration: "exp.one.date",
        technologies: [
            {
                tech:"Javascript",
                icon:<SiJavascript/>,
                color: "#F7DF1E"
            },
            {
                tech:"PHP", 
                icon:<SiPhp/>,
                color: "#777BB4"
            },
            {
                tech:"MySql", 
                icon:<SiMysql/>,
                color: "#4479A1"
            },
            {
                tech:"Jira", 
                icon:<SiJira/>,
                color: "#0052CC"
            },
            {
                tech:"GIT", 
                icon:<LiaGit/>,
                color: "#F05032"
            },
            {
                tech:"FFMPEG", 
                icon:<SiFfmpeg/>,
                color: "#388E3C"
            }
        ],
        responsibilities: [
            { key: 0, text:"exp.one.description.0"},
            { key: 1, text:"exp.one.description.1"},
            { key: 2, text:"exp.one.description.2"},
            { key: 3, text:"exp.one.description.3"},
            { key: 4, text:"exp.one.description.4"}

        ]
    }
]