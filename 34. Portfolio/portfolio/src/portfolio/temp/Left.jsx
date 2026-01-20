// import {
//   Mail,
//   Phone,
//   Linkedin,
//   Moon,
//   Sun
// } from "lucide-react";

// export default function Left({ theme, setTheme }) {
//   return (
//     <div className="bg-(--card) rounded-2xl p-6 border border-gray-800 h-full flex flex-col">

//       {/* TOP BAR */}
//       <div className="flex justify-between items-center mb-5">
//         <h2 className="font-semibold text-lg">Profile</h2>

//         {/* THEME TOGGLE */}
//         <button
//           onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
//           className="w-10 h-10 flex items-center justify-center border border-gray-700 rounded-lg"
//         >
//           {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
//         </button>
//       </div>

//       {/* IMAGE */}
//       <img
//         src="/images/profile.jpg"
//         alt="profile"
//         className="rounded-xl mb-5"
//       />

//       {/* ACTIVE STATUS */}
//       <div className="flex items-center gap-2 text-sm mb-5">
//         <span className="relative flex h-3 w-3">
//           <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
//           <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
//         </span>
//         Available for work
//       </div>

//       {/* NAME */}
//       <h2 className="text-[28px] font-semibold mb-6">Tanvi Bhalani</h2>

//       {/* SOCIAL / CONTACT ICONS */}
//     <div className="flex gap-4 mb-8">
//   {/* GMAIL */}
//   <button
//   className="icon-btn border-2 p-1 rounded-lg border-gray-400 cursor-pointer"
//   onClick={() =>
//     window.open(
//       "https://mail.google.com/mail/?view=cm&fs=1&to=tanvibhalani05@gmail.com",
//       "_blank"
//     )
//   }
// >
//   <Mail size={18} />
// </button>


//   {/* PHONE */}
//   <button
//   className="icon-btn border-2 p-1 rounded-lg border-gray-400 cursor-pointer "
//   onClick={() =>
//     window.open("https://wa.me/919999999999", "_blank")
//   }
// >
//   <Phone size={18} />
// </button>

//   {/* LINKEDIN */}
//   <button
//   className="icon-btn border-2 p-1 rounded-lg border-gray-400 cursor-pointer"
//   onClick={() =>
//     window.open("https://www.linkedin.com/in/johnanderson", "_blank")
//   }
// >
//   <Linkedin size={18} />
// </button>
// </div>


//       {/* BUTTONS */}
//       <div className="flex gap-3 mt-auto">
//         <a
//           href="/John-Anderson-CV.pdf"
//           target="_blank"
//           className="flex-1 border border-gray-700 rounded-lg py-2 text-center"
//         >
//           Download CV
//         </a>

//         <a
//           href="mailto:johnanderson@gmail.com"
//           className="flex-1 bg-green-500 text-black rounded-lg py-2 text-center"
//         >
//           Contact Me
//         </a>
//       </div>
//     </div>
//   );
// }







import {
  Mail,
  Phone,
  Linkedin,
  Moon,
  Sun
} from "lucide-react";

export default function Left({ theme, setTheme }) {
  return (
    <div
      className="
        bg-(--card)
        rounded-2xl
        p-5 sm:p-6
        border border-gray-800
        flex flex-col
        w-full
        max-w-95
        mx-auto
        h-auto lg:h-full
        
      "
    >

      {/* TOP BAR */}
      <div className="flex justify-between items-center mb-5">
        <h2 className="font-semibold text-lg">Profile</h2>

        {/* THEME TOGGLE */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="
            w-10 h-10
            flex items-center justify-center
            border border-gray-700
            rounded-lg
          "
        >
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>

      {/* IMAGE */}
      <img
        src="/images/profile.jpg"
        alt="profile"
        className="
          rounded-xl
          mb-5
          w-full
          object-cover
        "
      />

      {/* ACTIVE STATUS */}
      <div className="flex items-center gap-2 text-sm mb-5 justify-center lg:justify-start">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>
        Available for work
      </div>

      {/* NAME */}
      <h2 className="text-[26px] sm:text-[28px] font-semibold mb-6 text-center lg:text-left">
        Tanvi Bhalani
      </h2>

      {/* SOCIAL / CONTACT ICONS */}
      <div className="flex gap-4 mb-8 justify-center lg:justify-start">
        {/* GMAIL */}
        <button
          className="
            border-2
            p-2
            rounded-lg
            border-gray-400
            cursor-pointer
            hover:bg-gray-800
          "
          onClick={() =>
            window.open(
              "https://mail.google.com/mail/?view=cm&fs=1&to=tanvibhalani05@gmail.com",
              "_blank"
            )
          }
        >
          <Mail size={18} />
        </button>

        {/* PHONE */}
        <button
          className="
            border-2
            p-2
            rounded-lg
            border-gray-400
            cursor-pointer
            hover:bg-gray-800
          "
          onClick={() =>
            window.open("https://wa.me/919999999999", "_blank")
          }
        >
          <Phone size={18} />
        </button>

        {/* LINKEDIN */}
        <button
          className="
            border-2
            p-2
            rounded-lg
            border-gray-400
            cursor-pointer
            hover:bg-gray-800
          "
          onClick={() =>
            window.open("https://www.linkedin.com/in/johnanderson", "_blank")
          }
        >
          <Linkedin size={18} />
        </button>
      </div>

      {/* BUTTONS */}
      <div className="flex flex-col sm:flex-row gap-3 mt-auto">
        <a
          href="/pdf/Tanvi-Bhalani.pdf"
          target="_blank"
          className="
            border border-gray-700
            rounded-lg
            py-2
            text-center
            w-full
          "
        >
          Download CV
        </a>

        <a
          href="mailto:johnanderson@gmail.com"
          className="
            bg-green-500
            text-black
            rounded-lg
            py-2
            text-center
            w-full
          "
        >
          Contact Me
        </a>
      </div>

    </div>
  );
}
