import React, { useState } from 'react';

// Sample Data for Account Summary and Transactions
const accountSummary = {
  balance: 5000.75,
  accountNumber: '123-456-7890',
  accountHolder: 'John Doe',
};

const transactionHistory = [
  { id: 1, date: '2024-10-01', description: 'Deposit', amount: 1000.00 },
  { id: 2, date: '2024-10-05', description: 'Withdrawal', amount: -200.00 },
  { id: 3, date: '2024-10-10', description: 'Payment', amount: -150.00 },
  { id: 4, date: '2024-10-15', description: 'Deposit', amount: 500.00 },
];

const BankDetails = () => {
  const [amount, setAmount] = useState('');
  const [recipientAccount, setRecipientAccount] = useState('');

  const handleTransfer = (e) => {
    e.preventDefault();
    // Handle the bank transfer logic here
    alert(`Transferred ${amount} to ${recipientAccount}`);
  };

  return (
    <div className="bank-details">
      <h1>Bank Details</h1>

      {/* Account Summary */}
      <section className="account-summary">
        <h2>Account Summary</h2>
        <p><strong>Account Holder:</strong> {accountSummary.accountHolder}</p>
        <p><strong>Account Number:</strong> {accountSummary.accountNumber}</p>
        <p><strong>Current Balance:</strong> ${accountSummary.balance.toFixed(2)}</p>
      </section>

      {/* Transaction History */}
      <section className="transaction-history">
        <h2>Transaction History</h2>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactionHistory.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.date}</td>
                <td>{transaction.description}</td>
                <td className={transaction.amount < 0 ? 'negative' : 'positive'}>
                  ${transaction.amount.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Transfer Funds */}
      <section className="transfer-funds">
        <h2>Transfer Funds</h2>
        <form onSubmit={handleTransfer}>
          <label htmlFor="recipientAccount">Recipient Account Number:</label>
          <input
            type="text"
            id="recipientAccount"
            value={recipientAccount}
            onChange={(e) => setRecipientAccount(e.target.value)}
            required
          />

          <label htmlFor="amount">Amount to Transfer:</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
            min="1"
          />

          <button type="submit">Transfer</button>
        </form>
      </section>

      {/* Account Information */}
      <section className="account-information">
        <h2>Account Information</h2>
        <p>Your account is secure, and all transactions are encrypted. For more details on your account, visit our support section.</p>
      </section>
    </div>
  );
};

export default BankDetails;
