export function CalculatorResults() {
  let stats = [
    {
      name: "Tip amount",
      value: "$12.4",
    },
    {
      name: "Total amount",
      value: "$12,787.00",
    },
  ];

  return (
    <dl className="space-y-6">
      {stats.map((stat) => (
        <div key={stat.name} className="space-y-2">
          <dt className="text-sm/6 font-medium text-gray-700">{stat.name}</dt>
          <dd className="flex items-baseline gap-2 text-4xl font-semibold tracking-tight text-gray-900">
            {stat.value}
            <span className="text-sm font-medium text-gray-500">
              per person
            </span>
          </dd>
        </div>
      ))}
    </dl>
  );
}
