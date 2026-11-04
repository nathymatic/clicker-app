import type { ClickerProps } from "../../../App";
import { StatsCard } from "../../shop/components/StatsCard";

export function ClickerStats({ clicker }: Readonly<ClickerProps>) {
  return (
    <section className="border-border ml-8 flex h-full w-full max-w-4xl flex-col justify-center border-r pr-6">
      <h2 className="text-accent text-center text-3xl font-semibold">
        ~ StatsBar
      </h2>

      <div className="mt-6 grid grid-cols-2 justify-items-center gap-6">
        <StatsCard name="Total clicks" value={clicker.clicks.toString()} />
        <StatsCard name="Clicks per click" value={`x${clicker.multiplier}`} />
        <StatsCard
          name="Clicks per second"
          value={`${clicker.autoClickerLevel == 0 ? "0" : clicker.autoClicksGainedPerSec}/s`}
        />
        <StatsCard
          name="Total upgrades"
          value={(
            clicker.multiplierLevel + clicker.autoClickerLevel
          ).toString()}
        />
      </div>
    </section>
  );
}
