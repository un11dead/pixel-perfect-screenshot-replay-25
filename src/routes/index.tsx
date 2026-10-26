import { createFileRoute } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import {
  ArrowUpRight,
  ClipboardList,
  LineChart,
  Sparkles,
  Target,
  Menu,
  X,
  Accessibility,
  HeartHandshake,
} from "lucide-react";
import { Phone, DashboardScreen, WorkoutScreen, StatsScreen } from "@/components/moveup/PhoneScreens";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MoveUp — Sua evolução começa aqui" },
      {
        name: "description",
        content: "Monitore seus treinos, acompanhe sua performance e evolua com inteligência com o MoveUp.",
      },
      { property: "og:title", content: "MoveUp — Sua evolução começa aqui" },
      {
        property: "og:description",
        content: "O app de academia para organizar treinos, acompanhar performance e evoluir.",
      },
    ],
  }),
  component: Index,
});

const nav = [
  ["Início", "inicio"],
  ["Funcionalidades", "funcionalidades"],
  ["Sobre o projeto", "sobre"],
] as const;

function Logo() {
  return (
    <a href="#inicio" className="flex items-center gap-2 font-display text-lg font-bold">
      <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground">
        <ArrowUpRight className="h-5 w-5" strokeWidth={2.5} />
      </span>
      MoveUp
    </a>
  );
}

function Btn({ href, children, variant = "primary" }: { href: string; children: ReactNode; variant?: "primary" | "ghost" }) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        variant === "primary"
          ? "bg-primary text-primary-foreground hover:bg-primary/85"
          : "border border-border bg-card text-foreground hover:bg-secondary",
      )}
    >
      {children}
    </a>
  );
}

