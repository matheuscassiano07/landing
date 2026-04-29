/**
 * ZIRA AI · i18n (pt-BR / en)
 * Persistência: localStorage "zira-lang"
 */
(function (global) {
  'use strict';

  var STORAGE_KEY = 'zira-lang';
  var DEFAULT_LANG = 'pt-BR';

  var STRINGS = {
    'pt-BR': {
      meta: {
        title: 'ZIRA AI · Plataforma para Escritórios de Arquitetura e Engenharia',
        description:
          'ZIRA AI · Organiza atendimento, equipe, obras e prazos para escritórios de arquitetura e engenharia. Operação clara no WhatsApp, desktop e obra.',
        ogTitle: 'ZIRA AI · Plataforma para Escritórios de Arquitetura e Engenharia',
        ogDescription:
          'Organiza atendimento, equipe, obras e prazos. Operação real no escritório, do WhatsApp à obra, com mais clareza e previsibilidade.',
        twitterTitle: 'ZIRA AI · Plataforma para Escritórios',
        twitterDescription:
          'Atendimento, equipe, obras e prazos organizados para escritórios de arquitetura e engenharia.',
      },
      nav: {
        brandAria: 'M2 SCALE · Página inicial',
        platform: 'Plataforma',
        flow: 'Fluxo',
        team: 'Equipe',
        blog: 'Blog',
        faq: 'FAQ',
        contact: 'Contato',
        cta: 'Agendar conversa',
        menuOpen: 'Abrir menu de navegação',
        menuClose: 'Fechar menu de navegação',
        langGroup: 'Idioma',
      },
      hero: {
        title:
          'A plataforma que organiza atendimento, equipe, obras e prazos para escritórios de arquitetura e engenharia.',
        credibility:
          'Pensado para operação real, não só atendimento · Celular e desktop · Adaptável ao fluxo do escritório',
        sr:
          'ZIRA AI, plataforma para arquitetura e engenharia. Mais de 100 escritórios já evoluíram para uma operação mais clara, integrada e previsível.',
        proof:
          'Mais de 100 escritórios já evoluíram para uma operação mais clara, integrada e previsível.',
      },
      zira: {
        desc:
          'No WhatsApp, o Zira identifica a solicitação, separa oportunidades comerciais de outros assuntos, prioriza o que exige atenção do time e organiza o contexto para que cada atendimento avance com mais clareza. Quando a resposta não deve ser automatizada, o sistema encaminha o caso corretamente, sem ruído e sem improviso.',
        imageAlt: '',
      },
      problem: {
        title: 'O problema não está só em captar clientes. Está em perder controle da operação.',
        caption:
          'Quando tudo depende de mensagens soltas, memória e urgência improvisada, o escritório perde contexto, a equipe reage em vez de conduzir, e a operação deixa de ser previsível.',
        outro:
          'Menos ruído operacional. Mais clareza sobre o que precisa acontecer, quem precisa agir e o que ainda está pendente.',
        b1: 'WhatsApp desorganizado',
        b2: 'Tarefas perdidas',
        b3: 'Obras sem acompanhamento claro',
        b4: 'Cliente cobrando sem contexto',
        b5: 'Equipe sem prioridade definida',
        b6: 'Prazos estourando',
        b7: 'Informações espalhadas',
        imageAlt: 'Atendimento e tarefas no celular com Zira AI',
      },
      workflow: {
        title: 'Do primeiro contato à entrega da obra, tudo conectado.',
        caption:
          'O atendimento deixa de depender de memória, repasse informal e conversa perdida. O cliente entra, o contexto é organizado, a operação ganha continuidade e cada etapa passa a ser acompanhada com mais coerência.',
        kicker:
          'Do primeiro contato à entrega, com contexto, continuidade e rastreabilidade.',
        imageAlt: 'Do primeiro contato à obra, em um fluxo contínuo',
      },
      tracking: {
        title:
          'Saiba o que cada arquiteto, engenheiro e membro da equipe está fazendo, o que está atrasado e o que exige atenção agora.',
        caption:
          'Aqui, gestão de obra e gestão de equipe deixam de ficar separadas. O escritório enxerga quem responde por cada frente, o que está em andamento e onde estão os gargalos, sem planilha paralela e sem leitura fragmentada da operação.',
        p1: 'Tarefas por responsável',
        p2: 'Histórico de ações',
        p3: 'Pendências e atrasos',
        p4: 'Por arquiteto ou engenheiro',
        p5: 'Visão individual da equipe',
      },
      calendar: {
        title: 'Prazos, reuniões, retornos e etapas em uma única visualização.',
        caption:
          'Quando prazo, reunião e etapa do projeto aparecem no mesmo fluxo, o escritório inteiro trabalha com a mesma leitura da operação. Menos divergência, menos retrabalho e mais previsibilidade sobre o que precisa acontecer a seguir.',
        kicker: 'Prazos e etapas organizados em um único fluxo visual.',
        imageAlt: 'Prazos e etapas num único quadro',
      },
      faq: {
        title: 'Perguntas frequentes',
        caption:
          'Respostas diretas sobre implementação, privacidade, operação e como o Zira se adapta à rotina real do escritório.',
        q1: 'O Zira AI substitui o WhatsApp do escritório?',
        a1:
          'Não: o time continua no WhatsApp que o escritório já usa. O Zira organiza leads, prioridades e histórico por cima dessa mesma linha de atendimento, para ninguém depender de grupos soltos ou print.',
        q2: 'Funciona para obras já em andamento ou só para novos projetos?',
        a2:
          'Os dois cenários: atendimento de novos contatos e acompanhamento de obras que já estão na rua. O foco é dar visibilidade de etapa, pendência e responsável, independentemente de o cliente ter entrado ontem ou há meses.',
        q3: 'Quanto tempo leva para o time incorporar na rotina?',
        a3:
          'Escritórios enxutos costumem estabilizar fluxo e priorização em poucas semanas, com treinamento enxuto e ajuste de formulários aos seus tipos de obra. Grandes mudanças de processo combinamos em fases.',
        q4: 'Existe demonstração ou conversa técnica antes de contratar?',
        a4:
          'Sim. Agendamos uma conversa para mapear volume de leads, tamanho da equipe e como vocês fecham obra hoje e mostramos o produto no contexto do seu escritório, sem slides genéricos.',
        q5: 'Onde ficam armazenados dados e conversas?',
        a5:
          'Seguimos práticas de segurança e minimização de dado: apenas o necessário para operar atendimento e obra fica estruturado na plataforma. Detalhes de infraestrutura e contratos comentamos na proposta formal.',
        q6: 'Como é o suporte após a implantação?',
        a6:
          'Há canal dedicado para dúvidas de produto e ajustes operacionais, com SLA combinado conforme o plano. Novas integrações ou customizações de fluxo tratamos como projeto à parte quando fizer sentido.',
        q7: 'O sistema se adapta ao fluxo do meu escritório ou exige um modelo pronto?',
        a7:
          'O Zira é configurado à realidade do seu escritório: tipos de obra, etapas, responsáveis e prioridades alinhamos na implantação. Não existe um molde rígido único para todos: há um núcleo comum de atendimento e obra que mapeamos para como vocês já trabalham hoje.',
      },
      blogSection: {
        title: 'Conteúdo para quem lidera obra',
        caption:
          'Artigos sobre gestão de escritório, comunicação com cliente e operação em canteiro, em linguagem direta.',
        link: 'Ver blog completo',
        c1topic: 'Operação',
        c1title:
          'Como reduzir retrabalho quando o WhatsApp é o “sistema” do escritório',
        c1excerpt:
          'Checklist prático para priorizar o que entra no inbox sem perder o fio da meada em obra.',
        c1read: 'Ler artigo',
        c2topic: 'Equipe',
        c2title:
          'Gestão à vista: o que monitorar antes do atraso virar drama com o cliente',
        c2excerpt:
          'Indicadores simples para arquiteto e engenheiro saberem quem segura cada frente.',
        c3topic: 'Cliente',
        c3title:
          'Da primeira mensagem à entrega: alinhar expectativa sem prometer milagre',
        c3excerpt:
          'Como manter transparência na jornada do lead sem sobrecarregar o time técnico.',
      },
      adapt: {
        title: 'Cada escritório opera de um jeito. O sistema se adapta a isso.',
        logoAlt: 'ZIRA AI',
      },
      cta: {
        title:
          'Saia na frente na operação, sem abrir mão do que já funciona no escritório.',
        desc:
          'Na conversa, você vê onde ganha clareza e previsibilidade. Mostramos como integrar ao procedimento que vocês já usam e como adaptamos etapas, papéis e fluxo à rotina da equipe, para decidir com segurança.',
        btn: 'Agendar conversa',
      },
      footer: {
        navAria: 'Links do rodapé',
        brand: 'M2 SCALE',
        home: 'Início',
        problem: 'Problema',
        blog: 'Blog',
        faq: 'FAQ',
        contact: 'Contato',
      },
      wa: {
        aria: 'Atendimento ZIRA AI no WhatsApp',
        message:
          'Olá! Gostaria de falar sobre o ZIRA AI.',
      },
      schema: {
        organizationName: 'M2 SCALE',
        softwareDesc:
          'Plataforma que organiza atendimento, equipe, obras e prazos para escritórios de arquitetura e engenharia, com atendimento integrado via WhatsApp.',
      },
      blogPage: {
        metaTitle: 'Blog · ZIRA AI',
        metaDesc:
          'Artigos sobre gestão de escritório de arquitetura e engenharia, operação em obra e comunicação com cliente, ZIRA AI.',
        ogTitle: 'Blog · ZIRA AI',
        ogDesc:
          'Conteúdo para quem lidera obra e operação em escritório de arquitetura e engenharia.',
        twitterTitle: 'Blog · ZIRA AI',
        twitterDesc:
          'Gestão de escritório, obra e relacionamento com cliente, ZIRA AI.',
        navBrandAria: 'M2 SCALE · página inicial',
        navBack: '← Voltar ao site',
        heroTitle: 'Blog',
        heroLead:
          'Textos curtos sobre operação real de escritório: prioridade, transparência com o cliente e o que costuma quebrar quando tudo gira em mensagens soltas.',
        post1meta: 'Operação · 8 min',
        post1h2:
          'Como reduzir retrabalho quando o WhatsApp é o “sistema” do escritório',
        post1p1:
          'Quando o inbox vira backlog sem dono, a equipe técnica reabre o mesmo arquivo três vezes porque ninguém sabe qual era a última decisão válida. O primeiro passo não é ferramenta nova por si só: é definir o que conta como “entrada fechada” em cada tipo de obra e quem fecha.',
        post1p2:
          'Listas rápidas de verificação por fase (projeto, compatibilização, canteiro) reduzem ida e volta de WhatsApp que não adiciona informação. O Zira encaixa nessa lógica ao manter histórico e prioridade visíveis para quem executa, sem depender de print em grupo.',
        post2meta: 'Equipe · 6 min',
        post2h2:
          'Gestão à vista: o que monitorar antes do atraso virar drama com o cliente',
        post2p1:
          'Cliente cobra quando percebe vazio de informação, não quando a etapa atrasou um dia. Mostrar responsável atual, próximo compromisso e o que já foi entregue muda completamente o tom da cobrança, mesmo que o calendário ainda esteja apertado.',
        post2p2:
          'Um painel simples por pessoa ou por obra evita aquela sensação de urgência artificial em tudo ao mesmo tempo. Você distribui tensão onde ela faz diferença, em vez de apagar incêndio em fila cronológica maluca.',
        post3meta: 'Cliente · 7 min',
        post3h2:
          'Da primeira mensagem à entrega: alinhar expectativa sem prometer milagre',
        post3p1:
          'O lead quer velocidade e o time quer precisão. Narrar etapas de forma objetiva (“o que já foi decidido”, “o que falta pra fechar o pacote atual”) atravessa períodos lentos sem destruir confiança. Silêncio pesa mais que uma data honesta bem explicada.',
        post3p2:
          'Fluxos bem desenhados deixam o cliente enxergar o caminho do primeiro “oi” até a obra em execução, sem depender que alguém lembre de atualizar grupo à mão todas as tardes.',
        footerCr: '© M2 SCALE',
        footerSite: 'Site principal',
      },
    },
    en: {
      meta: {
        title: 'ZIRA AI · Platform for Architecture & Engineering Firms',
        description:
          'ZIRA AI · Client intake, staffing, projects, and deadlines aligned for architecture & engineering firms: from WhatsApp to the field.',
        ogTitle: 'ZIRA AI · Platform for Architecture & Engineering Firms',
        ogDescription:
          'Aligns intake, team, projects, and timelines. Real world firm operations from WhatsApp to the site, with clarity and predictability.',
        twitterTitle: 'ZIRA AI · Firm Operations Platform',
        twitterDescription:
          'Aligned intake, staffing, jobs, and deadlines for architecture & engineering studios.',
      },
      nav: {
        brandAria: 'M2 SCALE · Home',
        platform: 'Platform',
        flow: 'Workflow',
        team: 'Team',
        blog: 'Blog',
        faq: 'FAQ',
        contact: 'Contact',
        cta: 'Book a call',
        menuOpen: 'Open navigation menu',
        menuClose: 'Close navigation menu',
        langGroup: 'Language',
      },
      hero: {
        title:
          'The platform that organizes client intake, staffing, jobs, and deadlines for architecture and engineering offices.',
        credibility:
          'Built for real world operations, not only intake · Desktop and mobile · Adapts to your firm’s workflow',
        sr:
          'ZIRA AI, operations for architecture & engineering. Over 100 firms have moved to clearer, integrated, more predictable work.',
        proof:
          'Over 100 firms have moved to clearer, integrated, more predictable operations.',
      },
      zira: {
        desc:
          'On WhatsApp, Zira understands each request, separates commercial opportunities from other topics, prioritizes what needs the team’s attention, and frames context so every touchpoint moves forward with clarity. When a reply should not be automated, it routes the case correctly, with no noise and no guesswork.',
        imageAlt: '',
      },
      problem: {
        title: 'The pain is not only lead gen. It is losing grip on execution.',
        caption:
          'When everything runs on loose messages, memory, and improvised urgency, you lose context; the team reacts instead of steering, and execution stops being predictable.',
        outro:
          'Less operational noise. Clearer view of what must happen, who must act, and what is still pending.',
        b1: 'Disorganized WhatsApp',
        b2: 'Dropped tasks',
        b3: 'Sites without clear oversight',
        b4: 'Clients chasing without context',
        b5: 'Teams with no enforced priorities',
        b6: 'Deadlines slipping',
        b7: 'Information scattered everywhere',
        imageAlt: 'Mobilized inquiries and tasks inside Zira AI',
      },
      workflow: {
        title: 'From first touch to handover: one connected thread.',
        caption:
          'Intake stops relying on memory, informal handoffs, and lost chats. Prospects enter, context is structured, work keeps continuity, and every phase is followed with more coherence.',
        kicker:
          'From first reply to handover with context, continuity, and traceability.',
        imageAlt: 'Continuous flow from first reply through the build',
      },
      tracking: {
        title:
          'See what each architect, engineer, and teammate is handling, what slipped, and what needs attention now.',
        caption:
          'Project and people management stop living in silos. Everyone sees ownership, ongoing work, and bottlenecks without shadow spreadsheets or a fragmented picture of ops.',
        p1: 'Tasks by owner',
        p2: 'Action history',
        p3: 'Outstanding items & delays',
        p4: 'Architect vs engineer lanes',
        p5: 'Individual team views',
      },
      calendar: {
        title:
          'Deadlines, meetings, follow ups and stages in a single surface.',
        caption:
          'When deadlines, meetings, and project stages share the same flow, the firm runs on one reading of ops: fewer clashes, fewer reworks, and better predictability of what happens next.',
        kicker:
          'Deadlines and milestones organized in one visual workflow.',
        imageAlt: 'Deadlines and stages in one workspace',
      },
      faq: {
        title: 'Frequently asked questions',
        caption:
          'Direct answers about rollout, privacy, execution, and how Zira adapts to the real rhythms of your office.',
        q1: 'Does ZIRA replace my studio WhatsApp line?',
        a1:
          'No: you keep WhatsApp exactly where prospects already ping you. ZIRA organizes leads, sequencing, and history on top of that same channel so no one hunts screenshots or buried groups.',
        q2:
          'Does it work only for kickoff builds or ongoing construction too?',
        a2:
          'Both inbound marketing traffic and mature jobsites benefit. Visibility is about milestone, bottleneck, and owner, whether talk started yesterday or months ago.',
        q3: 'How long until the crew adopts new rituals?',
        a3:
          'Lean teams stabilize routing and prioritization in a handful of weeks with focused training tuned to project archetypes; larger process shifts roll out phased.',
        q4: 'Can we demo the product before buying?',
        a4:
          'Yes. We run a structured walkthrough spanning lead velocity, staffing, and how you execute today, and show the stack in your context rather than glossy decks.',
        q5: 'Where does conversation data live?',
        a5:
          'We minimize payload: store only what is needed to orchestrate servicing and builds. Detailed hosting and contractual guardrails arrive with the formal proposal.',
        q6: 'What happens after go live?',
        a6:
          'Dedicated pathways for escalations ship with SLA bands per plan: deeper integrations or bespoke flows become separate initiatives when warranted.',
        q7: 'Does the product adapt to how we already work, or force one cookie cutter model?',
        a7:
          'Zira maps to how your studio actually behaves: scopes, milestones, responsibilities, and priorities tuned during onboarding. No single rigid template for everyone: there’s a shared backbone for intake and builds that aligns with your current playbook.',
      },
      blogSection: {
        title: 'For leaders running real jobsites',
        caption:
          'Notes on studio operations, transparent client orchestration, and field execution, with zero fluff.',
        link: 'View full blog',
        c1topic: 'Operations',
        c1title:
          'Cutting rework while WhatsApp is still your mission control',
        c1excerpt:
          'Prioritize what floods the inbox without losing the storyline of what is actually on site.',
        c1read: 'Read article',
        c2topic: 'People',
        c2title:
          'Operational clarity before delays become courtroom level drama',
        c2excerpt:
          'Lightweight cues so principals know who anchors each frontier.',
        c3topic: 'Client',
        c3title:
          'First DM to turnover: aligning expectations without overpromising',
        c3excerpt:
          'Keep the nurture journey understandable without pinning your technical crew.',
      },
      adapt: {
        title: 'Studios behave differently: the platform flexes accordingly.',
        logoAlt: 'ZIRA AI',
      },
      cta: {
        title:
          'Move ahead on operations without giving up what already works in your firm.',
        desc:
          'On the call, you see where you gain clarity and predictability. We walk through how Zira fits your current procedures and how we adapt stages, roles, and flows to your team’s routine, so you can decide with confidence.',
        btn: 'Book a call',
      },
      footer: {
        navAria: 'Footer navigation',
        brand: 'M2 SCALE',
        home: 'Home',
        problem: 'Problem',
        blog: 'Blog',
        faq: 'FAQ',
        contact: 'Contact',
      },
      wa: {
        aria: 'Chat with ZIRA AI on WhatsApp',
        message: 'Hello! I would like to talk about ZIRA AI.',
      },
      schema: {
        organizationName: 'M2 SCALE',
        softwareDesc:
          'Platform that aligns intake, staffing, projects, and deadlines for architecture and engineering firms, with WhatsApp native orchestration.',
      },
      blogPage: {
        metaTitle: 'Blog · ZIRA AI',
        metaDesc:
          'Practice operations, jobsite workflows, and client communication for architecture & engineering studios.',
        ogTitle: 'Blog · ZIRA AI',
        ogDesc:
          'Field notes on running serious firms without drowning in unstructured chats.',
        twitterTitle: 'Blog · ZIRA AI',
        twitterDesc: 'Operational insight for principals running real construction work.',
        navBrandAria: 'M2 SCALE · homepage',
        navBack: '← Back to site',
        heroTitle: 'Blog',
        heroLead:
          'Notes on grounded studio mechanics: sequencing work, projecting calm to owners, and what breaks fastest when chats become your source of truth.',
        post1meta: 'Operations · 8 min',
        post1h2:
          'Shrinking rework when WhatsApp doubles as headquarters',
        post1p1:
          'When inbound noise never gets an owner, the technical loop reopens CAD four times because nobody trusts which decision was definitive. Fixing that is rarely “more tools”; it starts with naming what qualifies as locked scope per job archetype, and who seals it.',
        post1p2:
          'Snippet checklists aligned to schematic, coordination, and field phases kill loops that chew bandwidth without conveying new clarity. That is the muscle ZIRA preserves with visible history plus priority for whoever executes, not screenshot archaeology.',
        post2meta: 'People · 6 min',
        post2h2:
          'Before delays become melodrama: telemetry that leadership can actually skim',
        post2p1:
          'Clients escalate when sensing radio silence, even if the slip is a day. Surfacing steward, pending promise, and what already landed reframes urgency without rewriting your calendar.',
        post2p2:
          'Straightforward canvases scoped per teammate or plot keep fake urgency across every channel from starving the roadmap: pressure lands where sequencing decisions actually live.',
        post3meta: 'Client · 7 min',
        post3h2:
          'Prospect handshake to turnover: truthful pacing without unicorn promises',
        post3p1:
          'Momentum wants throughput; architects want fidelity. Transparent pulse (what landed, what is still buffering) helps slow phases feel sane. Silence outweighs admitting a believable ETA.',
        post3p2:
          'Flows that articulate the breadcrumb trail from first DM through mobilization keep owners oriented without pinning your technical bench to heroic daily narrations.',
        footerCr: '© M2 SCALE',
        footerSite: 'Main website',
      },
    },
  };

  var WA_PHONE = '5511987654321';

  function navigate(obj, path) {
    var parts =
      typeof path === 'string' ? path.split('.').filter(Boolean) : path;
    var cur = obj;
    for (var i = 0; i < parts.length; i++) {
      if (!cur || typeof cur !== 'object') return undefined;
      cur = cur[parts[i]];
    }
    return cur;
  }

  function t(lang, dotPath) {
    var bundle = STRINGS[lang];
    return navigate(bundle, dotPath);
  }

  function getStoredLang() {
    try {
      var v = localStorage.getItem(STORAGE_KEY);
      if (v === 'pt-BR' || v === 'en') return v;
    } catch (e) {}
    return DEFAULT_LANG;
  }

  function setStoredLang(lang) {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}
  }

  function qsParamLang() {
    var m =
      typeof window !== 'undefined' &&
      window.location &&
      window.location.search.match(/[?&]lang=(en|pt)(?:&|$)/i);
    if (!m) return null;
    return m[1].toLowerCase() === 'en' ? 'en' : 'pt-BR';
  }

  function buildWaHref(lang) {
    var msg =
      (STRINGS[lang] && STRINGS[lang].wa && STRINGS[lang].wa.message) ||
      STRINGS['pt-BR'].wa.message;
    return (
      'https://wa.me/' +
      WA_PHONE +
      '?text=' +
      encodeURIComponent(msg)
    );
  }

  function applyMeta(lang) {
    function set(sel, attr, text) {
      var el = document.querySelector(sel);
      if (el && text !== undefined && text !== null) el.setAttribute(attr, text);
    }

    var page =
      (document.documentElement && document.documentElement.getAttribute('data-i18n-page')) ||
      '';
    var m =
      page === 'blog'
        ? STRINGS[lang].blogPage
        : STRINGS[lang].meta;
    if (!m) return;

    if (page === 'blog') {
      document.title = m.metaTitle;
      set('meta[name="description"]', 'content', m.metaDesc);
      set('meta[property="og:title"]', 'content', m.ogTitle);
      set('meta[property="og:description"]', 'content', m.ogDesc);
      set('meta[name="twitter:title"]', 'content', m.twitterTitle);
      set('meta[name="twitter:description"]', 'content', m.twitterDesc);
      set('meta[property="og:locale"]', 'content', lang === 'en' ? 'en_US' : 'pt_BR');
      return;
    }

    document.title = m.title;
    set('meta[name="description"]', 'content', m.description);
    set('#og-title', 'content', m.ogTitle);
    set('#og-desc', 'content', m.ogDescription);
    set('#twitter-title', 'content', m.twitterTitle);
    set('#twitter-desc', 'content', m.twitterDescription);
    set('#og-locale', 'content', lang === 'en' ? 'en_US' : 'pt_BR');
  }

  function applyDataI18n(lang) {
    var nodes = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      var key = el.getAttribute('data-i18n');
      if (!key) continue;
      var val = t(lang, key);
      if (typeof val !== 'string') continue;
      if (el.tagName === 'TITLE') continue;
      el.textContent = val;
    }

    document.querySelectorAll('[data-i18n-attr]').forEach(function (wrapper) {
      var spec = wrapper.getAttribute('data-i18n-attr');
      if (!spec) return;
      var idx = spec.indexOf(':');
      if (idx === -1) return;
      var attr = spec.slice(0, idx);
      var dotKey = spec.slice(idx + 1);
      var aval = t(lang, dotKey);
      if (typeof aval !== 'string') return;
      wrapper.setAttribute(attr, aval);
    });
  }

  function applyWaLinks(lang) {
    var href = buildWaHref(lang);
    document.querySelectorAll('[data-wa-link]').forEach(function (a) {
      a.setAttribute('href', href);
    });
  }

  function applyJsonLdIndex(lang) {
    var script = document.getElementById('zira-ld-json');
    if (!script || !window.JSON) return;

    var f = STRINGS[lang].faq;
    var S = STRINGS[lang].schema;
    var wsLang = lang === 'en' ? 'en-US' : 'pt-BR';
    var desc = S.softwareDesc;
    var orgName = S.organizationName || 'M2 SCALE';

    var graph = [
      {
        '@type': 'Organization',
        '@id': 'https://www.zira.ai/#organization',
        name: orgName,
        url: 'https://www.zira.ai/',
        logo: 'https://www.zira.ai/assets/logo-preta.png',
      },
      {
        '@type': 'WebSite',
        '@id': 'https://www.zira.ai/#website',
        url: 'https://www.zira.ai/',
        name: orgName,
        inLanguage: wsLang,
        publisher: { '@id': 'https://www.zira.ai/#organization' },
      },
      {
        '@type': 'SoftwareApplication',
        name: 'ZIRA AI',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        description: desc,
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: f.q1,
            acceptedAnswer: { '@type': 'Answer', text: f.a1 },
          },
          {
            '@type': 'Question',
            name: f.q2,
            acceptedAnswer: { '@type': 'Answer', text: f.a2 },
          },
          {
            '@type': 'Question',
            name: f.q3,
            acceptedAnswer: { '@type': 'Answer', text: f.a3 },
          },
          {
            '@type': 'Question',
            name: f.q4,
            acceptedAnswer: { '@type': 'Answer', text: f.a4 },
          },
          {
            '@type': 'Question',
            name: f.q5,
            acceptedAnswer: { '@type': 'Answer', text: f.a5 },
          },
          {
            '@type': 'Question',
            name: f.q6,
            acceptedAnswer: { '@type': 'Answer', text: f.a6 },
          },
          {
            '@type': 'Question',
            name: f.q7,
            acceptedAnswer: { '@type': 'Answer', text: f.a7 },
          },
        ],
      },
    ];

    script.textContent = JSON.stringify(
      { '@context': 'https://schema.org', '@graph': graph },
      null,
      2
    );
  }

  function updateLangButtons(lang) {
    var pt = document.querySelector('[data-lang-btn="pt-BR"]');
    var en = document.querySelector('[data-lang-btn="en"]');
    if (pt) {
      pt.setAttribute('aria-pressed', lang === 'pt-BR' ? 'true' : 'false');
      pt.setAttribute('data-active', lang === 'pt-BR' ? 'true' : 'false');
    }
    if (en) {
      en.setAttribute('aria-pressed', lang === 'en' ? 'true' : 'false');
      en.setAttribute('data-active', lang === 'en' ? 'true' : 'false');
    }
  }

  var currentLang = DEFAULT_LANG;

  function apply(lang) {
    if (lang !== 'pt-BR' && lang !== 'en') lang = DEFAULT_LANG;
    currentLang = lang;

    document.documentElement.setAttribute(
      'lang',
      lang === 'en' ? 'en' : 'pt-BR'
    );

    setStoredLang(lang);
    applyMeta(lang);
    applyDataI18n(lang);
    applyWaLinks(lang);

    var page = document.documentElement && document.documentElement.dataset
      ? document.documentElement.dataset.i18nPage
      : '';
    if (!page || page === 'index') {
      applyJsonLdIndex(lang);
    }

    updateLangButtons(lang);

    if (typeof window !== 'undefined' && window.dispatchEvent) {
      window.dispatchEvent(
        new CustomEvent('zira:lang', { detail: { lang: lang } })
      );
    }
  }

  function bindLangSwitcher() {
    document.querySelectorAll('[data-lang-btn]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var next = btn.getAttribute('data-lang-btn');
        if (!next || (next !== 'pt-BR' && next !== 'en')) return;
        apply(next);
      });
    });
  }

  function init() {
    var fromUrl = qsParamLang();
    var lang =
      fromUrl !== null ? fromUrl : getStoredLang();
    bindLangSwitcher();
    apply(lang);
  }

  global.ZiraI18n = {
    init: init,
    apply: apply,
    getLang: function () {
      return currentLang;
    },
    t: function (dotPath) {
      return t(currentLang, dotPath);
    },
    buildWaHref: buildWaHref,
    STRINGS: STRINGS,
  };
})(typeof window !== 'undefined' ? window : this);