import Ambiente from "@/components/Ambiente";
import Hero from "@/components/Hero";
import InstagramGrid from "@/components/InstagramGrid";
import Propuesta from "@/components/Propuesta";
import WineClubHighlight from "@/components/WineClubHighlight";

export default function Home() {
  return (
    <div className="font-sans min-h-screen">
      <Hero />
      <Propuesta />
      <Ambiente />
      <WineClubHighlight />
      <InstagramGrid />
    </div>
  );
}
