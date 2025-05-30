"use client";

import React, { useState } from "react";
import { useTheme } from "next-themes";

const experiences = [
  {
    title: "Software Engineer",
    company: "Grano Studio",   
    period: "2023 – Present", 
    details: [                 
      "Engineered responsive and performant web apps using React.js, Tailwind CSS, Bootstrap, and jQuery.",
      "Built and integrated RESTful APIs with Laravel and MySQL, reducing data retrieval latency by up to 40%.",
      "Extended and customized WordPress themes/plugins in PHP for over 15 client projects.",
      "Conducted code audits and security assessments, cutting app downtime by 25%.",
      "Deployed and maintained Docker-based environments, reducing deployment time by 30%.",
      "Contributed to Agile/SCRUM sprints, using Git, GitHub, and Bitbucket for version control."
    ],
    impact: "Boosted system stability and performance, improving client satisfaction and contributing to a 20% rise in project retention." // Impacto gerado
  },
  {
    title: "IT Support",    
    company: "Visor2B",        
    period: "2022 – 2023",     
    details: [                 
      "Supported internal software development and IT infrastructure for 30+ users.",
      "Set up server virtualization and implemented VoIP systems, cutting communication costs by 15%.",
      "Programmed and deployed Interactive Voice Response (IVR) systems using C, improving call routing and reducing wait times by 20%.",
      "Delivered Tier 1 and Tier 2 support, resolving 10+ incidents/week and enhancing user productivity."
    ],
    impact: "Strengthened infrastructure reliability and ensured operational continuity across teams." 
  }
];

// Para verificar, você pode imprimir o array no console:
// console.log(experiences);

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
      <h3 className={`text-2xl font-semibold ${textColor} mb-6`}>Professional Experience</h3>
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
              Impact: {selectedExp.impact}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}