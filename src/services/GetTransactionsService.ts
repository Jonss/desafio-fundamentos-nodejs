import TransactionsRepository from '../repositories/TransactionsRepository';
import TransactionList from '../models/TransactionList';

class GetTransactionsService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute(): TransactionList {
    return new TransactionList(
      this.transactionsRepository.all(),
      this.transactionsRepository.getBalance(),
    );
  }
}

export default GetTransactionsService;
