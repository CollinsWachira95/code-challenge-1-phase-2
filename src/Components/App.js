import React, { useState, useEffect } from 'react';
import TransactionSearch from './TransactionSearch';
import TransactionForm from './TransactionForm';
import TransactionList from './TransactionList';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://backends-sooty.vercel.app/transactions')
      .then(response => response.json())
      .then(data => setTransactions(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleTransactionAdded = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  const handleTransactionDeleted = (id) => {
    const updatedTransactions = transactions.filter(transaction => transaction.id !== id);
    setTransactions(updatedTransactions);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredTransactions = transactions.filter(transaction =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Bank of Flatiron</h1>
      <TransactionSearch onSearch={handleSearch} />
      <TransactionForm onTransactionAdded={handleTransactionAdded} />
      <TransactionList transactions={filteredTransactions} onDelete={handleTransactionDeleted} />
    </div>
  );
}

export default App;
