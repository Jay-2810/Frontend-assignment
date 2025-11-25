"use client";

export default function ActivityList() {
  const activities = [
    {
      title: "Activation Rate",
      subtitle: "Users finishing onboarding",
      value: "78%",
      status: "healthy",
    },
    {
      title: "Weekly Active Users",
      subtitle: "Returning this week",
      value: "12.4k",
      status: "healthy",
    },
    {
      title: "Churn Risk",
      subtitle: "Inactive 14+ days",
      value: "6.1%",
      status: "warning",
    },
  ];

  return (
    <div>
      <h2 className="text-sm font-semibold">Product Health</h2>

      <div className="space-y-2 mt-3">
        {activities.map((a) => (
          <div
            key={a.title}
            className="flex justify-between items-center bg-muted/40 rounded-xl px-3 py-2 text-xs"
          >
            <div>
              <p className="font-medium">{a.title}</p>
              <p className="text-textSecondary">{a.subtitle}</p>
            </div>

            <div className="flex items-center gap-3">
              <p className="font-semibold">{a.value}</p>
              <span
                className={`h-2 w-2 rounded-full ${
                  a.status === "healthy" ? "bg-success" : "bg-warning"
                }`}
              ></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
