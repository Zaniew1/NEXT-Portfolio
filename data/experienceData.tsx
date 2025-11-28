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
        company: "Onnetwork.tv",
        companyLogo: '/onn.jpg',
        companyWebsite: 'https://www.onnetwork.tv',
        duration: "05.2022 - obecnie",
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
            { key: 0, text:"Tworzenie oraz utrzymanie aplikacji webowych wykorzystywanych w firmie"},
            { key: 1, text:"Integracja aplikacji z zewnętrznymi API"},
            { key: 2, text:"Tworzenie i optymalizacja zapytań do bazy danych MySql"},
            { key: 3, text:"Współpraca z zespołem projektowym w metodyce Agile"},
            { key: 4, text:"Udział w planowaniu oraz estymacji zadań"}

        ]
    }
]