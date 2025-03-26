"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const skills = {
  "Linguagens": ["PHP", "JavaScript", "TypeScript"],
  "Frameworks & Bibliotecas": ["ReactJS", "NodeJS", "Laravel", "Tailwind CSS", "Bootstrap"],
  "Bancos de Dados": ["MySQL", "MongoDB"],
  "Ferramentas & Plataformas": ["Git", "GitHub", "Bitbucket", "Webflow", "WordPress", "npm"],
  "Cloud / Infraestrutura": ["Firebase", "AWS", "Docker"],
  "Metodologias": ["SCRUM", "Agile"],
};

export function Skills() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Evita piscar o tema errado antes do carregamento

  const isDark = resolvedTheme === "dark";
  const containerBg = isDark ? "bg-dark" : "bg-white";
  const textColor = isDark ? "text-white" : "text-gray-900";
  const cardBg = isDark ? "bg-zinc-900" : "bg-gray-100";
  const cardBorder = isDark ? "border-zinc-800" : "border-gray-300";
  const linkColor = isDark ? "text-blue-400" : "text-blue-600";

  return (
    <div className={`max-w-2xl mt-8 sm:px-0 ${containerBg} rounded-2xl`}>
      <h3 className={`text-2xl font-semibold ${textColor} mt-8 mb-4`}>Habilidades Técnicas</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {Object.entries(skills).map(([category, items], index) => (
          <div
            key={index}
            className={`${cardBg} border ${cardBorder} rounded-2xl p-4 shadow-md`}
          >
            <h4 className="text-lg font-medium mb-2">{category}</h4>
            <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300">
              {items.map((item, idx) => (
                <li key={idx} className="before:content-['•'] before:mr-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
