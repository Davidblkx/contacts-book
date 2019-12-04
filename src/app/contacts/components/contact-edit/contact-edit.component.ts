import { DatabaseService } from 'src/app/database/database.service';
import { Contact } from 'src/app/models/contact.model';

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, RequiredValidator } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss']
})
export class ContactEditComponent implements OnInit {
  public form = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    description: new FormControl(''),
    id: new FormControl(''),
  });

  private currentId = '';

  constructor(
    private readonly dbService: DatabaseService,
    private readonly router: Router,
    private readonly activeRoute: ActivatedRoute,
  ) {

  }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(e => {
      console.log('call id');
      const id = e.get('id') || '';
      if (id !== 'new') {
        this.currentId = id;
        const data = this.dbService.contacts.get(id);
        if (data) { this.form.setValue(data); }
      } else {
        this.currentId = '';
        this.form.reset();
      }
    });
  }

  public onSave() {
    const data: Contact = this.form.getRawValue();

    if (this.currentId) {
      this.dbService.contacts.set({
        ...data,
        id: this.currentId,
      });
    } else {
      this.currentId = this.dbService.contacts.set(data).id;
    }

    this.dbService.contacts.commit();
    this.dbService.save();
    this.router.navigate([`/contacts/${this.currentId}`]);
  }

  public onCancel() {
    this.router.navigate(['/']);
  }
}
