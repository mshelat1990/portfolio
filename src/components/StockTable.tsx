import { useState } from 'react';
import { Bell, Info, ChevronDown, ChevronUp, TrendingUp, TrendingDown, ChevronLeft, ChevronRight } from 'lucide-react';

interface Stock {
  name: string;
  sector: string;
  dot: string;
  risk: string | null;
  riskType: 'reward' | 'risk' | null;
  riskLevel: number | null;
  riskDir: 'up' | 'down' | null;
  addedOn: string;
  qty: number;
  avgPrice: string;
  investedVal: string;
  currentVal: string;
  cmp: string;
  pl: string;
  plPositive: boolean;
  gainPct: string;
  gainNote: string;
  gainPositive: boolean;
}

const stocks: Stock[] = [
  {
    name: 'IDEA', sector: 'Communication Services', dot: '#f59e0b',
    risk: null, riskType: null, riskLevel: null, riskDir: null,
    addedOn: '12/05/2026', qty: 6000, avgPrice: '₹10.00',
    investedVal: '₹60,000.00', currentVal: '₹77,280.00', cmp: '₹12.88',
    pl: '+₹17,280.00', plPositive: true,
    gainPct: '28.80%', gainNote: 'Best to churn', gainPositive: true,
  },
  {
    name: 'VENUSREM', sector: 'Healthcare', dot: '#ef4444',
    risk: null, riskType: null, riskLevel: null, riskDir: null,
    addedOn: '12/05/2026', qty: 7, avgPrice: '₹1,000.00',
    investedVal: '₹7,000.00', currentVal: '₹6,547.45', cmp: '₹935.35',
    pl: '-₹452.55', plPositive: false,
    gainPct: '6.46%', gainNote: '+6.91% to break even', gainPositive: false,
  },
  {
    name: 'TRIDENT', sector: 'Consumer Cyclical', dot: '#f59e0b',
    risk: 'Reward: Crossing Level 3', riskType: 'reward', riskLevel: 3, riskDir: 'up',
    addedOn: '12/05/2026', qty: 2500, avgPrice: '₹10.00',
    investedVal: '₹25,000.00', currentVal: '₹63,450.00', cmp: '₹25.38',
    pl: '+₹38,450.00', plPositive: true,
    gainPct: '153.80%', gainNote: 'Best to churn', gainPositive: true,
  },
  {
    name: 'HFCL', sector: 'Technology', dot: '#22d3ee',
    risk: 'Reward: Crossing Level 3', riskType: 'reward', riskLevel: 3, riskDir: 'up',
    addedOn: '12/05/2026', qty: 110, avgPrice: '₹100.00',
    investedVal: '₹11,000.00', currentVal: '₹16,863.00', cmp: '₹153.30',
    pl: '+₹5,863.00', plPositive: true,
    gainPct: '53.30%', gainNote: 'Best to churn', gainPositive: true,
  },
  {
    name: 'ABBOTINDIA', sector: 'Healthcare', dot: '#ef4444',
    risk: 'Risk: Recovered Level 1', riskType: 'risk', riskLevel: 1, riskDir: 'up',
    addedOn: '20/03/2026', qty: 20, avgPrice: '₹26,715.00',
    investedVal: '₹5,34,300.00', currentVal: '₹5,46,300.00', cmp: '₹27,315.00',
    pl: '+₹12,000.00', plPositive: true,
    gainPct: '2.25%', gainNote: '', gainPositive: true,
  },
  {
    name: 'ZYDUSLIFE', sector: 'Healthcare', dot: '#ef4444',
    risk: 'Reward: Crossing Level 1', riskType: 'reward', riskLevel: 1, riskDir: 'up',
    addedOn: '20/03/2026', qty: 500, avgPrice: '₹890.50',
    investedVal: '₹4,45,250.00', currentVal: '₹4,70,200.00', cmp: '₹940.40',
    pl: '+₹24,950.00', plPositive: true,
    gainPct: '5.60%', gainNote: '', gainPositive: true,
  },
  {
    name: 'DIVISLAB', sector: 'Healthcare', dot: '#ef4444',
    risk: 'Reward: Crossing Level 1', riskType: 'reward', riskLevel: 1, riskDir: 'up',
    addedOn: '20/03/2026', qty: 80, avgPrice: '₹6,100.00',
    investedVal: '₹4,88,000.00', currentVal: '₹5,44,840.00', cmp: '₹6,810.50',
    pl: '+₹56,840.00', plPositive: true,
    gainPct: '11.65%', gainNote: 'Good to churn', gainPositive: true,
  },
  {
    name: 'PRAJIND', sector: 'Industrials', dot: '#8b5cf6',
    risk: 'Reward: Dropped Level 3', riskType: 'risk', riskLevel: 3, riskDir: 'down',
    addedOn: '20/03/2026', qty: 1600, avgPrice: '₹315.15',
    investedVal: '₹5,04,240.00', currentVal: '₹6,08,000.00', cmp: '₹380.00',
    pl: '+₹1,03,760.00', plPositive: true,
    gainPct: '20.58%', gainNote: 'Best to churn', gainPositive: true,
  },
  {
    name: 'NAVA', sector: 'Industrials', dot: '#8b5cf6',
    risk: 'Reward: Crossing Level 3', riskType: 'reward', riskLevel: 3, riskDir: 'up',
    addedOn: '20/03/2026', qty: 900, avgPrice: '₹553.50',
    investedVal: '₹4,98,150.00', currentVal: '₹6,26,985.00', cmp: '₹696.65',
    pl: '+₹1,28,835.00', plPositive: true,
    gainPct: '25.86%', gainNote: 'Best to churn', gainPositive: true,
  },
  {
    name: 'GPIL', sector: 'Basic Materials', dot: '#10b981',
    risk: 'Reward: Dropped Level 3', riskType: 'risk', riskLevel: 3, riskDir: 'down',
    addedOn: '20/03/2026', qty: 2000, avgPrice: '₹262.65',
    investedVal: '₹5,25,300.00', currentVal: '₹5,76,200.00', cmp: '₹288.10',
    pl: '+₹50,900.00', plPositive: true,
    gainPct: '9.69%', gainNote: 'Good to churn', gainPositive: true,
  },
];

