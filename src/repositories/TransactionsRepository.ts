import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface TransactionDTO {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    return this.transactions;
  }

  public getBalance(): Balance {
    const income = this.sumValues('income');
    const outcome = this.sumValues('outcome');

    return { income, outcome, total: income - outcome };
  }

  public create({ title, value, type }: TransactionDTO): Transaction {
    const tx = new Transaction({ title, value, type });
    this.transactions.push(tx);
    return tx;
  }

  private sumValues(type: string): number {
    return this.transactions
      .filter(tx => tx.type === type)
      .map(tx => tx.value)
      .reduce((sum, value) => sum + value);
  }
}

export default TransactionsRepository;
