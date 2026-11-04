type StatsCardProps = {
  name: string;
  value: string;
};

export function StatsCard({ name, value }: Readonly<StatsCardProps>) {
  return (
    <div className="bg-surface mt-4 w-11/12 rounded-lg p-6">
      <h3 className="text-accent font-bold ">{name}</h3>
      <p>{value}</p>
    </div>
  );
}
