import { DollarSign, Calendar, TrendingUp, PieChart } from 'lucide-react';

export default function Header({ categories, getTotalExpenses, months, getMonthTotal }){
  return (
    <>
    {/* Header */}
    <div className="bg-white rounded-lg shadow-sm border p-8 mb-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-semibold text-gray-900">Hello, Alex</h1>
          <p className="text-gray-600 mt-1">Track your monthly expenses</p>
        </div>
        <div className="flex items-center space-x-6">
          <div className="text-right">
            <p className="text-sm text-gray-500">Total Expenses</p>
            <p className="text-3xl font-semibold text-gray-900">Rp.{getTotalExpenses().toFixed(2)}</p>
          </div>
          <div className="w-16 h-16 bg-gray-900 rounded-lg flex items-center justify-center">
            <DollarSign className="w-8 h-8 text-white" />
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-gray-900 rounded-lg p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-300 text-sm">This Month</p>
              <p className="text-2xl font-semibold mt-1">Rp.{getMonthTotal(months[new Date().getMonth()]).toFixed(2)}</p>
            </div>
            <TrendingUp className="w-6 h-6 text-gray-400" />
          </div>
        </div>
        <div className="bg-gray-100 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Categories</p>
              <p className="text-2xl font-semibold text-gray-900 mt-1">{categories.length}</p>
            </div>
            <PieChart className="w-6 h-6 text-gray-500" />
          </div>
        </div>
        <div className="bg-gray-100 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Avg/Month</p>
              <p className="text-2xl font-semibold text-gray-900 mt-1">Rp.{(getTotalExpenses() / 12).toFixed(2)}</p>
            </div>
            <Calendar className="w-6 h-6 text-gray-500" />
          </div>
        </div>
      </div>
    </div>
  </>
  );
}