function SectionTitle({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-widest text-primary-soft">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl">{title}</h2>
      {text && <p className="mt-4 text-muted-foreground">{text}</p>}
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Logo />
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex" aria-label="Principal">
          {nav.map(([l, id]) => (
            <a key={id} href={`#${id}`} className="transition-colors hover:text-foreground">
              {l}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <Btn href="#app">Conheça o MoveUp</Btn>
        </div>
        <button
          className="md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-1 border-t border-border px-5 py-4 md:hidden">
          {nav.map(([l, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="py-2 text-muted-foreground">
              {l}
            </a>
          ))}
          <a href="#app" onClick={() => setOpen(false)} className="mt-2 rounded-xl bg-primary py-3 text-center font-semibold text-primary-foreground">
            Conheça o MoveUp
          </a>
        </nav>
      )}
    </header>
  );
}

const features = [
  [ClipboardList, "Gerenciamento de treinos", "Organize seus exercícios, séries e repetições em uma interface prática e intuitiva."],
  [LineChart, "Monitoramento de performance", "Acompanhe seu histórico de treinos e visualize sua evolução por meio de gráficos e estatísticas."],
  [Sparkles, "Recomendações inteligentes", "Receba sugestões de exercícios e treinos personalizados com auxílio de inteligência artificial, considerando suas necessidades e limitações individuais."],
  [Target, "Evolução em um só lugar", "Centralize suas informações, acompanhe suas metas e tenha uma visão clara do seu progresso."],
] as const;

const screens = [
  [DashboardScreen, "Dashboard", "Seu dia em um olhar: treino do dia, sequência e metas semanais."],
  [WorkoutScreen, "Gerenciamento de treinos", "Siga cada exercício, registre cargas e marque séries concluídas."],
  [StatsScreen, "Estatísticas", "Gráficos de volume, recordes e tempo treinado para ver sua evolução."],
] as const;

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Header />
      <main>
        <section id="inicio" className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-glow opacity-60" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 py-16 md:grid-cols-2 md:py-24">
            <div className="fade-up">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-success" /> Em desenvolvimento
              </span>
              <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
                MoveUp — <span className="text-primary-soft">Sua evolução</span> começa aqui.
              </h1>
              <p className="mt-6 max-w-lg text-lg text-muted-foreground">
                Monitore seus treinos, acompanhe sua performance e evolua com inteligência. Tudo o que você precisa para
                organizar sua jornada fitness em um só lugar.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Btn href="#app">Conheça o aplicativo</Btn>
                <Btn href="#funcionalidades" variant="ghost">Explorar funcionalidades</Btn>
              </div>
            </div>
            <div className="relative mx-auto flex w-full max-w-md items-end justify-center">
              <Phone className="w-[48%] -rotate-6 translate-x-6 translate-y-8 opacity-90">
                <StatsScreen />
              </Phone>
              <Phone className="z-10 w-[55%] fade-up">
                <DashboardScreen />
              </Phone>
            </div>
          </div>
        </section>

        <section id="funcionalidades" className="mx-auto max-w-6xl px-5 py-20">
          <SectionTitle eyebrow="Funcionalidades" title="Feito para quem quer evoluir de verdade." />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map(([Icon, t, d]) => (
              <article key={t} className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/50">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-primary-soft">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="app" className="border-y border-border bg-sidebar py-20">
          <div className="mx-auto max-w-6xl px-5">
            <SectionTitle
              eyebrow="O aplicativo"
              title="Tudo o que você precisa, na palma da sua mão."
              text="Telas pensadas para serem rápidas de usar entre uma série e outra."
            />
            <div className="mt-14 grid gap-12 sm:grid-cols-3">
              {screens.map(([S, t, d]) => (
                <div key={t} className="text-center">
                  <Phone className="mx-auto max-w-[240px]">
                    <S />
                  </Phone>
                  <h3 className="mt-6 font-display font-bold">{t}</h3>
                  <p className="mx-auto mt-2 max-w-xs text-sm text-muted-foreground">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="sobre" className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-[1.3fr_1fr]">
          <div>
            <SectionTitle eyebrow="Sobre o projeto" title="Acompanhamento físico acessível, organizado e inteligente." />
            <p className="mt-6 leading-relaxed text-muted-foreground">
              O MoveUp nasceu com o propósito de tornar o acompanhamento físico mais acessível, organizado e inteligente.
              Nossa proposta é auxiliar tanto iniciantes quanto pessoas que já possuem experiência na academia, oferecendo
              ferramentas que facilitam o planejamento dos treinos, o monitoramento da performance e o acompanhamento da
              evolução individual.
            </p>
          </div>
          <div className="space-y-4 self-end">
            {[
              [Accessibility, "Acessível para todos", "Interface com bom contraste, textos legíveis e navegação simples."],
              [HeartHandshake, "Adaptado a você", "Treinos ajustados ao seu ritmo, objetivos e limitações físicas."],
            ].map(([Icon, t, d]) => {
              const I = Icon as typeof Accessibility;
              return (
                <div key={t as string} className="flex gap-4 rounded-2xl border border-border bg-card p-5">
                  <I className="h-6 w-6 shrink-0 text-primary-soft" />
                  <div>
                    <h3 className="font-semibold">{t as string}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{d as string}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 pb-20">
          <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-14 text-center text-primary-foreground sm:px-12">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Pronto para dar o próximo passo?</h2>
            <p className="mx-auto mt-4 max-w-xl opacity-90">
              Transforme a maneira como você acompanha seus treinos e descubra uma nova forma de evoluir.
            </p>
            <a
              href="#app"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-background px-6 py-3 text-sm font-semibold text-foreground transition-opacity hover:opacity-90"
            >
              Conheça o MoveUp <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-3 text-sm text-muted-foreground">
              App de academia para acompanhar treinos, performance e a sua evolução.
            </p>
          </div>
          <nav className="flex gap-6 text-sm text-muted-foreground" aria-label="Rodapé">
            {nav.map(([l, id]) => (
              <a key={id} href={`#${id}`} className="hover:text-foreground">
                {l}
              </a>
            ))}
          </nav>
        </div>
        <p className="border-t border-border py-6 text-center text-xs text-muted-foreground">
          © 2026 MoveUp. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}
