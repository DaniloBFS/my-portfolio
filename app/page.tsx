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
        Olá, me chamo Danilo!
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
        Sou um Desenvolvedor Full Stack apaixonado por criar sistemas web responsivos e escaláveis. 
        Tenho experiência tanto no desenvolvimento quanto na infraestrutura, 
        com conhecimento em redes e arquitetura de aplicações.
        </p>
        <p>
        Trabalho com PHP, JavaScript e TypeScript, utilizando frameworks modernos como ReactJS, NodeJS e Laravel para entregar soluções eficientes e de alto desempenho. 
        Além disso, tenho experiência prática com Docker, AWS e Kubernetes, garantindo a gestão e escalabilidade dos ambientes.
        </p>
        <p>
        Também atuo na integração de APIs, 
        otimização de desempenho e desenvolvimento de soluções seguras. 
        No dia a dia, sigo metodologias ágeis (SCRUM) 
        e utilizo ferramentas de versionamento como Git 
        e Bitbucket para manter um fluxo de trabalho organizado e colaborativo.
        </p>
        <p>
        Estou sempre aberto a novos desafios, seja no desenvolvimento ou em outras áreas da tecnologia!
        </p>
      </div>
    <Experience />
    <Skills />
    <Certifications />
    </section>
    
  );
}
