import { RightLine } from "@/components/RightLine/RightLine";
import { LeftLine } from "@/components/LeftLine/LeftLine";
import { NavSide } from "@/components/NavSide/NavSide";
import { Nav } from "@/components/Nav/Nav";
import { NavSmall } from "@/components/NavSmall/NavSmall";
import { UIContextProvider } from "@/store/Ui-context";
import About from "@/components/About/About";
import {Contact} from "@/components/Contact/Contact";
import { Layout } from "@/components/Layout/Layout";
export default function Home() {
  return (
    <UIContextProvider>

      <div className="main">
          <Nav></Nav>
          <Layout>
            <Contact/>
          </Layout>
          {/* <About></About> */}
          <NavSmall></NavSmall>
          <NavSide></NavSide>
          <LeftLine></LeftLine>
          <RightLine></RightLine> 

      </div>
    </UIContextProvider>
  );
}
