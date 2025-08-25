'use client';
import { useEffect, useState } from 'react';

export default function SettingsPage(){
  const [size,setSize]=useState('base');
  const [theme,setTheme]=useState('light');

  useEffect(()=>{
    document.documentElement.classList.toggle('dark', theme==='dark');
  },[theme]);

  return (
    <div className={`max-w-2xl mx-auto card text-${size}`}>
      <h1 className="text-2xl font-bold mb-4">Settings</h1>

      <div className="mb-4">
        <h2 className="font-semibold mb-2">Theme</h2>
        <button className="btn" onClick={()=>setTheme(theme==='light'?'dark':'light')}>
          Switch to {theme==='light'?'Dark':'Light'} Mode
        </button>
      </div>

      <div className="mb-4">
        <h2 className="font-semibold mb-2">Text Size</h2>
        <select value={size} onChange={e=>setSize(e.target.value)} className="px-3 py-2 rounded border dark:bg-gray-900">
          <option value="sm">Small</option>
          <option value="base">Normal</option>
          <option value="lg">Large</option>
          <option value="xl">Extra Large</option>
        </select>
      </div>

      <div>
        <h2 className="font-semibold mb-2">Accessibility</h2>
        <ul className="list-disc list-inside">
          <li>High contrast (coming soon)</li>
          <li>Keyboard navigation (coming soon)</li>
          <li>Text-to-speech (coming soon)</li>
        </ul>
      </div>
    </div>
  );
}
