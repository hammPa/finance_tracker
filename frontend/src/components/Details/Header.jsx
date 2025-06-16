import { ArrowLeft, Plus } from "lucide-react";

export default function Header({
  selectedMonth,
  getMonthTotal,
  setCurrentView,
  setShowAddForm,
}){
  return (
    <>
    {/* Header */}
    <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setCurrentView('home')}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-gray-600" />
          </button>
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">{selectedMonth} Expenses</h1>
            <p className="text-gray-600">Total: Rp{ Number(getMonthTotal(selectedMonth[new Date().getMonth()]) || 0).toFixed(2) }</p>
          </div>
        </div>
        <button
          onClick={() => setShowAddForm(true)}
          className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors flex items-center space-x-2"
        >
          <Plus className="w-5 h-5" />
          <span>Add Expense</span>
        </button>
      </div>
    </div>
    </>
  );
}