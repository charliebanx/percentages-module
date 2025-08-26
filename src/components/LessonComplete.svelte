
<script>
  import { markLessonComplete, isLessonComplete } from '../utils/storage.js';
  import Confetti from './Confetti.svelte';
  export let lessonId; export let percent; export let total; let celebrate=false;
  $: if(percent===100 && !isLessonComplete(lessonId) && !celebrate){ celebrate=true; markLessonComplete(lessonId); }
  function nextLesson(){ const next=Number(lessonId)+1; location.hash=`#/lesson/${next}`; }
</script>
{#if percent===100}
  {#if celebrate}<Confetti duration={2200} particleCount={180} />{/if}
  <div class="p-6 bg-green-100 border border-green-400 rounded-xl mt-6 text-center relative">
    <h2 class="text-xl font-bold mb-2">🎉 Lesson {lessonId} Complete!</h2>
    <p class="mb-4">Perfect score — you answered all {total} questions correctly.</p>
    <button on:click={nextLesson} class="bg-green-600 text-white px-4 py-2 rounded shadow">Go to Lesson {Number(lessonId)+1}</button>
  </div>
{:else}
  <div class="p-4 mt-6 bg-yellow-50 border border-yellow-300 rounded text-center"><p>You need 100% correct to complete this lesson. Keep trying!</p></div>
{/if}
