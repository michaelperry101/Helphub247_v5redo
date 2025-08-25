'use client';
import { useState } from 'react';
export default function SubscribePage(){
  const [ok,setOk]=useState(false);
  return (
    <div className="max-w-2xl mx-auto card">
      <h1 className="text-2xl font-bold">Subscribe to HelpHub247</h1>
      <p className="mt-2">Premium unlocks unlimited history, faster responses, and priority support.</p>
      {!ok ? (
        <button onClick={()=>setOk(true)} className="btn mt-4">Subscribe Now (Demo)</button>
      ):(<p className="mt-4 text-green-600">✅ Subscribed (demo). Replace with Stripe later.</p>)}
      <ul className="mt-4 list-disc list-inside">
        <li>Unlimited chat history</li>
        <li>File & image uploads</li>
        <li>Early access to features</li>
      </ul>
    </div>
  );
}
