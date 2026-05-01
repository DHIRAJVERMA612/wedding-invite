import Hero from "./components/Hero";
import Story from "./components/Story";
import Events from "./components/Events";
import Gallery from "./components/Gallery";
import RSVP from "./components/RSVP";
import Music from "./components/Music";

export default function Home() {
  return (
    <main>
      <Hero />
      <Story />
      <Events />
      <Gallery />
      <RSVP />
      <Music />
    </main>
  );
}