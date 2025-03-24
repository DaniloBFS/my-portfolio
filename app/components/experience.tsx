"use client";

import React, { useState } from "react";
import { useTheme } from "next-themes";

const experiences = [
  {
    title: "Desenvolvedor FullStack",
    company: "GranoStudio",
    period: "Maio/2023 - Atual",
    details: [
      "Desenvolvi e mantive websites e aplicações web com interfaces responsivas e otimizadas (HTML, CSS, JavaScript, Bootstrap e jQuery).",
      "Personalizei temas e implementei funcionalidades no WordPress usando PHP, focando em segurança, desempenho e escalabilidade.",
      "Desenvolvi e implementei APIs REST utilizando PHP com Laravel, otimizando a integração com MySQL e garantindo maior eficiência, escalabilidade e performance.",
      "Realizei revisões de segurança e QA, identificando vulnerabilidades e garantindo a estabilidade e confiabilidade dos projetos.",
      "Trabalhei em ambientes Dockerizados, facilitando a configuração e o gerenciamento de ambientes de desenvolvimento.",
      "Colaborei com equipes ágeis em sprints SCRUM, utilizando Git e Bitbucket para versionamento e controle de código."
    ],
    impact: "Projetos mais seguros, rápidos e eficientes, melhorando a experiência dos usuários e a satisfação dos clientes."
  },
  {
    title: "Desenvolvedor FullStack",
    company: "No Caminho do Êxito",
    period: "Jan/2023 - Abril/2023",
    details: [
      "Desenvolvi aplicações web utilizando PHP, HTML, CSS e JavaScript.",
      "Implementei funcionalidades backend, como sistemas de login, gerenciamento de usuários e gerenciamento de e-commerce.",
      "Trabalhei na otimização de performance e segurança das aplicações.",
      "Participei de reuniões estratégicas para identificar melhorias e atualizações dos sistemas.",
      "Colaborei em sprints SCRUM, entregando soluções que aprimoraram a experiência do usuário final."
    ],
    impact: "Melhorias na segurança e performance das aplicações, otimizando a gestão de usuários e dados."
  },
  {
    title: "Estágio em TI",
    company: "Visor2B",
    period: "Out/2022 – Jan/2023",
    details: [
      "Ofereci suporte no desenvolvimento de sistemas e manutenção de redes.",
      "Trabalhei na configuração e virtualização de servidores e sistemas de telefonia.",
      "Participei da implementação de URAs (Unidades de Resposta Audível) em Linguagem C.",
      "Atendi clientes em visitas técnicas, solucionando problemas e aprimorando sistemas."
    ],
    impact: "Melhorias na infraestrutura de TI, aprimorando o desempenho e a segurança dos sistemas da empresa."
  }
];

export function Experience() {
  const [selectedExp, setSelectedExp] = useState<{
    title: string;
    company: string;
    period: string;
    details: string[];
    impact: string;
  } | null>(null);
  
  const { theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Garante que o componente só renderize após o carregamento no cliente
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Ou um placeholder, se preferir
  }

  // Classes baseadas no tema
  const isDark = theme === "dark";
  const containerBg = isDark ? "bg-dark" : "bg-white";
  const textColor = isDark ? "text-white" : "text-gray-900";
  const buttonBg = isDark ? "bg-zinc-900" : "bg-gray-100";
  const buttonHoverBg = isDark ? "hover:bg-zinc-700" : "hover:bg-gray-200";
  const modalBg = isDark ? "bg-zinc-900" : "bg-white";
  const modalBorder = isDark ? "border-zinc-800" : "border-gray-300";
  const secondaryTextColor = isDark ? "text-gray-400" : "text-gray-600";

  return (
    <div className={`max-w-2xl mt-8 sm:px-0 ${containerBg} rounded-2xl`}>
      <h3 className={`text-2xl font-semibold ${textColor} mb-6`}>Experiência profissional</h3>
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <button
            key={index}
            className={`flex flex-col sm:flex-row justify-between items-start sm:items-center w-full ${buttonBg} ${textColor} p-4 rounded-2xl ${buttonHoverBg} transition`}
            onClick={() => setSelectedExp(exp)}
          >
            <div>
              <h3 className="text-lg font-medium">{exp.title}</h3>
              <p className={`${secondaryTextColor} float-left`}>{exp.company}</p>
            </div>
            <span className={`${secondaryTextColor} sm:text-right text-sm mt-2 sm:mt-0`}>{exp.period}</span>
          </button>
        ))}
      </div>

      {/* Modal */}
      {selectedExp && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 px-4"
          onClick={() => setSelectedExp(null)}
        >
          <div
            className={`${modalBg} ${textColor} p-6 rounded-2xl w-full max-w-[90vw] sm:max-w-3xl relative border ${modalBorder} shadow-xl overflow-y-auto max-h-[90vh]`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={`absolute top-4 right-4 ${secondaryTextColor} hover:text-gray-300 text-2xl`}
              onClick={() => setSelectedExp(null)}
            >
              ×
            </button>
            <h3 className="text-xl font-semibold">{selectedExp.title}</h3>
            <p className={`${secondaryTextColor} mb-1`}>{selectedExp.company}</p>
            <p className={`${secondaryTextColor} mb-4`}>{selectedExp.period}</p>
            <ul className={`list-disc list-inside ${isDark ? "text-gray-300" : "text-gray-700"} space-y-2`}>
              {selectedExp.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
            <p className={`mt-4 font-semibold ${isDark ? "text-gray-300" : "text-gray-700"}`}>
              Impacto: {selectedExp.impact}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}