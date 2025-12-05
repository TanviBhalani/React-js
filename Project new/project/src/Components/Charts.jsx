import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
} from "recharts";

export default function Charts({ transactions }) {
  if (!transactions.length) return null;

  const categoryTotals = {};
  let income = 0;
  let expense = 0;

  transactions.forEach((t) => {
    if (t.type === "income") income += t.amount;
    else expense += t.amount;

    if (!categoryTotals[t.category]) categoryTotals[t.category] = 0;
    categoryTotals[t.category] += t.amount;
  });

  const pieData = Object.entries(categoryTotals).map(([cat, amt]) => ({
    name: cat,
    value: amt,
  }));

  const barData = [
    { name: "Income", value: income },
    { name: "Expense", value: expense },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6 px-2 max-w-5xl mx-auto mb-10 w-full">
      
      {/* Pie Chart */}
      <div className="bg-white rounded-3xl shadow-md p-5 border border-gray-200 w-full">
        <h2 className="text-lg font-semibold mb-4 text-center md:text-left">
          Expense by Category
        </h2>
        <div className="w-full h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie dataKey="value" data={pieData} fill="#8b5cf6" label />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bar Chart */}
      <div className="bg-white rounded-3xl shadow-md p-5 border border-gray-200 w-full">
        <h2 className="text-lg font-semibold mb-4 text-center md:text-left">
          Income vs Expense
        </h2>
        <div className="w-full h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={barData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#10b981" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
