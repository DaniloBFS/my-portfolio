import Image from "next/image";
import { socialLinks } from "./config";
import { Experience } from "./components/experience";
import { Skills } from "./components/skills";
import { Certifications } from "./components/certifications";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.linkedin} target="_blank">
        <Image
          src="/profile.png"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={150}
          height={150}
          priority
        />
      </a>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        Hello there, I am Danilo!
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
          <p>
              <strong>IT Engineer</strong> with a versatile background spanning full-stack development and mission-critical infrastructure. I specialize in building high-performance interfaces with <strong>React.js and TypeScript</strong>, while also managing complex IT environments, ensuring high availability and security for industrial-scale operations.
          </p>
          <p>
              My expertise bridges the gap between <strong>Software Engineering</strong> (PHP/Laravel, APIs, and QA automation) and <strong>IT Infrastructure</strong> (Active Directory, Network troubleshooting, and Virtualization). I have a proven track record of optimizing application performance and maintaining strict SLA compliance in high-pressure settings.
          </p>
          <p>
              As an <strong>Italo-Brazilian citizen</strong> fluent in English and Portuguese (and currently expanding my Spanish), I am prepared for international mobility. I am actively seeking global opportunities where I can leverage my hybrid technical skillset to solve complex challenges.
          </p>
      </div>
    <Experience />
    <Skills />
    <Certifications />
    </section>
    
  );
}