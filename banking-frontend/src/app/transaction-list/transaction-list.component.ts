import { Component, OnInit } from '@angular/core';
import { Transaction } from '../transaction';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css'],
})
export class TransactionListComponent implements OnInit {
  transactions: Transaction[];
  router: any;

  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {
    this.getTransactions();
  }

  private getTransactions() {
    this.transactionService.getTransactionsList().subscribe((data) => {
      this.transactions = data;
    });
  }
  revertTransaction(transactionId: number) {
    this.transactionService
      .deletetransaction(transactionId)
      .subscribe((data) => {
        console.log(data);
        this.getTransactions();
      });
  }
}
