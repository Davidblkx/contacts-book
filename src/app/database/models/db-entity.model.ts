export type DbItem<T> = T & { id: string }

export function isDbItem<T>(itm: unknown): itm is DbItem<T> {
  return typeof itm === 'object'
    && itm !== null
    && typeof (<any>itm)['id'] === 'string';
}
