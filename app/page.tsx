import { RightLine } from "@/components/RightLine/RightLine";
import { LeftLine } from "@/components/LeftLine/LeftLine";
import { NavSide } from "@/components/NavSide/NavSide";
import { Nav } from "@/components/Nav/Nav";
import { NavSmall } from "@/components/NavSmall/NavSmall";
import { UIContextProvider } from "@/store/Ui-context";
import {About} from "@/components/About/About";
import {Contact} from "@/components/Contact/Contact";
import { Layout } from "@/components/Layout/Layout";
import { Tech } from "@/components/Tech/Tech";
import { Projects } from "@/components/Projects/Projects";
import { Experience } from "@/components/Experience/Experience";
import CardScroll from "@/components/CardScroll/CardScroll";
export default function Home() {
  return (
    <UIContextProvider>

      <div className="main">
          <Nav></Nav>
          <CardScroll duration={700} >
            <Layout>
              <About></About>
            </Layout>
            <Layout>
              <Projects></Projects>
            </Layout>
            <Layout>
              <Tech></Tech>
            </Layout>
            <Layout>
              <Experience></Experience>
            </Layout>
            <Layout>
              <Contact></Contact>
            </Layout>
          </CardScroll>
          <NavSmall></NavSmall>
          <NavSide></NavSide>
          <LeftLine></LeftLine>
          <RightLine></RightLine> 

      </div>
    </UIContextProvider>
  );
}
