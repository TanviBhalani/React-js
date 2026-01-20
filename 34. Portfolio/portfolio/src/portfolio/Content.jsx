// import { useEffect, useState } from "react";
// import Left from "./Components/Left";
// import Right from "./Components/Right";

// export default function Content() {
//   const [theme, setTheme] = useState("dark");
//   const LEFT_WIDTH = "380px";

//   // Apply theme to body
//   useEffect(() => {
//     document.body.className = theme === "light" ? "light" : "";
//   }, [theme]);

//   return (
//     <div className="min-h-screen bg-(--bg) text-(--text)">

//       {/* LEFT FIXED SECTION */}
//       <div
//         className="fixed left-0 top-0 h-screen p-8 hidden lg:block"
//         style={{ width: LEFT_WIDTH }}
//       >
//         <Left theme={theme} setTheme={setTheme} />
//       </div>

//       {/* RIGHT SCROLLABLE SECTION */}
//       <div
//         className="h-screen overflow-y-auto p-6 lg:p-10"
//         style={{ marginLeft: LEFT_WIDTH }}
//       >
//         <Right />
//       </div>

//     </div>
//   );
// }





// import { useEffect, useState } from "react";
// import Left from "./Components/Left";
// import Right from "./Components/Right";

// export default function Content() {
//   const [theme, setTheme] = useState("dark");

//   useEffect(() => {
//     document.body.className = theme === "light" ? "light" : "";
//   }, [theme]);

//   return (
//     <div className="min-h-screen bg-(--bg) text-(--text)">

//       {/* WRAPPER */}
//       <div className="flex flex-col lg:flex-row">

//         {/* LEFT SECTION */}
//         <div
//           className="
//             w-full
//             flex justify-center
//             lg:fixed lg:left-0 lg:top-0 lg:h-screen
//             lg:w-95
//             lg:block
//             p-6 lg:p-8
//           "
//         >
//           <div className="w-full max-w-95">
//             <Left theme={theme} setTheme={setTheme} />
//           </div>
//         </div>

//         {/* RIGHT SECTION */}
//         <div
//           className="
//             w-full
//             lg:ml-95
//             p-6 lg:p-10
//           "
//         >
//           <Right />
//         </div>

//       </div>

//       <footer className="bg-black border-t border-white/10 mt-20">
//   <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">

//     <p className="text-sm text-gray-400">
//       © 2025 All rights reserved.
//     </p>

//     <p className="text-sm text-gray-400">
//       Designed by <span className="text-white font-medium">Tanvi Bhalani</span>
//     </p>

//   </div>
// </footer>

//     </div>
//   );
// }







import { useEffect, useState } from "react";
import Left from "./temp/Left";
import Right from "./temp/Right";

export default function Content() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.body.className = theme === "light" ? "light" : "";
  }, [theme]);

  return (
    <div className="min-h-screen bg-(--bg) text-(--text)">

      {/* WRAPPER */}
      <div className="flex flex-col lg:flex-row">

        {/* LEFT SECTION (FIXED ON DESKTOP) */}
        <div
          className="
            w-full
            flex justify-center
            lg:fixed lg:left-0 lg:top-0 lg:h-screen
            lg:w-95
            p-6 lg:p-8
          "
        >
          <div className="w-full max-w-95">
            <Left theme={theme} setTheme={setTheme} />
          </div>
        </div>

        {/* RIGHT SECTION (SCROLLABLE CONTENT) */}
        <div
          className="
            w-full
            lg:ml-95
            p-6 lg:p-10
          "
        >
          {/* MAIN CONTENT */}
          <Right />

          {/* FOOTER (INSIDE RIGHT SECTION) */}
          <footer className="border-t border-white/10 mt-20">
            <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">

              <p className="text-sm text-gray-400">
                © {new Date().getFullYear()} All rights reserved.
              </p>

              <p className="text-sm text-gray-400">
                Designed by{" "}
                <span className="text-white font-medium">
                  Tanvi Bhalani
                </span>
              </p>

            </div>
          </footer>

        </div>

      </div>
    </div>
  );
}
