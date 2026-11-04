import type { ClickerProps } from "../../../App";
import { UpgradeCard } from "../components/UpgradeCard";

export function ShopPage({ clicker }: Readonly<ClickerProps>) {
  return (
    <main className="mx-auto w-full max-w-7xl pb-24">
      <h2 className="mb-12 w-full text-center text-3xl font-bold">Shop</h2>

      <section className="grid w-full grid-cols-[repeat(auto-fit,minmax(min(100%,250px),1fr))] justify-items-center gap-6">
        <UpgradeCard
          name="Click Multiplier"
          description={`Increase the number of clicks earned per click. (Currently earning ${clicker.multiplier}/click. Level ${clicker.multiplierLevel})`}
          cost={clicker.multiplierCost}
          onPurchase={() => clicker.purchaseMultiplier()}
        />
        <UpgradeCard
          name="Autoclicker"
          description={`Automatically generates clicks over time. (Current tick rate of ${clicker.autoClickerIntervalSec}s) (Currently earning ${clicker.autoClicksGainedPerSec}/s). Level ${clicker.autoClickerLevel}`}
          cost={clicker.autoClickerCost}
          onPurchase={() => clicker.purchaseAutoClicker()}
        />
      </section>
    </main>
  );
}
