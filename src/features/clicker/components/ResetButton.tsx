export function ResetButton({ onClick }: Readonly<{ onClick: () => void }>) {
  return (
    <button
      onClick={onClick}
      className="text-muted hover:text-accent-hover hover:border-b-accent-hover mt-4 border-b-2 border-transparent px-6 py-3 text-sm transition-[background-color,border-color,transform] hover:scale-105"
    >
      Reset
    </button>
  );
}
