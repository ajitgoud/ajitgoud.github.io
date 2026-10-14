import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <Section id="experience" title="Experience">
          <Experience />
        </Section>
        <Section id="projects" title="Projects">
          <Projects />
        </Section>
        <Section id="skills" title="Skills">
          <Skills />
        </Section>
        <Section id="education" title="Education">
          <Education />
        </Section>
        <Section id="contact" title="Contact">
          <Contact />
        </Section>
      </main>
      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-2 px-5 py-8 text-sm text-faint sm:px-8">
          <p>&copy; {new Date().getFullYear()} {profile.name}</p>
          <p>Built with Next.js. Projects synced from GitHub.</p>
        </div>
      </footer>
    </>
  );
}
