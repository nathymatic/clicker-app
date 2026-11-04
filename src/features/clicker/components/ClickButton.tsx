export function ClickButton({ onClick }: Readonly<{ onClick: () => void }>) {
  return (
    <button
      onClick={onClick}
      className="text-4xl font-semibold border-accent hover:bg-accent hover:border-accent-hover w-3/4 rounded-lg border px-8 py-6 transition-[background-color,border-color,transform] hover:scale-105"
    >
      CLICK
    </button>
  );
}
