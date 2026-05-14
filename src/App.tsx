import { useState } from 'react';
import TickerBar from './components/TickerBar';
import TopNav from './components/TopNav';
import PortfolioHeader from './components/PortfolioHeader';
import MetricsRow from './components/MetricsRow';
import PortfolioTabs from './components/PortfolioTabs';
import StockTable from './components/StockTable';
import NewsAnalysis from './components/NewsAnalysis';

function App() {
  const [selectedPortfolio, setSelectedPortfolio] = useState('all');
  const [currentPage, setCurrentPage] = useState<'portfolio' | 'news'>('portfolio');

  return (
    <div className="min-h-screen bg-[#0b0e17] text-white font-sans">
      <TickerBar />
      <TopNav />
      {currentPage === 'portfolio' ? (
        <main className="px-6 py-5 max-w-screen-2xl mx-auto">
          <PortfolioHeader />
          <MetricsRow />
          <PortfolioTabs selected={selectedPortfolio} onSelect={setSelectedPortfolio} />
          <StockTable />
        </main>
      ) : (
        <NewsAnalysis />
      )}
    </div>
  );
}

export default App;
