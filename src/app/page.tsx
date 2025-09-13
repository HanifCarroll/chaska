import Hero from "@/components/Hero";
import Propuesta from "@/components/Propuesta";
import Ambiente from "@/components/Ambiente";
import WineClubHighlight from "@/components/WineClubHighlight";
import InstagramGrid from "@/components/InstagramGrid";

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
