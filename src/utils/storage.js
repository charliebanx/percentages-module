
const KEY='percentages-module:v3';
export function loadProgress(){ try{return JSON.parse(localStorage.getItem(KEY))||{};}catch{return{};}}
export function saveProgress(p){ localStorage.setItem(KEY, JSON.stringify(p)); }
export function isLessonComplete(id){ const p=loadProgress()[id]||{}; return !!p._complete; }
export function markQuestion(id,qid,status){ const p=loadProgress(); p[id]=p[id]||{}; p[id][qid]=status; saveProgress(p); }
export function lessonStats(id,questions=[]){ const p=loadProgress()[id]||{}; const total=questions.length;
  const correct=questions.filter(q=>p[q.id]==='correct').length; return { total, correct, percent: total?Math.round((correct/total)*100):0}; }
export function markLessonComplete(id){ const p=loadProgress(); p[id]=p[id]||{}; p[id]._complete=true; saveProgress(p); }
export function clearLesson(id){ const all=loadProgress(); delete all[id]; saveProgress(all); }
export function clearAll(){ localStorage.removeItem(KEY); }
