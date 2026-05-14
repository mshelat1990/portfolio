import { BarChart2, TrendingUp, Grid2x2 as Grid, Zap, Bell, Sun, User } from 'lucide-react';

const navItems = [
  { icon: BarChart2, label: 'Data-Driven Investing' },
  { icon: TrendingUp, label: 'Analyze Your Stock' },
  { icon: Grid, label: 'Pattern Insights' },
  { icon: Zap, label: 'Sector Momentum' },
];

export default function TopNav() {
  return (
    <nav className="bg-[#0d1120] border-b border-white/5 px-6">
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between h-12">
        <div className="flex items-center gap-1">
          {navItems.map(({ icon: Icon, label }) => (
            <button
              key={label}
              className="flex items-center gap-2 px-3 py-1.5 rounded-md text-[13px] text-slate-400 hover:text-white hover:bg-white/5 transition-all duration-150 font-medium"
            >
              <Icon size={14} />
              {label}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button className="relative p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-all">
            <Bell size={16} />
            <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-emerald-400 rounded-full" />
          </button>
          <button className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-all">
            <Sun size={16} />
          </button>
          <button className="w-8 h-8 rounded-full bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center text-xs font-bold shadow-lg shadow-blue-900/40">
            <User size={14} />
          </button>
        </div>
      </div>
    </nav>
  );
}
