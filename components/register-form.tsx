// "use client";

// import { useState } from "react";
// import "../app/hero.css";

// const courses = [
//   "PGDM Global",
//   "PGDM Standard",
//   "MBA",
//   "MCA",
//   "B.Tech (ME)",
//   "(BBA + MBA)",
//   "BBA",
//   "BCA"
// ];

// const cities = [
//   "Delhi NCR",
//   "Mumbai",
//   "Bengaluru",
//   "Faridabad",
//   "Ghaziabad",
//   "Meerut",
//   "Aligarh",
//   "Agra",
//   "Hyderabad",
//   "Chennai",
//   "Pune",
//   "Kolkata",
//   "Ahmedabad",
//   "Jaipur",
//   "Lucknow",
//   "Gurugram",
//   "Noida",
//   "Chandigarh",
//   "Bhopal",
//   "Indore",
// ];

// interface Props {
//   formHeading?: string;
// }
// export default function RegisterForm({formHeading}: Props) {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     city: "",
//     course: "",
//   });
//   const [submitted, setSubmitted] = useState(false);
//   const [focused, setFocused] = useState<string | null>(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
//   ) => setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(false);
//     try {
//       const res = await fetch("/api/send-lead", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(form),
//       });
//       if (!res.ok) throw new Error();
//       setSubmitted(true);
//     } catch {
//       setError(true);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (submitted) {
//     return (
//       <div className="register-form-card flex flex-col items-center justify-center min-h-120 text-center px-6">
//         <div className="success-icon mb-6">
//           <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
//             <circle cx="32" cy="32" r="32" fill="#fcc423" fillOpacity="0.15" />
//             <circle cx="32" cy="32" r="24" fill="#fcc423" fillOpacity="0.25" />
//             <path
//               d="M20 33l9 9 15-18"
//               stroke="#fcc423"
//               strokeWidth="3"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg>
//         </div>
//         <h3 className="text-2xl font-bold text-white mb-2">You're In!</h3>
//         <p className="text-white/70 text-sm leading-relaxed">
//           Our admissions team will reach out to you within 24 hours.
//         </p>
//         <button
//           onClick={() => {
//             setSubmitted(false);
//             setForm({ name: "", email: "", phone: "", city: "", course: "" });
//           }}
//           className="mt-8 text-xs text-[#fcc423] underline underline-offset-4 opacity-70 hover:opacity-100 transition-opacity"
//         >
//           Submit another enquiry
//         </button>

//         <style jsx>{`
//           @keyframes pop-in {
//             0% {
//               transform: scale(0.5);
//               opacity: 0;
//             }
//             70% {
//               transform: scale(1.1);
//             }
//             100% {
//               transform: scale(1);
//               opacity: 1;
//             }
//           }
//           .success-icon {
//             animation: pop-in 0.5s ease forwards;
//           }
//         `}</style>
//       </div>
//     );
//   }

//   const fields = [
//     { name: "name", placeholder: "Full Name", type: "text", icon: "👤" },
//     { name: "email", placeholder: "Email Address", type: "email", icon: "✉️" },
//     { name: "phone", placeholder: "Phone Number", type: "tel", icon: "📞" },
//   ];

//   return (
//     <div className="register-form-card">
//       {/* Header */}
//       <div className="form-header">
//         <div className="badge">{formHeading ? `${formHeading} Admissions 2026` : "UG / PG Admissions 2026"}</div>
//         <h2 className="form-title">Start Your Journey</h2>
//         <p className="form-subtitle">
//           Fill in the details — we'll take it from here.
//         </p>
//       </div>

//       {/* Fields */}
//       <div className="fields-stack">
//         {fields.map((f) => (
//           <div
//             key={f.name}
//             className={`field-wrap ${focused === f.name ? "field-focused" : ""}`}
//           >
//             <span className="field-icon">{f.icon}</span>
//             <input
//               name={f.name}
//               type={f.type}
//               placeholder={f.placeholder}
//               value={(form as Record<string, string>)[f.name]}
//               onChange={(e) => {
//                 if (f.name === "phone") {
//                   // Allow only digits & max 10 length
//                   const value = e.target.value.replace(/\D/g, "").slice(0, 12);
//                   setForm({ ...form, phone: value });
//                 } else {
//                   handleChange(e);
//                 }
//               }}
//               onFocus={() => setFocused(f.name)}
//               onBlur={() => setFocused(null)}
//               autoComplete="off"
//             />
          
//           </div>
          
//         ))}

//         {/* City */}
//         <div
//           className={`field-wrap ${focused === "city" ? "field-focused" : ""}`}
//         >
//           <span className="field-icon">📍</span>
//           <select
//             name="city"
//             value={form.city}
//             onChange={handleChange}
//             onFocus={() => setFocused("city")}
//             onBlur={() => setFocused(null)}
//           >
//             <option value="" disabled>
//               Select City
//             </option>
//             {cities.map((c) => (
//               <option key={c}>{c}</option>
//             ))}
//           </select>
//         </div>

//         {/* Course */}
//         <div
//           className={`field-wrap ${focused === "course" ? "field-focused" : ""}`}
//         >
//           <span className="field-icon">🎓</span>
//           <select
//             name="course"
//             value={form.course}
//             onChange={handleChange}
//             onFocus={() => setFocused("course")}
//             onBlur={() => setFocused(null)}
//           >
//             <option value="" disabled>
//               Select Course
//             </option>
//             {courses.map((c) => (
//               <option key={c}>{c}</option>
//             ))}
//           </select>
//         </div>
//       </div>

