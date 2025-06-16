import Header from "../components/Details/Header";
import AddEditForm from "../components/Details/AddEditForm";
import ExpenseList from "../components/Details/ExpenseList"

export default function DetailsView({
    selectedMonth,
    expenses,
    addExpense,
    updateExpense,
    deleteExpense,
    newExpense,
    setNewExpense,
    editingExpense,
    setEditingExpense,
    setCurrentView,
    showAddForm,
    setShowAddForm,
    categories,
    getMonthTotal,
    }){
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <Header
          selectedMonth={selectedMonth}
          getMonthTotal={getMonthTotal}
          setCurrentView={setCurrentView}
          setShowAddForm={setShowAddForm}
        />

        <AddEditForm
          showAddForm={showAddForm}
          editingExpense={editingExpense}
          categories={categories}
          setShowAddForm={setShowAddForm}
          setEditingExpense={setEditingExpense}
          newExpense={newExpense}
          addExpense={addExpense}
          setNewExpense={setNewExpense}
          updateExpense={updateExpense}
        />

        <ExpenseList
          expenses={expenses}
          selectedMonth={selectedMonth}
          setEditingExpense={setEditingExpense}
          deleteExpense={deleteExpense}
          setShowAddForm={setShowAddForm}
        />
      </div>
    </div>
  )
};