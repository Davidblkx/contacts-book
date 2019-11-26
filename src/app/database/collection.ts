import { cloneDeep } from 'lodash';

import { Database } from './database';
import { DatabaseCollection } from './models/database-data.model';
import { DbItem, isDbItem } from './models/db-entity.model';
import { generateUniqueId } from './tools/id-generator';

/** Collection of data */
export class Collection<T> {

  /** get copy of current collection */
  public get DbCollection() {
    return cloneDeep(this._data);
  }

  /**
   * init a collection for a DB
   * @param name collection name
   * @param _data source data
   * @param _db source database
   */
  constructor(
    public readonly name: string,
    private _data: DatabaseCollection<T>,
    private readonly _db: Database,
  ) {}

  /** return all values in collection */
  public list(): DbItem<T>[] {
    return <any>Object.values(this._data)
      .filter(e => isDbItem<T>(e));
  }

  /** return item for an id */
  public get(id: string): DbItem<T> | undefined {
    return this._data[id];
  }

  /** insert/update item to collection */
  public set(item: DbItem<T> | T): DbItem<T> {
    const itemToSave = isDbItem(item) ?
      item : this.buildDbItem(item);
    this._data[itemToSave.id] = itemToSave;
    return itemToSave;
  }

  /** delete an entity with id */
  public delete(id: string) {
    delete this._data[id];
  }

  /** commit changes to database */
  public commit() {
    this._db.setCollection(this);
  }

  /** revert changes */
  public rollback() {
    this._data = this._db.getCollection<T>(this.name).DbCollection;
  }

  private buildDbItem(item: T): DbItem<T> {
    return {
      ...item,
      id: generateUniqueId(),
    };
  }
}
