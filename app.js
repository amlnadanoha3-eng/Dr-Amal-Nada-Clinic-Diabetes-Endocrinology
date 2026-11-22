const S = window.SITE;
const P = {
  drop:'<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/>',
  butterfly:'<path d="M12 7c-3-4-8-3-8 1s3 6 8 4c5 2 8 0 8-4s-5-5-8-1z"/><path d="M12 12v8"/>',
  shield:'<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/>',
  brain:'<circle cx="12" cy="12" r="8"/><path d="M12 4v16M4 12h16"/>',
  pulse:'<path d="M3 12h4l2-6 4 12 2-6h6"/>'};
const ic = n => `<div class="ic"><svg viewBox="0 0 24 24">${P[n]}</svg></div>`;
const wa = t => `https://wa.me/${S.whatsapp}?text=${encodeURIComponent(t)}`;
const WAI = '<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2zm5.2 14c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.2-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.8s.7-2 1-2.300c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 1.900c.1.2.1.400 0 .6l-.4.6c-.1.2-.3.3-.1.6.2.300.8 1.3 1.7 2.100 1.1 1 2 1.3 2.300 1.400.3.100.5.100.6-.1l.9-1.1c.2-.3.400-.2.6-.1l1.8.9c.3.100.5.200.5.300.1.2.1.8-.1 1.400z"/></svg>';
let lang = localStorage.getItem("lang") || "ar";
function render() {
  const T = S[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.title = T.title;
  document.querySelector('meta[name=description]').content = T.desc;
  const link = T.waMsg, bookBtn = `<a class="btn wa" href="${wa(link)}" target="_blank" rel="noopener">${WAI}${T.book}</a>`;
  document.getElementById("app").innerHTML = `
<header><div class="w bar"><a href="#top" class="brand"><b>${T.brand}</b><small>${T.spec}</small></a>
<nav>${T.nav.map(n => `<a href="#${n[0]}">${n[1]}</a>`).join("")}</nav>
<div style="display:flex;gap:8px"><button class="btn ghost sm" id="lg">${T.lang}</button><a class="btn wa sm" href="${wa(link)}" target="_blank" rel="noopener">${T.book}</a></div></div></header>
<main id="top">
<section class="hero"><div class="w hg"><div class="rv"><h1>${T.h1}</h1><p>${T.sub}</p>
<div class="btns">${bookBtn}<a class="btn ghost" href="#services">${T.explore}</a></div></div>
<div class="ph rv">${S.doctorPhoto ? `<img src="${S.doctorPhoto}" alt="${T.brand}" fetchpriority="high">` : `<svg width="130" height="130" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.5 3.5-7 8-7s8 2.5 8 7"/></svg><small>${T.photoNote}</small>`}</div></div></section>
<section id="about" class="alt"><div class="w"><h2>${T.aboutT}</h2><p class="lead">${T.aboutP}</p>
<div class="card rv" style="max-width:760px;margin:auto">${T.facts.map(f => `<div class="fact"><span>${f[0]}</span>${f[1]}</div>`).join("")}</div></div></section>
<section id="services"><div class="w"><h2>${T.servT}</h2><p class="lead">${T.servS}</p>
<div class="grid g3">${T.services.map(s => `<div class="card rv">${ic(s[0])}<h3>${s[1]}</h3><ul>${s[2].map(i => `<li>${i}</li>`).join("")}</ul></div>`).join("")}</div></div></section>
<section id="why" class="alt"><div class="w"><h2>${T.whyT}</h2><div class="grid g3" style="margin-top:36px">${T.why.map(x => `<div class="card why rv"><i>✓</i>${x}</div>`).join("")}</div></div></section>
<section id="blog"><div class="w"><h2>${T.blogT}</h2><p class="lead">${T.blogS}</p>
<div class="grid g3">${T.blog.map(b => `<article class="card art rv"><div class="tag"></div><h3>${b[0]}</h3><p style="color:var(--mut)">${b[1]}</p><a href="#">${T.read}</a></article>`).join("")}</div></div></section>
<section id="contact" class="alt"><div class="w"><div class="cta rv"><h2>${T.contT}</h2><p class="lead">${T.contS}</p>
<div class="cinfo">${T.info.map(i => `<div><span>${i[0]}</span>${i[1] === "phone" ? `<a href="tel:${S.phone.replace(/\s/g, "")}" dir="ltr">${S.phone}</a>` : i[1]}</div>`).join("")}</div>
${bookBtn}<iframe loading="lazy" src="${S.mapUrl}" title="map"></iframe></div></div></section>
<section id="faq"><div class="w" style="max-width:820px"><h2 style="margin-bottom:32px">${T.faqT}</h2>
${T.faq.map(f => `<details><summary>${f[0]}</summary><p>${f[1]}</p></details>`).join("")}</div></section>
</main>
<footer><div class="w"><div class="fg"><div><h4>${T.brand}</h4><p>${T.spec}</p><p dir="ltr" style="text-align:start">${S.phone}</p></div>
<div><h4>${T.links}</h4>${T.nav.map(n => `<a href="#${n[0]}" style="display:block">${n[1]}</a>`).join("")}</div>
<div><h4>Social</h4>${Object.entries(S.social).map(([k, v]) => `<a href="${v}" style="display:block;text-transform:capitalize" target="_blank" rel="noopener">${k}</a>`).join("")}</div></div>
<p class="dis">${T.disc}</p><p class="dis" style="border:0;margin:0;padding-top:6px">© ${new Date().getFullYear()} ${T.brand}. ${T.rights}.</p></div></footer>
<a class="btn wa fab" href="${wa(link)}" target="_blank" rel="noopener" aria-label="WhatsApp">${WAI}</a>`;
  document.getElementById("lg").onclick = () => { lang = lang === "ar" ? "en" : "ar"; localStorage.setItem("lang", lang); render(); };
  const io = new IntersectionObserver(e => e.forEach(x => x.isIntersecting && (x.target.classList.add("in"), io.unobserve(x.target))), { threshold: .12 });
  document.querySelectorAll(".rv").forEach(el => io.observe(el));
}
render();
