
<script>
  import { onMount, onDestroy } from 'svelte';
  export let duration=2000, particleCount=160; let canvas, ctx, particles=[], raf, start;
  const rnd=(a,b)=>Math.random()*(b-a)+a;
  function init(){ const {width,height}=canvas; particles=Array.from({length:particleCount}).map(()=>({x:width/2,y:height/2,angle:rnd(-Math.PI,Math.PI),speed:rnd(3,7),size:rnd(2,5),alpha:1,decay:rnd(0.01,0.02)}));}
  function draw(t){ if(!start) start=t; const {width,height}=canvas; ctx.clearRect(0,0,width,height);
    particles.forEach(p=>{ p.x+=Math.cos(p.angle)*p.speed; p.y+=Math.sin(p.angle)*p.speed+0.3; p.speed*=0.99; p.alpha-=p.decay;
      ctx.globalAlpha=Math.max(0,p.alpha); ctx.fillStyle='hsl('+(Math.random()*360)+',100%,60%)'; ctx.beginPath(); ctx.arc(p.x,p.y,p.size,0,Math.PI*2); ctx.fill();});
    if(t-start<duration) raf=requestAnimationFrame(draw);}
  function resize(){ canvas.width=canvas.clientWidth*devicePixelRatio; canvas.height=canvas.clientHeight*devicePixelRatio; const s=devicePixelRatio||1; ctx=canvas.getContext('2d'); ctx.setTransform(s,0,0,s,0,0);}
  onMount(()=>{ ctx=canvas.getContext('2d'); resize(); init(); raf=requestAnimationFrame(draw); window.addEventListener('resize', resize);});
  onDestroy(()=>{ cancelAnimationFrame(raf); window.removeEventListener('resize', resize);});
</script>
<style>.overlay{position:fixed;inset:0;pointer-events:none;z-index:50;}</style>
<canvas class="overlay" bind:this={canvas}></canvas>
