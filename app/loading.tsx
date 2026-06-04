import SkeletonCard from "@/components/SkeletonCard";

export default function Loading() {
  return (
    <div className="min-h-screen bg-background pb-28 pt-6 px-4 md:pl-24 lg:pl-26 md:pr-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="order-1 md:col-span-2 lg:col-span-3">
            <div className="relative overflow-hidden rounded-3xl border border-zinc-800/40 bg-[#0b0b12] p-8 h-full min-h-50">
              <div className="animate-skeleton space-y-4">
                <div className="h-3 w-24 rounded-md bg-zinc-800" />
                <div className="h-8 w-48 rounded-md bg-zinc-800" />
                <div className="h-4 w-72 rounded-md bg-zinc-800" />
                <div className="flex gap-3 pt-2">
                  <div className="h-9 w-32 rounded-xl bg-zinc-800" />
                  <div className="h-9 w-40 rounded-xl bg-zinc-800" />
                </div>
              </div>
              <div className="shimmer absolute inset-0 pointer-events-none" />
            </div>
          </div>

          <div className="order-2 md:order-3 lg:order-2 md:col-span-1 lg:col-span-1">
            <div className="relative overflow-hidden rounded-3xl border border-zinc-800/40 bg-[#0b0b12] p-6 h-full min-h-55">
              <div className="animate-skeleton space-y-4">
                <div className="flex justify-between">
                  <div className="h-4 w-20 rounded-md bg-zinc-800" />
                  <div className="h-5 w-12 rounded-full bg-zinc-800" />
                </div>
                <div className="h-10 w-16 rounded-md bg-zinc-800" />
                <div className="h-2.5 rounded-full bg-zinc-800" />
                <div className="grid grid-cols-2 gap-2">
                  <div className="h-14 rounded-xl bg-zinc-800" />
                  <div className="h-14 rounded-xl bg-zinc-800" />
                </div>
              </div>
              <div className="shimmer absolute inset-0 pointer-events-none" />
            </div>
          </div>

          <div className="order-3 md:order-2 lg:order-3 md:col-span-2 lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {Array.from({ length: 4 }).map((_, i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          </div>

          <div className="order-4 md:col-span-1 lg:col-span-1">
            <div className="relative overflow-hidden rounded-3xl border border-zinc-800/40 bg-[#0b0b12] p-6 h-full min-h-70">
              <div className="animate-skeleton space-y-4">
                <div className="h-4 w-28 rounded-md bg-zinc-800" />
                <div className="h-3 w-40 rounded-md bg-zinc-800" />
                <div className="mt-4 grid grid-cols-7 gap-1">
                  {Array.from({ length: 28 }).map((_, i) => (
                    <div key={i} className="h-3.5 w-3.5 rounded-sm bg-zinc-800" />
                  ))}
                </div>
              </div>
              <div className="shimmer absolute inset-0 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}