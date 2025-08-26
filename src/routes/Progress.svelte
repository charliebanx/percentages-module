
<script>
  import { loadProgress, clearLesson, clearAll } from '../utils/storage.js';
  let data=loadProgress();
  function doClearLesson(id){ if(confirm(`Reset progress for Lesson ${id}?`)){ clearLesson(id); data=loadProgress(); } }
  function doClearAll(){ if(confirm('Reset ALL progress? This cannot be undone.')){ clearAll(); data=loadProgress(); } }
</script>
<div class="max-w-xl mx-auto p-4">
  <div class="flex items-center mb-4"><h1 class="text-2xl font-bold flex-1">Your Progress</h1>
    <button class="text-sm border px-3 py-1.5 rounded hover:bg-gray-50" on:click={doClearAll}>Reset all</button></div>
  {#if Object.keys(data).length===0}<p>No progress yet. Start a lesson from the home page.</p>
  {:else}
    {#each Object.entries(data) as [lessonId, entries]}
      <div class="mb-3 p-3 border rounded bg-white flex items-center gap-3">
        <div class="flex-1"><p class="font-semibold">Lesson {lessonId}</p>
        {#if entries._complete}<span class="text-green-600">✅ Complete</span>{:else}<span class="text-gray-500">In Progress</span>{/if}</div>
        <button class="text-sm border px-3 py-1.5 rounded hover:bg-gray-50" on:click={() => doClearLesson(lessonId)}>Reset</button>
      </div>
    {/each}
  {/if}
</div>
