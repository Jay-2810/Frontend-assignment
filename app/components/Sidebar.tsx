"use client";

import { Home, Activity, BarChart3, Settings, Bell, User, LogOut } from "lucide-react";
import { useState } from "react";

const menu = [
  { name: "Dashboard", icon: Home },
  { name: "Activity", icon: Activity },
  { name: "Analytics", icon: BarChart3 },
  { name: "Settings", icon: Settings },
];

export default function Sidebar() {
  const [active, setActive] = useState("Dashboard");

  return (
    <aside className="w-60 card-glass rounded-2xl shadow-card h-full p-5 flex flex-col justify-between">
      <div className="space-y-10">

        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 flex items-center justify-center bg-primary/20 rounded-xl">
            <span className="text-primary font-bold text-lg">A</span>
          </div>
          <div>
            <p className="text-sm font-semibold">Analytics Pro</p>
            <p className="text-xs text-textSecondary">Dashboard Suite</p>
          </div>
        </div>

        {/* Menu Items */}
        <nav className="space-y-2">
          {menu.map((item) => {
            const Icon = item.icon;
            const isActive = active === item.name;

            return (
              <button
                key={item.name}
                onClick={() => setActive(item.name)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-sm transition 
                  ${
                    isActive
                      ? "bg-primary/20 text-primary"
                      : "text-textSecondary hover:text-textPrimary hover:bg-muted/60"
                  }
                `}
              >
                <span className="flex items-center gap-3">
                  <Icon className="h-4 w-4" />
                  {item.name}
                </span>

                {isActive && <span className="h-2 w-2 bg-primary rounded-full"></span>}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Bottom User Profile */}
      <div className="border-t border-borderSubtle pt-4 space-y-3">
        <button className="flex items-center justify-between w-full px-3 py-2 rounded-xl text-xs text-textSecondary hover:bg-muted/60 transition">
          <div className="flex items-center gap-2">
            <Bell className="h-4 w-4" />
            Notifications
          </div>
          <span className="h-5 min-w-[20px] bg-danger text-white text-[10px] flex items-center justify-center rounded-full">3</span>
        </button>

        <div className="flex items-center justify-between bg-muted/50 px-3 py-2 rounded-xl">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 bg-primary/30 rounded-full flex items-center justify-center">
              <User className="h-4 w-4" />
            </div>
            <div className="text-xs">
              <p className="font-medium">Alex Johnson</p>
              <p className="text-textSecondary text-[11px]">UI/UX Designer</p>
            </div>
          </div>

          <LogOut className="h-4 w-4 text-textSecondary hover:text-danger cursor-pointer" />
        </div>
      </div>
    </aside>
  );
}
