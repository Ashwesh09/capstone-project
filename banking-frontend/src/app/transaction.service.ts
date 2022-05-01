import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from './transaction';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  private baseURL = 'http://localhost:8080/transaction';

  constructor(private httpClient: HttpClient) {}

  getTransactionsList(): Observable<Transaction[]> {
    return this.httpClient.get<Transaction[]>(`${this.baseURL}/transactions`);
  }

  createTransaction(transaction: Transaction): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}/create`, transaction);
  }

  deletetransaction(transactionId: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/delete/${transactionId}`);
  }
}
