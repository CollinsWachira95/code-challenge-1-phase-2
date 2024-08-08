import React, { useState, useEffect } from 'react';
import TransactionList from './TransactionList';
import TransactionForm from './TransactionForm';
import SearchBar from './SearchBar';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/transactions');
        const data = await response.json();
        setTransactions(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
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
      <SearchBar onSearch={handleSearch} />
      <TransactionList transactions={filteredTransactions} onDelete={handleTransactionDeleted} />
      <TransactionForm onTransactionAdded={handleTransactionAdded} />
    </div>
  );
}

export default App;
