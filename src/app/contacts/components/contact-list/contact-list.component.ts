import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent {

  constructor(
    private readonly routing: Router,
  ) {}

  onAddButtonClick() {
    this.routing.navigate(['/contacts/new']);
  }
}
