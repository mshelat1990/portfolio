import { useState, useMemo } from 'react';
import { Search, ChevronDown, Filter, TrendingUp, TrendingDown, Calendar, Tag, AlertCircle, Zap } from 'lucide-react';

interface NewsItem {
  id: string;
  symbol: string;
  company: string;
  title: string;
  description: string;
  categories: string[];
  impact: 'Low' | 'Medium' | 'High';
  sentiment: 'Positive' | 'Neutral' | 'Negative';
  date: string;
  time: string;
  source: string;
}

const newsData: NewsItem[] = [
  {
    id: '1',
    symbol: 'PASUPTAC',
    company: 'Pasupati Acryion Limited',
    title: 'Capacity Expansion Approved',
    description: 'Pasupati Acryion Ltd received UP Govt consent to enhance ethanol plant capacity from 150 KL/day to 180 KL/day. Capacity upgrade, set for Q1 FY26-27, aims to improve operational efficiency with no new investment required.',
    categories: ['Capacity Expansion', 'Regulatory Approval'],
    impact: 'Low',
    sentiment: 'Positive',
    date: 'May 13, 2026',
    time: '3:12 PM (IST)',
    source: 'BSE',
  },
  {
    id: '2',
    symbol: 'DIXON',
    company: 'Dixon Technologies (India) Limited',
    title: 'Record Smartphone Volumes Expected',
    description: 'Dixon expects flat FY27 smartphone volumes at 33M units; Vivo JV approval is anticipated soon, potentially adding 12-15M units this year. Memory price hikes (12-15%) hit low-end demand. Dixon\'s FY27 revenue is expected to grow 65-70%, telecom 12-13%, IT hardware 10%.',
    categories: ['Smartphone Demand and Pricing', 'Joint Venture Regulatory Approval'],
    impact: 'Medium',
    sentiment: 'Neutral',
    date: 'May 13, 2026',
    time: '3:03 PM (IST)',
    source: 'CNBC TV18',
  },
  {
    id: '3',
    symbol: 'IRCTC',
    company: 'Indian Railway Catering And Tourism Corporation Limited',
    title: 'PSU Stake Sales Initiative',
    description: 'Railways plans 5-10% stake sales in 7 PSUs, including IRCTC, IRFC, and Concor, for ₹2.62T NMP target. Stake sales aim to unlock ₹15,000-₹20,000 crore, retaining control; market conditions will determine timing and extent.',
    categories: ['Privatization Policy', 'Stake Sale Valuation'],
    impact: 'Medium',
    sentiment: 'Neutral',
    date: 'May 13, 2026',
    time: '2:51 PM (IST)',
    source: 'Livemint',
  },
  {
    id: '4',
    symbol: 'VEDL',
    company: 'Vedanta Limited',
    title: 'CLSA Policy Highlights Benefits',
    description: 'Vedanta shares rise as CLSA highlights benefits from government policy.',
    categories: ['Regulatory Change', 'Share Price Rally'],
    impact: 'Medium',
    sentiment: 'Positive',
    date: 'May 13, 2026',
    time: '2:34 PM (IST)',
    source: 'Zee Business',
  },
];

const categories = [
  { name: 'Political', color: 'red', count: 16 },
  { name: 'Environmental', color: 'emerald', count: 13 },
  { name: 'Social', color: 'purple', count: 1 },
  { name: 'Technological', color: 'blue', count: 39 },
  { name: 'Economical', color: 'amber', count: 364 },
  { name: 'Legal', color: 'orange', count: 39 },
  { name: 'Others', color: 'slate', count: 0 },
];

const impactColors = {
  Low: { bg: 'bg-sky-500/10', text: 'text-sky-400', border: 'border-sky-500/20' },
  Medium: { bg: 'bg-amber-500/10', text: 'text-amber-400', border: 'border-amber-500/20' },
  High: { bg: 'bg-red-500/10', text: 'text-red-400', border: 'border-red-500/20' },
};

