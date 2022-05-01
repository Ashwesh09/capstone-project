import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
})
export class CustomerListComponent implements OnInit {
  customers: Customer[];
  router: any;

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.getCustomers();
  }

  private getCustomers() {
    this.customerService.getCustomersList().subscribe((data) => {
      this.customers = data;
    });
  }

  deleteCustomer(empId: number) {
    this.customerService.deleteCustomer(empId).subscribe((data) => {
      console.log(data);
      this.getCustomers();
    });
  }

}
