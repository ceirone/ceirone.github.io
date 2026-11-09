export function home2Page({t,btn,lang,projects,faqSection,finalCTA}){
const L=p=>`/${lang}${p}`;
const arrow='<span aria-hidden="true">↗</span>';
const services=[
 {n:'01',k:t('DIGITAL EXPERIENCES','EXPERIENCIAS DIGITALES'),h:t('Websites that open new doors.','Sitios web que abren nuevas puertas.'),p:t('From a focused landing page to a custom platform, we design so your customers discover, understand and choose your business.','Desde una landing enfocada hasta una plataforma a medida, diseñamos para que tus clientes descubran, entiendan y elijan tu negocio.'),tags:[t('One-page sites','Sitios de una página'),t('Business sites','Sitios empresariales'),'E-commerce'],href:L('/services/one-page-websites'),cta:t('Explore web solutions','Explora las soluciones web')},
 {n:'02',k:t('INTELLIGENT OPERATIONS','OPERACIONES INTELIGENTES'),h:t('Less friction. More possibilities.','Menos fricción. Más posibilidades.'),p:t('Connect workflows, CRM and processes with AI solutions shaped around the way your team works.','Conecta flujos, CRM y procesos con soluciones de IA pensadas para la forma de trabajar de tu equipo.'),tags:['CRM',t('Automation','Automatización'),t('Integrations','Integraciones')],href:L('/how-ai-agents-work'),cta:t('Explore AI solutions','Explora soluciones de IA')},
 {n:'03',k:t('AI AGENTS','AGENTES DE IA'),h:t('A smart first response. A human next step.','Una primera respuesta inteligente. Un siguiente paso humano.'),p:t('Customer-service agents, sales assistants and opportunity management that help find the answer and the right person.','Agentes de atención, asistentes de ventas y gestión de oportunidades que ayudan a encontrar la respuesta y la persona adecuadas.'),tags:[t('Service','Atención'),t('Sales','Ventas'),t('Handoff','Derivación')],href:L('/how-ai-agents-work'),cta:t('See an agent in action','Mira un agente en acción')}
];
const steps=[
 [t('Understand what matters.','Entender lo que importa.'),t('We listen to your team, understand your customers and define the problem worth solving. Scope and priorities come before execution.','Escuchamos a tu equipo, entendemos a tus clientes y definimos el problema que vale la pena resolver. Primero el alcance y las prioridades.'),'DISCOVERY → DIRECTION'],
 [t('Give the idea a distinctive form.','Darle una forma propia a la idea.'),t('We translate that direction into identity, content and experiences that feel like your business and work for your customers.','Convertimos esa dirección en identidad, contenido y experiencias que se sienten propias de tu negocio y funcionan para tus clientes.'),'IDENTITY → DESIGN'],
 [t('Make the pieces work together.','Hacer que las piezas trabajen juntas.'),t('We connect design, development and the agreed systems, then review, test and prepare the next step with your team.','Conectamos diseño, desarrollo y los sistemas acordados. Después revisamos, probamos y preparamos el siguiente paso contigo.'),'BUILD → CONNECT → IMPROVE']
];
const marq=[t('Websites','Sitios web'),t('AI agents','Agentes de IA'),t('Automation','Automatización'),t('Brand','Marca'),'CRM',t('Growth','Crecimiento'),t('Connection','Conexión')];
const row=marq.map(x=>`<span>${x}</span><i></i>`).join('');
return `
<section class="h2-hero" id="hero" data-h2="hero">
 <canvas id="h2-canvas" aria-hidden="true"></canvas>
 <div class="h2-hero-glow" aria-hidden="true"></div>
 <div class="h2-wrap h2-hero-copy">
  <p class="h2-eyebrow"><i></i>${t('AI SOLUTIONS & DIGITAL GROWTH','SOLUCIONES DE IA Y CRECIMIENTO DIGITAL')}</p>
  <h1 class="h2-split">${t('We connect brands with <em>people.</em>','Conectamos marcas con <em>personas.</em>')}</h1>
  <p class="h2-lead">${t('AI solutions, digital experiences and marketing strategies to move your business forward.','Soluciones de IA, experiencias digitales y estrategias de marketing para impulsar tu negocio.')}</p>
  <div class="h2-actions">${btn(t('GET A PROPOSAL','SOLICITA UNA PROPUESTA'),'data-proposal')}<a class="h2-ghost" href="#services">${t('Explore our solutions','Explora nuestras soluciones')}${arrow}</a></div>
 </div>
 <div class="h2-hint" aria-hidden="true"><span></span>${t('SCROLL','DESLIZA')}</div>
</section>
<div class="h2-marquee" aria-hidden="true"><div>${row}${row}${row}${row}</div></div>
<section class="h2-manifesto" id="about"><div class="h2-wrap">
 <p class="h2-label">01 / ${t('THE WAY WE SEE IT','NUESTRA MIRADA')}</p>
 <p class="h2-words">${t('Great brands don’t just communicate. They connect. Technology creates possibilities, human connection creates value — we bring both together so your business builds stronger experiences, works more intelligently and reaches the people who matter.','Las grandes marcas no solo comunican. Conectan. La tecnología crea posibilidades, la conexión humana crea valor: unimos ambas para que tu negocio construya mejores experiencias, trabaje de forma más inteligente y llegue a las personas que importan.')}</p>
</div></section>
<section class="h2-services" id="services"><div class="h2-wrap">
 <p class="h2-label">02 / ${t('OUR CORE CAPABILITIES','NUESTRAS CAPACIDADES CLAVE')}</p>
 <h2 class="h2-title">${t('The right tools.<br><em>A human purpose.</em>','Las herramientas correctas.<br><em>Un propósito humano.</em>')}</h2>
 <div class="h2-stack">${services.map((s,i)=>`<article class="h2-card" data-i="${i}"><div class="h2-card-in"><span class="h2-num">${s.n}</span><div class="h2-card-body"><p class="h2-k">${s.k}</p><h3>${s.h}</h3><p>${s.p}</p><ul>${s.tags.map(x=>`<li>${x}</li>`).join('')}</ul><a class="h2-link" href="${s.href}">${s.cta}${arrow}</a></div><div class="h2-orb o${i}" aria-hidden="true"></div></div></article>`).join('')}</div>
</div></section>
<section class="h2-process" id="process" data-h2="process">
 <div class="h2-pin"><div class="h2-wrap h2-process-head"><p class="h2-label">03 / ${t('HOW WE THINK. HOW WE BUILD.','CÓMO PENSAMOS. CÓMO CONSTRUIMOS.')}</p><h2 class="h2-title">${t('A clear direction.<br><em>A connected process.</em>','Una dirección clara.<br><em>Un proceso conectado.</em>')}</h2></div>
 <div class="h2-track">${steps.map((s,i)=>`<div class="h2-step"><span class="h2-bignum">0${i+1}</span><h3>${s[0]}</h3><p>${s[1]}</p><small>${s[2]}</small></div>`).join('')}</div>
 <div class="h2-bar"><i></i></div></div>
</section>
<section class="h2-work" id="work" data-h2="work">
 <div class="h2-pin"><div class="h2-wrap h2-work-head"><p class="h2-label">04 / ${t('SELECTED WORK','PROYECTOS SELECCIONADOS')}</p><h2 class="h2-title">${t('Connections you<br><em>can see.</em>','Conexiones que<br><em>puedes ver.</em>')}</h2></div>
 <div class="h2-track h2-gallery">${projects.map((p,i)=>`<a class="h2-project" href="${p.url}" target="_blank" rel="noopener"><div class="h2-shot"><img src="/assets/work-${p.image}.webp" alt="${p.name}" width="1440" height="1000" loading="lazy"></div><div class="h2-meta"><span>0${i+1} — ${p.category}</span><strong>${p.name}</strong><b aria-hidden="true">↗</b></div></a>`).join('')}</div>
 <div class="h2-bar"><i></i></div></div>
</section>
<section class="h2-big"><div class="h2-wrap"><p class="h2-label">05 / ${t('THE NEXT CONNECTION','LA SIGUIENTE CONEXIÓN')}</p><h2 class="h2-giant">${t('Let’s build<br><em>what connects.</em>','Construyamos<br><em>lo que conecta.</em>')}</h2><div class="h2-actions">${btn(t('GET A PROPOSAL','SOLICITA UNA PROPUESTA'),'data-proposal')}<a class="h2-ghost" href="/${lang}/how-ai-agents-work">${t('How AI agents work','Cómo funcionan los agentes de IA')}${arrow}</a></div></div></section>
${faqSection()}${finalCTA()}`;}
