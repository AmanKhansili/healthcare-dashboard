export default function ActivityFeed() {
  const bars = [80, 40, 70, 50, 90, 60, 30]; // example values (heights in %)

  return (
    <div className="bg-base-300 shadow-md rounded-xl p-6">
      <h2 className="text-lg font-semibold mb-4">Activity</h2>
      <p className="text-sm mb-4">3 appointments this week</p>
      <div className="flex items-end gap-2 h-32">
        {bars.map((height, idx) => (
          <div key={idx} className="w-6 bg-info rounded" style={{ height: `${height}%` }} />
        ))}
      </div>
    </div>
  );
}
