import { useEffect, useState } from "react";

export function ClicksDisplay({ clicks }: Readonly<{ clicks: number }>) {
  const [scaled, setScaled] = useState(false);

  useEffect(() => {
    setScaled(true);

    const timeout = setTimeout(() => {
      setScaled(false);
    }, 150);

    return () => clearTimeout(timeout);
  }, [clicks]);

  return (
    <section className="border-border bg-surface text-accent mb-4 w-3/4 max-w-4xl rounded-lg border p-4 text-center">
      <h2 className="text-3xl font-semibold">Clicks</h2>
      <p
        className={`${scaled ? "scale-110" : "scale-100"} mt-2 text-2xl transition-transform duration-150 ease-out`}
      >
        {clicks}
      </p>
    </section>
  );
}
