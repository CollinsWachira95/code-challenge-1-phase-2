BANK OF FLARITON: A React-based Transaction Management Application
Project Overview

This React application simulates a basic banking system, allowing users to view, add, and delete transactions. It includes features like searching for transactions and displaying data in a tabular format.

Core Functionalities

1. Displays a list of transactions fetched from a JSON server.
2. Allows users to add new transactions through a form.
3. Enables users to delete existing transactions.
4. Provides a search bar to filter transactions based on description.
5. Implements basic styling for the user interface.
6. How to Run the Application

Prerequisites:

1. Node.js and npm (or yarn) installed.
2. A code editor (e.g., Visual Studio Code, Sublime Text).
3. Basic understanding of React, JavaScript, and terminal commands.

Steps:

1.Clone the Repository:

1. Fork the repository from GitHub to your own account.
2. Clone your forked repository to your local machine:

The First Command
git clone git@github.com:CollinsWachira95/code-challenge-1-phase-2.git

2. Install Dependencies:

3. Navigate to the project directory:
cd bank-of-flatiron


4. Install the required dependencies:
Command: npm install


5. Start the Development Server:

Start the development server:

Command: npm start


The application should open in your default browser at https://backends-sooty.vercel.app/transactions.


Code Structure:
1. App.js: The main component that handles application state and renders other components.
2. TransactionList.js: Displays a list of transactions with delete functionality.
3. TransactionForm.js: Handles user input for adding new transactions.
4. TransactionSearch.js: Implements the search functionality.


Additional Notes:

The application uses a JSON server to simulate a backend API. You can start the JSON server by running json-server db.json in a separate terminal.
The code includes basic styling using CSS. 

BACKEND : https://backends-sooty.vercel.app/transactions

AUTHOR : COLLINS WACHIRA