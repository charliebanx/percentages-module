
<script>
  import Home from './routes/Home.svelte';
  import Lesson from './routes/Lesson.svelte';
  import Progress from './routes/Progress.svelte';
  let route='home', params={};
  function parseHash(){ const h=location.hash.replace(/^#\//,''); if(!h){route='home';params={};return;}
    const parts=h.split('/'); if(parts[0]==='lesson'&&parts[1]){route='lesson';params={id:parts[1]};}
    else if(parts[0]==='progress'){route='progress';params={};} else {route='home';params={};}}
  parseHash(); window.addEventListener('hashchange', parseHash);
</script>
<nav class="w-full sticky top-0 bg-white border-b">
  <div class="max-w-xl mx-auto flex items-center gap-4 p-3">
    <a href="#/home" class="font-bold">Percentages</a>
    <a href="#/progress" class="ml-auto text-blue-700">Progress</a>
  </div>
</nav>
<main class="min-h-[80vh]">
  {#if route==='home'} <Home/>
  {:else if route==='lesson'} <Lesson lessonId={params.id}/>
  {:else if route==='progress'} <Progress/> {/if}
</main>
<footer class="text-center text-xs text-gray-500 py-6">Free, no logins. Works on your phone.</footer>
