export default function AddEditForm({
  showAddForm,
  editingExpense,
  categories,
  setShowAddForm,
  setEditingExpense,
  newExpense,
  addExpense,
  setNewExpense,
  updateExpense
}){
  return (
    <>
    {/* Add/Edit Form */}
    {(showAddForm || editingExpense) && (
      <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          {editingExpense ? 'Edit Expense' : 'Add New Expense'}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Item name"
            value={editingExpense ? editingExpense.item : newExpense.item}
            onChange={(e) => editingExpense 
              ? setEditingExpense({...editingExpense, item: e.target.value})
              : setNewExpense({...newExpense, item: e.target.value})
            }
            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
          />
          <select
            value={editingExpense ? editingExpense.category : newExpense.category}
            onChange={(e) => editingExpense
              ? setEditingExpense({...editingExpense, category: e.target.value})
              : setNewExpense({...newExpense, category: e.target.value})
            }
            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          <input
            type="number"
            placeholder="Amount (Rp)"
            value={editingExpense ? editingExpense.amount : newExpense.amount}
            onChange={(e) => editingExpense
              ? setEditingExpense({...editingExpense, amount: parseFloat(e.target.value) || 0})
              : setNewExpense({...newExpense, amount: e.target.value})
            }
            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
          />
        </div>
        <div className="flex space-x-3 mt-4">
          <button
            onClick={editingExpense 
              ? () => updateExpense(editingExpense.id, editingExpense)
              : addExpense
            }
            className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors"
          >
            {editingExpense ? 'Update' : 'Add'} Expense
          </button>
          <button
            onClick={() => {
              setShowAddForm(false);
              setEditingExpense(null);
              setNewExpense({ item: '', category: 'Food', amount: '' });
            }}
            className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300 transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    )}
    </>
  );
}