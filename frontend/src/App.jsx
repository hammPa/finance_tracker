import React, { useState, useEffect } from 'react';
import DetailsView from './views/DetailsView';
import HomeView from './views/HomeView';

const App = () => {
  // State management
  const [currentView, setCurrentView] = useState('home');
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [expenses, setExpenses] = useState([]);
  const [editingExpense, setEditingExpense] = useState(null);
  const [newExpense, setNewExpense] = useState({
    item: '',
    category: 'Food',
    amount: ''
  });
  const [showAddForm, setShowAddForm] = useState(false);

  const categories = ['Food', 'Drink', 'Transport', 'Entertainment', 'Shopping', 'Bills', 'Other']; // ntah apa gunanya

  useEffect(() => {
  console.log('Expenses:', expenses);
}, [expenses]);


  // ambil data awal dari backend
  useEffect(() => {
    fetch('http://localhost:5000/expenses')
      .then(res => res.json())
      .then(data => {
        // Pastikan amount selalu number
        const normalized = data.map(exp => ({
          ...exp,
          amount: Number(exp.amount)  // konversi string → number
        }));
        setExpenses(normalized);
      })
      .catch(err => console.error(err));
  }, []);



  // Handler functions yang memanggil service functions
  const handleAddExpense = () => {
    if (!newExpense.item || !newExpense.amount) return;

    fetch('http://localhost:5000/expenses', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...newExpense, amount: parseFloat(newExpense.amount), month: selectedMonth })
    })
    .then(res => res.json())
    .then(data => {
      setExpenses(prev => [...prev, { ...data, amount: Number(data.amount) }]);
      setNewExpense({ item: '', category: 'Food', amount: '' });
      setShowAddForm(false);
    });
    console.log(selectedMonth);
    
  };

  const handleUpdateExpense = (id, updatedExpense) => {
    const parsedExpense = {
      ...updatedExpense,
      amount: parseFloat(updatedExpense.amount)
    };

    fetch(`http://localhost:5000/expenses/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(parsedExpense)
    })
    .then(res => res.json())
    .then(updated => {
      setExpenses(prev =>
        prev.map(exp => exp.id === id ? updated : exp)
      );
      setEditingExpense(null);
    });
  };


  const handleDeleteExpense = (id) => {
    fetch(`http://localhost:5000/expenses/${id}`, {
      method: 'DELETE'
    })
    .then(() => {
      setExpenses(prev => prev.filter(exp => exp.id !== id));
    });
  };

  const handleGetMonthTotal = (month) => {
    return expenses
      .filter(exp => exp.month === month)
      .reduce((total, exp) => total + exp.amount, 0);
  };

  const handleGetTotalExpenses = () => {
    return expenses.reduce((total, exp) => total + exp.amount, 0);
  };

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Augustus', 'September', 'October', 'November', 'December'];

  // Render view berdasarkan currentView
  return currentView === 'home' ? (
    <HomeView
      months={months}
      categories={categories}
      getTotalExpenses={handleGetTotalExpenses}
      getMonthTotal={handleGetMonthTotal}
      expenses={expenses}
      setSelectedMonth={setSelectedMonth}
      setCurrentView={setCurrentView}
    />
  ) : (
  <DetailsView
    selectedMonth={selectedMonth}
    expenses={expenses}
    addExpense={handleAddExpense}
    updateExpense={handleUpdateExpense}
    deleteExpense={handleDeleteExpense}
    newExpense={newExpense}
    setNewExpense={setNewExpense}
    editingExpense={editingExpense}
    setEditingExpense={setEditingExpense}
    setCurrentView={setCurrentView}
    showAddForm={showAddForm}
    setShowAddForm={setShowAddForm}
    categories={categories}
    getMonthTotal={handleGetMonthTotal}
  />
  );
};

export default App;