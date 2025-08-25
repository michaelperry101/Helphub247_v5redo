'use client';
import ThemeToggle from './ThemeToggle';

export default function Header(){
  return (
    <header className="h-16 flex items-center justify-between px-4 border-b border-gray-200 dark:border-gray-800">
      <div className="flex items-center gap-2">
        <img src="/logo.svg" alt="HelpHub247" className="h-8 w-8"/>
        <span className="font-semibold">HelpHub247</span>
      </div>
      <nav className="flex items-center gap-4 text-sm">
        <a href="/" className="hover:underline">Home</a>
        <a href="/chat" className="hover:underline">Chat</a>
        <a href="/subscribe" className="hover:underline">Subscribe</a>
        <a href="/reviews" className="hover:underline">Reviews</a>
        <a href="/about" className="hover:underline">About</a>
        <a href="/settings" className="hover:underline">Settings</a>
        <ThemeToggle />
      </nav>
    </header>
  );
}
