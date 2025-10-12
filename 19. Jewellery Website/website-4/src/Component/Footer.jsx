import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaXTwitter,
    FaApple,
    FaGooglePlay,
} from "react-icons/fa6";
import {
    FaMapMarkerAlt,
    FaEnvelope,
    FaPhoneAlt,
    FaCcVisa,
    FaCcMastercard,
    FaCcAmex,
    FaCcPaypal,
    FaCcDiscover,
} from "react-icons/fa";
import { ChevronUp } from "lucide-react";

export default function Footer() {
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
    return (
        <footer className="bg-white border-t border-gray-200 text-gray-700  max-sm:border-2 max-sm:border-black max-sm:mx-0">
            {/* TOP SECTION */}
            <div className="max-w-8xl px-6 sm:px-12 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap- mx-5 max-sm:flex-wrap">

                {/* About Our Store */}
                <div className="max-sm:mb-5">
                    <h3 className="text-lg font-semibold mb-3">About Our Store</h3>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed ">
                        Welcome to our store, where we pride ourselves on providing exceptional
                        products and unparalleled customer service. Our store is a haven for
                        those who appreciate quality, style, and innovation.
                    </p>
                    <div className="flex items-center gap-3">
                        <button className="border px-3 py-2 rounded flex items-center gap-3 hover:bg-gray-50">
                            <FaApple className="text-xl" />
                            <span className="text-xs font-medium ">App Store</span>
                        </button>
                        <button className="border px-3 py-2 rounded flex items-center gap-2 hover:bg-gray-50">
                            <FaGooglePlay className="text-xl" />
                            <span className="text-xs font-medium ">Google Play</span>
                        </button>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="ml-20 max-sm:ml-0 max-sm:mb-10">
                    <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
                    <ul className="space-y-3 text-sm cursor-pointer">
                        <li className="hover:text-[#c48c74]">Contact Us</li>
                        <li className="hover:text-[#c48c74]">Shipping</li>
                        <li className="hover:text-[#c48c74]">Sitemap</li>
                        <li className="hover:text-[#c48c74]">FAQs</li>
                        <li className="hover:text-[#c48c74]">Size Chart</li>
                        <li className="hover:text-[#c48c74]">About Us</li>
                    </ul>
                </div>

                {/* Services */}
                <div className="ml-8 max-sm:ml-0 max-sm:mb-10">
                    <h3 className="text-lg font-semibold mb-3">Services</h3>
                    <ul className="space-y-3 text-sm cursor-pointer">
                        <li className="hover:text-[#c48c74]">Privacy Policy</li>
                        <li className="hover:text-[#c48c74]">Refund Policy</li>
                        <li className="hover:text-[#c48c74]">Shipping Policy</li>
                        <li className="hover:text-[#c48c74]">Terms of Service</li>
                        <li className="hover:text-[#c48c74]">Policy for Buyers</li>
                        <li className="hover:text-[#c48c74]">Policy for Sellers</li>
                    </ul>
                </div>

                {/* Your Account */}
                <div className="max-sm:mb-10">
                    <h3 className="text-lg font-semibold mb-3">Your Account</h3>
                    <ul className="space-y-3 text-sm cursor-pointer">
                        <li className="hover:text-[#c48c74]">Search</li>
                        <li className="hover:text-[#c48c74]">Delivery Information</li>
                        <li className="hover:text-[#c48c74]">Locality</li>
                        <li className="hover:text-[#c48c74]">Order Tracking</li>
                        <li className="hover:text-[#c48c74]">Terms and Conditions</li>
                        <li className="hover:text-[#c48c74]">Shipping & Refund</li>
                    </ul>
                </div>

                {/* Contact Us */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
                    <ul className="space-y-3 text-sm">
                        <li className="flex items-start gap-3">
                            <FaMapMarkerAlt className="text-[#c48c74] w-6 h-6 mt-1" />
                            <span className="hover:text-[#c48c74]">
                                Jubilee - Jewellery Store
                                <br />507-Union Trade Ipsum Doler Centre, France
                            </span>
                        </li>
                        <li className="flex items-center gap-3">
                            <FaEnvelope className="text-[#c48c74] w-6 h-6" />
                            <span className="hover:text-[#c48c74] cursor-pointer">hello@blocks.com</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <FaPhoneAlt className="text-[#c48c74] w-6 h-6" />
                            <span className="hover:text-[#c48c74] cursor-pointer">(+91) 9876-543-210</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* SOCIAL ICONS */}

            {/* COPYRIGHT + PAYMENT ICONS */}

            <div className="border-t border-gray-300 py-6 px-6 sm:px-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
                <div className=" flex justify-center gap-4">
                    <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 cursor-pointer">
                        <FaFacebookF />
                    </div>
                    <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 cursor-pointer">
                        <FaInstagram />
                    </div>
                    <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 cursor-pointer">
                        <FaYoutube />
                    </div>
                    <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 cursor-pointer">
                        <FaXTwitter />
                    </div>
                </div>
                <p className="text-center sm:text-left">
                    © 2025, Jubilee - Jewellery Store (Password: demo) Powered by Shopify
                </p>

                <div className="flex items-center gap-3">
                    <img src="/images/app1.jpeg" alt="" />
                    <img src="/images/app2.jpeg" alt="" />
                    <img src="/images/app3.jpeg" alt="" />
                    <img src="/images/app4.jpeg" alt="" />
                    <img src="/images/app5.jpeg" alt="" />
                    <img src="/images/app6.jpeg" alt="" />

                </div>
            </div>

            {/* Scroll-to-top button */}
            <button onClick={scrollToTop} className="fixed bottom-6 right-6 bg-[#cf967e]  text-white p-3 rounded-full shadow-lg transition">
                <ChevronUp className="w-5 h-5" />
            </button>


        </footer>
    );
}
