import { TrendingUp, TrendingDown } from 'lucide-react';

const tickers = [
  { name: 'NIFTY 50', value: '24,030.65', change: '+187.10', pct: '+0.80%', up: true },
  { name: 'NIFTY PSE', value: '10,599.75', change: '+155.05', pct: '+1.48%', up: true },
  { name: 'NIFTY PSU BANK', value: '8,101.10', change: '+29.75', pct: '+0.37%', up: true },
  { name: 'NIFTY PVT BANK', value: '26,027.10', change: '+135.50', pct: '+0.52%', up: true },
  { name: 'NIFTY REALTY', value: '769.25', change: '+3.55', pct: '+0.46%', up: true },
  { name: 'NIFTY SERV SECTOR', value: '23,501.30', change: '+121.75', pct: '+0.52%', up: true },
  { name: 'NIFTY', value: '23,501.30', change: '+64.00', pct: '+0.22%', up: true },
  { name: 'BANKNIFTY', value: '53,812.55', change: '+257.35', pct: '+0.48%', up: true },
  { name: 'SENSEX', value: '74,886.22', change: '+326.98', pct: '+0.44%', up: true },
];

export default function TickerBar() {
  return (
    <div className="bg-[#0d1120] border-b border-white/5 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap py-2">
        {[...tickers, ...tickers].map((t, i) => (
          <span key={i} className="inline-flex items-center gap-2 px-5 border-r border-white/10 last:border-r-0">
            <span className="text-[11px] font-semibold text-slate-300 tracking-wide">{t.name}</span>
            <span className="text-[11px] font-bold text-white">{t.value}</span>
            <span className={`inline-flex items-center gap-0.5 text-[11px] font-medium ${t.up ? 'text-emerald-400' : 'text-red-400'}`}>
              {t.up ? <TrendingUp size={11} /> : <TrendingDown size={11} />}
              {t.change} ({t.pct})
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
