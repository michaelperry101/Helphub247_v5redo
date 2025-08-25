"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // hamburger + close icons

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* Mobile hamburger button */}
      <button
        className="p-3 md:hidden"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Sidebar menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white shadow-lg transform transition-transform duration-300 z-50
          ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <div className="p-4 font-bold text-lg border-b border-gray-700">
          HelpHub247
        </div>
        <nav className="flex flex-col space-y-4 p-4">
          <a href="/" className="hover:text-blue-400">Home</a>
          <a href="/chat" className="hover:text-blue-400">Chat</a>
          <a href="/about" className="hover:text-blue-400">About</a>
          <a href="/reviews" className="hover:text-blue-400">Reviews</a>
          <a href="/privacy" className="hover:text-blue-400">Privacy</a>
          <a href="/terms" className="hover:text-blue-400">Terms</a>
          <a href="/subscribe" className="hover:text-green-400">Subscribe</a>
          <a href="/settings" className="hover:text-yellow-400">Settings</a>
        </nav>
      </div>

      {/* Backdrop for mobile */}
      {open && (
        <div
          className="fixed inset-0 bg-black opacity-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </div>
  );
}
