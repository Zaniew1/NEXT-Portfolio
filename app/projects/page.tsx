import { LeftLine } from "@/components/molecules/LeftLine/LeftLine";
import { RightLine } from "@/components/molecules/RightLine/RightLine";
import { Nav } from "@/components/organisms/Nav/Nav";
import styles from "./allProjects.module.css";
import { Layout } from "@/components/molecules/Layout/Layout";
 function ProjectsPage () {
  return (
    <main >
        <Nav></Nav>
         <Layout>
            <div className={styles.projects}>
              <h1 className={styles.projects__header}>Wszystkie moje projekty</h1>
              <div></div>
            </div>
         </Layout>
        <LeftLine></LeftLine>
        <RightLine></RightLine> 
        

    </main>
  );
}
export default ProjectsPage