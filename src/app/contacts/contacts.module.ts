import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import {
    ContactEditComponent,
} from './components/contact-edit/contact-edit.component';
import {
    ContactListComponent,
} from './components/contact-list/contact-list.component';
import { ContactComponent } from './components/contact/contact.component';
import {
    EmptyContactComponent,
} from './components/empty-contact/empty-contact.component';
import { ContactsRoutingModule } from './contacts.routing';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ContactsRoutingModule,
    ButtonModule,
    InputTextModule,
  ],
  declarations: [
    ContactListComponent,
    ContactEditComponent,
    ContactComponent,
    EmptyContactComponent
  ]
})
export class ContactsModule {}
