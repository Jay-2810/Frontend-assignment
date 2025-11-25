import DashboardShell from "./components/DashboardShell";
import StatCard from "./components/StatCard";
import ActivityList from "./components/ActivityList";

export default function Page() {
  return (
    <DashboardShell>
      <div className="flex flex-col gap-6">
        
        {/* Stats */}
        <div className="grid grid-cols-3 gap-4">
          <StatCard label="Monthly Active Users" value="28,430" trend="+12.4%" positive />
          <StatCard label="Feature Adoption" value="64.2%" trend="+6.8%" positive />
          <StatCard label="Net Churn" value="3.4%" trend="+1.2%" positive={false} />
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-[2fr,1.2fr] gap-4">
          
          {/* Chart Section */}
          <div className="card-glass rounded-2xl p-4 h-[300px] flex items-center justify-center border border-borderSubtle/60">
            <span className="text-textSecondary text-xs">Chart goes here (from Figma)</span>
          </div>

          {/* Side Activity Section */}
          <div className="card-glass rounded-2xl p-4">
            <ActivityList />
          </div>

        </div>
      </div>
    </DashboardShell>
  );
}
