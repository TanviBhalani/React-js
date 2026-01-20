// import { useEffect, useState } from "react";

// export default function Right() {
//   // Typing animation logic
//   const texts = ["Full-Stack Developer", "Web Developer"];
//   const [textIndex, setTextIndex] = useState(0);
//   const [charIndex, setCharIndex] = useState(0);
//   const [isDeleting, setIsDeleting] = useState(false);

//   useEffect(() => {
//     const currentText = texts[textIndex];
//     let timeout;

//     if (!isDeleting && charIndex < currentText.length) {
//       timeout = setTimeout(() => setCharIndex((prev) => prev + 1), 120);
//     } 
//     else if (isDeleting && charIndex > 0) {
//       timeout = setTimeout(() => setCharIndex((prev) => prev - 1), 80);
//     } 
//     else if (!isDeleting && charIndex === currentText.length) {
//       timeout = setTimeout(() => setIsDeleting(true), 1000);
//     } 
//     else if (isDeleting && charIndex === 0) {
//       setIsDeleting(false);
//       setTextIndex((prev) => (prev + 1) % texts.length);
//     }

//     return () => clearTimeout(timeout);
//   }, [charIndex, isDeleting, textIndex]);

//   return (
//     <div className="space-y-16 sm:space-y-24">

//       {/* HERO */}
//       <section>
//         <p className="text-gray-400 mb-3">👋 Say Hello</p>

//         <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
//           I’m Tanvi Bhalani,
//         </h1>

//         {/* TYPING TEXT */}
//         <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-500 mb-4">
//           {texts[textIndex].slice(0, charIndex)}
//           <span className="ml-1 animate-pulse">|</span>
//         </h2>

//         <p className="text-lg sm:text-xl text-gray-300 mb-6">
//           Available for freelance and full-time roles.
//         </p>

//         <p className="text-gray-400 max-w-4xl text-base sm:text-lg lg:text-xl leading-relaxed mt-6">
//           I’m a passionate full-stack developer specializing in building
//           scalable, high-performance web applications from end to end.
//           I work across the entire stack — crafting responsive user interfaces,
//           developing robust backend systems, designing APIs, and managing databases.
//           My focus is on writing clean, maintainable code and delivering
//           seamless digital experiences that solve real-world problems.
//         </p>
//       </section>

//       {/* STATS */}
//       <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12">
//         {[
//           ["15+", "Personal Projects"],
//           ["1+ Year", "Hands-on Practice"],
//           ["10+", "Technologies Learned"],
//           ["100%", "Commitment"],
//         ].map(([num, label]) => (
//           <div key={label}>
//             <h2 className="text-3xl sm:text-4xl font-bold">{num}</h2>
//             <p className="text-gray-400">{label}</p>
//           </div>
//         ))}
//       </section>

//       {/* EXPERIENCE */}
//       <section>
//         <h2 className="text-2xl sm:text-3xl font-semibold mb-6 flex items-center gap-3">
//           <span>💼</span> Experience & Projects
//         </h2>

//         <div className="space-y-6">

//           {/* ITEM 1 */}
//           <div className="border border-gray-800 p-6 rounded-xl bg-[#111]">
//             <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
//               <div>
//                 <h3 className="text-xl font-semibold">
//                   Full-Stack Developer (Personal Projects)
//                 </h3>
//                 <p className="text-gray-400">Self-Learning</p>
//               </div>
//               <span className="text-xs sm:text-sm bg-gray-800 px-3 py-1 rounded-full w-fit">
//                 2025 – Present
//               </span>
//             </div>

//             <p className="text-gray-400 leading-relaxed">
//               Built complete full-stack web applications using React, Node.js,
//               Express, and databases. Worked on authentication, REST APIs,
//               responsive UI design, and performance optimization.
//             </p>
//           </div>

//           {/* ITEM 2 */}
//           <div className="border border-gray-800 p-6 rounded-xl bg-[#111]">
//             <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
//               <div>
//                 <h3 className="text-xl font-semibold">
//                   Web Development Training
//                 </h3>
//                 <p className="text-gray-400">Course / Bootcamp</p>
//               </div>
//               <span className="text-xs sm:text-sm bg-gray-800 px-3 py-1 rounded-full w-fit">
//                 2024 – 2025
//               </span>
//             </div>

//             <p className="text-gray-400 leading-relaxed">
//               Completed structured training in HTML, CSS, JavaScript, React,
//               and backend fundamentals. Developed multiple mini-projects
//               and gained hands-on experience with real-world workflows.
//             </p>
//           </div>

