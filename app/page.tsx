import { LeftLine } from "@/components/LeftLine/LeftLine";
import { NavSide } from "@/components/NavSide/NavSide";
export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans overflow-hidden dark:bg-black">
        <NavSide></NavSide>
        <LeftLine></LeftLine>

    </div>
  );
}
