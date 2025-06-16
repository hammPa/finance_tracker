import React from 'react';
import { Edit2, Trash2, DollarSign } from 'lucide-react';

export default function ExpenseList({
  expenses,
  selectedMonth,
  setEditingExpense,
  deleteExpense,
  setShowAddForm
}){
  const data = expenses.filter(exp => exp.month === selectedMonth);

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Expense Details</h3>
      {data.length > 0 ? (
        <div className="space-y-3">
          {data.map((expense) => (
            <div
              key={expense.id}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200"
            >
              <div className="flex-1">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center">
                    <span className="text-white font-medium text-sm">
                      {expense.item.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{expense.item}</p>
                    <p className="text-sm text-gray-600">{expense.category}</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-lg font-semibold text-gray-900">
                  Rp.{expense.amount.toFixed(2)}
                </span>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setEditingExpense(expense)}
                    className="p-2 text-gray-600 hover:bg-gray-200 rounded-lg transition-colors"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => deleteExpense(expense.id)}
                    className="p-2 text-gray-600 hover:bg-gray-200 rounded-lg transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <DollarSign className="w-8 h-8 text-gray-400" />
          </div>
          <p className="text-gray-500">
            No expenses recorded for {selectedMonth}
          </p>
          <button
            onClick={() => setShowAddForm(true)}
            className="mt-4 text-gray-900 hover:text-gray-700 font-medium"
          >
            Add your first expense
          </button>
        </div>
      )}
    </div>
  );
};