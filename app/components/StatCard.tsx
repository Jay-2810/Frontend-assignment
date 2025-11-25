"use client";

import { ArrowUpRight, ArrowDownRight } from "lucide-react";

export default function StatCard({
  label,
  value,
  trend,
  positive = true,
}: {
  label: string;
  value: string;
  trend: string;
  positive?: boolean;
}) {
  const Icon = positive ? ArrowUpRight : ArrowDownRight;

  return (
    <div className="card-glass p-4 rounded-2xl shadow-card hover:shadow-lg transition">
      <p className="text-xs text-textSecondary">{label}</p>
      <p className="text-xl font-semibold mt-1">{value}</p>

      <div className="flex items-center gap-2 text-sm mt-3">
        <Icon className={`h-4 w-4 ${positive ? "text-success" : "text-danger"}`} />
        <span className={positive ? "text-success" : "text-danger"}>{trend}</span>
      </div>
    </div>
  );
}
