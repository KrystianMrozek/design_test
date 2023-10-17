import type { PromiseExtended } from 'dexie'

export type Unpack<T> = T extends Promise<infer U> | PromiseExtended<infer U>
  ? U
  : T
