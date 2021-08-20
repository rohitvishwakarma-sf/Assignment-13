import { Component, Input, OnInit } from '@angular/core';
import { Customer } from '../customer.model';
import { CustomersService } from '../customers.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  @Input() customers: Customer[] = [];
  constructor(private customerService: CustomersService) { }

  ngOnInit(): void {
    this.customerService.getAll().then(cstmers => {
      this.customers = cstmers;
      console.log(this.customers);
    })
    console.log("hellooooo");


  }
  onDelete(index: number) {
    this.customers.splice(index, 1);

  }
}
