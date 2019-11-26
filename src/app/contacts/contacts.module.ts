import { NgModule } from '@angular/core';

import {
    ContactEditComponent,
} from './components/contact-edit/contact-edit.component';
import {
    ContactListComponent,
} from './components/contact-list/contact-list.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContactsRoutingModule } from './contacts.routing';

@NgModule({
  imports: [ContactsRoutingModule],
  declarations: [
    ContactListComponent,
    ContactEditComponent,
    ContactComponent,
  ]
})
export class ContactsModule {}
