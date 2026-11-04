import type { ClickerProps } from "../../../App";
import { ClickButton } from "../components/ClickButton";
import { ClickerStats } from "../components/ClickerStats";
import { ClicksDisplay } from "../components/ClicksDisplay";
import { ResetButton } from "../components/ResetButton";

export function HomePage({ clicker }: Readonly<ClickerProps>) {
  return (
    <main className="grid flex-1 grid-cols-2 items-stretch gap-8 pb-24">
      <ClickerStats clicker={clicker} />

      <div className="justify-center flex flex-col items-center gap-4">
        <ClicksDisplay clicks={clicker.clicks} />

        <ClickButton onClick={clicker.increment} />

        <ResetButton onClick={clicker.reset} />
      </div>
    </main>
  );
}
