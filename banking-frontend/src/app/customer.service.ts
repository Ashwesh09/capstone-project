import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private baseURL = 'http://localhost:8080/customer';

  constructor(private httpClient: HttpClient) {}

  getCustomersList(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(`${this.baseURL}/customers`);
  }

  createCustomer(customer: Customer): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}/create`, customer);
  }

  deleteCustomer(customerId: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/delete/${customerId}`);
  }
}
