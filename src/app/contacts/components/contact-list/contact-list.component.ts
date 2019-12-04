import { DatabaseService } from 'src/app/database/database.service';
import { DbItem } from 'src/app/database/models/db-entity.model';
import { Contact } from 'src/app/models/contact.model';

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent {

  public contacts: DbItem<Contact>[] = [];

  constructor(
    private readonly routing: Router,
    private readonly database: DatabaseService,
  ) {
    this.contacts = database.contacts.list();
    database.contacts.change
      .subscribe(() => this.contacts = database.contacts.list());
  }

  onAddButtonClick() {
    this.routing.navigate(['/contacts/new']);
  }

  onItemClick(id: string) {
    this.routing.navigate(['/contacts/' + id]);
  }

  onDelete(id: string) {
    this.database.contacts.delete(id);
    this.database.contacts.commit();
    this.database.save();
  }
}
