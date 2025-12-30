"use client"
import { RightLine } from "@/components/molecules/RightLine/RightLine";
import { LeftLine } from "@/components/molecules/LeftLine/LeftLine";
import { NavSide } from "@/components/organisms/NavSide/NavSide";
import { Nav } from "@/components/organisms/Nav/Nav";
import { NavSmall } from "@/components/organisms/NavSmall/NavSmall";
import {About} from "@/components/templates/About/About";
import {Contact} from "@/components/templates/Contact/Contact";
import { Layout } from "@/components/atoms/Layout/Layout";
import { Tech } from "@/components/templates/Tech/Tech";
import { Projects } from "@/components/templates/Projects/Projects";
import { Experience } from "@/components/templates/Experience/Experience";
import CardScroll from "@/components/molecules/CardScroll/CardScroll";
import { useState } from "react";

export type NavIndexType = {
    navIndex: number,
    setNavIndex: (index: number)=> void
}

export default function Home() {
  const [navIndex, setNavIndex] = useState<number>(0);

  return (
      <main className="main">
          <Nav navIndex={navIndex} setNavIndex={setNavIndex}></Nav>
          <CardScroll navIndex={navIndex} setNavIndex={setNavIndex} duration={700} >
            <Layout id={"about"}>
              <About/>
            </Layout>
            <Layout id={"projects"}>
              <Projects/>
            </Layout>
            <Layout id={"tech"}>
              <Tech/>
            </Layout>
            <Layout id={"experience"}>
              <Experience/>
            </Layout>
            <Layout id={"contact"}>
              <Contact/>
            </Layout>
          </CardScroll>
          <NavSmall navIndex={navIndex} setNavIndex={setNavIndex}></NavSmall>
          <NavSide navIndex={navIndex} setNavIndex={setNavIndex}></NavSide>
          <LeftLine></LeftLine>
          <RightLine></RightLine> 
      </main>
  );
}
