import { ChevronDown, Plus, Upload, TrendingUp } from 'lucide-react';

export default function PortfolioHeader() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pt-2">
      <div>
        <h1 className="text-2xl font-bold text-white tracking-tight">Portfolio Manager</h1>
        <p className="text-sm text-slate-500 mt-0.5">Track your investments and performance metrics</p>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm text-slate-300 hover:bg-white/10 hover:border-white/20 transition-all duration-150">
          Select Portfolios
          <ChevronDown size={14} className="text-slate-500" />
        </button>
        <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white text-sm font-semibold shadow-lg shadow-emerald-900/40 transition-all duration-150">
          <Plus size={14} />
          Portfolio
        </button>
        <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm text-slate-300 hover:bg-white/10 hover:border-white/20 transition-all duration-150">
          Manage Fund
          <ChevronDown size={14} className="text-slate-500" />
        </button>
        <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm text-slate-300 hover:bg-white/10 hover:border-white/20 transition-all duration-150">
          <Plus size={14} />
          Add Stock
        </button>
        <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm text-slate-300 hover:bg-white/10 hover:border-white/20 transition-all duration-150">
          <Upload size={14} />
          Export Data
        </button>
        <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-sky-500/20 border border-sky-500/30 text-sky-400 text-sm font-semibold hover:bg-sky-500/30 transition-all duration-150">
          <TrendingUp size={14} />
          Analyze
        </button>
      </div>
    </div>
  );
}
