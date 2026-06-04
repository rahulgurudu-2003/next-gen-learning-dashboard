export default function SkeletonCard({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-zinc-800/40 bg-[#0b0b12] ${className}`}
    >
      <div className="animate-skeleton p-5 space-y-4">
        <div className="flex items-start gap-3.5">
          <div className="h-11 w-11 shrink-0 rounded-xl bg-zinc-800" />
          <div className="flex-1 space-y-2">
            <div className="h-4 w-3/4 rounded-md bg-zinc-800" />
            <div className="h-3 w-1/2 rounded-md bg-zinc-800" />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between">
            <div className="h-3 w-16 rounded-md bg-zinc-800" />
            <div className="h-3 w-8 rounded-md bg-zinc-800" />
          </div>
          <div className="h-1.5 rounded-full bg-zinc-800" />
        </div>

        <div className="h-10 rounded-xl bg-zinc-800" />
      </div>

      <div className="shimmer absolute inset-0 pointer-events-none" />
    </div>
  );
}
