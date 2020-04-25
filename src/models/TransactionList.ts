import Transaction from './Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

class TransactionList {
  transactions: Transaction[];

  balance: Balance;

  constructor(transactions: Transaction[], balance: Balance) {
    this.transactions = transactions;
    this.balance = balance;
  }
}

export default TransactionList;
