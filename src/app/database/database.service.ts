import { Injectable } from '@angular/core';

import { Database } from './database';

@Injectable()
export class DatabaseService extends Database {
  constructor() { super('contacts'); }
}
