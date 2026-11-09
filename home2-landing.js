export function landing2Page({t,btn,lang,d,slug,faqSection,finalCTA}){
const arrow='<span aria-hidden="true">↗</span>';
const em=s=>s.replace(/<span>/g,'<em>').replace(/<\/span>/g,'</em>');
const variant=slug==='e-commerce'?'store':slug==='one-page-websites'?'one':'biz';
const blurbs=[t('We begin with your audience and a clear direction.','Empezamos por tu audiencia y una dirección clara.'),t('Design and content work together to make the next step easier.','Diseño y contenido trabajan juntos para facilitar el siguiente paso.'),t('Forms, content and selected systems connect the experience to your team.','Formularios, contenido y sistemas seleccionados conectan la experiencia con tu equipo.')];
const scope=[t('Discovery & content planning','Descubrimiento y planificación de contenido'),t('Information architecture & customer journey','Arquitectura de información y recorrido del cliente'),t('Responsive visual design','Diseño visual responsive'),slug==='e-commerce'?t('Catalog, payments & operational requirements','Catálogo, pagos y requisitos operativos'):t('Website development & content setup','Desarrollo web y preparación de contenido'),t('Forms & selected integrations','Formularios e integraciones seleccionadas'),t('Accessibility, SEO foundations & launch review','Accesibilidad, bases de SEO y revisión de lanzamiento')];
const steps=[
 [t('Understand what matters.','Entender lo que importa.'),t('We listen, understand your customers and define the problem worth solving before any execution.','Escuchamos, entendemos a tus clientes y definimos el problema que vale la pena resolver antes de ejecutar.'),'DISCOVERY → DIRECTION'],
 [t('Give the idea a distinctive form.','Darle una forma propia a la idea.'),t('Identity, content and experience that feel like your business and work for your customers.','Identidad, contenido y experiencia que se sienten propios de tu negocio y funcionan para tus clientes.'),'IDENTITY → DESIGN'],
 [t('Make the pieces work together.','Hacer que las piezas trabajen juntas.'),t('Design, development and agreed systems connected, reviewed, tested and ready for the next step.','Diseño, desarrollo y sistemas acordados conectados, revisados y probados, listos para el siguiente paso.'),'BUILD → CONNECT → IMPROVE']
];

const stage={
store:`<div class="sx-nav"><b>OBJECTS</b><span>${t('Shop','Tienda')}</span><span>${t('Collections','Colecciones')}</span><span>${t('Story','Historia')}</span><em class="sx-cart">🛒<i class="n1">1</i><i class="n2">2</i></em></div>
<div class="sx-body store"><div class="sx-copy"><small>${t('NEW SEASON','NUEVA TEMPORADA')}</small><h4>${t('Everyday.<br>Considered.','Cada día.<br>Con intención.')}</h4><span class="sx-btn">${t('Shop the collection','Ver colección')} →</span><div class="sx-steps"><i class="on"></i><i class="on"></i><i></i><i></i><small>${t('Cart · Shipping · Payment · Done','Carrito · Envío · Pago · Listo')}</small></div></div>
<div class="sx-grid"><div class="sx-card"><div class="ob b1"></div><b>${t('Bottle','Botella')}</b><small>$48</small><span class="sx-add">+</span></div><div class="sx-card hot"><div class="ob b2"></div><b>${t('Vessel','Vasija')}</b><small>$72</small><span class="sx-add a2">+</span></div><div class="sx-card"><div class="ob b3"></div><b>${t('Sphere','Esfera')}</b><small>$36</small><span class="sx-add">+</span></div></div></div><div class="sx-cursor"></div><div class="sx-toast">✓ ${t('Added to cart','Añadido al carrito')}</div>`,
one:`<div class="sx-nav"><b>YOUR BRAND</b><span>${t('Story','Historia')}</span><span>${t('Offer','Oferta')}</span><span>${t('Contact','Contacto')}</span><em class="sx-pill">${t('Let’s talk','Hablemos')}</em></div>
<div class="sx-viewport"><div class="sx-scroll"><div class="sx-sec s1"><small>${t('A NEW PERSPECTIVE','UNA NUEVA PERSPECTIVA')}</small><h4>${t('Your next chapter.<br>Built around you.','Tu próxima etapa.<br>Pensada para ti.')}</h4><span class="sx-btn">${t('Let’s begin','Comencemos')} →</span></div><div class="sx-sec s2"><div class="ob b2"></div><div><b>${t('What we do','Lo que hacemos')}</b><p></p><p></p><p class="sh"></p></div></div><div class="sx-sec s3"><div class="stat"><b>24h</b><small>${t('response','respuesta')}</small></div><div class="stat"><b>98%</b><small>${t('clarity','claridad')}</small></div><div class="stat"><b>1</b><small>${t('next step','siguiente paso')}</small></div></div><div class="sx-sec s4"><h4>${t('Ready when you are.','Listos cuando tú lo estés.')}</h4><span class="sx-btn">${t('Request a proposal','Solicita una propuesta')} →</span></div></div></div><div class="sx-rail"><i></i></div>`,
biz:`<div class="sx-nav"><b>YOUR COMPANY</b><span>${t('Services','Servicios')}</span><span>${t('About','Nosotros')}</span><span>${t('Projects','Proyectos')}</span><em class="sx-pill">${t('Contact','Contacto')}</em></div>
<div class="sx-body biz"><div class="sx-copy"><small>${t('SINCE 2012','DESDE 2012')}</small><h4>${t('Trusted by the<br>businesses around you.','La confianza de los<br>negocios a tu alrededor.')}</h4><span class="sx-btn">${t('Our services','Nuestros servicios')} →</span></div>
<div class="sx-map"><svg viewBox="0 0 300 200" fill="none"><g stroke="rgba(196,255,46,.5)" stroke-width="1.2"><path class="dash" d="M150 40 L70 110 M150 40 L150 110 M150 40 L230 110 M70 110 L70 170 M230 110 L230 170"/></g><g fill="#0b0f0d" stroke="#c4ff2e" stroke-width="1.5"><rect x="118" y="22" width="64" height="30" rx="10"/><rect x="38" y="95" width="64" height="30" rx="10"/><rect x="118" y="95" width="64" height="30" rx="10"/><rect x="198" y="95" width="64" height="30" rx="10"/><rect x="38" y="158" width="64" height="30" rx="10"/><rect x="198" y="158" width="64" height="30" rx="10"/></g><g fill="#f2f5f1" font-size="10" font-family="sans-serif" text-anchor="middle"><text x="150" y="41">Home</text><text x="70" y="114">${t('Services','Servicios')}</text><text x="150" y="114">${t('About','Nosotros')}</text><text x="230" y="114">${t('Projects','Proyectos')}</text><text x="70" y="177">${t('Detail','Detalle')}</text><text x="230" y="177">${t('Contact','Contacto')}</text></g><circle class="pulse" r="5" fill="#c4ff2e"><animateMotion dur="6s" repeatCount="indefinite" path="M150 40 L70 110 L70 170 M150 40 L230 110 L230 170"/></circle></svg></div></div>`};
const chips={store:[t('Secure payment','Pago seguro'),t('Live inventory','Inventario sincronizado'),t('Order → your team','Pedido → tu equipo')],one:[t('One clear journey','Un recorrido claro'),t('Always-visible CTA','CTA siempre visible'),t('Fast on mobile','Rápida en móvil')],biz:[t('Clear structure','Estructura clara'),t('Services & proof','Servicios y prueba'),t('Contact in reach','Contacto a un paso')]}[variant];
return `
<section class="h2-hero h2-sub" id="hero" data-h2="hero">
 <canvas id="h2-canvas" data-variant="${variant}" aria-hidden="true"></canvas><div class="h2-hero-glow" aria-hidden="true"></div>
 <div class="h2-wrap h2-hero-copy">
  <p class="h2-crumb"><a href="/${lang}">CONNEXION</a> / <a href="/${lang}#solutions">${t('SOLUTIONS','SOLUCIONES')}</a> / ${d.eyebrow}</p>
  <p class="h2-eyebrow"><i></i>${d.eyebrow}</p>
  <h1 class="h2-split">${em(d.title)}</h1>
  <p class="h2-lead">${d.copy}</p>
  <div class="h2-actions">${btn(t('GET A CUSTOM PROPOSAL','SOLICITA UNA PROPUESTA'),`data-proposal data-interest="${d.eyebrow}"`)}<a class="h2-ghost" href="#fit">${t('Is it the right fit?','¿Es para ti?')}${arrow}</a></div>
  <ul class="h2-pills">${d.features.map(f=>`<li>${f}</li>`).join('')}</ul>
 </div>
 <div class="h2-hint" aria-hidden="true"><span></span>${t('SCROLL','DESLIZA')}</div>
</section>
<section class="h2-stage" data-h2="stage"><div class="h2-wrap"><p class="h2-label">00 / ${t('A GLIMPSE','UN VISTAZO')}</p><div class="sx-wrap"><div class="sx-frame ${variant}"><div class="sx-top"><i></i><i></i><i></i><span>${t('Concept preview','Vista conceptual')}</span></div>${stage[variant]}</div>${chips.map((c,i)=>`<span class="sx-chip c${i}">${c}</span>`).join('')}</div></div></section>
<section class="h2-manifesto" id="fit"><div class="h2-wrap">
 <p class="h2-label">01 / ${t('THE RIGHT FIT','PARA QUIÉN')}</p>
 <p class="h2-words">${d.fit} ${d.explanation}</p>
 <div class="h2-actions" style="margin-top:48px"><button class="h2-ghost" data-meeting>${t('Let’s discuss your goals','Conversemos sobre tus objetivos')}${arrow}</button></div>
</div></section>
<section class="h2-services"><div class="h2-wrap">
 <p class="h2-label">02 / ${t('DESIGNED AROUND YOUR CUSTOMER','DISEÑADO PARA TU CLIENTE')}</p>
 <h2 class="h2-title">${em(d.benefit.replace('<br>','<br><span>')+'</span>')}</h2>
 <div class="h2-stack">${d.parts.map((f,i)=>`<article class="h2-card"><div class="h2-card-in"><span class="h2-num">0${i+1}</span><div class="h2-card-body"><h3>${f}</h3><p>${blurbs[i]}</p></div><div class="h2-orb o${i}" aria-hidden="true"></div></div></article>`).join('')}</div>
</div></section>
<section class="h2-scope"><div class="h2-wrap">
 <p class="h2-label">03 / ${t('A CLEAR SCOPE. A SHARED DIRECTION.','ALCANCE CLARO. DIRECCIÓN COMPARTIDA.')}</p>
 <h2 class="h2-title">${t('Thought through.<br><em>From the start.</em>','Bien pensado.<br><em>Desde el comienzo.</em>')}</h2>
 <p class="h2-sub-copy">${t('Your proposal defines the deliverables, requirements and milestones. The following is a starting point for the conversation.','La propuesta define entregables, requisitos e hitos. Lo siguiente es un punto de partida para la conversación.')}</p>
 <ol class="h2-rows">${scope.map((s,i)=>`<li><span>0${i+1}</span><strong>${s}</strong><b>↗</b></li>`).join('')}</ol>
</div></section>
<section class="h2-process" data-h2="process"><div class="h2-pin"><div class="h2-wrap h2-process-head"><p class="h2-label">04 / ${t('HOW WE BUILD','CÓMO CONSTRUIMOS')}</p><h2 class="h2-title">${t('A clear direction.<br><em>A connected process.</em>','Una dirección clara.<br><em>Un proceso conectado.</em>')}</h2></div>
 <div class="h2-track">${steps.map((s,i)=>`<div class="h2-step"><span class="h2-bignum">0${i+1}</span><h3>${s[0]}</h3><p>${s[1]}</p><small>${s[2]}</small></div>`).join('')}</div><div class="h2-bar"><i></i></div></div></section>
${slug==='business-websites'?`<section class="h2-scope"><div class="h2-wrap"><p class="h2-label">05 / ${t('RELEVANT WORK','TRABAJO RELACIONADO')}</p><h2 class="h2-title">${t('A real business.<br><em>A clear digital presence.</em>','Un negocio real.<br><em>Una presencia digital clara.</em>')}</h2><a class="h2-project h2-wide" href="https://mcssol.net/" target="_blank" rel="noopener"><div class="h2-shot"><img src="/assets/work-mcs.webp" alt="MCS Solutions" loading="lazy"></div><div class="h2-meta"><span>MCS Solutions</span><strong>${t('Commercial cleaning in Houston','Limpieza comercial en Houston')}</strong><b aria-hidden="true">↗</b></div></a></div></section>`:''}
<section class="h2-big"><div class="h2-wrap"><p class="h2-label">${slug==='business-websites'?'06':'05'} / ${t('THE NEXT CONNECTION','LA SIGUIENTE CONEXIÓN')}</p><h2 class="h2-giant">${t('Let’s build<br><em>what connects.</em>','Construyamos<br><em>lo que conecta.</em>')}</h2><div class="h2-actions">${btn(t('GET A PROPOSAL','SOLICITA UNA PROPUESTA'),'data-proposal')}</div></div></section>
${faqSection()}${finalCTA()}`;}
