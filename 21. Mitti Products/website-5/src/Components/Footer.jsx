import React, { useEffect, useState } from "react";
import { Facebook, Instagram, Music2, X } from "lucide-react";

const Footer = () => {
    const [showScroll, setShowScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScroll(window.scrollY > 100);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <footer className="bg-[#eae3d2] text-[#2b2b2b]">
            {/* Newsletter Section */}
            <div className="text-center py-10 px-4">
                <h2 className="text-4xl font-serif mb-2">Subscribe Newsllatter And Get</h2>
                <h3 className="text-4xl font-serif mb-6">10% Discount</h3>
                <div className="flex justify-center">
                    <div className="flex items-center w-full max-w-3xl bg-white rounded-md shadow-sm overflow-hidden">
                        <input type="email" placeholder="Your Email Address" className="flex-1 px-4 py-3 outline-none text-gray-600 text-sm sm:text-base" />
                        <button className="px-4 text-3xl cursor-pointer text-gray-700 hover:text-black transition"> →</button>
                    </div>
                </div>
            </div>

            {/* Footer Content */}
            <div className="container mx-auto px-12 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-8xl">
                {/* Column 1 */}
                <div>
                    <h2 className="text-3xl font-serif mb-3">Mitti.</h2>
                    <p className="text-[1rem] cursor-pointer hover:text-[#6e461c] text-gray-700 mb-4">Soil craft blends nature’s raw textures with human creativity to create earthy, sustainable art.</p>
                    <div className="flex gap-3">
                        <Facebook size={18} />
                        <Instagram size={18} />
                        <Music2 size={18} />
                        <X size={18} />
                    </div>
                </div>

                {/* Column 2 */}
                <div>
                    <h3 className="text-[1.5rem] font-medium mb-3 font-serif">Quick Links</h3>
                    <ul className="space-y-2 text-[1rem] cursor-pointer text-gray-700">
                        <li>About Us</li>
                        <li>Blog List</li>
                        <li>Shipping Policy</li>
                        <li>Refund Policy</li>
                        <li>Privacy Policy</li>
                        <li>Terms Condition</li>
                    </ul>
                </div>

                {/* Column 3 */}
                <div>
                    <h3 className="text-[1.5rem] font-medium mb-3 font-serif">Our Company</h3>
                    <ul className="space-y-2 text-[1rem] cursor-pointer text-gray-700">
                        <li>My account</li>
                        <li>Cart</li>
                        <li>Checkout</li>
                        <li>Orders</li>
                        <li>Search</li>
                        <li>Settings</li>
                    </ul>
                </div>

                {/* Column 4 */}
                <div>
                    <h3 className="text-[1.5rem] font-medium font-serif mb-3">Information</h3>
                    <p className="text-[1rem] mb-2">
                        <strong>Address:</strong> My Company, 42 Puffin street. 123 4
                        Puffinville France.
                    </p>
                    <p className="text-sm mb-2">
                        <strong>Free Call:</strong> 123456789
                    </p>
                    <p className="text-sm">
                        <strong>Email:</strong> mitti@templatetrip.com
                    </p>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="text-center py-6 border-t border-gray-400 text-sm text-gray-700">
                © 2025, Theme Mitti | All rights Reserved
            </div>

            {/* Scroll to Top Button */}
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="fixed bottom-10 right-13 max-sm:bottom-5 max-sm:right-5 bg-[#f6f1e6] border border-gray-300 rotate-45 w-10 h-10 flex items-center justify-center shadow hover:bg-gray-200 cursor-pointer"
            >
                <span className="text-xl text-gray-600 -rotate-45">🡹</span>
            </button>

        </footer>
    );
};

export default Footer;
