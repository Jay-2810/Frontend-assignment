"use client";

import Sidebar from "./Sidebar";
import Header from "./Header";

export default function DashboardShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full flex bg-background main-gradient">
      <Sidebar />

      <div className="flex-1 flex flex-col gap-6 p-6">
        <Header />

        <main className="card-glass flex-1 rounded-2xl p-6 shadow-card">
          {children}
        </main>
      </div>
    </div>
  );
}
