
<script> export let percent=0; </script>
<div class="w-full bg-gray-200 rounded-full h-3"><div class="bg-green-500 h-3 rounded-full transition-all" style={`width:${Math.min(100,Math.max(0,percent))}%`} /></div>
<p class="text-sm mt-1">{percent}% complete</p>
