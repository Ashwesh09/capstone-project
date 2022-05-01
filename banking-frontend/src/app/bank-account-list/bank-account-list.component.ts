import { Component, OnInit } from '@angular/core';
import { BankAccount } from '../bank-account';
import { BankAccountService } from '../bank-account.service';

@Component({
  selector: 'app-bank-account-list',
  templateUrl: './bank-account-list.component.html',
  styleUrls: ['./bank-account-list.component.css']
})
export class BankAccountListComponent implements OnInit {

  bankAccounts: BankAccount[];

  constructor(private bankAccountService: BankAccountService) { }


  ngOnInit(): void {
    this.getBankAccounts();
  }

  private getBankAccounts(){
    this.bankAccountService.getBankAccountsList().subscribe(data => {
      this.bankAccounts = data;
    });
  }


  deleteBankAccount(empId: number){
    this.bankAccountService.deleteBankAccount(empId).subscribe(data => {
      console.log(data);
      this.getBankAccounts();
    })
  }

  
}
