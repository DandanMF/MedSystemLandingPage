import { createFileRoute } from "@tanstack/react-router";
import { Heart, User, ShieldCheck, Activity, Stethoscope, AlertTriangle, ClipboardList, Sparkles, ArrowUp } from "lucide-react";
import heroMedical from "@/assets/hero-medical.png";
import doctorTablet from "@/assets/doctor-tablet.png";

// const PLATFORM_URL = "https://eng-soft-front2.vercel.app";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MedSystem — Sistema Inteligente de Prescrição Médica" },
      {
        name: "description",
        content:
          "MedSystem analisa prontuários e histórico do paciente em segundos para validar prescrições e condutas, evitando erros clínicos e interações medicamentosas.",
      },
      { property: "og:title", content: "MedSystem — Prescrição Digital Inteligente" },
      {
        property: "og:description",
        content:
          "Análise automática de conflitos medicamentosos e contraindicações para maior segurança do paciente.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap",
      },
    ],
  }),
  component: LandingPage,
});

function Logo({ size = "md" }: { size?: "sm" | "md" }) {
  const box = size === "sm" ? "size-9" : "size-11";
  const icon = size === "sm" ? "size-4" : "size-5";
  const title = size === "sm" ? "text-sm" : "text-base";
  return (
    <div className="flex items-center gap-3">
      <div className={`${box} grid place-items-center rounded-xl bg-secondary border border-border`}>
        <Heart className={`${icon} text-foreground`} strokeWidth={2.2} />
      </div>
      <div className="leading-tight">
        <div className={`${title} font-bold tracking-tight`}>MedSystem</div>
        <div className="text-[11px] text-muted-foreground">Prescrição Digital</div>
      </div>
    </div>
  );
}

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
        <Logo size="sm" />
        <div className="flex items-center gap-8">
        <div className="hidden items-center gap-8 md:flex">
          <a href="#problema" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Problema</a>
          <a href="#como-funciona" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Como funciona</a>
          <a href="#beneficios" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Benefícios</a>
        </div>
        <a
          href={"https://eng-soft-front2.vercel.app"}
          className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 hover:shadow-[0_0_30px_-5px_var(--primary)]"
        >
          Teste agora
        </a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--primary)_0%,_transparent_50%)] opacity-20" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 pt-20 pb-28 lg:grid-cols-2">
        <div className="animate-reveal">
          <h1 className="mb-6 text-balance text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl">
            Sistema Inteligente de Prescrição Médica
          </h1>
          <p className="mb-10 max-w-[52ch] text-pretty text-lg text-muted-foreground">
            Análise automática de conflitos medicamentosos e contraindicações para
            maior segurança do paciente. MedSystem cruza histórico, alergias e
            tratamentos em segundos — antes da prescrição sair.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={"https://eng-soft-front2.vercel.app"}
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 hover:shadow-[0_0_40px_-5px_var(--primary)]"
            >
              <Sparkles className="size-4" /> Teste agora gratuitamente
            </a>
          </div>
          <p className="mt-8 text-xs text-muted-foreground">
            Sistema seguro e certificado para gestão de prescrições médicas
          </p>
        </div>

        <div className="relative animate-reveal [animation-delay:200ms]">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card">
            <img
              src={heroMedical}
              alt="MedSystem — análise inteligente de prescrições médicas"
              width={1280}
              height={1280}
              className="aspect-[16/9] w-full object-cover opacity-90"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { value: "99.8%", label: "Precisão na detecção de interações" },
    { value: "<2s", label: "Tempo médio de análise" },
    { value: "85%", label: "Redução em erros de prescrição" },
    { value: "24/7", label: "Disponibilidade clínica" },
  ];
  return (
    <section className="border-y border-border bg-secondary/30 py-14">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label}>
            <div className="text-4xl font-bold tracking-tight text-primary md:text-5xl">{s.value}</div>
            <p className="mt-2 text-xs text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Problem() {
  const items = [
    { icon: AlertTriangle, title: "Interações Críticas", desc: "Identificação imediata de conflitos entre medicamentos atuais, novos e alergias documentadas no histórico." },
    { icon: ClipboardList, title: "Histórico Profundo", desc: "Varredura automática de prontuários antigos para detectar condições preexistentes que alteram a conduta." },
    { icon: Activity, title: "Suporte à Decisão", desc: "Baseado em evidências clínicas atualizadas em tempo real com as últimas publicações científicas." },
  ];
  return (
    <section id="problema" className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-col items-end justify-between gap-8 md:flex-row">
          <div className="max-w-xl">
            <span className="mb-3 block text-xs font-semibold uppercase tracking-widest text-primary">O Problema</span>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">A falha humana é evitável.</h2>
            <p className="mt-5 text-muted-foreground">
              Estima-se que 7% das prescrições hospitalares contenham erros. MedSystem
              elimina o ponto cego do médico ao processar décadas de histórico em
              milissegundos.
            </p>
          </div>
          <div className="text-7xl font-bold tracking-tight text-primary">7%</div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl border border-border bg-card p-7 transition-all hover:border-primary/40">
              <div className="mb-5 grid size-11 place-items-center rounded-xl bg-secondary border border-border">
                <it.icon className="size-5 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">{it.title}</h3>
              <p className="text-sm text-muted-foreground">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { n: "01", title: "Integração Direta", desc: "Conectamos com seu sistema de prontuário ou ERP atual sem fricção." },
    { n: "02", title: "Análise em Tempo Real", desc: "MedSystem cruza histórico, alergias e tratamentos em curso instantaneamente." },
    { n: "03", title: "Alerta Visual Inteligente", desc: "Indicadores cromáticos mostram o nível de risco — verde, amarelo ou vermelho." },
    { n: "04", title: "Aprovação Segura", desc: "Confirme a prescrição com laudo técnico gerado como respaldo clínico." },
  ];
  return (
    <section id="como-funciona" className="border-t border-border bg-secondary/30 px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-4 max-w-2xl">
          <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-primary">Fluxo de Trabalho</span>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">Simplicidade que salva vidas.</h2>
        </div>

        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="space-y-8">
            {steps.map((s) => (
              <div key={s.n} className="flex gap-6 border-l border-border pl-6">
                <div>
                  <span className="mb-2 block text-xs font-semibold text-primary">{s.n}</span>
                  <h4 className="mb-1.5 text-lg font-semibold">{s.title}</h4>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card">
            <img
              src={doctorTablet}
              alt="Médico utilizando MedSystem em tablet durante consulta"
              width={1024}
              height={1280}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover opacity-90"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  const items = [
    { icon: Stethoscope, title: "Para Médicos", desc: "Mais segurança e respaldo técnico em cada decisão clínica, com tempo otimizado em consultas." },
    { icon: ShieldCheck, title: "Para Clínicas", desc: "Redução drástica de eventos adversos e processos por erro médico, com indicadores de qualidade superiores." },
    { icon: User, title: "Para Pacientes", desc: "Tratamentos personalizados ao histórico real, com menor risco de reações adversas e internações." },
  ];
  return (
    <section id="beneficios" className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 max-w-2xl">
          <span className="mb-3 block text-xs font-semibold uppercase tracking-widest text-primary">Benefícios</span>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">Inteligência que apoia toda a cadeia do cuidado.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/40">
              <div className="mb-5 grid size-11 place-items-center rounded-xl bg-secondary border border-border">
                <it.icon className="size-5 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">{it.title}</h3>
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
    <section className="relative overflow-hidden border-t border-border py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--primary)_0%,_transparent_60%)] opacity-20" />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
          Pronto para transformar sua prática médica?
        </h2>
        <p className="mb-10 text-lg text-muted-foreground">
          Comece agora — gratuitamente — e veja em minutos como o MedSystem
          eleva o padrão de segurança da sua clínica.
        </p>
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 hover:shadow-[0_0_40px_-5px_var(--primary)]"
        >
          <ArrowUp className="size-4" /> Voltar ao topo
        </button>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <Logo size="sm" />
        <p className="text-xs text-muted-foreground">© 2026 MedSystem · Tecnologia a serviço da vida</p>
        <div className="flex gap-6 text-xs text-muted-foreground">
          {/* <a href="#" className="transition-colors hover:text-foreground">Privacidade</a>
          <a href="#" className="transition-colors hover:text-foreground">Termos</a> */}
        </div>
      </div>
    </footer>
  );
}