//           {/* ITEM 3 */}
//           <div className="border border-gray-800 p-6 rounded-xl bg-[#111]">
//             <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
//               <div>
//                 <h3 className="text-xl font-semibold">
//                   Frontend Practice & UI Development
//                 </h3>
//                 <p className="text-gray-400">Self Practice</p>
//               </div>
//               <span className="text-xs sm:text-sm bg-gray-800 px-3 py-1 rounded-full w-fit">
//                 Ongoing
//               </span>
//             </div>

//             <p className="text-gray-400 leading-relaxed">
//               Practicing modern frontend development using React and Tailwind CSS.
//               Focused on building clean UI components, animations, responsiveness,
//               and improving user experience.
//             </p>
//           </div>

//         </div>
//       </section>

//     </div>
//   );
// }
    











import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJs,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiC,
} from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { SiFirebase } from "react-icons/si";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase"; // adjust path if needed
import { FaLinkedin, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";






const projects = [
  {
    title: "Vidhata",
    type: "Personal Project · Next-js",
    image: "/images/vidhata.png",
    link: "https://vidhata-111.vercel.app/",
  },
  {
    title: "Top-Tech Packaging",
    type: "Practice Project · React-js, Firebase",
    image: "/images/top-tech.png",
    link: "https://toptech-packaging.vercel.app/",
  },
  {
    title: "Expense Tracker",
    type: "Academic Project · CRUD ",
    image: "/images/expense-tracker.png",
    link: "https://excludia-demo.vercel.app",
  },
  {
    title: "BCCI Clone",
    type: "Self Learning  · Frontend",
    image: "/images/bcci.png",
    link: "https://java-script-six-pied.vercel.app/",
  },
];

export default function Right() {
  // Typing animation logic
  const texts = ["Full-Stack Developer", "Web Developer"];
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const [contactData, setContactData] = useState({
  name: "",
  email: "",
  phone: "",
  message: "",
});


const handleContactChange = (e) => {
  setContactData({ ...contactData, [e.target.name]: e.target.value });
};

const handleContactSubmit = async (e) => {
  e.preventDefault();
  try {
    await addDoc(collection(db, "contacts"), {
      ...contactData,
      createdAt: new Date(),
    });

    alert("Message sent successfully ✅");
    setContactData({ name: "", email: "", phone: "", message: "" });
  } catch (error) {
    alert("Something went wrong ❌");
  }
};


  useEffect(() => {
    const currentText = texts[textIndex];
    let timeout;

    if (!isDeleting && charIndex < currentText.length) {
      timeout = setTimeout(() => setCharIndex((prev) => prev + 1), 120);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((prev) => prev - 1), 80);
    } else if (!isDeleting && charIndex === currentText.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);



  const stacks = [
  { icon: <FaHtml5 />, color: "text-orange-500", title: "HTML", subtitle: "Markup Language" },
  { icon: <FaCss3Alt />, color: "text-blue-500", title: "CSS", subtitle: "Styling & Layout" },
  { icon: <FaBootstrap />, color: "text-purple-500", title: "Bootstrap", subtitle: "CSS Framework" },
  { icon: <SiTailwindcss />, color: "text-cyan-400", title: "Tailwind CSS", subtitle: "Utility-First CSS" },
  { icon: <FaJs />, color: "text-yellow-400", title: "JavaScript", subtitle: "Programming Language" },
  { icon: <FaReact />, color: "text-sky-400", title: "React.js", subtitle: "Frontend Library" },
  { icon: <FaNodeJs />, color: "text-green-500", title: "Node.js", subtitle: "Backend Runtime" },
  { icon: <SiExpress />, color: "text-gray-300", title: "Express.js", subtitle: "Backend Framework" },
  { icon: <SiMongodb />, color: "text-green-400", title: "MongoDB", subtitle: "NoSQL Database" },
  { icon: <SiFirebase />, color: "text-yellow-400", title: "Firebase", subtitle: "Auth • Database • Hosting" },
  { icon: <SiC />, color: "text-blue-400", title: "C", subtitle: "Programming Language" },
  { icon: <TbBrandCpp />, color: "text-indigo-400", title: "C++", subtitle: "Object-Oriented Programming" },
];


const [showAll, setShowAll] = useState(false);


  return (
    <div className="space-y-16 sm:space-y-24 w-full max-w-full overflow-x-hidden">

      {/* HERO */}
      <section className="w-full max-w-full overflow-x-hidden">
        <p className="text-gray-400 mb-3">👋 Say Hello</p>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
          I’m Tanvi Bhalani,
        </h1>

        {/* TYPING TEXT */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-500 mb-4 wrap-break-words">
          {texts[textIndex].slice(0, charIndex)}
          <span className="ml-1 animate-pulse">|</span>
        </h2>

        <p className="text-lg sm:text-xl text-gray-300 mb-6">
          Available for freelance and full-time roles.
        </p>

        <p className="text-gray-400 w-full max-w-full sm:max-w-3xl lg:max-w-4xl text-base sm:text-lg lg:text-xl leading-relaxed mt-6">
          I’m a passionate full-stack developer specializing in building
          scalable, high-performance web applications from end to end.
          I work across the entire stack — crafting responsive user interfaces,
          developing robust backend systems, designing APIs, and managing databases.
          My focus is on writing clean, maintainable code and delivering
          seamless digital experiences that solve real-world problems.
        </p>
      </section>

      {/* STATS */}
      <section className="grid grid-cols-1 max-sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 w-full max-w-full">
        {[
          ["15+", "Personal Projects"],
          ["1+ Year", "Hands-on Practice"],
          ["10+", "Technologies Learned"],
          ["100%", "Commitment"],
        ].map(([num, label]) => (
          <div key={label} className="w-full max-w-full">
            <h2 className="text-3xl sm:text-4xl font-bold">{num}</h2>
            <p className="text-gray-400">{label}</p>
          </div>
        ))}
      </section>

      {/* EXPERIENCE */}
      <section className="w-full max-w-full overflow-x-hidden">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 flex items-center gap-3">
          <span>💼</span> Experience & Projects
        </h2>

        <div className="space-y-6">

          {/* ITEM 1 */}
          <div className="border border-gray-800 p-6 rounded-xl bg-[#111] w-full max-w-full">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
              <div>
                <h3 className="text-xl font-semibold">
                  Full-Stack Developer (Personal Projects)
                </h3>
                <p className="text-gray-400">Self-Learning</p>
              </div>
              <span className="text-xs sm:text-sm bg-gray-800 px-3 py-1 rounded-full w-fit">
                2025 – Present
              </span>
            </div>

            <p className="text-gray-400 leading-relaxed">
              Built complete full-stack web applications using React, Node.js,
              Express, and databases. Worked on authentication, REST APIs,
              responsive UI design, and performance optimization.
            </p>
          </div>

          {/* ITEM 2 */}
          <div className="border border-gray-800 p-6 rounded-xl bg-[#111] w-full max-w-full">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
              <div>
                <h3 className="text-xl font-semibold">
                  Web Development Training
                </h3>
                <p className="text-gray-400">Course / Bootcamp</p>
              </div>
              <span className="text-xs sm:text-sm bg-gray-800 px-3 py-1 rounded-full w-fit">
                2024 – 2025
              </span>
            </div>

            <p className="text-gray-400 leading-relaxed">
              Completed structured training in HTML, CSS, JavaScript, React,
              and backend fundamentals. Developed multiple mini-projects
              and gained hands-on experience with real-world workflows.
            </p>
          </div>

          {/* ITEM 3 */}
          <div className="border border-gray-800 p-6 rounded-xl bg-[#111] w-full max-w-full">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
              <div>
                <h3 className="text-xl font-semibold">
                  Frontend Practice & UI Development
                </h3>
                <p className="text-gray-400">Self Practice</p>
              </div>
              <span className="text-xs sm:text-sm bg-gray-800 px-3 py-1 rounded-full w-fit">
                Ongoing
              </span>
            </div>

            <p className="text-gray-400 leading-relaxed">
              Practicing modern frontend development using React and Tailwind CSS.
              Focused on building clean UI components, animations, responsiveness,
              and improving user experience.
            </p>
          </div>

        </div>
      </section>

      <section className="space-y-8">

      {/* SECTION TITLE */}
      <h2 className="text-2xl sm:text-3xl font-semibold flex items-center gap-3">
        🚀 Projects
      </h2>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="
              group relative
              bg-[#111]
              border border-gray-800
              rounded-2xl
              overflow-hidden
            "
          >
            {/* IMAGE */}
            <img
              src={project.image}
              alt={project.title}
              className="
                w-full
                h-75 sm:h-90
                object-cover
                transition-transform duration-300
                group-hover:scale-105
              "
            />

            {/* CONTENT */}
            <div className="p-4 sm:p-5">
              <h3 className="text-lg sm:text-xl font-semibold">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {project.type}
              </p>
            </div>

            {/* ARROW BUTTON */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                absolute bottom-4 right-4
                w-10 h-10
                flex items-center justify-center
                rounded-full
                bg-[#1a1a1a]
                border border-gray-700
                hover:bg-green-500 hover:text-black
                transition
              "
            >
              <ArrowUpRight size={18} />
            </a>
          </div>
        ))}
      </div>
    </section>


   <section className="bg-black text-white py-5">
      <div className="max-w-5xl mx-auto px-0">

        {/* Heading */}
        <h2 className="text-3xl font-semibold mb-12 flex items-center gap-3">
          🎓 Education
        </h2>

        <div className="space-y-8">

          {/* Card 1 */}
          <div className="relative bg-linear-to-br from-[#111] to-[#0b0b0b] border border-white/10 rounded-2xl p-6">
            <span className="absolute top-6 right-6 text-sm bg-white/10 px-4 py-1 rounded-full">
              2025 – Present
            </span>

            <h3 className="text-xl font-semibold mb-1">
              Fullstack Development
            </h3>
            <p className="text-gray-400 mb-4">
              Red and White Institute
            </p>

            <p className="text-gray-300 leading-relaxed">
              Hands-on training in full-stack web development including HTML,
              CSS, JavaScript, React, Node.js, Express, MongoDB, and real-world
              project development.
            </p>
          </div>

          {/* Card 2 */}
          <div className="relative bg-linear-to-br from-[#111] to-[#0b0b0b] border border-white/10 rounded-2xl p-6">
            <span className="absolute top-6 right-6 text-sm bg-white/10 px-4 py-1 rounded-full">
              2024 – 2027
            </span>

            <h3 className="text-xl font-semibold mb-1">
              Bachelor of Computer Applications (BCA)
            </h3>
            <p className="text-gray-400 mb-4">
              Saurashtra University
            </p>

            <p className="text-gray-300 leading-relaxed">
              Currently pursuing BCA with a strong foundation in programming,
              data structures, databases, and modern web technologies.
            </p>
          </div>

          {/* Card 3 */}
          <div className="relative bg-linear-to-br from-[#111] to-[#0b0b0b] border border-white/10 rounded-2xl p-6">
            <span className="absolute top-6 right-6 text-sm bg-white/10 px-4 py-1 rounded-full">
              2022 – 2024
            </span>

            <h3 className="text-xl font-semibold mb-1">
              Higher Secondary School Certificate (HSC)
            </h3>
            <p className="text-gray-400 mb-4">
              K.G. Dholakiya School
            </p>

            <p className="text-gray-300 leading-relaxed">
              Completed higher secondary education with focus on computer
              fundamentals and academic excellence.
            </p>
          </div>

          {/* Card 4 */}
          <div className="relative bg-linear-to-br from-[#111] to-[#0b0b0b] border border-white/10 rounded-2xl p-6">
            <span className="absolute top-6 right-6 text-sm bg-white/10 px-4 py-1 rounded-full">
              2020 – 2022
            </span>

            <h3 className="text-xl font-semibold mb-1">
              Secondary School Certificate (SSC)
            </h3>
            <p className="text-gray-400 mb-4">
              Pathak School
            </p>

            <p className="text-gray-300 leading-relaxed">
              Completed secondary education, building strong basics in
              mathematics, science, and logical thinking.
            </p>
          </div>

        </div>
      </div>
    </section>


 {/* <section className="bg-black text-white py-0">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-semibold mb-12 flex items-center gap-3">
          🧩 Stacks
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <StackCard icon={<FaHtml5 />} color="text-orange-500" title="HTML" subtitle="Markup Language" />
          <StackCard icon={<FaCss3Alt />} color="text-blue-500" title="CSS" subtitle="Styling & Layout" />
          <StackCard icon={<FaBootstrap />} color="text-purple-500" title="Bootstrap" subtitle="CSS Framework" />
          <StackCard icon={<SiTailwindcss />} color="text-cyan-400" title="Tailwind CSS" subtitle="Utility-First CSS" />
          <StackCard icon={<FaJs />} color="text-yellow-400" title="JavaScript" subtitle="Programming Language" />
          <StackCard icon={<FaReact />} color="text-sky-400" title="React.js" subtitle="Frontend Library" />
          <StackCard icon={<FaNodeJs />} color="text-green-500" title="Node.js" subtitle="Backend Runtime" />
          <StackCard icon={<SiExpress />} color="text-gray-300" title="Express.js" subtitle="Backend Framework" />
          <StackCard icon={<SiMongodb />} color="text-green-400" title="MongoDB" subtitle="NoSQL Database" />
          <StackCard icon={<SiFirebase />} color="text-yellow-400" title="Firebase" subtitle="Auth • Database • Hosting"/>
          <StackCard icon={<SiC />} color="text-blue-400" title="C" subtitle="Programming Language" />
          <StackCard icon={<TbBrandCpp />} color="text-indigo-400" title="C++" subtitle="Object-Oriented Programming" />

        </div>
      </div>
    </section> */}

    <section className="bg-black text-white py-0">
  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-3xl font-semibold mb-12 flex items-center gap-3">
      🧩 Stacks
    </h2>

    {/* STACK GRID */}
    <div className="grid md:grid-cols-2 gap-6 transition-all duration-500">
      {(showAll ? stacks : stacks.slice(0, 6)).map((stack, index) => (
        <StackCard
          key={index}
          icon={stack.icon}
          color={stack.color}
          title={stack.title}
          subtitle={stack.subtitle}
        />
      ))}
    </div>

    {/* SHOW MORE / LESS BUTTON */}
    <div className="flex justify-center mt-10">
      <button
        onClick={() => setShowAll(!showAll)}
        className="
          flex items-center gap-2
          text-gray-400 hover:text-green-400
          transition
        "
      >
        <span className="text-sm font-medium">
          {showAll ? "Show Less" : "Show More"}
        </span>

        <svg
          className={`w-5 h-5 transition-transform duration-300 ${showAll ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </div>

  </div>
</section>



  <section className="bg-black text-white py-10">
  <div className="max-w-6xl mx-auto px-6">

    {/* Heading */}
    <p className="text-gray-400 flex items-center gap-2 mb-2">
      ✈️ Contact
    </p>
    <h2 className="text-3xl sm:text-4xl font-bold mb-12">
      Let’s Get in Touch!
    </h2>

    <div className="grid md:grid-cols-2 gap-10">

      {/* LEFT INFO */}
      <div className="space-y-6">

        <ContactCard
           icon={<FaLinkedin />}
  label="LinkedIn"
  value="linkedin.com/in/tanvi-bhalani"
        />

        <ContactCard
          icon={<FaEnvelope />}
          label="Email"
          value="tanvibhalani05@gmail.com"
        />

        <ContactCard
          icon={<FaMapMarkerAlt />}
          label="Address"
          value="Rajkot, Gujarat"
        />

      </div>

      {/* RIGHT FORM */}
      <form
        onSubmit={handleContactSubmit}
        className="space-y-5 flex flex-col"
      >
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={contactData.name}
          onChange={handleContactChange}
          required
          className="contact-input border border-gray-600 rounded-sm px-5 py-2"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={contactData.email}
          onChange={handleContactChange}
          required
          className="contact-input border border-gray-600 rounded-sm px-5 py-2 text-start"
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={contactData.phone}
          onChange={handleContactChange}
          className="contact-input border border-gray-600 rounded-sm px-5 py-2"
        />

        <textarea
          name="message"
          placeholder="Message"
          rows="5"
          value={contactData.message}
          onChange={handleContactChange}
          required
          className="contact-input resize-none border border-gray-600 rounded-sm px-5 py-2"
        />

        <button
          type="submit"
          className="
            w-full
            bg-green-400
            text-black
            py-4
            rounded-xl
            font-semibold
            hover:bg-green-500
            transition cursor-pointer
          "
        >
          Send Message
        </button>
      </form>

    </div>
  </div>
</section>



    </div>
  );
}


function StackCard({ icon, title, subtitle, color }) {
  return (
    <div
      className="flex items-center gap-5 p-6 rounded-2xl
      bg-linear-to-br from-[#111] to-[#0b0b0b]
      border border-white/10 hover:border-white/30
      transition duration-300 group"
    >
      <div className={`text-4xl ${color} group-hover:drop-shadow-[0_0_8px_currentColor]`}>
        {icon}
      </div>

      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-400">{subtitle}</p>
      </div>
    </div>
  );
}


function ContactCard({ icon, label, value }) {
  return (
    <div
      className="
        flex items-center gap-4
        bg-linear-to-br from-[#111] to-[#0b0b0b]
        border border-white/10
        rounded-2xl
        p-5
      "
    >
      <div className="text-green-400 text-2xl">
        {icon}
      </div>
      <div>
        <p className="text-sm text-gray-400">{label}</p>
        <p className="font-medium">{value}</p>
      </div>
    </div>
  );
}

