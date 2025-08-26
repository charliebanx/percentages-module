
<script>
  import ProgressBar from '../components/ProgressBar.svelte';
  import QuestionMCQ from '../components/QuestionMCQ.svelte';
  import QuestionNumeric from '../components/QuestionNumeric.svelte';
  import LessonComplete from '../components/LessonComplete.svelte';
  import VideoEmbed from '../components/VideoEmbed.svelte';
  import { lessonStats } from '../utils/storage.js';
  export let lessonId='1';
  const files=import.meta.glob('../data/*.json',{ eager:true, import:'default'});
  const lessons={}; for(const path in files){ const m=path.match(/lesson-(\d+)\.json$/); if(m) lessons[m[1]]=files[path]; }
  let questions=lessons[lessonId]||[]; $: stats=lessonStats(lessonId, questions);
</script>
<div class="max-w-xl mx-auto p-4">
  <div class="mb-4"><h1 class="text-2xl font-bold">Lesson {lessonId}</h1><ProgressBar percent={stats.percent} /></div>
  {#if lessonId==='1'}<div class="mb-6"><h2 class="text-xl font-semibold mb-2">Intro Video</h2><VideoEmbed videoId="dQw4w9WgXcQ" /></div>{/if}
  {#if !questions.length}<p>No questions found for this lesson.</p>
  {:else}
    {#each questions as q (q.id)}
      {#if q.type==='mcq'} <QuestionMCQ lessonId={lessonId} question={q} />
      {:else if q.type==='numeric'} <QuestionNumeric lessonId={lessonId} question={q} />
      {:else} <div class="p-4 border rounded mb-4">Unsupported question type: {q.type}</div> {/if}
    {/each}
  {/if}
  <LessonComplete lessonId={lessonId} percent={stats.percent} total={stats.total} />
</div>
