/* CLUTCH — shared page interactions (used on every page) */
(function(){
  // rotating word (homepage only — guarded)
  var words = ["Music Production","Video Production","Live Streaming","Voice-over & Dub","Audiobooks & Podcasts","Source Connect","Mix & Master","Photography","Field Recording"];
  var i = 0, el = document.getElementById('rotor');
  if(el){
    setInterval(function(){
      i = (i+1) % words.length;
      el.innerHTML = '<span>'+words[i]+'</span>';
    }, 2200);
  }
  // mobile nav
  var tog = document.getElementById('navtoggle'), menu = document.getElementById('navmenu');
  if(tog && menu){
    tog.addEventListener('click', function(){ menu.classList.toggle('open'); });
    menu.querySelectorAll('a').forEach(function(a){ a.addEventListener('click', function(){ menu.classList.remove('open'); }); });
  }
  // scroll reveals
  var io = new IntersectionObserver(function(es){
    es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
  }, {threshold:.12, rootMargin:"0px 0px -8% 0px"});
  document.querySelectorAll('.rv').forEach(function(n){ io.observe(n); });

  // lightbox (galleries)
  var lb = null;
  function ensureLB(){
    if(lb) return lb;
    lb = document.createElement('div');
    lb.className = 'lightbox';
    lb.innerHTML = '<span class="lb-close">✕ Close</span><img alt="" />';
    document.body.appendChild(lb);
    lb.addEventListener('click', function(){ lb.classList.remove('open'); });
    document.addEventListener('keydown', function(e){ if(e.key==='Escape' && lb) lb.classList.remove('open'); });
    return lb;
  }
  document.querySelectorAll('.gallery .g').forEach(function(g){
    g.addEventListener('click', function(){
      var img = g.querySelector('img'); if(!img) return;
      var l = ensureLB();
      l.querySelector('img').src = img.currentSrc || img.src;
      l.classList.add('open');
    });
  });
})();
