import { useState } from 'react';

export default function ReactDemo() {
  const [count, setCount] = useState(0);

  console.log('ReactDemo rendered');

  return (
    <div className="mx-auto flex max-w-md flex-col items-center gap-8 rounded-lg bg-white p-8 shadow-lg">
      <h1 className="text-3xl font-bold text-[#61dafb]">React Counter Demo</h1>

      <div className="flex items-center gap-8 py-4">
        <button
          className="rounded-full bg-[#61dafb] px-6 py-3 font-bold text-white transition-colors hover:bg-[#4fa8c7]"
          onClick={() => setCount(count - 1)}
        >
          -
        </button>

        <span className="text-4xl font-semibold text-[#282c34]">{count}</span>

        <button
          className="rounded-full bg-[#61dafb] px-6 py-3 font-bold text-white transition-colors hover:bg-[#4fa8c7]"
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
}
