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
        Software Engineer with hands-on experience in building scalable, secure, 
        and high-performance web applications. Proficient in PHP, JavaScript, Python and TypeScript, 
        with strong knowledge of modern frameworks like React.js, Node.js, and Laravel. 
        </p>
        <p>
        Adept at developing and integrating RESTful APIs, optimizing database performance, 
        and implementing responsive front ends with UX best practices. Comfortable across the full stack, 
        from backend logic to frontend UI, containerized environments, and cloud deployment. 
        Collaborative, agile-driven, and committed to continuous learning and team success.
        </p>
        <p>
        I'm always open to new challenges, whether in development or in other areas of technology!
        </p>
      </div>
    <Experience />
    <Skills />
    <Certifications />
    </section>
    
  );
}