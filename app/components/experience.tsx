"use client";

import React, { useState } from "react";
import { useTheme } from "next-themes";

const experiences = [
    {
        title: "Software Engineer",
        company: "Grano Studio",
        period: "2023 – Present",
        details: [
            "Engineered and maintained high-performance web applications using React.js, TypeScript, Tailwind CSS, and Bootstrap for the frontend, and PHP/Laravel for robust backend services.",
            "Designed, built, and integrated complex RESTful APIs with MySQL databases, applying advanced query optimization techniques that resulted in a 40% reduction in data retrieval latency.",
            "Developed and customized solutions on various platforms, including building custom themes and plugins for WordPress, creating websites with Webflow, and integrating Firebase for backend services.",
            "Performed systematic code audits and security assessments, identifying and fixing vulnerabilities which led to a 25% cut in application downtime.",
            "Managed the end-to-end development and deployment workflow within an Agile/SCRUM environment, using Git/GitHub/Bitbucket for version control and contributing to the CI/CD pipeline.",
            "Deployed and maintained applications in containerized environments using Docker, reducing deployment time and ensuring consistency across staging and production.",
            "Architected and executed comprehensive QA strategies for over 10 web applications, encompassing test plan creation, test case design, and execution of functional, integration, regression, and usability testing.",
            "Conducted in-depth API testing using Postman to validate RESTful services, ensuring data integrity, proper error handling, and adherence to specifications.",
            "Initiated and developed automated end-to-end (E2E) test suites using Selenium and Cypress, significantly reducing manual regression testing time and increasing test coverage for critical workflows.",
            "Managed the full defect lifecycle using Jira and Trello, from identification and detailed documentation to triage and verification within Agile/SCRUM sprints.",
            "Performed performance testing using tools like JMeter and Google Lighthouse.",
            "Ensured cross-browser consistency and validated compliance with WCAG."
        ],
        impact: "Optimized key application performance, achieving a 40% reduction in data latency and a 25% cut in application downtime, which directly improved client satisfaction." // Impacto gerado
    },
    {
        title: "IT Support",
        company: "Visor2B",
        period: "2022 – 2023",
        details: [
            "Provided comprehensive Tier 1 and Tier 2 on-site and remote technical support for over 200 users across a corporate office and multiple retail locations.",
            "Troubleshot and resolved escalated issues related to the Microsoft 365 ecosystem (including MS Office applications, Outlook, SharePoint, Teams, OneDrive) and managed on-premises Active Directory for user accounts, permissions, and group policies.",
            "Managed and maintained Windows Server environments in a VMware virtualized Data Center, performing regular maintenance, applying security patches, and system updates.",
            "Performed hands-on troubleshooting of hardware issues while also installing, configuring, and maintaining computer hardware, operating systems (Windows 10/11), applications, printers, and mobile devices, utilizing various remote support tools.",
            "Administered core network infrastructure connecting the head office with over 70 retail stores, performing troubleshooting on routers, switches, VPNs, and FortiClient firewalls to ensure network stability and security across all locations.",
            "Led a small-scale project to implement a company-wide VoIP system (GoTo), resulting in a 15% reduction in communication costs.",
            "Created and maintained internal documentation and knowledge base articles to support IT governance and standardize procedures."
        ],
        impact: "Led a VoIP system implementation project that resulted in a 15% reduction in communication costs while enhancing support infrastructure for over 200 users."
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