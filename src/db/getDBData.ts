import { useObservable } from '@vueuse/rxjs'
import { liveQuery } from 'dexie'

import type { Unpack } from '@types'

export const getDBData = <T, U = Unpack<T>>(dataSourceFunction: () => T) =>
  // @ts-expect-error Dexie types doesn't match rxjs types
  useObservable<U>(liveQuery(dataSourceFunction))
