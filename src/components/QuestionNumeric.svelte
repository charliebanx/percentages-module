
<script>
  import { markQuestion } from '../utils/storage.js';
  export let lessonId; export let question;
  let userAnswer='', feedback='', state='idle';
  function checkAnswer(){ const target=Number(question.answer); const tol=Number(question.tolerance??0); const val=Number(userAnswer);
    const correct=isFinite(val)&&Math.abs(val-target)<=tol; state=correct?'correct':'incorrect';
    feedback=correct?`✅ Correct! ${question.solution}`:`❌ Try again. Hint: ${question.hint}`;
    markQuestion(lessonId, question.id, state); }
</script>
<div class="p-4 border rounded-xl shadow-sm bg-white mb-4">
  <p class="text-lg font-medium mb-2">{question.prompt}</p>
  <input type="number" bind:value={userAnswer} class="border p-2 rounded w-full mb-2" placeholder="Enter your answer"
    on:keydown={(e)=>{ if(e.key==='Enter') checkAnswer(); }} />
  <button on:click={checkAnswer} class="bg-blue-600 text-white px-4 py-2 rounded">Check</button>
  {#if feedback}<p class="mt-2">{feedback}</p>{/if}
</div>
