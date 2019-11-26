import { DbItem } from './db-entity.model';

export interface DatabaseData {
  name: string;
  collections: DatabaseCollections;
}

export interface DatabaseCollections {
  [key: string]: DatabaseCollection<any>;
}

export interface DatabaseCollection<T> {
  [key: string]: DbItem<T> | undefined;
}
