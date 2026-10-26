import type { ReactNode } from "react";
import { Bell, Dumbbell, Flame, Home, BarChart3, User, Check, Play, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

export function Phone({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "relative aspect-[402/874] w-full rounded-[2.4rem] border-[6px] border-secondary bg-background p-3 shadow-phone",
        className,
      )}
    >
      <div className="mx-auto mb-3 h-5 w-20 rounded-full bg-secondary" />
      <div className="flex h-[calc(100%-2rem)] flex-col overflow-hidden text-[11px]">{children}</div>
    </div>
  );
}

function TabBar({ active }: { active: number }) {
  const icons = [Home, Dumbbell, BarChart3, User];
  return (
    <div className="mt-auto flex justify-around border-t border-border pt-2.5">
      {icons.map((I, i) => (
        <I key={i} className={cn("h-4 w-4", i === active ? "text-primary" : "text-muted-foreground")} />
      ))}
    </div>
  );
}

export function DashboardScreen() {
  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-muted-foreground">Bom dia,</p>
          <p className="font-display text-sm font-bold">Lucas</p>
        </div>
        <Bell className="h-4 w-4 text-muted-foreground" />
      </div>
      <div className="mt-3 rounded-xl bg-primary p-3 text-primary-foreground">
        <p className="opacity-80">Treino de hoje</p>
        <p className="font-display text-sm font-bold">Peito e tríceps</p>
        <div className="mt-2 flex items-center justify-between">
          <span className="opacity-80">6 exercícios · 50 min</span>
          <span className="grid h-6 w-6 place-items-center rounded-full bg-primary-foreground text-primary">
            <Play className="h-3 w-3" />
          </span>
        </div>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2">
        {[
          ["12", "treinos no mês"],
          ["4", "dias seguidos"],
        ].map(([n, l]) => (
          <div key={l} className="rounded-xl bg-card p-2.5">
            <p className="font-display text-base font-bold">{n}</p>
            <p className="text-muted-foreground">{l}</p>
          </div>
        ))}
      </div>
      <p className="mt-3 font-bold">Semana</p>
      <div className="mt-2 flex justify-between">
        {["S", "T", "Q", "Q", "S", "S", "D"].map((d, i) => (
          <span
            key={i}
            className={cn(
              "grid h-6 w-6 place-items-center rounded-full",
              i < 4 ? "bg-primary text-primary-foreground" : "bg-card text-muted-foreground",
            )}
          >
            {d}
          </span>
        ))}
      </div>
      <div className="mt-3 flex items-center gap-2 rounded-xl bg-card p-2.5">
        <Flame className="h-4 w-4 text-primary-soft" />
        <span className="text-muted-foreground">Meta semanal: 4 de 5 treinos</span>
      </div>
      <TabBar active={0} />
    </>
  );
}

export function WorkoutScreen() {
  const items = [
    ["Supino reto", "4 × 10 · 60 kg", true],
    ["Crucifixo", "3 × 12 · 14 kg", true],
    ["Supino inclinado", "4 × 10 · 22 kg", false],
    ["Tríceps corda", "3 × 15 · 25 kg", false],
    ["Mergulho", "3 × 10", false],
  ] as const;
  return (
    <>
      <p className="font-display text-sm font-bold">Peito e tríceps</p>
      <p className="text-muted-foreground">Exercício 3 de 5</p>
      <div className="mt-2 h-1.5 rounded-full bg-card">
        <div className="h-full w-2/5 rounded-full bg-primary" />
      </div>
      <div className="mt-3 space-y-2">
        {items.map(([n, d, done]) => (
          <div key={n} className="flex items-center gap-2 rounded-xl bg-card p-2.5">
            <span
              className={cn(
                "grid h-6 w-6 shrink-0 place-items-center rounded-lg",
                done ? "bg-success/20 text-success" : "bg-accent text-primary-soft",
              )}
            >
              {done ? <Check className="h-3 w-3" /> : <Dumbbell className="h-3 w-3" />}
            </span>
            <div className="min-w-0">
              <p className="truncate font-bold">{n}</p>
              <p className="text-muted-foreground">{d}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 rounded-xl bg-primary py-2 text-center font-bold text-primary-foreground">
        Concluir série
      </div>
      <TabBar active={1} />
    </>
  );
}

export function StatsScreen() {
  const bars = [40, 65, 50, 80, 60, 90, 72];
  return (
    <>
      <p className="font-display text-sm font-bold">Estatísticas</p>
      <div className="mt-2 flex gap-1.5">
        {["Semana", "Mês", "Ano"].map((t, i) => (
          <span
            key={t}
            className={cn(
              "rounded-full px-2.5 py-1",
              i === 1 ? "bg-primary text-primary-foreground" : "bg-card text-muted-foreground",
            )}
          >
            {t}
          </span>
        ))}
      </div>
      <div className="mt-3 rounded-xl bg-card p-3">
        <p className="text-muted-foreground">Volume total</p>
        <div className="flex items-center gap-2">
          <p className="font-display text-base font-bold">18.420 kg</p>
          <span className="flex items-center gap-0.5 text-success">
            <TrendingUp className="h-3 w-3" />
            12%
          </span>
        </div>
        <div className="mt-3 flex h-24 items-end gap-1.5">
          {bars.map((h, i) => (
            <div
              key={i}
              className={cn("flex-1 rounded-t-md", i === 5 ? "bg-primary" : "bg-primary-deep")}
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>
      <div className="mt-2 grid grid-cols-2 gap-2">
        {[
          ["62 kg", "recorde supino"],
          ["4h 20m", "tempo treinado"],
        ].map(([n, l]) => (
          <div key={l} className="rounded-xl bg-card p-2.5">
            <p className="font-display font-bold">{n}</p>
            <p className="text-muted-foreground">{l}</p>
          </div>
        ))}
      </div>
      <TabBar active={2} />
    </>
  );
}
