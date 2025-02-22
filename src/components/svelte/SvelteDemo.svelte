<script>
  let count = $state(0);
</script>

<div class="flex flex-col items-center gap-8 p-8 bg-white rounded-lg shadow-lg max-w-md mx-auto">
  <h1 class="text-3xl font-bold text-[#ff3e00]">Svelte Counter Demo</h1>

  <div class="flex items-center gap-8 py-4">
    <button
      class="rounded-full bg-[#ff3e00] px-6 py-3 font-bold text-white hover:bg-[#cc3200] transition-colors"
      onclick={() => count--}
    >
      -
    </button>

    <span class="text-4xl font-semibold text-gray-800">{count}</span>

    <button
      class="rounded-full bg-[#ff3e00] px-6 py-3 font-bold text-white hover:bg-[#cc3200] transition-colors"
      onclick={() => count++}
    >
      +
    </button>
  </div>
</div>
