'use client';
import { useEffect, useRef, useState } from 'react';

export default function Chat(){
  const [threads, setThreads] = useState([]);
  const [activeId, setActiveId] = useState(null);
  const [input, setInput] = useState('');
  const fileRef = useRef();

  useEffect(()=>{
    const saved = localStorage.getItem('hh_threads');
    if(saved){
      const data = JSON.parse(saved);
      setThreads(data);
      if(data[0]) setActiveId(data[0].id);
    } else {
      const first = { id: Date.now(), title: 'New chat', messages: [] };
      setThreads([first]); setActiveId(first.id);
    }
  },[]);

  useEffect(()=>{
    localStorage.setItem('hh_threads', JSON.stringify(threads));
  },[threads]);

  const active = threads.find(t=>t.id===activeId);

  const beep = ()=>{
    try{
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.type='sine'; o.frequency.value=880;
      o.connect(g); g.connect(ctx.destination);
      o.start(); setTimeout(()=>{o.stop(); ctx.close();}, 120);
    }catch(e){}
  };

  const send = async () => {
    if(!input.trim() && (!fileRef.current || !fileRef.current.files.length)) return;
    const msg = { role:'user', content: input };
    let files = [];
    if(fileRef.current && fileRef.current.files.length){
      for(const f of fileRef.current.files){ files.push({ name: f.name, size: f.size }); }
    }
    const userMsg = { ...msg, files };
    const updated = threads.map(t => t.id===activeId ? ({...t, messages:[...t.messages, userMsg]}) : t);
    setThreads(updated);
    setInput('');
    if(fileRef.current) fileRef.current.value='';

    // Demo reply
    setTimeout(()=>{
      const reply = { role:'assistant', content: 'CARYS (demo): Thanks! I received your message'+(files.length?` and ${files.length} file(s).`:'') };
      setThreads(curr => curr.map(t => t.id===activeId ? ({...t, messages:[...t.messages, reply]}) : t));
      beep();
    }, 400);
  };

  const newChat = ()=>{
    const n = { id: Date.now(), title: 'New chat', messages: [] };
    setThreads([n, ...threads]); setActiveId(n.id);
  };

  return (
    <div className="flex h-[calc(100vh-64px)] gap-4">
      <aside className="w-64 hidden md:block">
        <div className="card sticky top-4">
          <button className="btn w-full mb-3" onClick={newChat}>+ New Chat</button>
          <div className="space-y-1">
            {threads.map(t=>(
              <button key={t.id} onClick={()=>setActiveId(t.id)}
                className={"w-full text-left px-3 py-2 rounded-lg "+(t.id===activeId?"bg-blue-600 text-white":"bg-gray-100 dark:bg-gray-800")}>
                {t.title}
              </button>
            ))}
          </div>
        </div>
      </aside>
      <section className="flex-1 card flex flex-col">
        <div className="flex-1 overflow-y-auto space-y-3">
          {(active?.messages||[]).length===0 && (
            <div className="text-gray-500">Start chatting with CARYS…</div>
          )}
          {(active?.messages||[]).map((m,i)=>(
            <div key={i} className={"p-3 rounded-lg "+(m.role==='user'?'bg-blue-50 dark:bg-blue-950/30':'bg-gray-100 dark:bg-gray-800')}>
              <div className="text-sm opacity-70">{m.role==='user'?'You':'CARYS'}</div>
              <div className="whitespace-pre-wrap">{m.content}</div>
              {m.files?.length>0 && (
                <ul className="mt-2 text-sm list-disc list-inside">
                  {m.files.map((f,idx)=>(<li key={idx}>{f.name} ({Math.round(f.size/1024)} KB)</li>))}
                </ul>
              )}
            </div>
          ))}
        </div>
        <div className="mt-3 border-t border-gray-200 dark:border-gray-800 pt-3 flex gap-2">
          <input value={input} onChange={e=>setInput(e.target.value)} placeholder="Ask CARYS anything…"
            className="flex-1 px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900"/>
          <input ref={fileRef} type="file" multiple className="hidden" id="uploader"/>
          <label htmlFor="uploader" className="btn bg-gray-700 hover:bg-gray-800">Upload</label>
          <button onClick={send} className="btn">Send</button>
        </div>
      </section>
    </div>
  );
}