const sentimentColors = {
  Positive: { bg: 'bg-emerald-500/10', text: 'text-emerald-400', border: 'border-emerald-500/20' },
  Neutral: { bg: 'bg-slate-500/10', text: 'text-slate-400', border: 'border-slate-500/20' },
  Negative: { bg: 'bg-red-500/10', text: 'text-red-400', border: 'border-red-500/20' },
};

export default function NewsAnalysis() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedImpact, setSelectedImpact] = useState<string>('All');
  const [selectedSentiment, setSelectedSentiment] = useState<string>('All');
  const [selectedPeriod, setSelectedPeriod] = useState<string>('Today');

  const filtered = useMemo(() => {
    return newsData.filter(item => {
      if (searchTerm && !item.symbol.toLowerCase().includes(searchTerm.toLowerCase()) &&
          !item.company.toLowerCase().includes(searchTerm.toLowerCase())) return false;
      if (selectedCategories.length > 0 && !item.categories.some(c => selectedCategories.includes(c))) return false;
      if (selectedImpact !== 'All' && item.impact !== selectedImpact) return false;
      if (selectedSentiment !== 'All' && item.sentiment !== selectedSentiment) return false;
      return true;
    });
  }, [searchTerm, selectedCategories, selectedImpact, selectedSentiment]);

  function toggleCategory(cat: string) {
    setSelectedCategories(prev =>
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b0e17] via-[#0d1120] to-[#0b0e17]">
      {/* Header Section */}
      <div className="px-6 pt-6 pb-8 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-white mb-2">News Analysis</h1>
            <p className="text-slate-400 text-sm leading-relaxed">
              Gain comprehensive insights into Political, Environmental, Social, Technological, Economical & Legal factors affecting your investments.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative mb-6">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              placeholder="Search by symbol or company name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500/50 focus:bg-white/8 transition-all"
            />
          </div>

          {/* Filters Section */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
            {/* Impact Filter */}
            <div className="relative">
              <label className="block text-xs text-slate-400 font-semibold uppercase tracking-wider mb-2">Impact</label>
              <select
                value={selectedImpact}
                onChange={(e) => setSelectedImpact(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-sky-500/50 appearance-none cursor-pointer"
              >
                <option>All</option>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
              <ChevronDown size={14} className="absolute right-3 top-9 text-slate-500 pointer-events-none" />
            </div>

            {/* Sentiment Filter */}
            <div className="relative">
              <label className="block text-xs text-slate-400 font-semibold uppercase tracking-wider mb-2">Sentiment</label>
              <select
                value={selectedSentiment}
                onChange={(e) => setSelectedSentiment(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-sky-500/50 appearance-none cursor-pointer"
              >
                <option>All</option>
                <option>Positive</option>
                <option>Neutral</option>
                <option>Negative</option>
              </select>
              <ChevronDown size={14} className="absolute right-3 top-9 text-slate-500 pointer-events-none" />
            </div>

            {/* Time Period Filter */}
            <div className="relative">
              <label className="block text-xs text-slate-400 font-semibold uppercase tracking-wider mb-2">Time Period</label>
              <select
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-sky-500/50 appearance-none cursor-pointer"
              >
                <option>Today</option>
                <option>This Week</option>
                <option>This Month</option>
                <option>All Time</option>
              </select>
              <ChevronDown size={14} className="absolute right-3 top-9 text-slate-500 pointer-events-none" />
            </div>

            {/* Preference */}
            <div className="relative">
              <label className="block text-xs text-slate-400 font-semibold uppercase tracking-wider mb-2">Preference</label>
              <select
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-sky-500/50 appearance-none cursor-pointer"
              >
                <option>All</option>
                <option>Recommended</option>
                <option>Saved</option>
              </select>
              <ChevronDown size={14} className="absolute right-3 top-9 text-slate-500 pointer-events-none" />
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-2 mt-4">
            {categories.map(cat => (
              <button
                key={cat.name}
                onClick={() => toggleCategory(cat.name)}
                className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  selectedCategories.includes(cat.name)
                    ? `bg-${cat.color}-500/20 text-${cat.color}-400 border border-${cat.color}-500/40`
                    : `bg-white/5 text-slate-400 border border-white/10 hover:bg-white/8`
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full`} style={{
                  backgroundColor: {
                    red: '#ef4444',
                    emerald: '#10b981',
                    purple: '#a855f7',
                    blue: '#3b82f6',
                    amber: '#f59e0b',
                    orange: '#f97316',
                    slate: '#64748b',
                  }[cat.color]
                }} />
                {cat.name} <span className="text-slate-500">{cat.count}</span>
              </button>
            ))}
          </div>

          <p className="text-[11px] text-red-400/80 mt-4 flex items-center gap-2">
            <AlertCircle size={12} />
            Disclaimer: News Sentiments, Impact and Categorization are all AI based
          </p>
        </div>
      </div>

      {/* News List */}
      <div className="px-6 py-8">
        <div className="max-w-7xl mx-auto space-y-3">
          {filtered.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-slate-400 text-sm">No news items match your filters</p>
            </div>
          ) : (
            filtered.map((item, idx) => {
              const impactStyle = impactColors[item.impact];
              const sentimentStyle = sentimentColors[item.sentiment];
              return (
                <div
                  key={item.id}
                  className="group bg-gradient-to-r from-white/[0.03] to-white/[0.01] border border-white/5 rounded-xl p-4 hover:border-white/15 hover:from-white/[0.06] hover:to-white/[0.03] transition-all duration-300 overflow-hidden relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-sky-500/0 to-emerald-500/0 group-hover:from-sky-500/5 group-hover:to-emerald-500/5 transition-all duration-300 pointer-events-none" />

                  <div className="relative">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-bold text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded-md border border-sky-500/20">
                            {item.symbol}
                          </span>
                          <span className="text-xs text-slate-500 font-medium">{item.company}</span>
                        </div>
                        <h3 className="text-base font-semibold text-white mb-1.5 leading-snug">{item.title}</h3>
                        <p className="text-sm text-slate-400 line-clamp-2 leading-relaxed">{item.description}</p>
                      </div>
                      <div className="flex flex-col gap-2 items-end flex-shrink-0">
                        <div className={`px-2.5 py-1 rounded-lg text-xs font-semibold border ${impactStyle.bg} ${impactStyle.text} ${impactStyle.border} flex items-center gap-1`}>
                          {item.impact === 'High' && <Zap size={11} />}
                          Impact: {item.impact}
                        </div>
                        <div className={`px-2.5 py-1 rounded-lg text-xs font-semibold border ${sentimentStyle.bg} ${sentimentStyle.text} ${sentimentStyle.border} flex items-center gap-1`}>
                          {item.sentiment === 'Positive' && <TrendingUp size={11} />}
                          {item.sentiment === 'Negative' && <TrendingDown size={11} />}
                          {item.sentiment}
                        </div>
                      </div>
                    </div>

                    {/* Categories */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {item.categories.map(cat => (
                        <span
                          key={cat}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-sky-500/10 text-sky-400 text-xs font-medium border border-sky-500/20 hover:bg-sky-500/20 transition-all cursor-pointer"
                        >
                          <Tag size={11} />
                          {cat}
                        </span>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-3 border-t border-white/5">
                      <div className="flex items-center gap-4 text-xs text-slate-500">
                        <span className="flex items-center gap-1">
                          <Calendar size={12} />
                          {item.date}
                        </span>
                        <span>{item.time}</span>
                        <span className="text-slate-600">{item.source}</span>
                      </div>
                      <button className="text-slate-600 hover:text-sky-400 transition-colors opacity-0 group-hover:opacity-100">
                        <Zap size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
