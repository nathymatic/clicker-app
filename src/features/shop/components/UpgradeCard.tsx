type UpgradeCardProps = {
  name: string;
  description: string;
  cost: number;
  onPurchase: () => void;
};

export function UpgradeCard({
  name,
  description,
  cost,
  onPurchase,
}: Readonly<UpgradeCardProps>) {
  return (
    <article className="border-border bg-surface hover:bg-surface-hover hover:border-accent-hover flex aspect-3/4 w-64 flex-col items-start justify-center rounded-lg border px-4 py-8 transition-[background-color,border-color,transform] duration-150 ease-out hover:-translate-y-0.5">
      <div className="flex w-full flex-col items-center justify-between">
        <h3 className="text-accent mb-1 text-3xl font-bold">{name}</h3>
        <p className="text-accent/70 font-semibold">{description}</p>
      </div>

      <div className="mt-auto flex w-full flex-col items-center justify-between gap-1.5">
        <span className="text-accent font-medium">{cost} clicks</span>

        <button
          onClick={onPurchase}
          className="border-accent hover:bg-accent hover:border-accent-hover mt-1.5 rounded-lg border px-4 py-3 transition-[background-color,border-color,transform] hover:scale-105"
        >
          Purchase
        </button>
      </div>
    </article>
  );
}
