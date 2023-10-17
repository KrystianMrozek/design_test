import { storeToRefs } from 'pinia'

import { db } from '@/db'
import { createSampleClient } from '@core/client'
import { useClientStore } from '@stores/client'
import { sleep } from '@utils'

import type { DeepReadonly } from '@types'
import type { Client } from 'core/client'
import type { Ref } from 'vue'

type UseClients = {
  addSampleClient: () => Promise<void>
  clients: DeepReadonly<Ref<Client[]>>
  findClientById: (clientId: string) => Client | null
}

export default function useClients(): UseClients {
  const { clients } = storeToRefs(useClientStore())

  const addSampleClient = async (): Promise<void> => {
    await sleep(6000)

    const clientsNumber = clients.value.length ?? 0
    if (clientsNumber > 10) {
      return
    }

    await db.clients.add(createSampleClient())
  }

  const findClientById = (clientId: string): Client | null =>
    clients.value.find((client) => client.id === clientId) ?? null

  return {
    addSampleClient,
    clients,
    findClientById,
  }
}
