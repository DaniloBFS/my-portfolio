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
              Full-Stack Engineer specializing in front-end development, focused on building high-performance user interfaces with <strong>React.js and TypeScript</strong>. My experience includes engineering robust backends with PHP and Node.js and optimizing RESTful APIs in containerized cloud environments.
          </p>
          <p>
              Beyond coding, I've taken full ownership of the Quality Assurance process for over 15 websites, from test planning to execution. I am also versatile with platforms like WordPress and Webflow.
          </p>
          <p>
              With <strong>Italian citizenship</strong> and fluent English, Portuguese and now learning Spanish, I am actively seeking new challenges and am open to relocation opportunities across Europe. Let's build something great together!
          </p>
      </div>
    <Experience />
    <Skills />
    <Certifications />
    </section>
    
  );
}