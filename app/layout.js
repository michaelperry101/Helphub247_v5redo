import './globals.css';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

export const metadata = {
  title: 'HelpHub247 — CARYS',
  description: '24/7 AI help powered by CARYS',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen">
        <div className="flex h-screen">
          <Sidebar />
          <div className="flex-1 flex flex-col">
            <Header />
            <main className="flex-1 overflow-y-auto p-4">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
import "./globals.css";
import Sidebar from "../components/Sidebar";

export const metadata = {
  title: "HelpHub247",
  description: "AI powered support platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex">
        {/* Sidebar (collapsible on mobile) */}
        <Sidebar />

        {/* Main content */}
        <main className="flex-1 p-4 md:p-6 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
          {children}
        </main>
      </body>
    </html>
  );
}
