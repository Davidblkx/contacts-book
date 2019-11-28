import { Injectable } from '@angular/core';

import { Contact } from '../models/contact.model';
import { Collection } from './collection';
import { Database } from './database';

@Injectable()
export class DatabaseService extends Database {
  public contacts: Collection<Contact>;

  constructor() {
    super('contacts');
    this.contacts = this.getCollection('contactstable');
  }
}