//       {/* CTA */}
//       <button
//         onClick={handleSubmit}
//         disabled={
//           !form.name ||
//           !form.email ||
//           form.phone.length !== 10 ||
//           !form.city ||
//           !form.course
//         }
//         className="submit-btn"
//       >
//         <span>{loading ? "Sending..." : "Apply Now"}</span>
//         {!loading && (
//           <svg
//             width="18"
//             height="18"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2.5"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           >
//             <path d="M5 12h14M12 5l7 7-7 7" />
//           </svg>
//         )}
//       </button>

//       <p className="consent-text">
//         By applying, you consent to be contacted via SMS, Email & WhatsApp.
//         {/* This overrides DNC/NDNC registration. */}
//       </p>

//       {error && (
//         <p
//           style={{
//             color: "#f87171",
//             fontSize: 12,
//             textAlign: "center",
//             marginTop: 8,
//           }}
//         >
//           Something went wrong. Please try again.
//         </p>
//       )}
//     </div>
//   );
// }


"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const courses = [
  "PGDM Global",
  "PGDM Standard",
  "MBA",
  "MCA",
  "B.Tech (ME)",
  "(BBA + MBA)",
  "BBA",
  "BCA"
];

export default function RegisterForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    course: "",
  });

  const [errors, setErrors] = useState<any>({});
  const [focused, setFocused] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // 🔹 Validation function
  const validate = () => {
    const newErrors: any = {};

    if (!form.name.trim()) newErrors.name = "Name is required";

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (form.phone.length !== 10) {
      newErrors.phone = "Phone must be 10 digits";
    }

    if (!form.course) newErrors.course = "Select a course";
    if (!form.city.trim()) newErrors.city = "City is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });

    // remove error on typing
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    try {
      const res = await fetch("/api/send-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed");
      setSubmitted(true);
    } catch {
      setErrors({ submit: "Something went wrong. Try again." });
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="w-full max-w-md mx-auto bg-white rounded-xl p-6 border-2 border-[#cf1427] text-center">
        <h3 className="text-xl font-bold text-[#cf1427] mb-2">You're In 🎉</h3>
        <p className="text-sm text-gray-600">
          Our team will contact you within 24 hours.
        </p>
      </div>
    );
  }

  const isFormValid =
    form.name &&
    form.email &&
    form.phone.length === 10 &&
    form.city &&
    form.course;

  return (
    <div className="w-full mx-auto bg-white rounded-xl p-3 mt-2
    border-2 border-[#cf1427]
    shadow-[0_20px_60px_rgba(0,0,0,0.25)]">

      <h2 className="text-2xl font-bold text-[#cf1427] text-center mb-3">
        Apply For NIET Admissions 2026
      </h2>

      {/* Inputs */}
      {[
        { name: "name", label: "Full Name", icon: "👤" },
        { name: "email", label: "Email", icon: "✉️" },
        { name: "phone", label: "10-digit Mobile For OTP", icon: "📞" },
      ].map((f) => (
        <div key={f.name} className="mb-2">
          <label className="text-sm font-semibold text-[#cf1427]">
            {f.label} <span className="text-red-500">*</span>
          </label>

          <div className={`flex items-center gap-3 mt-1 px-4 py-3 rounded-lg bg-[#f9fbfc] border-2
            ${focused === f.name ? "border-[#cf1427]" : "border-[#cbd5e1]"}`}>

            <span className="opacity-60">{f.icon}</span>

            <input
              name={f.name}
              value={(form as any)[f.name]}
              onChange={(e) => {
                if (f.name === "phone") {
                  const value = e.target.value.replace(/\D/g, "").slice(0, 12);
                  setForm({ ...form, phone: value });
                } else handleChange(e);
              }}
              onFocus={() => setFocused(f.name)}
              onBlur={() => setFocused(null)}
              placeholder={`Enter ${f.label}`}
              className="w-full bg-transparent outline-none text-sm  text-black"
            />
          </div>

          {errors[f.name] && (
            <p className="text-red-500 text-xs mt-1">{errors[f.name]}</p>
          )}
        </div>
      ))}

      {/* Course */}
      <div className="mb-4">
        <label className="text-sm font-semibold text-[#cf1427]">
          Course <span className="text-red-500">*</span>
        </label>

        <select
          name="course"
          value={form.course}
          onChange={handleChange}
          className="w-full mt-1 px-4 py-3 rounded-lg bg-[#f9fbfc] border-2 border-[#cbd5e1] text-black"
        >
          <option value="">Course Interested</option>
          {courses.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>

        {errors.course && (
          <p className="text-red-500 text-xs mt-1">{errors.course}</p>
        )}
      </div>

      {/* City */}
      <div className="mb-5">
        <label className="text-sm font-semibold text-[#cf1427]">
          Enter City <span className="text-red-500">*</span>
        </label>

        <input
          name="city"
          value={form.city}
          onChange={handleChange}
          placeholder="Your Current City"
          className="w-full mt-1 px-4 py-3 rounded-lg bg-[#f9fbfc] border-2 border-[#cbd5e1] text-black"
        />

        {errors.city && (
          <p className="text-red-500 text-xs mt-1">{errors.city}</p>
        )}
      </div>

      {/* Submit */}
      <button
        onClick={handleSubmit}
       
        className="w-full py-3 rounded-lg bg-[#cf1427] text-white font-semibold relative overflow-hidden
        disabled:opacity-40"
      >
        {loading ? "Submitting..." : "Submit"}

        <motion.div
          className="absolute inset-0 w-1/4 bg-linear-to-r from-transparent via-white to-transparent opacity-60"
          animate={{ x: ["-100%", "400%"] }}
          transition={{
            repeat: Infinity,
            duration: 1,
            ease: "linear",
            repeatDelay: 3,
          }}
        />
      </button>

      {errors.submit && (
        <p className="text-red-500 text-xs text-center mt-2">
          {errors.submit}
        </p>
      )}
    </div>
  );
}