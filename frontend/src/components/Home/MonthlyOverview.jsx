import React from 'react';

export default function MonthlyOverview({ months, getMonthTotal, expenses, setSelectedMonth, setCurrentView }){
  return (
    <>
    {/* Monthly Overview */}
    <div className="bg-white rounded-lg shadow-sm border p-8">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Monthly Expenses</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {months.map((month) => (
          <div
            key={month}
            onClick={() => {
              setSelectedMonth(month);
              setCurrentView('details');
            }}
            className="bg-gray-50 hover:bg-gray-100 rounded-lg p-6 cursor-pointer transition-colors duration-200 border border-gray-200 hover:border-gray-300"
          >
            <div className="text-center">
              <h3 className="font-medium text-gray-900 mb-2">{month}</h3>
              <p className="text-2xl font-semibold text-gray-900">Rp{getMonthTotal(month).toFixed(2)}</p>
              <p className="text-sm text-gray-500 mt-1">
                {expenses.filter(e => e.month === month).length} expenses
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};