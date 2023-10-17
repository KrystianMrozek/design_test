import type { DeepReadonly } from '@types'

export type TestData<T> = DeepReadonly<{
  base: T[]
  new: T[]
}>
