import { ImageContainer } from '../ImageContainer/ImageContainer';
import Image from 'next/image'
import styles from './ProjectNavElement.module.css'
export const ProjectNavElement =()=>{
    return (
        <div>
            <ImageContainer width={100} height={60} quality={100} alt={"Mateusz skupiony podczas pracy"} src={'/focus.png'}/>
        </div>

    )
}