import { createFileRoute } from "@tanstack/react-router";
import dashboardHero from "@/assets/dashboard-hero.jpg";
import doctorTablet from "@/assets/doctor-tablet.jpg";

const PLATFORM_URL = "#";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MedSystem — Prescrição médica segura com análise inteligente" },
      {
        name: "description",
        content:
          "MedSystem analisa prontuários e histórico do paciente em segundos para validar prescrições e condutas, evitando erros clínicos e interações medicamentosas.",
      },
      { property: "og:title", content: "MedSystem — Prescrição médica inteligente" },
      {
        property: "og:description",
        content:
          "Análise instantânea de prontuários para prescrições mais seguras. Teste agora gratuitamente.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Playfair+Display:ital,wght@0,700;1,700&display=swap",
      },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Problem />
        <HowItWorks />
        <Benefits />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2">
          <div className="size-7 rounded-md bg-primary grid place-items-center">
            <div className="size-3 rounded-sm bg-accent" />
          </div>
          <span className="font-mono text-sm font-bold uppercase tracking-tighter">
            MedSystem
          </span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          <a href="#problema" className="text-xs font-medium uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary">
            Problema
          </a>
          <a href="#como-funciona" className="text-xs font-medium uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary">
            Como funciona
          </a>
          <a href="#beneficios" className="text-xs font-medium uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary">
            Benefícios
          </a>
        </div>
        <a
          href={PLATFORM_URL}
          className="rounded-full bg-primary px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-primary-foreground transition-all hover:brightness-110 hover:ring-4 hover:ring-primary/15"
        >
          Teste agora
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-20 pb-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="animate-reveal">
            <span className="mb-6 block font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
              Inteligência Clínica Preditiva
            </span>
            <h1 className="mb-8 text-balance font-serif text-5xl italic leading-[1.05] tracking-tight md:text-7xl">
              Prescreva com a <span className="text-primary">certeza</span> de um prontuário analisado.
            </h1>
            <p className="mb-10 max-w-[48ch] text-pretty text-lg text-muted-foreground">
              MedSystem cruza instantaneamente o histórico do paciente com diretrizes
              farmacológicas para evitar erros de dosagem, alergias e interações
              medicamentosas perigosas — antes da prescrição sair.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={PLATFORM_URL}
                className="rounded-full bg-primary px-8 py-4 text-sm font-bold uppercase tracking-widest text-primary-foreground transition-all hover:ring-4 hover:ring-primary/20"
              >
                Teste agora gratuitamente
              </a>
              <div className="flex items-center gap-3 rounded-full border border-border px-5 py-3">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-success" />
                </span>
                <span className="font-mono text-[11px] uppercase tracking-tight text-muted-foreground">
                  Sistema online
                </span>
              </div>
            </div>
          </div>
          <div className="relative animate-reveal [animation-delay:200ms]">
            <div className="relative z-10 rounded-2xl border border-border bg-card p-3 shadow-2xl">
              <img
                src={dashboardHero}
                alt="Painel de análise de prescrições MedSystem"
                width={1280}
                height={832}
                className="aspect-video w-full rounded-lg object-cover"
              />
            </div>
            <div className="pointer-events-none absolute -right-6 -top-6 size-32 border-r border-t border-primary/20" />
            <div className="pointer-events-none absolute -bottom-6 -left-6 size-32 border-b border-l border-primary/20" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { value: "99.8%", label: "Precisão na detecção de interações" },
    { value: "<2s", label: "Tempo médio de análise por paciente" },
    { value: "85%", label: "Redução em erros de prescrição" },
    { value: "24/7", label: "Disponibilidade clínica" },
  ];
  return (
    <section className="border-y border-border bg-secondary/40 py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label}>
            <div className="font-serif text-4xl italic text-primary md:text-5xl">{s.value}</div>
            <p className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Problem() {
  const items = [
    {
      n: "01",
      title: "Interações Críticas",
      desc: "Identificação imediata de conflitos entre medicamentos atuais, novos e alergias documentadas no histórico.",
    },
    {
      n: "02",
      title: "Histórico Profundo",
      desc: "Varredura automática de prontuários antigos para detectar condições preexistentes que alteram a conduta.",
    },
    {
      n: "03",
      title: "Suporte à Decisão",
      desc: "Baseado em evidências clínicas atualizadas em tempo real com as últimas publicações científicas.",
    },
  ];
  return (
    <section id="problema" className="bg-foreground py-32 text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20 flex flex-col items-end justify-between gap-8 md:flex-row">
          <div className="max-w-xl">
            <span className="mb-4 block font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
              O Problema
            </span>
            <h2 className="font-serif text-4xl italic md:text-5xl">
              A falha humana é evitável.
            </h2>
            <p className="mt-6 text-white/60">
              Estima-se que 7% das prescrições hospitalares contenham erros. MedSystem
              elimina o ponto cego do médico ao processar décadas de histórico em
              milissegundos.
            </p>
          </div>
          <div className="font-serif text-6xl italic text-accent md:text-7xl">7%</div>
        </div>

        <div className="grid gap-px border border-white/10 bg-white/10 md:grid-cols-3">
          {items.map((it) => (
            <div key={it.n} className="bg-foreground p-10">
              <span className="mb-6 block font-mono text-xs text-accent">
                {it.n} / ALERTA
              </span>
              <h3 className="mb-4 text-xl font-medium">{it.title}</h3>
              <p className="text-sm text-white/50">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      n: "01",
      title: "Integração Direta",
      desc: "Conectamos com seu sistema de prontuário ou ERP atual sem fricção, em poucos cliques.",
    },
    {
      n: "02",
      title: "Análise em Tempo Real",
      desc: "Durante a consulta, MedSystem cruza histórico, alergias e tratamentos em curso instantaneamente.",
    },
    {
      n: "03",
      title: "Alerta Visual Inteligente",
      desc: "Indicadores cromáticos mostram o nível de risco da conduta proposta — verde, amarelo ou vermelho.",
    },
    {
      n: "04",
      title: "Aprovação Segura",
      desc: "Confirme a prescrição com um laudo técnico gerado automaticamente como respaldo clínico.",
    },
  ];

  return (
    <section id="como-funciona" className="px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 flex flex-col items-center text-center">
          <span className="mb-4 block font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
            Fluxo de Trabalho
          </span>
          <h2 className="max-w-2xl font-serif text-4xl italic md:text-5xl">
            Simplicidade que salva vidas.
          </h2>
        </div>

        <div className="grid items-center gap-20 lg:grid-cols-2">
          <div className="space-y-10">
            {steps.map((s) => (
              <div key={s.n} className="flex gap-6">
                <span className="font-mono text-2xl text-primary/30">{s.n}</span>
                <div>
                  <h4 className="mb-2 text-xl font-semibold">{s.title}</h4>
                  <p className="text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-border bg-card p-2 shadow-xl">
              <img
                src={doctorTablet}
                alt="Médico utilizando MedSystem em tablet durante consulta"
                width={1024}
                height={1280}
                loading="lazy"
                className="aspect-[4/5] w-full rounded-xl object-cover"
              />
            </div>
            <div className="pointer-events-none absolute -right-6 -bottom-6 size-32 border-r border-b border-accent/30" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  const items = [
    {
      title: "Para Médicos",
      desc: "Mais segurança e respaldo técnico em cada decisão clínica, com tempo otimizado em consultas.",
    },
    {
      title: "Para Clínicas",
      desc: "Redução drástica de eventos adversos e processos por erro médico, com indicadores de qualidade superiores.",
    },
    {
      title: "Para Pacientes",
      desc: "Tratamentos personalizados ao histórico real, com menor risco de reações adversas e internações.",
    },
  ];
  return (
    <section id="beneficios" className="border-t border-border bg-secondary/40 py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-2xl">
          <span className="mb-4 block font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
            Benefícios
          </span>
          <h2 className="font-serif text-4xl italic md:text-5xl">
            Inteligência que apoia toda a cadeia do cuidado.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((it) => (
            <div
              key={it.title}
              className="rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/30 hover:shadow-lg"
            >
              <h3 className="mb-3 font-serif text-2xl italic text-primary">{it.title}</h3>
              <p className="text-sm text-muted-foreground">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="bg-primary py-32 text-primary-foreground">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="mb-8 font-serif text-4xl italic md:text-6xl">
          Eleve o padrão de segurança da sua clínica.
        </h2>
        <p className="mb-12 text-lg text-white/80">
          Solicite uma demonstração gratuita e veja em minutos como o MedSystem pode
          transformar sua prática médica.
        </p>
        <a
          href={PLATFORM_URL}
          className="inline-block rounded-full bg-background px-12 py-5 text-sm font-bold uppercase tracking-widest text-primary shadow-2xl transition-transform hover:scale-105"
        >
          Solicitar demonstração gratuita
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background px-6 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
        <div className="flex items-center gap-2">
          <div className="size-6 rounded-md bg-primary grid place-items-center">
            <div className="size-2.5 rounded-sm bg-accent" />
          </div>
          <span className="font-mono text-sm font-bold uppercase tracking-tighter">
            MedSystem
          </span>
        </div>
        <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          © 2026 MedSystem · Tecnologia a serviço da vida
        </p>
        <div className="flex gap-6 text-xs text-muted-foreground">
          <a href="#" className="transition-colors hover:text-primary">Privacidade</a>
          <a href="#" className="transition-colors hover:text-primary">Termos</a>
        </div>
      </div>
    </footer>
  );
}
