export default function Sidebar(){
  return (
    <aside className="w-56 border-r border-gray-200 dark:border-gray-800 hidden lg:flex flex-col p-4 gap-2">
      <a className="btn" href="/chat">Open Chat</a>
      <a className="btn bg-purple-600 hover:bg-purple-700" href="/subscribe">Subscribe (Demo)</a>
      <div className="mt-2 space-y-2">
        <a className="block px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800" href="/about">About</a>
        <a className="block px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800" href="/reviews">Reviews</a>
        <a className="block px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800" href="/terms">Terms</a>
        <a className="block px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800" href="/privacy">Privacy</a>
      </div>
    </aside>
  );
}
