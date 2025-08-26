
<script>
  import { isLessonComplete } from '../utils/storage.js';
  const lessons=Array.from({length:10},(_,i)=>i+1);
  function isUnlocked(id){ if(id===1) return true; return isLessonComplete(String(id-1)); }
  function go(id){ if(!isUnlocked(id)) return; location.hash=`#/lesson/${id}`; }
  let tick=0; function refresh(){ tick++; } window.addEventListener('focus', refresh);
</script>
<span aria-hidden="true" style="display:none">{tick}</span>
<div class="max-w-xl mx-auto p-4">
  <h1 class="text-3xl font-bold mb-2">Percentages Module</h1>
  <p class="text-gray-700 mb-6">Complete each lesson with a perfect score (100%) to unlock the next one.</p>
  <div class="grid grid-cols-2 gap-3">
    {#each lessons as id}
      {#if isUnlocked(id)}
        <button class="border rounded-xl p-4 shadow-sm hover:shadow bg-white text-left transition" on:click={() => go(id)} aria-label={`Open Lesson ${id}`}>
          <span class="block font-semibold">Lesson {id}</span><span class="text-sm text-gray-600">Start / Continue</span>
        </button>
      {:else}
        <button class="border rounded-xl p-4 bg-gray-100 text-left opacity-60 cursor-not-allowed" disabled aria-disabled="true" title="Complete the previous lesson to unlock">
          <span class="block font-semibold flex items-center gap-2"><span>Lesson {id}</span><span aria-hidden="true">🔒</span></span>
          <span class="text-sm text-gray-500">Locked — finish Lesson {id-1}</span>
        </button>
      {/if}
    {/each}
  </div>
</div>
