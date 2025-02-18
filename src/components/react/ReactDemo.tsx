import { useState } from 'react';

export default function ReactDemo() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center gap-8 p-8 bg-white rounded-lg shadow-lg max-w-md mx-auto">
      <h1 className="text-3xl font-bold text-[#61dafb]">React Counter Demo</h1>
      
      <div className="flex items-center gap-8 py-4">
        <button
          className="rounded-full bg-[#61dafb] px-6 py-3 font-bold text-white hover:bg-[#4fa8c7] transition-colors"
          onClick={() => setCount(count - 1)}
        >
          -
        </button>
        
        <span className="text-4xl font-semibold text-[#282c34]">{count}</span>
        
        <button
          className="rounded-full bg-[#61dafb] px-6 py-3 font-bold text-white hover:bg-[#4fa8c7] transition-colors"
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
}
