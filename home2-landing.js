export function landing2Page({t,btn,lang,d,slug,faqSection,finalCTA}){
const variant=slug==='e-commerce'?'store':slug==='one-page-websites'?'one':'biz';
const arrow='<span aria-hidden="true">↗</span>';
const wa=msg=>`https://wa.me/13214513964?text=${encodeURIComponent(msg)}`;
const work={
 clevk:{n:'CLEVK',u:'https://clevk.com/',i:'clevk',c:t('AI business systems','Sistemas de negocio con IA')},
 storm:{n:'Storm Brand Labs',u:'https://stormbrandlabs.com/home',i:'storm',c:t('Digital strategy','Estrategia digital')},
 gfc:{n:'Gauthier Children’s Foundation',u:'https://clevk.com/gfcfoundation/',i:'gfc',c:t('Foundation','Fundación')},
 magnus:{n:'Magnus Yachts Group',u:'https://clevk.com/magnusyachtgroup/',i:'magnus',c:t('Yacht charters','Chárter de yates')},
 agteach:{n:'AGTeach — VERTIX',u:'https://clevk.com/agteach/',i:'agteach',c:t('Agricultural technology','Tecnología agrícola')},
 mcs:{n:'MCS Solutions',u:'https://mcssol.net/',i:'mcs',c:t('Commercial cleaning · Houston','Limpieza comercial · Houston')},
 trucks:{n:'CC Truck Sales LLC',u:'https://cctrucksalesllc.com/',i:'trucks',c:t('Vehicle sales','Venta de vehículos')}
};
const S={
one:{
 h1:t('One page that turns visitors into <em>conversations.</em>','Una página que convierte visitas en <em>conversaciones.</em>'),
 lead:t('A high-impact landing page for your offer: a clear message, a design that builds trust and a direct button to your WhatsApp. Ready for ads, social traffic and referrals.','Una landing de alto impacto para tu oferta: mensaje claro, diseño que genera confianza y un botón directo a tu WhatsApp. Lista para anuncios, redes y recomendaciones.'),
 cta:t('Get my landing page','Quiero mi landing'),
 msg:t('Hi Connexion! I want a one-page website for my business.','¡Hola Connexion! Quiero una página web de una sola página para mi negocio.'),
 hero:['clevk','storm','agteach'],
 gallery:['clevk','storm','agteach'],
 painT:t('If your offer lives in a bad page, <em>you pay for it twice.</em>','Si tu oferta vive en una mala página, <em>la pagas dos veces.</em>'),
 pains:[[t('You pay for traffic that never answers','Pagas por visitas que nunca escriben'),t('Ads and posts bring people in, but the page gives no reason to act. The money is spent and nobody calls.','Los anuncios traen gente, pero la página no da razón para actuar. El dinero se gasta y nadie escribe.')],[t('Your message gets lost','Tu mensaje se pierde'),t('Too many ideas, no hierarchy. Visitors can’t tell in 5 seconds what you sell or why you.','Demasiadas ideas y ninguna jerarquía. En 5 segundos nadie entiende qué vendes ni por qué tú.')],[t('The next step is hidden','El siguiente paso está escondido'),t('A form that asks too much, a phone number in the footer. Every extra click loses a customer.','Un formulario que pide demasiado o un teléfono en el pie. Cada clic extra pierde un cliente.')]],
 benT:t('Built for one job: <em>getting the message.</em>','Hecha para un solo trabajo: <em>que te escriban.</em>'),
 bens:[[t('Message first','Primero el mensaje'),t('We write the story, offer and proof so a stranger understands you in seconds.','Escribimos la historia, la oferta y la prueba para que un desconocido te entienda en segundos.'),t('Clear in 5 seconds','Claro en 5 segundos')],[t('One path, one button','Un camino, un botón'),t('Every section pushes to the same action: a WhatsApp chat with your team.','Cada sección empuja a la misma acción: una conversación de WhatsApp con tu equipo.'),t('Lead straight to WhatsApp','Cliente directo a WhatsApp')],[t('Fast, on every phone','Rápida, en cualquier móvil'),t('Designed mobile-first, light and fast so ad clicks don’t bounce before loading.','Diseñada primero para móvil, ligera y veloz para que el clic del anuncio no se pierda esperando.'),t('Mobile-first','Mobile-first')]],
 inc:[t('Persuasive copywriting for your offer','Copy persuasivo para tu oferta'),t('Custom design, not a template','Diseño a medida, no una plantilla'),t('Mobile-first, fast loading','Móvil primero y carga veloz'),t('Contact form + WhatsApp button','Formulario + botón de WhatsApp'),t('Ad & analytics tracking ready','Medición lista para anuncios y analítica'),t('SEO basics and social preview','Bases de SEO y vista previa en redes'),t('Domain, hosting and launch support','Dominio, hosting y acompañamiento al lanzar'),t('Adjustments after we publish','Ajustes después de publicar')],
 faq:[[t('Do I need to have the text and photos ready?','¿Necesito tener los textos y fotos listos?'),t('No. We guide you with a short questionnaire, write the copy and tell you exactly which photos or logos we need.','No. Te guiamos con un cuestionario corto, escribimos los textos y te decimos exactamente qué fotos o logos necesitamos.')],[t('Can I run ads to it?','¿Puedo hacer anuncios hacia esta página?'),t('Yes, that is what it is for. We set up the tracking so you can measure every lead from Meta or Google.','Sí, para eso está pensada. Dejamos la medición lista para que midas cada contacto que llegue desde Meta o Google.')],[t('Can it grow into a full website later?','¿Puede crecer a un sitio completo después?'),t('Yes. We design the base so new pages and sections can be added without starting over.','Sí. Diseñamos la base para añadir páginas y secciones sin empezar de cero.')]]
},
biz:{
 h1:t('A website that makes them <em>choose you</em> before they call.','Un sitio web que hace que <em>te elijan</em> antes de llamarte.'),
 lead:t('Your customers search, compare and decide online. We build the professional site that shows your services with clarity, earns trust and turns visits into quotes.','Tus clientes buscan, comparan y deciden en línea. Construimos el sitio profesional que muestra tus servicios con claridad, genera confianza y convierte visitas en cotizaciones.'),
 cta:t('Get my website','Quiero mi sitio web'),
 msg:t('Hi Connexion! I want a professional website for my business.','¡Hola Connexion! Quiero un sitio web profesional para mi empresa.'),
 hero:['mcs','magnus','gfc'],
 gallery:['mcs','magnus','gfc'],
 painT:t('A weak website quietly <em>sends customers to your competitor.</em>','Un sitio débil <em>manda clientes a tu competencia</em> sin que lo notes.'),
 pains:[[t('You look smaller than you are','Te ves más pequeño de lo que eres'),t('An outdated or template site makes a solid company look improvised, and prospects choose whoever looks more serious.','Un sitio viejo o de plantilla hace que una empresa sólida parezca improvisada, y el prospecto elige a quien se ve más serio.')],[t('Nobody finds the right service','Nadie encuentra el servicio correcto'),t('When services, locations and contact are buried, visitors leave without asking for a quote.','Si los servicios, ubicaciones y contacto están enterrados, el visitante se va sin pedir cotización.')],[t('Leads arrive nowhere','Los contactos llegan a ningún lado'),t('Forms that email into the void and slow replies. A hot lead goes cold in hours.','Formularios que se pierden en un correo y respuestas lentas. Un contacto caliente se enfría en horas.')]],
 benT:t('Built to <em>win trust and close quotes.</em>','Hecho para <em>ganar confianza y cerrar cotizaciones.</em>'),
 bens:[[t('Structure that guides','Estructura que guía'),t('Every page has a job: services, proof, locations and a clear path to contact.','Cada página tiene una función: servicios, prueba, ubicaciones y un camino claro al contacto.'),t('Easy to navigate','Fácil de recorrer')],[t('A brand that is recognized','Una marca que se reconoce'),t('Design and tone that make your company look as solid as it is.','Diseño y tono que hacen ver a tu empresa tan sólida como es.'),t('Credibility','Credibilidad')],[t('Leads that reach your team','Contactos que llegan a tu equipo'),t('Forms and WhatsApp wired so every inquiry arrives instantly where you can answer it.','Formularios y WhatsApp conectados para que cada consulta llegue al instante donde puedes responderla.'),t('Instant inquiries','Consultas al instante')]],
 inc:[t('Multi-page structure planned for your services','Estructura multipágina pensada para tus servicios'),t('Custom brand-aligned design','Diseño a medida alineado a tu marca'),t('Content and copywriting support','Apoyo con contenido y textos'),t('Contact forms + WhatsApp','Formularios de contacto + WhatsApp'),t('Mobile-first and fast','Móvil primero y veloz'),t('Local SEO foundations','Bases de SEO local'),t('Easy content updates by your team','Contenido que tu equipo puede actualizar'),t('Launch support and follow-up adjustments','Acompañamiento al lanzar y ajustes posteriores')],
 faq:[[t('Will my team be able to update it?','¿Mi equipo podrá actualizarlo?'),t('Yes. We hand over a site your team can edit for texts and images, and we stay available for bigger changes.','Sí. Entregamos un sitio donde tu equipo puede editar textos e imágenes, y seguimos disponibles para cambios mayores.')],[t('Can you redo my current website?','¿Pueden rehacer mi sitio actual?'),t('Yes. We review what you have, keep what works and rebuild what does not, without losing your existing content.','Sí. Revisamos lo que tienes, conservamos lo que funciona y rehacemos lo que no, sin perder tu contenido.')],[t('How do we start?','¿Cómo empezamos?'),t('Send us a WhatsApp message. We ask a few questions about your business and come back with a clear proposal.','Escríbenos por WhatsApp. Te hacemos unas preguntas sobre tu negocio y volvemos con una propuesta clara.')]]
},
store:{
 h1:t('An online store built to <em>sell, not just exist.</em>','Una tienda online hecha para <em>vender, no solo existir.</em>'),
 lead:t('From the first product view to a confident checkout. We build the store, connect payments and operations, and remove everything that makes a shopper abandon the cart.','De la primera mirada del producto a un pago con confianza. Construimos la tienda, conectamos pagos y operación, y quitamos todo lo que hace abandonar el carrito.'),
 cta:t('Get my online store','Quiero mi tienda online'),
 msg:t('Hi Connexion! I want to sell online and need an e-commerce store.','¡Hola Connexion! Quiero vender en línea y necesito una tienda e-commerce.'),
 hero:['trucks','magnus','clevk'],
 gallery:['trucks','magnus','clevk'],
 painT:t('Most online stores don’t fail on traffic. <em>They fail at the cart.</em>','La mayoría de las tiendas no fallan en el tráfico. <em>Fallan en el carrito.</em>'),
 pains:[[t('Shoppers can’t find the product','Nadie encuentra el producto'),t('Weak search, messy categories and flat product pages. If it’s hard to browse, they leave.','Búsqueda débil, categorías confusas y fichas planas. Si cuesta explorar, se van.')],[t('Checkout creates doubt','El pago genera dudas'),t('Too many steps, no trust signals and surprise costs. Most abandoned carts are lost right here.','Demasiados pasos, cero señales de confianza y costos sorpresa. Aquí se pierden la mayoría de carritos.')],[t('Orders live in chaos','Los pedidos viven en el caos'),t('Stock, payments and shipping managed by hand. Every sale creates more work instead of more profit.','Inventario, pagos y envíos a mano. Cada venta genera más trabajo en lugar de más ganancia.')]],
 benT:t('Built so buying feels <em>easy and safe.</em>','Hecha para que comprar se sienta <em>fácil y seguro.</em>'),
 bens:[[t('Products that sell themselves','Productos que se venden solos'),t('Clear navigation, strong product pages and the details shoppers need to decide.','Navegación clara, fichas potentes y los detalles que el comprador necesita para decidir.'),t('Easy discovery','Fácil de explorar')],[t('Checkout without friction','Pago sin fricción'),t('A short path to pay, with trust signals and the payment methods your customers use.','Un camino corto para pagar, con señales de confianza y los métodos de pago que usan tus clientes.'),t('Fewer abandoned carts','Menos carritos abandonados')],[t('Operations connected','Operación conectada'),t('Orders, inventory and notifications flowing to your team automatically.','Pedidos, inventario y notificaciones fluyendo a tu equipo de forma automática.'),t('Less manual work','Menos trabajo manual')]],
 inc:[t('Store design focused on conversion','Diseño de tienda enfocado en conversión'),t('Catalog and category setup','Catálogo y categorías configurados'),t('Payments configured for your market','Pagos configurados para tu mercado'),t('Shipping and tax rules','Reglas de envío e impuestos'),t('Order and stock notifications','Notificaciones de pedidos e inventario'),t('Mobile-first shopping experience','Experiencia de compra móvil primero'),t('SEO foundations for products','Bases de SEO para productos'),t('Training and launch support','Capacitación y acompañamiento al lanzar')],
 faq:[[t('Which platform do you use?','¿Qué plataforma usan?'),t('We recommend the platform that fits your catalog, budget and operation, then explain why before we build.','Recomendamos la plataforma que encaje con tu catálogo, presupuesto y operación, y te explicamos por qué antes de construir.')],[t('Can you improve my current store?','¿Pueden mejorar mi tienda actual?'),t('Yes. We audit your funnel, find where shoppers drop off and fix those points first.','Sí. Auditamos tu embudo, encontramos dónde se caen los compradores y arreglamos esos puntos primero.')],[t('Who adds my products?','¿Quién carga mis productos?'),t('We set up the catalog structure and teach your team. For larger catalogs we can help with the import.','Dejamos lista la estructura del catálogo y capacitamos a tu equipo. Para catálogos grandes te ayudamos con la importación.')]]
}}[variant];
const w=k=>work[k];
const PRICE={one:{from:'$590',days:t('5–7 business days','5–7 días hábiles'),pages:t('1 page','1 página')},biz:{from:'$1,490',days:t('3–4 weeks','3–4 semanas'),pages:t('5–10 pages','5–10 páginas')},store:{from:'$2,490',days:t('4–6 weeks','4–6 semanas'),pages:t('Up to 50 products','Hasta 50 productos')}}[variant];
const notes={clevk:t('AI-systems company: positioning and a cinematic site that explains a complex offer.','Empresa de sistemas con IA: posicionamiento y un sitio cinematográfico que explica una oferta compleja.'),storm:t('Branding agency: bold identity and a clear path to “Start your project”.','Agencia de branding: identidad atrevida y camino claro hacia “Start your project”.'),agteach:t('Agritech: turns technical data (180 m², yields, ROI) into a clear, trustworthy story.','Agritech: convierte datos técnicos (180 m², rendimiento, ROI) en una historia clara y creíble.'),mcs:t('Commercial cleaning: services, areas and quote requests for Houston businesses.','Limpieza comercial: servicios, zonas y solicitud de cotización para empresas de Houston.'),magnus:t('Yacht charters: premium look, availability check and quote request.','Chárter de yates: imagen premium, consulta de disponibilidad y cotización.'),gfc:t('Foundation: a human story and clear ways to get involved.','Fundación: historia humana y formas claras de participar.'),trucks:t('Vehicle sales: inventory-first layout built to get calls.','Venta de vehículos: inventario primero, pensado para generar llamadas.')};
const steps=[[t('You message us','Nos escribes'),t('A short WhatsApp chat about your business, goal and audience.','Una conversación corta por WhatsApp sobre tu negocio, objetivo y audiencia.')],[t('We send a proposal','Te enviamos una propuesta'),t('Clear scope, deliverables and investment, so you know exactly what you get.','Alcance claro, entregables e inversión, para que sepas exactamente qué recibes.')],[t('We design, build and launch','Diseñamos, construimos y lanzamos'),t('You review the design, approve it and we publish and stay by your side.','Revisas el diseño, lo apruebas y publicamos acompañándote.')]];
const faqItems=[...S.faq,[t('How much does it cost?','¿Cuánto cuesta?'),t('Projects start at ${PRICE.from} USD. The final price depends on pages, content and integrations, and you get it in writing before you commit.','Los proyectos inician desde ${PRICE.from} USD. El precio final depende de páginas, contenido e integraciones, y lo recibes por escrito antes de comprometerte.')]];
const slide=S.hero.map((k,i)=>`<img class="sl-slide s${i}" src="/assets/work-${w(k).i}.webp" alt="${w(k).n}" width="1440" height="1000" ${i?'loading="lazy"':'fetchpriority="high"'}>`).join('');
const trust=Object.values(work).map(x=>`<span>${x.n}</span>`).join('');
return `
<section class="h2-hero h2-sub sl-hero" id="hero" data-h2="hero">
 <canvas id="h2-canvas" data-variant="${variant}" aria-hidden="true"></canvas><div class="h2-hero-glow" aria-hidden="true"></div>
 <div class="h2-wrap sl-hero-grid">
  <div class="h2-hero-copy sl-copy">
   <p class="h2-crumb"><a href="/${lang}">CONNEXION</a> / <a href="/${lang}#solutions">${t('SOLUTIONS','SOLUCIONES')}</a> / ${d.eyebrow}</p>
   <p class="h2-eyebrow"><i></i>${d.eyebrow}</p>
   <h1 class="sl-h1">${S.h1}</h1>
   <p class="h2-lead">${S.lead}</p>
   <div class="h2-actions">${btn(S.cta,`data-proposal data-interest="${d.eyebrow}"`)}<a class="h2-ghost" href="${wa(S.msg)}" target="_blank" rel="noopener">${t('Chat on WhatsApp','Hablar por WhatsApp')}${arrow}</a></div>
   <p class="sl-reassure"><b>✓</b> ${t('Free first chat','Primera charla sin costo')} <b>✓</b> ${t('Clear proposal before you commit','Propuesta clara antes de comprometerte')} <b>✓</b> ${t('Real sites already live','Sitios reales ya publicados')}</p>
  </div>
  <div class="sl-visual" aria-hidden="false">
   <div class="sl-laptop"><div class="sl-bar"><i></i><i></i><i></i><span>${t('Real Connexion work','Trabajo real de Connexion')}</span></div><div class="sl-screen">${slide}</div></div>
   <div class="sl-float f1"><b>${t('Live websites','Sitios publicados')}</b><small>${t('Not mockups','No son maquetas')}</small></div>
   <div class="sl-float f2"><b>WhatsApp</b><small>${t('Leads straight to your phone','Contactos directo a tu celular')}</small></div>
  </div>
 </div>
</section>
<section class="sl-trust"><p>${t('SITES WE HAVE BUILT FOR REAL BUSINESSES','SITIOS QUE HEMOS CONSTRUIDO PARA NEGOCIOS REALES')}</p><div class="sl-marquee"><div>${trust}${trust}</div></div></section>
<section class="sl-sec sl-pain"><div class="h2-wrap">
 <p class="h2-label">01 / ${t('THE PROBLEM','EL PROBLEMA')}</p>
 <h2 class="sl-h2 sl-rv">${S.painT}</h2>
 <div class="sl-grid3">${S.pains.map((p,i)=>`<article class="sl-card sl-rv"><span class="sl-x">✕</span><h3>${p[0]}</h3><p>${p[1]}</p></article>`).join('')}</div>
</div></section>
<section class="sl-sec sl-ben"><div class="h2-wrap">
 <p class="h2-label">02 / ${t('THE SOLUTION','LA SOLUCIÓN')}</p>
 <h2 class="sl-h2 sl-rv">${S.benT}</h2>
 <div class="sl-grid3">${S.bens.map((p,i)=>`<article class="sl-card good sl-rv"><span class="sl-tag">${p[2]}</span><h3>${p[0]}</h3><p>${p[1]}</p></article>`).join('')}</div>
 <div class="h2-actions sl-rv" style="margin-top:44px">${btn(S.cta,`data-proposal data-interest="${d.eyebrow}"`)}</div>
</div></section>
<section class="sl-sec sl-proof"><div class="h2-wrap">
 <p class="h2-label">03 / ${t('REAL WORK','TRABAJO REAL')}</p>
 <h2 class="sl-h2 sl-rv">${t('Not promises. <em>Sites you can open right now.</em>','No son promesas. <em>Son sitios que puedes abrir ahora.</em>')}</h2>
 <div class="sl-gal">${S.gallery.map(k=>`<a class="sl-work sl-rv" href="${w(k).u}" target="_blank" rel="noopener"><div class="sl-shot"><img src="/assets/work-${w(k).i}.webp" alt="${w(k).n}" width="1440" height="1000" loading="lazy"></div><div class="sl-meta"><span>${w(k).c}</span><strong>${w(k).n}</strong><em class="sl-note2">${notes[k]}</em><b>${t('Visit site','Ver sitio')} ${arrow}</b></div></a>`).join('')}</div>
</div></section>
<section class="sl-sec sl-inc"><div class="h2-wrap sl-inc-grid">
 <div><p class="h2-label">04 / ${t('WHAT YOU GET','QUÉ RECIBES')}</p><h2 class="sl-h2 sl-rv">${t('Everything included. <em>Nothing to chase.</em>','Todo incluido. <em>Sin andar persiguiendo nada.</em>')}</h2><p class="sl-note">${t('We handle strategy, design, development and launch so you can keep running your business.','Nos encargamos de estrategia, diseño, desarrollo y lanzamiento para que sigas atendiendo tu negocio.')}</p><div class="h2-actions">${btn(S.cta,`data-proposal data-interest="${d.eyebrow}"`)}</div></div>
 <ul class="sl-list">${S.inc.map(x=>`<li class="sl-rv"><i>✓</i>${x}</li>`).join('')}</ul>
</div></section>
<section class="sl-sec sl-price"><div class="h2-wrap">
 <p class="h2-label">05 / ${t('INVESTMENT & TIMELINE','INVERSIÓN Y PLAZOS')}</p>
 <h2 class="sl-h2 sl-rv">${t('Clear price. <em>Clear date.</em>','Precio claro. <em>Fecha clara.</em>')}</h2>
 <div class="sl-pricebox sl-rv"><div><small>${t('STARTING AT','DESDE')}</small><b>${PRICE.from}</b><span>USD · ${PRICE.pages}</span></div><div><small>${t('DELIVERY','ENTREGA')}</small><b>${PRICE.days}</b><span>${t('from approved content','desde contenido aprobado')}</span></div><div><small>${t('YOU GET','INCLUYE')}</small><b>${t('Everything above','Todo lo anterior')}</b><span>${t('Final price confirmed in your proposal','Precio final confirmado en tu propuesta')}</span></div></div>
</div></section>
<section class="sl-sec sl-steps"><div class="h2-wrap">
 <p class="h2-label">06 / ${t('HOW IT WORKS','CÓMO FUNCIONA')}</p>
 <h2 class="sl-h2 sl-rv">${t('Three steps. <em>Zero confusion.</em>','Tres pasos. <em>Cero confusión.</em>')}</h2>
 <div class="sl-grid3">${steps.map((s,i)=>`<article class="sl-step sl-rv"><span>0${i+1}</span><h3>${s[0]}</h3><p>${s[1]}</p></article>`).join('')}</div>
</div></section>
<section class="sl-sec sl-offer"><div class="h2-wrap"><div class="sl-offer-box sl-rv">
 <div><p class="h2-label">07 / ${t('START TODAY','EMPIEZA HOY')}</p><h2 class="sl-h2">${t('Tell us about your business. <em>We reply with a clear plan.</em>','Cuéntanos de tu negocio. <em>Te respondemos con un plan claro.</em>')}</h2><p class="sl-note">${t('Message us on WhatsApp or request a proposal. No pressure and no commitment.','Escríbenos por WhatsApp o pide una propuesta. Sin presión y sin compromiso.')}</p></div>
 <div class="sl-offer-actions"><a class="sl-wa" href="${wa(S.msg)}" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true"><path d="M20.5 3.5A11.8 11.8 0 0 0 2.2 17.8L1 23l5.3-1.4A11.8 11.8 0 0 0 20.5 3.5Zm-8.6 18a9.8 9.8 0 0 1-5-1.4l-.4-.2-3.1.8.8-3-.2-.4a9.8 9.8 0 1 1 7.9 4.2Zm5.4-7.3c-.3-.1-1.8-.9-2-1s-.5-.1-.7.1l-.9 1.1c-.2.2-.3.2-.6.1a8 8 0 0 1-4-3.5c-.3-.5.3-.5.9-1.6.1-.2 0-.4 0-.5l-.9-2c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.900 11.900 0 0 0 4.600 4.100c1.700.7 2.400.800 3.300.700a2.800 2.800 0 0 0 1.800-1.300 2.200 2.200 0 0 0 .2-1.300c0-.1-.3-.2-.6-.4Z"/></svg>${t('Write on WhatsApp','Escribir por WhatsApp')}</a>${btn(t('Request a proposal','Solicitar propuesta'),`data-proposal data-interest="${d.eyebrow}"`)}</div>
</div></div></section>
${faqSection(faqItems)}${finalCTA()}
<a class="sl-sticky" href="${wa(S.msg)}" target="_blank" rel="noopener"><span>${t('Get a quote on WhatsApp','Cotiza por WhatsApp')}</span><b>↗</b></a>`;}
