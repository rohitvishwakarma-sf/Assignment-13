import { Component, Input, OnInit } from '@angular/core';
import { Customer } from '../customer.model';
import { CustomersService } from '../customers.service';


@Component({
  selector: '[app-customer-row]',
  templateUrl: './customer-row.component.html',
  styleUrls: ['./customer-row.component.css']
})
export class CustomerRowComponent implements OnInit {

  @Input() customer!: Customer;
  private oldCustomer!: Customer;
  editMode: boolean = false;
  deleting: boolean = false;
  saving: boolean = false;

  constructor(private customerService: CustomersService) { }

  ngOnInit(): void {
  }
  btnEditClick() {
    this.editMode = true;
    this.oldCustomer = JSON.parse(JSON.stringify(this.customer));
  }
  btnDeleteClick() {
    // this.deleting = true;
    // this.usersService.deleteUser(this.user).subscribe(
    //   null,
    //   (error) => {
    //     console.log(error);
    //   },
    //   () => {
    //     this.deleting = false;
    //     console.log('deleted user ' + this.user.firstName);
    //   }
    // );
  }
  btnSaveClick() {
    this.editMode = false;
    this.saving = true;
    this.customerService.save(this.customer).subscribe(() => {
      this.saving = false;
    }, (error => {
      console.log(error);
      this.editMode = true;
      this.saving = false;
      this.customer = this.oldCustomer;

    }));
  }
  btnCancelClick() {
    this.editMode = false;
    this.customer = JSON.parse(JSON.stringify(this.oldCustomer));
  }
  btnShowUsersClick() {

  }

}
