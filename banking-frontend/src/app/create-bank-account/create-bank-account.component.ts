import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BankAccount } from '../bank-account';
import { BankAccountService } from '../bank-account.service';

@Component({
  selector: 'app-create-bank-account',
  templateUrl: './create-bank-account.component.html',
  styleUrls: ['./create-bank-account.component.css'],
})
export class CreateBankAccountComponent implements OnInit {
  bankAccount: BankAccount = new BankAccount();

  constructor(
    private bankAccountService: BankAccountService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  saveBankAccount() {
    this.bankAccountService.createBankAccount(this.bankAccount).subscribe(
      (data) => {
        console.log(data);
        this.goToBankAccountList();
      },
      (error) => console.log(error)
    );
  }

  goToBankAccountList() {
    this.router.navigate(['/bank-accounts']);
  }

  onSubmit() {
    console.log(this.bankAccount);
    this.saveBankAccount();
  }
}
