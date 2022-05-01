import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankAccountListComponent } from './bank-account-list/bank-account-list.component';
import { CreateBankAccountComponent } from './create-bank-account/create-bank-account.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { CreateTransactionComponent } from './create-transaction/create-transaction.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';

const routes: Routes = [
  {path: 'bank-accounts', component: BankAccountListComponent},
  {path: 'customers', component: CustomerListComponent},
  {path: 'employees', component: EmployeeListComponent},
  {path: 'transactions', component: TransactionListComponent},

  {path: 'create-bank-account', component: CreateBankAccountComponent},
  {path: 'create-customer', component: CreateCustomerComponent},
  {path: 'create-employee', component: CreateEmployeeComponent},
  {path: 'create-transaction', component: CreateTransactionComponent},
  {path: '',redirectTo: 'employees', pathMatch: 'full'} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
