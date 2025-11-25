"use client";

import { Search, Filter, ChevronDown, Sparkles } from "lucide-react";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-1">
      {/* Left */}
      <div>
        <div className="flex items-center gap-2 border border-borderSubtle text-textSecondary text-[12px] rounded-full px-3 py-1">
          <Sparkles className="h-3 w-3 text-primary" />
          <span>Figma → Frontend → Vercel</span>
        </div>

        <h1 className="text-xl font-semibold mt-2">Product Usage Dashboard</h1>
        <p className="text-xs text-textSecondary">
          Real time analytics & user activity insights
        </p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-3">
        {/* Search */}
        <div className="flex items-center gap-2 bg-muted/50 px-3 py-1.5 border border-borderSubtle rounded-full">
          <Search className="h-4 w-4 text-textSecondary" />
          <input
            placeholder="Search"
            className="bg-transparent text-xs outline-none text-textPrimary w-32"
          />
        </div>

        {/* Filters */}
        <button className="px-3 py-1.5 text-xs rounded-full bg-muted/50 border border-borderSubtle hover:bg-muted transition flex items-center gap-2">
          <Filter className="h-4 w-4" />
          Filters
        </button>

        {/* Time Range */}
        <button className="px-3 py-1.5 text-xs rounded-full bg-primary text-white flex items-center gap-2">
          Last 30 days <ChevronDown className="h-3 w-3" />
        </button>
      </div>
    </header>
  );
}
