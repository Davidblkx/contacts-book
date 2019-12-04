import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
    ContactEditComponent,
} from './components/contact-edit/contact-edit.component';
import { ContactComponent } from './components/contact/contact.component';
import {
    EmptyContactComponent,
} from './components/empty-contact/empty-contact.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'contacts',
}, {
  path: 'contacts',
  component: ContactComponent,
  children: [{
    path: ':id',
    component: ContactEditComponent
  }, {
    path: '',
    component: EmptyContactComponent,
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
