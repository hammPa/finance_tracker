import Header from '../components/Home/Header';
import MonthlyOverview from '../components/Home/MonthlyOverview';

export default function HomeView({
  months,
  categories,
  getTotalExpenses,
  getMonthTotal,
  expenses,
  setSelectedMonth,
  setCurrentView
}){
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <Header categories={categories} getTotalExpenses={getTotalExpenses} months={months} getMonthTotal={getMonthTotal} />
        <MonthlyOverview months={months} getMonthTotal={getMonthTotal} expenses={expenses} setSelectedMonth={setSelectedMonth} setCurrentView={setCurrentView} />
      </div>
    </div>
  );
};