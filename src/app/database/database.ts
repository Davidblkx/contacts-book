import { cloneDeep } from 'lodash';

import { Collection } from './collection';
import { DatabaseCollection, DatabaseData } from './models/database-data.model';

/** simple NoSQL database */
export class Database {
  private readonly _data: DatabaseData;

  /** Loads or init a database */
  constructor(name: string) {
    this._data = this.loadDbFromStorage(name);
  }

  /**
   * set a collection in database
   * @param collection collection to insert
   */
  public setCollection<T>(collection: Collection<T>): void;
  /**
   * set a collection in the database
   * @param name name to save
   * @param collection collection data
   */
  public setCollection<T>(name: string, collection: DatabaseCollection<T>): void;
  public setCollection<T>(nameOrCol: string | Collection<T>, collection: DatabaseCollection<T> = {}): void {
    if (typeof nameOrCol === 'string') {
      this._data.collections[nameOrCol] = collection;
    } else {
      this._data.collections[nameOrCol.name] = nameOrCol.DbCollection;
    }
  }

  /** returns a collection, if non exists, one will be created */
  public getCollection<T>(name: string): Collection<T> {
    const col = this._data.collections[name] || {};
    return new Collection(name, cloneDeep(col), this);
  }

  /** save database to storage */
  public save(): boolean {
    return this.saveDbToStorage(this._data);
  }

  private loadDbFromStorage(name: string): DatabaseData {
    const dbName = this.buildDbName(name);
    const jsonDb = localStorage.getItem(dbName);

    if (jsonDb) {
      return JSON.parse(jsonDb);
    } else {
      return {
        collections: {},
        name
      }
    }
  }

  private saveDbToStorage(data: DatabaseData): boolean {
    const dbName = this.buildDbName(data.name);
    const jsonDb = JSON.stringify(data);

    try {
      localStorage.setItem(dbName, jsonDb);
      return true;
    } catch {
      return false;
    }
  }

  private buildDbName(baseName: string): string {
    const PRE_NAME = 'ADDRESSBOOK_DATABASE_'
    return PRE_NAME + baseName;
  }

}
