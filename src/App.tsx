import { useLenis } from '@/lib/motion';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Story from '@/components/Story';
import MusicRoom from '@/components/MusicRoom';
import EventCaseStudy from '@/components/EventCaseStudy';
import { Gallery } from '@/components/EventCaseStudy';
import Contact from '@/components/Contact';

export default function App() {
  useLenis();

  return (
    <div className="min-h-screen bg-ink-950 font-sans text-zinc-200 antialiased">
      <Nav />
      <main>
        <Hero />
        <Story />
        <MusicRoom />
        <EventCaseStudy />
        <Gallery />
        <Contact />
      </main>
    </div>
  );
}
