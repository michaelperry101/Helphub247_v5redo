'use client';
import { useMemo, useState } from 'react';

function generateReviews(n){
  const names = ['Alex','Sam','Jordan','Taylor','Casey','Morgan','Jamie','Avery','Riley','Quinn','Charlie','Drew','Rowan','Skye','Harper','Parker'];
  const cities = ['London','Manchester','Leeds','Bristol','Cardiff','Glasgow','Edinburgh','Birmingham','Liverpool','Sheffield','Nottingham'];
  const snippets = [
    'Fast and reliable.',
    'Feels like a real assistant.',
    'Saved me hours every week.',
    'Brilliant on mobile.',
    'The upload feature is a game changer.',
    'Great value for money.',
    'Super intuitive UI.',
    'The dark mode is perfect.',
  ];
  const items = [];
  for(let i=1;i<=n;i++){
    const name = names[i % names.length] + ' ' + String.fromCharCode(65+(i%26)) + '.';
    const city = cities[i % cities.length];
    const text = `HelpHub247 has been outstanding for my daily tasks — ${snippets[i % snippets.length]}`;
    items.push({ id:i, name, city, text });
  }
  return items;
}

export default function ReviewsPage(){
  const [page,setPage]=useState(1);
  const per=30;
  const items = useMemo(()=>generateReviews(1249),[]);
  const totalPages = Math.ceil(items.length/per);
  const view = items.slice((page-1)*per, page*per);

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">Customer Reviews</h1>
      <p className="mb-4">⭐ {items.length} 5-star demo reviews</p>
      <div className="grid md:grid-cols-2 gap-3">
        {view.map(r=> (
          <div key={r.id} className="card">
            <div className="font-semibold">{r.name} • <span className="text-sm opacity-70">{r.city}</span></div>
            <div className="text-yellow-500">★★★★★</div>
            <p className="mt-1">{r.text}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-2 mt-4">
        <button className="btn" onClick={()=>setPage(p=>Math.max(1,p-1))} disabled={page===1}>Prev</button>
        <span className="px-3 py-2 rounded bg-gray-100 dark:bg-gray-800">Page {page} / {totalPages}</span>
        <button className="btn" onClick={()=>setPage(p=>Math.min(totalPages,p+1))} disabled={page===totalPages}>Next</button>
      </div>
    </div>
  );
}
