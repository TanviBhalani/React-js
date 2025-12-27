import { ShoppingCart, User, FileText } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


export default function Navbar() {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileView, setMobileView] = useState("main");
  // main | shop | packaging | resources


  const [showProfile, setShowProfile] = useState(false);
  const [showShop, setShowShop] = useState(false);
  const [showPackaging, setShowPackaging] = useState(false);
  const [showResources, setShowResources] = useState(false);


  const ImageCard = ({ title, className = "" }) => (
    <div
      className={`relative rounded-2xl overflow-hidden h-72 flex items-end p-6 text-white ${className}`}
    >
      <div>
        <h3 className="text-xl">{title}</h3>
        <div className="underline mt-50">Explore</div>
      </div>
    </div>
  );


  const links = [
    { name: "Coffee", path: "/shop/coffee" },
    { name: "Smoothies", path: "/shop/smoothies" },
    { name: "Deli", path: "/shop/deli" },
    { name: "Takeout", path: "/shop/takeout" },
    { name: "Cutlery", path: "/shop/cutlery" },
    { name: "Bags", path: "/shop/bags" },
    { name: "Extras", path: "/shop/extras" },
  ];


  const [lockPackaging, setLockPackaging] = useState(false);
  const [lockResources, setLockResources] = useState(false);


  useEffect(() => {
    if (mobileOpen && window.innerWidth < 768 ) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);



  const location = useLocation();

  useEffect(() => {
    setShowProfile(false);
  }, [location.pathname]);




  return (
    <>

      {/* ================= MOBILE MENU (FULL) ================= */}
{mobileOpen && (      <div
        className={`
    fixed top-0 left-0 right-0  bg-[#fffdf5] z-9999 md:hidden
    transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
    
  `}
      >

        {/* ================= TOP BAR ================= */}
        <div className="relative">

          {/* LOGO */}
          <div className="absolute left-6 top-4">
            <Link to="/" onClick={() => setMobileOpen(false)}>
              <img src="/images/logo-n.png" alt="Yucca" className="w-24" />
            </Link>
          </div>

          {/* RIGHT ICONS */}
          <div className="absolute right-6 top-4 flex items-center gap-4">


            {/* cart icon */}
            <div className="relative icon-box">
              <ShoppingCart className="icon icon-black" size={18} />
              <ShoppingCart className="icon icon-white" size={18} />
            </div>


            {/* user icon */}
            <div className="relative">
              <div
                className="icon-box cursor-pointer"
                onClick={() => setShowProfile(!showProfile)}
              >
                {/* <User size={18} /> */}
                <div className="relative overflow-hidden h-9.5 w-4.5">
                  <User className="icon icon-black absolute inset-0 icon-black transition-all duration-300 ease-in-out group-hover:-translate-y-full group-hover:opacity-0" size={18} />
                  <User className="icon icon-white" size={18} />
                </div>
              </div>

              {showProfile && (
                <div
                  className="absolute right-0 top-14 w-72 bg-[#fdf9f2] shadow-xl rounded-xl p-4 z-50"
                  onMouseLeave={() => setShowProfile(false)}
                >
                  <div className="bg-[#e6e0cc] rounded-lg p-3 mb-4">
                    <h4 className="font-semibold">Yucca Rewards.</h4>
                    <p className="text-sm mt-1">
                      Login or Register to earn 5% cashback when you shop
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      setShowProfile(false);
                      navigate("/login");
                    }}
                    className="w-full bg-black text-white py-2 rounded-lg"
                  >
                    Login
                  </button>


                  <p className="text-sm mt-2">
                    Don’t have an account?{" "}
                    <Link
                      to="/register"
                      className="underline cursor-pointer"
                      onClick={() => setMobileOpen(false)}
                    >
                      Register here
                    </Link>
                  </p>
                </div>
              )}
            </div>

            {/* close icon */}
            <button onClick={() => setMobileOpen(false)}>✕</button>
          </div>

          {/* BACK ARROW */}
          {mobileView !== "main" && (
            <button
              onClick={() => setMobileView("main")}
              className="absolute left-6 top-16 text-2xl"
            >
              ←
            </button>
          )}

          <div className="h-32" />
        </div>

        {/* CREDIT BAR */}
        <div className="bg-[#e6e6d8] py-3 flex justify-center items-center gap-2 text-sm -mt-17">
          <FileText size={14} />
          Credit Application
        </div>

        {/* ================= SLIDING CONTAINER ================= */}
        <div className="relative w-full flex-1 overflow-hidden">
          <div
            className="flex h-full overflow-y-auto overscroll-none touch-none transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              width: "400%",
              transform:
                mobileView === "main"
                  ? "translateX(0%)"
                  : mobileView === "shop"
                    ? "translateX(-25%)"
                    : mobileView === "packaging"
                      ? "translateX(-50%)"
                      : "translateX(-75%)"
            }}
          >

            {/* ================= MAIN ================= */}
            <div className="w-full px-6 py-10 space-y-8 text-2xl font-light">
              <button onClick={() => setMobileView("shop")} className="flex justify-between w-full">
                Shop <span>→</span>
              </button>

              <button onClick={() => setMobileView("packaging")} className="flex justify-between w-full">
                Packaging Solutions <span>→</span>
              </button>

              <Link to="/company" onClick={() => setMobileOpen(false)}>Company</Link>

              <button onClick={() => setMobileView("resources")} className="flex justify-between w-full">
                Resources <span>→</span>
              </button>

              <Link to="/contact" onClick={() => setMobileOpen(false)}>Contact Us</Link>
            </div>

            {/* ================= SHOP ================= */}
            <div className="w-full px-6 py-10 space-y-6 text-base">

              <h3 className="text-xl mb-4">Shop</h3>

              <div className="flex items-center gap-2">
                Promotions
                <span className="bg-orange-500 text-white text-xs px-2 rounded">Sale</span>
              </div>

              {links.map(item => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className="block"
                >
                  {item.name}
                </Link>
              ))}

              {/* INFO CARD */}
              <div className="bg-[#f3efe4] rounded-2xl p-6 mt-8 relative overflow-hidden">
                <p className="text-sm max-w-[70%]">
                  Looking for something specific?
                  We can customise your packaging to fit your needs
                </p>

                <Link to="/explore" onClick={() => setMobileOpen(false)} className="underline mt-4 inline-block">
                  Explore
                </Link>

                <img
                  src="/images/bg-1.png"
                  className="absolute right-0 bottom-0 w-28 opacity-60"
                />
              </div>

              {/* PROMO CARD */}
              <div className="bg-[#0f2a1d] text-white rounded-3xl p-6">
                Join our loyalty programme to earn 5% back
                <Link to="/rewards" onClick={() => setMobileOpen(false)} className="underline mt-4 block">
                  Discover Now →
                </Link>
              </div>

              {/* SALE CARD */}
              <div className="bg-[#c2653a] text-white rounded-3xl p-6">
                Sale: Up to 25% Off
                <p className="text-xs mt-2">
                  Applied to selected items. Prices already discounted.
                </p>
                <Link to="/shop" onClick={() => setMobileOpen(false)} className="underline mt-4 block">
                  Shop our promotions →
                </Link>
              </div>

              <Link
                to="/shop"
                onClick={() => setMobileOpen(false)}
                className="block mt-4 bg-black text-white text-center py-4 rounded-xl"
              >
                Shop all products
              </Link>
            </div>

            {/* ================= PACKAGING ================= */}
            <div className="w-full px-6 py-10 space-y-6">

              <h3 className="text-xl font-medium mb-2">Packaging Solutions</h3>

              {/* Food Service */}
              <Link
                to="/package"
                onClick={() => setMobileOpen(false)}
                className="relative block h-36 rounded-2xl overflow-hidden"
              >
                <img
                  src="/images/p1.jpg"
                  alt="Food Service"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="relative z-10 h-full flex items-center justify-between px-6 text-white">
                  <span className="text-2xl font-normal">Food Service</span>
                  <span className="text-4xl">→</span>
                </div>
              </Link>

              {/* Food Processing */}
              <Link
                to="/processing"
                onClick={() => setMobileOpen(false)}
                className="relative block h-36 rounded-2xl overflow-hidden"
              >
                <img
                  src="/images/p2.jpg"
                  alt="Food Processing"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative z-10 h-full flex items-center justify-between px-6 text-white">
                  <span className="text-2xl font-normal">Food Processing</span>
                  <span className="text-4xl">→</span>
                </div>
              </Link>

              {/* Agriculture */}
              <Link
                to="/agriculture"
                onClick={() => setMobileOpen(false)}
                className="relative block h-36 rounded-2xl overflow-hidden"
              >
                <img
                  src="/images/p3.jpg"
                  alt="Agriculture"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative z-10 h-full flex items-center justify-between px-6 text-white">
                  <span className="text-2xl font-normal">Agriculture</span>
                  <span className="text-4xl">→</span>
                </div>
              </Link>


              {/* ================= INFO CARD ================= */}
              <div className="bg-[#f7f3e8] rounded-3xl p-6 mt-6 relative overflow-hidden">

                <h4 className="text-xl font-medium mb-3">
                  Looking for something specific?
                </h4>

                <p className="text-sm max-w-[65%] text-gray-700">
                  We can customise your packaging
                  to fit your needs
                </p>

                <Link
                  to="/explore"
                  onClick={() => setMobileOpen(false)}
                  className="inline-block mt-6 underline"
                >
                  Explore
                </Link>

                <img
                  src="/images/bg-1.png"
                  alt="Custom Packaging"
                  className="absolute right-0 top-0 bottom-0 w-60 opacity-80"
                />
              </div>

            </div>


            {/* ================= RESOURCES ================= */}
            <div className="w-full px-6 py-10 space-y-6 text-lg">

              <h3 className="text-xl font-medium">Resources</h3>
              <div className="flex flex-col gap-4">

                <Link to="/waitlist" onClick={() => setMobileOpen(false)}>Waitlist</Link>
                <Link to="/rewards" onClick={() => setMobileOpen(false)}>Yucca Rewards & Direct</Link>
                <Link to="/blogs" onClick={() => setMobileOpen(false)}>Case Studies & Blogs</Link>
                <Link to="/faqs" onClick={() => setMobileOpen(false)}>FAQs</Link>
              </div>


            </div>

          </div>
        </div>
      </div>)}




      <header className="bg-[#fdf9f2] border-b fixed top-0 left-0 w-full z-999">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 ">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 cursor-pointer">
            <img src="/images/logo-n.png" alt="Yucca" className="w-36" />
          </Link>

          {/* ================= MENU ================= */}
          <nav className="hidden md:flex gap-8 text-sm font-medium z-1000">

            {/* ================= SHOP ================= */}
            <div
              className="relative"
              onMouseEnter={() => setShowShop(true)}
              onMouseLeave={() => setShowShop(false)}
            >
              <span className="relative cursor-pointer">
                Shop
                <Indicator active={showShop} />
              </span>

              <Dropdown active={showShop} width="1100px" left="-280px" onClickCapture={() => setShowShop(false)}>
                <div className="grid grid-cols-3 gap-10 p-10 z-10000 ">



                  {/* LEFT */}
                  <div className="space-y-3 text-sm">
                    <p className="font-medium flex items-center gap-2">
                      Promotions
                      <span className="text-xs bg-orange-500 text-white px-2 py-0.5 rounded">
                        Sale
                      </span>
                    </p>

                    {links.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className="block hover:opacity-70 transition"
                      >
                        {item.name}
                      </Link>
                    ))}

                    <Link
                      to="/shop"
                      className="pt-8 block text-xl font-light hover:opacity-70"
                    >
                      Shop all products
                    </Link>
                  </div>


                  {/* CENTER */}
                  <InfoCard />

                  {/* RIGHT */}
                  <PromoCards />
                </div>
              </Dropdown>
            </div>

            {/* ========== PACKAGING SOLUTIONS ========== */}
            <div
              className="relative"
              onMouseEnter={() => !lockPackaging && setShowPackaging(true)}
              onMouseLeave={() => !lockPackaging && setShowPackaging(false)}

            >
              <span className="relative cursor-pointer">
                Packaging Solutions
                <Indicator active={showPackaging} />
              </span>

              <Dropdown active={showPackaging} width="1200px" left="-400px" >
                <div className="grid grid-cols-4 gap-6 p-8">
                  <Link to="/package" className="block" onClick={() => {
                    setLockPackaging(true);
                    setShowPackaging(false);
                    setTimeout(() => setLockPackaging(false), 300);
                  }}>
                    <ImageCard
                      title="Food Service"
                      className="bg-[url('/images/p1.jpg')] bg-cover bg-center"
                    />
                  </Link>
                  <Link to="/processing" className="block" onClick={() => {
                    setLockPackaging(true);
                    setShowPackaging(false);
                    setTimeout(() => setLockPackaging(false), 300);
                  }}>
                    <ImageCard
                      title="Food Processing"
                      className="bg-[url('/images/p2.jpg')] bg-cover bg-center"
                    />
                  </Link>
                  <Link to="/agriculture" className="block" onClick={() => {
                    setLockPackaging(true);
                    setShowPackaging(false);
                    setTimeout(() => setLockPackaging(false), 300);
                  }}>
                    <ImageCard
                      title="Agriculture"
                      className="bg-[url('/images/p3.jpg')] bg-cover bg-center"
                    />
                  </Link>

                  <InfoCard />
                </div>
              </Dropdown>
            </div>

            {/* COMPANY */}
            <Link to={"/company"}>Company</Link>

            {/* ================= RESOURCES ================= */}
            <div
              className="relative"
              onMouseEnter={() => setShowResources(true)}
              onMouseLeave={() => setShowResources(false)}
            >
              <span className="relative cursor-pointer">
                Resources
                <Indicator active={showResources} />
              </span>

              <Dropdown active={showResources} width="1200px" left="-600px">

                <div className="grid grid-cols-2 gap-16 p-12">

                  {/* LEFT LINKS */}
                  <div className="space-y-6 text-3xl font-light">

                    {[
                      { name: "Waitlist", link: "/waitlist" },
                      { name: "Yucca Rewards & Direct", link: "/rewards" },
                      { name: "Case Studies & Blogs", link: "/blogs" },
                      { name: "FAQs", link: "/faqs" },
                    ].map((item, index) => (
                      <Link
                        key={index}
                        to={item.link}
                        onClick={() => setShowResources(false)}
                        className="group relative block h-[1.4em] overflow-hidden"
                      >
                        {/* Default Text */}
                        <span className="block transition-transform duration-500 ease-out group-hover:-translate-y-full">
                          {item.name}
                        </span>

                        {/* Hover Text */}
                        <span className="absolute left-0 top-full block transition-transform duration-500 ease-out group-hover:-translate-y-full">
                          {item.name}
                        </span>
                      </Link>
                    ))}

                  </div>

                  {/* RIGHT IMAGE */}
                  <div className="rounded-2xl h-96 bg-[url('/images/r1.jpg')] bg-cover bg-center" />

                </div>

              </Dropdown>
            </div>

            <Link to="/contact">Contact Us</Link>

          </nav>

          {/* ================= RIGHT ICONS ================= */}
          <div className="flex items-center gap-4">

            <div className="hidden md:flex items-center gap-1 text-sm cursor-pointer">
              <FileText size={16} />
              <span>Credit Application</span>
            </div>

            <div className="relative icon-box">
              {/* <ShoppingCart size={18} /> */}
              <ShoppingCart className="icon icon-black" size={18} />
              <ShoppingCart className="icon icon-white" size={18} />
            </div>

            {/* PROFILE */}
            <div className="relative">
              <div
                className="icon-box cursor-pointer"
                onClick={() => setShowProfile(!showProfile)}
              >
                {/* <User size={18} /> */}
                <div className="relative overflow-hidden h-9.5 w-4.5">
                  <User className="icon icon-black absolute inset-0 icon-black transition-all duration-300 ease-in-out group-hover:-translate-y-full group-hover:opacity-0" size={18} />
                  <User className="icon icon-white" size={18} />
                </div>
              </div>

              {showProfile && (
                <div
                  className="absolute right-0 top-14 w-72 bg-[#fdf9f2] shadow-xl rounded-xl p-4 z-50"
                  onMouseLeave={() => setShowProfile(false)}
                >
                  <div className="bg-[#e6e0cc] rounded-lg p-3 mb-4">
                    <h4 className="font-semibold">Yucca Rewards.</h4>
                    <p className="text-sm mt-1">
                      Login or Register to earn 5% cashback when you shop
                    </p>
                  </div>

                  <button
                    onClick={() => navigate("/login")}
                    className="w-full bg-black text-white py-2 rounded-lg"
                  >
                    Login
                  </button>

                  <p className="text-sm mt-2">
                    Don’t have an account?{" "}
                    <span
                      onClick={() => navigate("/register")}
                      className="underline cursor-pointer"
                    >
                      Register here
                    </span>
                  </p>
                </div>
              )}
            </div>

            {/* MOBILE MENU ICON */}
            <button
              className="md:hidden"
              onClick={() => {
                setMobileOpen(true);
                setMobileView("main");
              }}
            >
              ☰
            </button>

          </div>

        </div>
      </header>
    </>
  );
}

