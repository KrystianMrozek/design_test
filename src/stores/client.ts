import { defineStore } from 'pinia'
import { computed, readonly } from 'vue'

import { db, getDBData } from '@/db'

import type { Client } from '@core/client'
import type { DeepReadonly } from '@types'
import type { Ref } from 'vue'

type UseClientStore = {
  clients: DeepReadonly<Ref<Client[]>>
}

export const useClientStore = defineStore('client', (): UseClientStore => {
  const _clients = getDBData(() => db.clients.toArray())

  const clients = computed(() => _clients.value ?? [])

  return {
    clients: readonly(clients),
  }
})
