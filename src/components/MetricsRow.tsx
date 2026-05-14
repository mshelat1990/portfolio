import { Wallet, TrendingUp, Droplets, PieChart, BarChart2, Activity, Clock, Layers } from 'lucide-react';

const metrics = [
  {
    icon: Wallet,
    label: 'Investment Capital',
    value: '₹1.01 Cr',
    sub: null,
    color: 'sky',
  },
  {
    icon: TrendingUp,
    label: 'Realized Gain',
    value: '+₹3.53 L',
    sub: '+3.49%',
    positive: true,
    color: 'emerald',
  },
  {
    icon: Droplets,
    label: 'Liquidity',
    value: '+₹20.98 L',
    sub: '20.07%',
    positive: true,
    color: 'sky',
  },
  {
    icon: PieChart,
    label: 'Invested',
    value: '₹83.55 L',
    sub: null,
    color: 'amber',
  },
  {
    icon: BarChart2,
    label: 'Current Value',
    value: '₹95.25 L',
    sub: null,
    color: 'sky',
  },
  {
    icon: TrendingUp,
    label: 'Unrealized Gain',
    value: '+₹14.31 L',
    sub: '+14.01%',
    positive: true,
    color: 'emerald',
  },
  {
    icon: Activity,
    label: "Today's Change",
    value: '+₹59.66 K',
    sub: '+0.71%',
    positive: true,
    color: 'emerald',
  },
  {
    icon: Layers,
    label: 'Holdings',
    value: '19',
    sub: 'Across 8 sectors',
    color: 'slate',
  },
];

const colorMap: Record<string, string> = {
  sky: 'bg-sky-500/10 text-sky-400 border-sky-500/20',
  emerald: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  amber: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  slate: 'bg-slate-500/10 text-slate-400 border-slate-500/20',
};

export default function MetricsRow() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 mb-6">
      {metrics.map((m) => {
        const Icon = m.icon;
        const cls = colorMap[m.color];
        return (
          <div
            key={m.label}
            className="bg-[#111827] border border-white/5 rounded-xl p-3 hover:border-white/10 hover:bg-[#141d2f] transition-all duration-150 group"
          >
            <div className={`w-7 h-7 rounded-lg border flex items-center justify-center mb-2.5 ${cls}`}>
              <Icon size={13} />
            </div>
            <p className="text-[10px] text-slate-500 font-medium uppercase tracking-wider mb-1">{m.label}</p>
            <p className={`text-sm font-bold ${m.positive ? 'text-emerald-400' : 'text-white'}`}>{m.value}</p>
            {m.sub && (
              <p className={`text-[11px] mt-0.5 ${m.positive ? 'text-emerald-500' : 'text-slate-500'}`}>{m.sub}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}
