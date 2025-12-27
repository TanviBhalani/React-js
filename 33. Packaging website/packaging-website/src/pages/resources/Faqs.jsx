import { useEffect, useRef, useState } from "react";
import Footer from "../../Components/Footer";

export default function Faqs() {
  const [activeSection, setActiveSection] = useState("home");
  const [openFaq, setOpenFaq] = useState(null);
  const sectionRefs = useRef({});
  

  const faqData = [
    {
      id: "home",
      title: "Home",
      faqs: [
        {
          q: "What types of packaging do you offer?",
          a: "We supply a wide range of food, produce, and custom packaging from ready-to-order items to fully bespoke branded solutions."
        },
        {
          q: "Do you deliver nationwide?",
          a: "Yes. We offer reliable nationwide delivery."
        },
        {
          q: "Do you deliver globally?",
          a: "Yes. We have a reliable global delivery system in place."
        },
        {
          q: "How do I place an order?",
          a: "You can place an order via our website or by contacting our sales team."
        }
      ]
    },
    {
      id: "agriculture",
      title: "Agriculture",
      faqs: [
        {
          q: "What agricultural packaging solutions do you offer?",
          a: "Custom-made clamshells, punnets, trays, heat seal trays, liners, printing and labels."
        },
        {
          q: "What is your order lead time?",
          a: "Production is completed within four weeks of order approval."
        },
        {
          q: "Can I track the progress of my order?",
          a: "Yes, our support team keeps you updated from production to delivery."
        }
      ]
    },
    {
      id: "food-service",
      title: "Food Service",
      faqs: [
        {
          q: "Which divisions of the Food Service Industry do you cater to?",
          a: "We assist hotels, restaurants and event caterers with high-performance packaging."
        },
        {
          q: "Do you have sustainable food packaging options?",
          a: "Yes. Choose from rPET, FSC paper, compostable and biodegradable options."
        }
      ]
    },
    {
      id: "food-processing",
      title: "Food Processing",
      faqs: [
        {
          q: "What packaging sizes and formats are available?",
          a: "Multiple sizes and formats depending on processing requirements."
        },
        {
          q: "What is your lead time?",
          a: "Lead times vary based on order volume and customization."
        }
      ]
    },
    {
      id: "custom-solutions",
      title: "Custom Solutions",
      faqs: [
        {
          q: "What are the minimum order quantities (MOQs)?",
          a: "MOQs depend on the product and level of customization."
        },
        {
          q: "Can I provide my own packaging artwork?",
          a: "Yes, our team will assist with artwork setup."
        }
      ]
    },
    {
      id: "yucca-rewards",
      title: "Yucca Rewards",
      faqs: [
        {
          q: "How is cashback calculated?",
          a: "Cashback is calculated on qualifying purchases."
        },
        {
          q: "Do cashback rewards expire?",
          a: "No, cashback rewards do not expire."
        }
      ]
    },
    {
      id: "yucca-direct",
      title: "Yucca Direct",
      faqs: [
        {
          q: "Who is Yucca Direct for?",
          a: "Yucca Direct is for customers needing fast, negotiated ordering."
        },
        {
          q: "How does Yucca Direct differ from the online store?",
          a: "Yucca Direct offers negotiated pricing and curated product lists."
        }
      ]
    }
  ];

  /* Scroll spy */
useEffect(() => {
  const handleScroll = () => {
    let closestSection = null;
    let minDistance = Infinity;

    Object.entries(sectionRefs.current).forEach(([id, section]) => {
      const rect = section.getBoundingClientRect();
      const distance = Math.abs(rect.top - 150);

      if (distance < minDistance) {
        minDistance = distance;
        closestSection = id;
      }
    });

    if (closestSection && closestSection !== activeSection) {
      setActiveSection(closestSection);
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  return () => window.removeEventListener("scroll", handleScroll);
}, [activeSection]);


  const scrollToSection = (id) => {
    sectionRefs.current[id].scrollIntoView({ behavior: "smooth" });
  };

  return (
  <>
    {/* <section className="bg-[#fffdf5] min-h-screen px-30 py-12">
      <p className="text-sm mb-4">FAQs</p>
      <h1 className="text-5xl font-normal mb-20">
        Frequently Asked Questions
      </h1>

      <div className="grid grid-cols-[260px_1fr] gap-20">

        <aside className="sticky top-24 h-fit">
          <ul className="space-y-6 text-md">
            {faqData.map((section) => (
              <li
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`cursor-pointer pl-4 border-l-2 transition ${
                  activeSection === section.id
                    ? "border-black font-medium bg-[#f7f4e9] p-2"
                    : "border-transparent opacity-70"
                }`}
              >
                {section.title}
              </li>
            ))}
          </ul>
        </aside>

        <div className="space-y-15">
          {faqData.map((section) => (
            <div
              key={section.id}
              id={section.id}
              ref={(el) => (sectionRefs.current[section.id] = el)}
            >
              <h2 className="text-3xl font-medium mb-10">
                {section.title}
              </h2>

              {section.faqs.map((item, index) => {
                const key = `${section.id}-${index}`;
                const isOpen = openFaq === key;

                return (
                  <div key={key} className="border-t border-black/30 py-4 w-190">
                    <button
                      onClick={() =>
                        setOpenFaq(isOpen ? null : key)
                      }
                      className="w-full flex justify-between items-center text-left text-lg"
                    >
                      <span>{item.q}</span>
                      <span className="text-2xl">
                        {isOpen ? "–" : "+"}
                      </span>
                    </button>

                    <div
                      className={`grid transition-all duration-300 ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100 mt-4"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden text-sm max-w-3xl leading-relaxed">
                        {item.a}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>

      </div>
    </section> */}

    <section className="bg-[#fffdf5] min-h-screen px-6 sm:px-10 md:px-20 lg:px-30 py-10 sm:py-12">
  <p className="text-xs sm:text-sm mb-3 sm:mb-4">FAQs</p>

  <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal mb-10 sm:mb-14 md:mb-20">
    Frequently Asked Questions
  </h1>

  <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-10 md:gap-20">

    {/* LEFT SIDEBAR */}
    <aside className="md:sticky md:top-24 h-fit">
      <ul className="space-y-4 sm:space-y-6 text-sm sm:text-md">
        {faqData.map((section) => (
          <li
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className={`cursor-pointer pl-4 border-l-2 transition ${
              activeSection === section.id
                ? "border-black font-medium bg-[#f7f4e9] p-2"
                : "border-transparent opacity-70"
            }`}
          >
            {section.title}
          </li>
        ))}
      </ul>
    </aside>

    {/* RIGHT CONTENT */}
    <div className="space-y-10 sm:space-y-15">
      {faqData.map((section) => (
        <div
          key={section.id}
          id={section.id}
          ref={(el) => (sectionRefs.current[section.id] = el)}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium mb-6 sm:mb-8 md:mb-10">
            {section.title}
          </h2>

          {section.faqs.map((item, index) => {
            const key = `${section.id}-${index}`;
            const isOpen = openFaq === key;

            return (
              <div
                key={key}
                className="border-t border-black/30 py-3 sm:py-4 w-full md:w-190"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : key)}
                  className="w-full flex justify-between items-center text-left text-base sm:text-lg gap-4"
                >
                  <span>{item.q}</span>
                  <span className="text-xl sm:text-2xl">
                    {isOpen ? "–" : "+"}
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100 mt-3 sm:mt-4"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden text-xs sm:text-sm max-w-3xl leading-relaxed">
                    {item.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>

  </div>
</section>



    <Footer/>



  </>
  );
}