/* ================= REUSABLE COMPONENTS ================= */

const Dropdown = ({ active, children, width, left, onClickCapture }) => (
  <div
    onClickCapture={onClickCapture}
    className={`
      absolute top-full mt-8 bg-[#fcf7ee] rounded-3xl shadow-xl
      origin-top z-50
      transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
      ${active
        ? "opacity-100 translate-y-0 visible"
        : "opacity-0 -translate-y-8 invisible"}
    `}
    style={{ width, left }}
  >
    {children}
  </div>
);

const Indicator = ({ active }) => (
  <span
    className={`
      absolute left-1/2 -bottom-5 h-1.5 w-10
      -translate-x-1/2 rounded-full bg-black
      transition-all duration-300
      ${active ? "opacity-100 scale-100" : "opacity-0 scale-75"}
    `}
  />
);

const ImageCard = ({ title }) => (
  <div className="relative rounded-2xl overflow-hidden bg-black h-72 flex items-end p-6 text-white">
    <div>
      <h3 className="text-xl">{title}</h3>
      <div className="underline mt-2">Explore</div>
    </div>
  </div>
);

const InfoCard = () => (
  <div className="bg-[#f3efe4] rounded-2xl p-6 flex flex-col justify-between bg-[url('/images/bg-1.png')] bg-cover bg-center">
    <div>
      <h3 className="text-xl mb-3">
        Looking for something specific?
      </h3>
      <p className="text-sm">
        We can customise your packaging to fit your needs
      </p>
    </div>
    <Link to="/explore" className="underline mt-6 inline-block w-fit">Explore</Link>
  </div>
);

const PromoCards = () => (
  <div className="space-y-6">

    {/* Loyalty */}
    <div className="bg-[#0f2a1d] text-white rounded-3xl p-6">
      Join our loyalty programme to earn 5% back

      <Link
        to="/rewards"
        className="underline mt-6 inline-block ml-2"
      >
        Discover Now
      </Link>
    </div>

    {/* Sale */}
    <div className="bg-[#c2653a] text-white rounded-3xl p-6">
      Sale: Up to 25% Off
      <br />

      <Link
        to="/shop/coffee"
        className="underline mt-6 inline-block"
      >
        Shop our promotions
      </Link>
    </div>

  </div>
);
