
<script> export let videoId; export let start=0; </script>
<div class="w-full aspect-video rounded-xl overflow-hidden shadow bg-black">
  <iframe class="w-full h-full" src={`https://www.youtube.com/embed/${videoId}?modestbranding=1&rel=0&start=${start}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>
