import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BankAccount } from './bank-account';

@Injectable({
  providedIn: 'root'
})
export class BankAccountService {

  private baseURL = "http://localhost:8080/bankAccount";
  
  constructor(private httpClient: HttpClient) { } 

  getBankAccountsList(): Observable<BankAccount[]>{
    return this.httpClient.get<BankAccount[]>(`${this.baseURL}/bankAccounts`);
  }

  createBankAccount(bankAccount: BankAccount): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/create`,bankAccount);
  }

  deleteBankAccount(accNo: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${accNo}`);
  }


}
