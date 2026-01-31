"use client";

import React, { useState } from "react";
import { useTheme } from "next-themes";

const experiences = [
    {
        title: "IT Support Engineer",
        company: "Minsait (Indra Group) — Client: Petrobras - REPLAN",
        period: "Oct 2025 – Present",
        details: [
            "Delivers on-site L1/L2 technical support for a high-availability industrial environment serving over 3,000 users, ensuring operational continuity in a high-security setting.",
            "Manages the full lifecycle of technical incidents and service requests using ServiceNow, consistently maintaining a 98% SLA compliance rate through strict adherence to ITIL best practices.",
            "Administers identity and access management, including user accounts, groups, and permissions in Active Directory (AD).",
            "Resolves complex issues within the Microsoft 365 ecosystem (Outlook, Teams, OneDrive) to ensure seamless user productivity.",
            "Executes hardware setup, maintenance, and troubleshooting for workstations, printers, and mobile devices, alongside full IT asset lifecycle management.",
            "Supports local network infrastructure by troubleshooting connectivity issues (TCP/IP), managing switches/routers, and assisting with server maintenance.",
            "Educates end-users on security protocols, including VPN connectivity and compliance standards."
        ],
        impact: "Maintaining a 98% SLA compliance rate for over 3,000 users in a high-security industrial environment through strict ITIL adherence."
    },
    {
        title: "Software Engineer",
        company: "Grano Studio",
        period: "May 2023 – Oct 2025",
        details: [
            "Engineered and maintained high-performance web applications using React.js, TypeScript, Tailwind CSS, and Bootstrap for the frontend, and PHP/Laravel for robust backend services.",
            "Designed, built, and integrated RESTful APIs with MySQL databases.",
            "Developed and customized solutions on various platforms, including building custom themes and plugins for WordPress, creating websites with Webflow, and integrating Firebase for backend services.",
            "Took full ownership of the Quality Assurance process for over 15 websites, which included designing test plans, performing manual testing, and conducting API testing using tools like Postman and Selenium.",
            "Performed systematic code audits and security assessments, identifying and fixing vulnerabilities which led to a 25% cut in application downtime.",
            "Managed development and deployment workflow within an Agile/SCRUM environment, using Git/GitHub/Bitbucket for version control.",
            "Deployed and maintained applications in containerized environments using Docker."
        ],
        impact: "Led QA for over 15 websites and executed security assessments that resulted in a 25% reduction in application downtime."
    },
    {
        title: "IT Support Engineer",
        company: "Visor2B",
        period: "2022 – 2023",
        details: [
            "Provided comprehensive on-site Tier 1 & 2 technical support for over 30 users per week, acting as the primary point of contact for all IT-related issues.",
            "Managed and maintained core IT infrastructure, including the setup of server virtualization on Linux environments.",
            "Implemented a company-wide VoIP system, which cut communication costs by 15%.",
            "Configured and troubleshot network infrastructure, applying hands-on experience with routers, switches, and firewalls to ensure network stability."
        ],
        impact: "Implemented a company-wide VoIP system that cut communication costs by 15% and managed Linux-based server virtualization."
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