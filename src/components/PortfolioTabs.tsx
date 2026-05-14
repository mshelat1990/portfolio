import { MoreHorizontal, Search, Settings2 } from 'lucide-react';

const portfolios = [
  {
    id: 'all',
    initial: 'A',
    name: 'All Portfolios',
    gain: '+17.68%',
    risk: 3,
    reward: 17,
    color: 'emerald',
  },
  {
    id: 'linkedin',
    initial: 'L',
    name: 'LinkedIN',
    gain: '+17.14%',
    risk: 2,
    reward: 13,
    color: 'sky',
  },
  {
    id: 'newportf',
    initial: 'N',
    name: 'NewPortfolio',
    gain: '+59.36%',
    risk: 1,
    reward: 4,
    color: 'amber',
  },
];

const colorMap: Record<string, { bg: string; text: string; border: string; dot: string }> = {
  emerald: {
    bg: 'bg-emerald-500/15',
    text: 'text-emerald-400',
    border: 'border-emerald-500/30',
    dot: 'bg-emerald-400',
  },
  sky: {
    bg: 'bg-sky-500/15',
    text: 'text-sky-400',
    border: 'border-sky-500/30',
    dot: 'bg-sky-400',
  },
  amber: {
    bg: 'bg-amber-500/15',
    text: 'text-amber-400',
    border: 'border-amber-500/30',
    dot: 'bg-amber-400',
  },
};

interface Props {
  selected: string;
  onSelect: (id: string) => void;
}

export default function PortfolioTabs({ selected, onSelect }: Props) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
      <div className="flex items-center gap-2 flex-wrap">
        {portfolios.map((p) => {
          const c = colorMap[p.color];
          const isActive = selected === p.id;
          return (
            <button
              key={p.id}
              onClick={() => onSelect(p.id)}
              className={`flex items-center gap-3 px-3 py-2 rounded-xl border transition-all duration-150 group ${
                isActive
                  ? `${c.bg} ${c.border}`
                  : 'bg-white/3 border-white/8 hover:bg-white/6 hover:border-white/15'
              }`}
            >
              <div className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold ${isActive ? `${c.bg} ${c.text}` : 'bg-white/10 text-slate-300'}`}>
                {p.initial}
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1.5">
                  <span className={`text-[13px] font-semibold ${isActive ? 'text-white' : 'text-slate-300'}`}>{p.name}</span>
                  <span className={`text-[11px] font-medium ${isActive ? c.text : 'text-slate-500'}`}>{p.gain}</span>
                </div>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-[10px] text-red-400">Risk: {p.risk}</span>
                  <span className={`text-[10px] ${c.text}`}>Reward: {p.reward}</span>
                </div>
              </div>
              <MoreHorizontal size={14} className="text-slate-600 group-hover:text-slate-400 ml-1 transition-colors" />
            </button>
          );
        })}
      </div>
      <div className="flex items-center gap-2">
        <div className="relative">
          <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
          <input
            type="text"
            placeholder="Search stocks..."
            className="bg-white/5 border border-white/10 rounded-xl pl-8 pr-4 py-2 text-sm text-slate-300 placeholder-slate-600 focus:outline-none focus:border-sky-500/50 focus:bg-white/8 transition-all w-48"
          />
        </div>
        <button className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-all">
          <Settings2 size={15} />
        </button>
      </div>
    </div>
  );
}
