import { Router } from 'express';

import TransactionsRepository from '../repositories/TransactionsRepository';
import CreateTransactionService from '../services/CreateTransactionService';
import GetTransactionsService from '../services/GetTransactionsService';

const transactionRouter = Router();

const transactionsRepository = new TransactionsRepository();

transactionRouter.get('/', (request, response) => {
  try {
    const txList = new GetTransactionsService(transactionsRepository).execute();
    return response.json(txList);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

transactionRouter.post('/', (request, response) => {
  try {
    const { title, value, type } = request.body;
    const txService = new CreateTransactionService(transactionsRepository);
    const tx = txService.execute({ title, value, type });
    return response.json(tx);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default transactionRouter;
