
<script>
  import { markQuestion } from '../utils/storage.js';
  export let lessonId; export let question;
  let selected=null, feedback='', state='idle';
  function check(){ const correct=Number(selected)===Number(question.answer_index); state=correct?'correct':'incorrect';
    feedback=correct?`✅ Correct! ${question.solution}`:`❌ Try again. Hint: ${question.hint}`;
    markQuestion(lessonId, question.id, state); }
</script>
<div class="p-4 border rounded-xl shadow-sm bg-white mb-4">
  <p class="text-lg font-medium mb-3">{question.prompt}</p>
  <div class="space-y-2">
    {#each question.options as opt,i}
      <label class="flex items-center gap-2"><input type="radio" name={question.id} value={i} bind:group={selected} /><span>{opt}</span></label>
    {/each}
  </div>
  <button on:click={check} class="mt-3 bg-blue-600 text-white px-4 py-2 rounded">Check</button>
  {#if feedback}<p class="mt-2">{feedback}</p>{/if}
</div>
