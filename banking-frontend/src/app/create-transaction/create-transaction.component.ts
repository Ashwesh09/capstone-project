import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Transaction } from '../transaction';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
  styleUrls: ['./create-transaction.component.css']
})
export class CreateTransactionComponent implements OnInit {

  transaction: Transaction = new Transaction();
  
  constructor(private transactionService: TransactionService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveTransaction(){
    this.transactionService.createTransaction(this.transaction).subscribe( data =>{
      console.log(data);
      this.goToTransactionList();
    },
    error => console.log(error));
  }

  goToTransactionList(){
    this.router.navigate(['/transactions']);
  }

  onSubmit(){
    console.log(this.transaction);
    this.saveTransaction();
  }

}