const PAGE_SIZE_OPTIONS = [10, 20, 50];

export default function StockTable() {
  const [pageSize, setPageSize] = useState(10);
  const [page, setPage] = useState(1);
  const [sortCol, setSortCol] = useState<string | null>(null);
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc');

  const totalPages = Math.ceil(stocks.length / pageSize);
  const visible = stocks.slice((page - 1) * pageSize, page * pageSize);

  function handleSort(col: string) {
    if (sortCol === col) {
      setSortDir(d => d === 'asc' ? 'desc' : 'asc');
    } else {
      setSortCol(col);
      setSortDir('asc');
    }
  }

  function SortIcon({ col }: { col: string }) {
    if (sortCol !== col) return <ChevronDown size={11} className="text-slate-600 ml-0.5" />;
    return sortDir === 'asc'
      ? <ChevronUp size={11} className="text-sky-400 ml-0.5" />
      : <ChevronDown size={11} className="text-sky-400 ml-0.5" />;
  }

  const cols = [
    { key: 'stock', label: 'Stock' },
    { key: 'risk', label: 'Risk / Reward' },
    { key: 'addedOn', label: 'Added On Date' },
    { key: 'qty', label: 'Quantity' },
    { key: 'avgPrice', label: 'Avg. Price' },
    { key: 'invested', label: 'Invested Value' },
    { key: 'current', label: 'Current Value' },
    { key: 'pl', label: 'P&L' },
    { key: 'gain', label: 'Overall Gain' },
    { key: 'notes', label: 'Notes' },
  ];

  return (
    <div className="bg-[#111827] border border-white/5 rounded-2xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/5">
              {cols.map((c) => (
                <th
                  key={c.key}
                  onClick={() => handleSort(c.key)}
                  className="px-4 py-3 text-left text-[11px] font-semibold text-slate-500 uppercase tracking-wider cursor-pointer hover:text-slate-300 transition-colors whitespace-nowrap select-none"
                >
                  <span className="inline-flex items-center">
                    {c.label}
                    <SortIcon col={c.key} />
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {visible.map((s, i) => (
              <tr
                key={s.name}
                className={`border-b border-white/5 hover:bg-white/[0.03] transition-colors group ${i % 2 === 0 ? '' : 'bg-white/[0.015]'}`}
              >
                {/* Stock */}
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <button className="text-slate-600 hover:text-slate-300 transition-colors opacity-0 group-hover:opacity-100">
                      <Bell size={12} />
                    </button>
                    <button className="text-slate-600 hover:text-slate-300 transition-colors opacity-0 group-hover:opacity-100">
                      +
                    </button>
                    <span
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ backgroundColor: s.dot }}
                    />
                    <div>
                      <p className="font-semibold text-white text-[13px]">{s.name}</p>
                      <p className="text-[11px] text-slate-500">{s.sector}</p>
                    </div>
                    <button className="text-slate-600 hover:text-slate-400 transition-colors ml-1">
                      <Info size={12} />
                    </button>
                  </div>
                </td>

                {/* Risk/Reward */}
                <td className="px-4 py-3 whitespace-nowrap">
                  {s.risk ? (
                    <span className={`inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-full border ${
                      s.riskType === 'reward'
                        ? 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20'
                        : 'text-amber-400 bg-amber-500/10 border-amber-500/20'
                    }`}>
                      {s.riskDir === 'up'
                        ? <TrendingUp size={10} />
                        : <TrendingDown size={10} />
                      }
                      {s.risk}
                    </span>
                  ) : (
                    <span className="text-slate-600">—</span>
                  )}
                </td>

                {/* Added On */}
                <td className="px-4 py-3 text-[13px] text-slate-400 whitespace-nowrap">{s.addedOn}</td>

                {/* Quantity */}
                <td className="px-4 py-3 text-[13px] text-slate-300 font-medium whitespace-nowrap">{s.qty.toLocaleString()}</td>

                {/* Avg Price */}
                <td className="px-4 py-3 text-[13px] text-slate-300 whitespace-nowrap">{s.avgPrice}</td>

                {/* Invested Value */}
                <td className="px-4 py-3 text-[13px] text-slate-300 whitespace-nowrap">{s.investedVal}</td>

                {/* Current Value */}
                <td className="px-4 py-3 whitespace-nowrap">
                  <p className="text-[13px] text-slate-300">{s.currentVal}</p>
                  <p className="text-[11px] text-slate-500">CMP {s.cmp}</p>
                </td>

                {/* P&L */}
                <td className="px-4 py-3 whitespace-nowrap">
                  <span className={`text-[13px] font-semibold ${s.plPositive ? 'text-emerald-400' : 'text-red-400'}`}>
                    {s.pl}
                  </span>
                </td>

                {/* Overall Gain */}
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="flex items-center gap-1">
                    {s.gainPositive
                      ? <TrendingUp size={12} className="text-emerald-400" />
                      : <TrendingDown size={12} className="text-red-400" />
                    }
                    <span className={`text-[13px] font-semibold ${s.gainPositive ? 'text-emerald-400' : 'text-red-400'}`}>
                      {s.gainPct}
                    </span>
                  </div>
                  {s.gainNote && (
                    <p className={`text-[11px] mt-0.5 ${s.gainPositive ? 'text-emerald-600' : 'text-amber-500'}`}>
                      {s.gainNote}
                    </p>
                  )}
                </td>

                {/* Notes */}
                <td className="px-4 py-3 text-slate-600 text-[13px]">—</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between px-4 py-3 border-t border-white/5">
        <div className="flex items-center gap-2">
          <span className="text-[12px] text-slate-500">Page Per Sheet:</span>
          <select
            value={pageSize}
            onChange={(e) => { setPageSize(Number(e.target.value)); setPage(1); }}
            className="bg-white/5 border border-white/10 rounded-lg px-2 py-1 text-[12px] text-slate-300 focus:outline-none focus:border-sky-500/50"
          >
            {PAGE_SIZE_OPTIONS.map(n => (
              <option key={n} value={n} className="bg-[#111827]">{n}</option>
            ))}
          </select>
        </div>

        <p className="text-[12px] text-slate-500">
          Showing {(page - 1) * pageSize + 1} to {Math.min(page * pageSize, stocks.length)} of {stocks.length} results
        </p>

        <div className="flex items-center gap-1">
          <button
            onClick={() => setPage(p => Math.max(1, p - 1))}
            disabled={page === 1}
            className="px-2 py-1 rounded-lg text-[12px] text-slate-400 hover:text-white hover:bg-white/5 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronLeft size={14} />
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(n => (
            <button
              key={n}
              onClick={() => setPage(n)}
              className={`w-7 h-7 rounded-lg text-[12px] font-medium transition-all ${
                page === n
                  ? 'bg-sky-500 text-white shadow-lg shadow-sky-900/40'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {n}
            </button>
          ))}
          <button
            onClick={() => setPage(p => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="px-2 py-1 rounded-lg text-[12px] text-slate-400 hover:text-white hover:bg-white/5 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
