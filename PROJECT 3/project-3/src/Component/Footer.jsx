import React from "react";
import { Typography, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";

export default function Footer() {
  return (
    <footer className="bg-[#e5d4cb] py-10 mt-10">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo / Site Name */}
          <Typography variant="h6" className="font-bold text-gray-800">
            MyBlog
          </Typography>

          {/* Navigation Links */}
          <div className="flex gap-6">
            <a href="#" className="text-gray-700 hover:text-black">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-black">
              About
            </a>
            <a href="#" className="text-gray-700 hover:text-black">
              Blog
            </a>
            <a href="#" className="text-gray-700 hover:text-black">
              Contact
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            <IconButton className="text-gray-700 hover:text-black">
              <Facebook />
            </IconButton>
            <IconButton className="text-gray-700 hover:text-black">
              <Twitter />
            </IconButton>
            <IconButton className="text-gray-700 hover:text-black">
              <Instagram />
            </IconButton>
            <IconButton className="text-gray-700 hover:text-black">
              <LinkedIn />
            </IconButton>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-400 my-6"></div>

        {/* Bottom Section */}
        <div className="text-center">
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} MyBlog. All rights reserved.
          </Typography>
        </div>
      </div>
    </footer>
  );
}
