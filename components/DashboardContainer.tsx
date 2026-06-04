"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { GripVertical } from "lucide-react";

interface DashboardContainerProps {
  hero: React.ReactNode;
  goal: React.ReactNode;
  courses: React.ReactNode;
  activity: React.ReactNode;
}

interface TileItem {
  id: string;
  className: string;
  node: React.ReactNode;
}

export default function DashboardContainer({
  hero,
  goal,
  courses,
  activity,
}: DashboardContainerProps) {
  const [draggedIdx, setDraggedIdx] = useState<number | null>(null);

  const [tiles, setTiles] = useState<TileItem[]>([
    {
      id: "hero",
      className: "order-1 md:col-span-2 lg:col-span-3",
      node: hero,
    },
    {
      id: "goal",
      className: "order-2 md:order-3 lg:order-2 md:col-span-1 lg:col-span-1",
      node: goal,
    },
    {
      id: "courses",
      className: "order-3 md:order-2 lg:order-3 md:col-span-2 lg:col-span-3",
      node: courses,
    },
    {
      id: "activity",
      className: "order-4 md:col-span-1 lg:col-span-1",
      node: activity,
    },
  ]);

  const handleDragOver = (e: React.DragEvent, targetIdx: number) => {
    e.preventDefault();
    if (draggedIdx !== null && draggedIdx !== targetIdx) {
      const newTiles = [...tiles];
      const draggedItem = newTiles[draggedIdx];
      newTiles.splice(draggedIdx, 1);
      newTiles.splice(targetIdx, 0, draggedItem);
      setTiles(newTiles);
      setDraggedIdx(targetIdx);
    }
  };

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 select-none">
      {tiles.map((tile, idx) => (
        <motion.div
          layout
          key={tile.id}
          className={`${tile.className} relative group`}
          onDragOver={(e) => handleDragOver(e, idx)}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 28,
          }}
        >
          <div
            draggable
            onDragStart={(e) => {
              setDraggedIdx(idx);
              e.dataTransfer.effectAllowed = "move";
            }}
            onDragEnd={() => setDraggedIdx(null)}
            className="absolute top-4 right-4 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-grab active:cursor-grabbing p-1.5 rounded-lg bg-zinc-900/90 border border-zinc-800 text-zinc-400 hover:text-white"
            title="Drag to reorder card"
          >
            <GripVertical size={14} />
          </div>

          <div
            className={`h-full transition-opacity duration-200 ${
              draggedIdx === idx ? "opacity-30" : "opacity-100"
            }`}
          >
            {tile.node}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
