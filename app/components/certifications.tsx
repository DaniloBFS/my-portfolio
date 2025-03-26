"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const certifications = [
  { title: "AWS Academy Graduate – AWS Academy Cloud Foundations", url: "https://www.credly.com/badges/71b60e35-671c-4938-9dbe-cda7f3443603/public_url" },
  { title: "IT Essentials – Cisco Academy", url: "https://www.credly.com/badges/799e30e2-2a70-4247-8205-4eddf398e6d6/public_url" },
  { title: "JavaScript Essentials 1 - Cisco Academy", url: "https://www.credly.com/badges/5030dce2-5e3d-4cbb-bf11-f77ea83e70bb/public_url" },
  { title: "JavaScript Essentials 2 - Cisco Academy", url: "https://www.credly.com/badges/7fbc612b-0910-4eb3-a425-b79db38f78f0/public_url" },
  { title: "Python Essentials 1 - Cisco Academy", url: "https://www.credly.com/badges/d1a81106-a364-4123-8324-e1b5e3abc7e6/public_url" },
  { title: "Python Essentials 2 - Cisco Academy", url: "https://www.credly.com/badges/f1a20cbe-f8ab-43cb-8cae-3b3e16bd0b5d/public_url" },
  { title: "Introduction to Cybersecurity - Cisco Academy", url: "https://www.credly.com/badges/815e36e2-b102-4a9e-a9c3-f6ac54030283/public_url" },
  { title: "Operating Systems Basics - Cisco Academy", url: "https://www.credly.com/badges/f1561685-95fb-4f94-a8d1-7c648a1a4353/public_url" }
];

export function Certifications() {
  const { resolvedTheme } = useTheme(); // Apenas uma chamada para useTheme
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Evita piscar o tema errado antes do carregamento
  
  const isDark = resolvedTheme === "dark"; // Usando resolvedTheme diretamente
  const textColor = isDark ? "text-white" : "text-gray-900";
  const buttonBg = isDark ? "bg-zinc-900" : "bg-gray-100";
  const buttonHoverBg = isDark ? "hover:bg-zinc-700" : "hover:bg-gray-200";

  return (
    <div className="max-w-2xl mt-8 sm:px-0">
      <h3 className={`text-2xl font-semibold ${textColor} mb-6`}>Certificados</h3>

      {/* Opção 1: Botões sutis */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {certifications.map((cert, index) => (
            <a
            key={index}
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 rounded-lg ${buttonBg} ${buttonHoverBg} transition flex items-center justify-center text-center ${textColor}`}
            >
            {cert.title}
            </a>
        ))}
      </div>
    </div>
  );
}
