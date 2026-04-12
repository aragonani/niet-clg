"use client";

import {
  Lock,
  Download,
  BadgeCent,
  MessageSquareText,
  University,
  Bell,
  CheckCircle2,
} from "lucide-react";

interface Props {
  handleOpenForm: (courseName?: string, headingText?: string) => void;
}

export default function MobileAdmissionCard({handleOpenForm}: Props) {

  return(
    <section className="bg-[#cf1427] text-white pt-16 py-4 px-6 font-sans lg:hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Admission Badge */}
        <div className="bg-[#b30819] border border-[#a80717] text-sm px-5 py-1.5 rounded-full mb-5 tracking-wide font-medium -mt-10">
          ADMISSIONS OPEN FOR 2026
        </div>

        {/* Heading */}
        <h1 className="text-2xl md:text-6xl font-bold mb-3">
          NIET Greater Noida
        </h1>

        {/* Subheading */}
        <p className="text-base text-[12px] md:text-lg text-gray-100 max-w-3xl mb-12   px-6 leading-relaxed ">
          Compare courses, fees, placements & more. Get free expert guidance to
          make the right choice.
        </p>

        {/* Main CTA Button */}
        <button
          onClick={() => handleOpenForm()}
          className="bg-black hover:bg-black/80 flex items-center gap-2 px-5 py-2 rounded-full shadow-lg transition-all active:scale-95 mb-5  -mt-8"
        >
          <CheckCircle2 size={24} className="opacity-90" />
          <div className="text-left">
            <div className="font-extrabold text-[12px] leading-tight">
              APPLY NOW!
            </div>
            <div className="text-[10px] font-medium opacity-80">
              Check your eligibility
            </div>
          </div>
        </button>

        {/* Lower Info Pills */}
        <div className="flex flex-wrap justify-center gap-4">
          {/* Pill 1 */}
          <div className="flex items-center gap-2.5 bg-[#b30819] border border-[#a80717] hover:bg-[#b30819] px-6 py-3 rounded-full cursor-pointer transition-colors shadow-inner" onClick={() => handleOpenForm("", "Unlock For Full Fee Details")}>
            <Lock size={18} className="text-white opacity-80" />
            <span className="font-medium text-sm">Unlock Full Fee Details</span>
          </div>

          {/* Pill 2 */}
          <div className="flex items-center gap-2.5 bg-[#b30819] border border-[#a80717] hover:bg-[#b30819] px-6 py-3 rounded-full cursor-pointer transition-colors shadow-inner" onClick={() => handleOpenForm("", "Apply For Upto 100% Scholarships")}>
            <BadgeCent size={18} className="text-white opacity-80" />
            <span className="font-medium text-sm">Explore Scholarships</span>
          </div>

          
          <div className="flex items-center gap-2.5 bg-[#b30819] border border-[#a80717] hover:bg-[#b30819] px-6 py-3 rounded-full cursor-pointer transition-colors shadow-inner" onClick={() => handleOpenForm("", "Get Free Counselling")}>
            <MessageSquareText size={18} className="text-white opacity-80" />
            <span className="font-medium text-sm">Get Free Counselling</span>
          </div>

           <div className="flex items-center gap-2.5 bg-[#b30819] border border-[#a80717] hover:bg-[#b30819] px-6 py-3 rounded-full cursor-pointer transition-colors shadow-inner" onClick={() => handleOpenForm("", "Download NIET Brochure")}>
           
            <Download   size={18} className="text-white opacity-80" />
            <span className="font-medium text-sm">Download Brochure</span>
          </div>

             <div className="flex items-center gap-2.5 bg-[#b30819] border border-[#a80717] hover:bg-[#b30819] px-6 py-3 rounded-full cursor-pointer transition-colors shadow-inner" onClick={() => handleOpenForm("", "Unlock For Admission Process")}>
           
            <University   size={18} className="text-white opacity-80" />
            <span className="font-medium text-sm">Admission Process</span>
          </div>
        

          {/* Pill 4 */}
          <div className="flex items-center gap-3 bg-[#b30819] border border-[#a80717] hover:bg-[#a00616] px-5 py-2.5 rounded-full cursor-pointer transition-all shadow-md group" onClick={() => handleOpenForm("", "Register For Alerts")}>
            {/* Icon - Group hover par thoda scale hoga */}
            <Bell
              size={18}
              className="text-white opacity-90 group-hover:scale-110 transition-transform"
            />

            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-white">
              <span className="font-semibold text-sm tracking-wide">
                Register for alerts
              </span>
              <span className="text-white/70 text-[11px] font-light italic">
                (Never miss deadlines)
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}